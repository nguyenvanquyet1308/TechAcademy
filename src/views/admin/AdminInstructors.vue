<template>
  <admin-layout>
    <div class="admin-instructors">
      <!-- Page Heading -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0 text-gray-800">Quản lý giảng viên</h1>
        <button class="btn btn-primary" @click="openAddModal">
          <i class="bi bi-plus-circle me-1"></i> Thêm giảng viên mới
        </button>
      </div>

      <!-- Filters and Search -->
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input type="text" class="form-control" placeholder="Tìm kiếm giảng viên..." v-model="searchQuery" @input="applyFilters">
              </div>
            </div>
            <div class="col-md-4">
              <select class="form-select" v-model="selectedSpecialty" @change="applyFilters">
                <option value="">-- Tất cả chuyên môn --</option>
                <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                  {{ specialty }}
                </option>
              </select>
            </div>
            <div class="col-md-2">
              <button class="btn btn-outline-secondary w-100" @click="resetFilters">
                <i class="bi bi-arrow-repeat me-1"></i> Đặt lại
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Đang tải dữ liệu giảng viên...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger">
        <i class="bi bi-exclamation-triangle me-2"></i>
        {{ error }}
        <button class="btn btn-outline-danger btn-sm ms-3" @click="fetchInstructors">Thử lại</button>
      </div>

      <!-- Instructors Grid -->
      <div v-else class="row">
        <div v-for="instructor in filteredInstructors" :key="instructor.id" class="col-xl-3 col-md-4 col-sm-6 mb-4">
          <instructor-card 
            :instructor="instructor"
            @edit="openEditModal"
            @view="viewInstructor"
            @delete="confirmDelete"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredInstructors.length === 0" class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-people display-1 text-muted"></i>
            <p class="mt-3 text-muted">Không tìm thấy giảng viên nào phù hợp với điều kiện tìm kiếm.</p>
            <button class="btn btn-outline-secondary mt-2" @click="resetFilters">Đặt lại bộ lọc</button>
          </div>
        </div>
      </div>

      <!-- Add/Edit Instructor Modal -->
      <div class="modal fade" id="instructorModal" tabindex="-1" aria-labelledby="instructorModalLabel" aria-hidden="true" ref="instructorModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="instructorModalLabel">{{ isEditMode ? 'Chỉnh sửa giảng viên' : 'Thêm giảng viên mới' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <instructor-form 
                :instructor="currentInstructor"
                :submit-button-text="isEditMode ? 'Cập nhật giảng viên' : 'Thêm giảng viên'"
                @save="saveInstructor"
                @cancel="instructorModal.hide()"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true" ref="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Xác nhận xóa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Bạn có chắc chắn muốn xóa giảng viên "<span class="fw-bold">{{ currentInstructor.name }}</span>" không?</p>
              <p class="text-danger"><small>Lưu ý: Hành động này không thể hoàn tác. Các khóa học liên quan cũng có thể bị ảnh hưởng.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-danger" @click="deleteInstructor" :disabled="isDeleting">
                <span v-if="isDeleting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {{ isDeleting ? 'Đang xóa...' : 'Xóa giảng viên' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Instructor Modal -->
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true" ref="viewModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">Thông tin giảng viên</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="currentInstructor.id">
              <instructor-detail :instructor="currentInstructor" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary" @click="openEditModal(currentInstructor)">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '../../components/admin/AdminLayout.vue'
import { Modal } from 'bootstrap'
import { InstructorCard, InstructorForm, InstructorDetail } from '../../components/admin/instructors'
import * as instructorService from '../../api/services/instructorService';
import Swal from 'sweetalert2';

export default {
  name: 'AdminInstructors',
  components: {
    AdminLayout,
    InstructorCard,
    InstructorForm,
    InstructorDetail
  },
  data() {
    return {
      // Modals
      instructorModal: null,
      deleteModal: null,
      viewModal: null,
      
      // State
      isEditMode: false,
      currentInstructor: this.getEmptyInstructor(),
      loading: false,
      error: null,
      isDeleting: false,
      
      // Filters
      searchQuery: '',
      selectedSpecialty: '',
      
      // Data
      instructors: []
    }
  },
  
  computed: {
    specialties() {
      const specialtiesSet = new Set(this.instructors.map(instructor => instructor.specialty));
      return Array.from(specialtiesSet);
    },
    
    filteredInstructors() {
      if (this.searchQuery || this.selectedSpecialty) {
        return this.instructors.filter(instructor => {
          const matchSearch = !this.searchQuery || 
            instructor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            instructor.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            instructor.bio.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            (instructor.skills && instructor.skills.some(skill => skill.toLowerCase().includes(this.searchQuery.toLowerCase())));
          
          const matchSpecialty = !this.selectedSpecialty || instructor.specialty === this.selectedSpecialty;
          
          return matchSearch && matchSpecialty;
        });
      }
      return this.instructors;
    }
  },
  
  created() {
    this.fetchInstructors();
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.instructorModal = new Modal(this.$refs.instructorModal);
    this.deleteModal = new Modal(this.$refs.deleteModal);
    this.viewModal = new Modal(this.$refs.viewModal);
  },
  
  methods: {
    async fetchInstructors() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await instructorService.getAllInstructors();
        this.instructors = response.data;
      } catch (error) {
        console.error('Error fetching instructors:', error);
        this.error = 'Không thể tải dữ liệu giảng viên. Vui lòng thử lại sau.';
      } finally {
        this.loading = false;
      }
    },
    
    // Filter methods
    applyFilters() {
      // Filters are applied via computed property
      // If the search or specialty is complex, we could make API calls here
      if (this.searchQuery && this.searchQuery.length > 2) {
        // Optionally, we could debounce this for better performance
        this.fetchFilteredInstructors();
      }
    },
    
    async fetchFilteredInstructors() {
      this.loading = true;
      
      try {
        let response;
        if (this.selectedSpecialty) {
          response = await instructorService.getInstructorsBySpecialty(this.selectedSpecialty);
        } else if (this.searchQuery) {
          response = await instructorService.searchInstructors(this.searchQuery);
        } else {
          response = await instructorService.getAllInstructors();
        }
        
        this.instructors = response.data;
      } catch (error) {
        console.error('Error filtering instructors:', error);
        this.error = 'Không thể lọc dữ liệu giảng viên. Vui lòng thử lại sau.';
      } finally {
        this.loading = false;
      }
    },
    
    resetFilters() {
      this.searchQuery = '';
      this.selectedSpecialty = '';
      this.fetchInstructors();
    },
    
    // Helper methods
    getEmptyInstructor() {
      return {
        id: null,
        name: '',
        title: '',
        bio: '',
        email: '',
        phone: '',
        avatar: '',
        specialty: '',
        skills: [],
        coursesCount: 0,
        studentsCount: 0,
        linkedin: '',
        github: ''
      };
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentInstructor = this.getEmptyInstructor();
      this.instructorModal.show();
    },
    
    openEditModal(instructor) {
      this.isEditMode = true;
      this.currentInstructor = { ...instructor }; // Clone to avoid direct mutation
      this.instructorModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewInstructor(instructor) {
      this.currentInstructor = { ...instructor }; // Clone to avoid direct mutation
      this.viewModal.show();
    },
    
    confirmDelete(instructor) {
      this.currentInstructor = instructor;
      this.deleteModal.show();
    },
    
    // API methods
    async saveInstructor(instructor) {
      try {
        if (this.isEditMode) {
          // Update existing instructor
          await instructorService.updateInstructor(instructor.id, instructor);
          
          // Update the local data
          const index = this.instructors.findIndex(i => i.id === instructor.id);
          if (index !== -1) {
            this.instructors.splice(index, 1, instructor);
          }
          
          Swal.fire({
                icon: 'success',
                title: 'Cập nhật giảng viên thành công!',
                showConfirmButton: false,
                timer: 1500,
            });      
          } else {
          // Add new instructor
          const response = await instructorService.createInstructor(instructor);
          
          // Add to the local data
          this.instructors.push(response.data);
          Swal.fire({
                icon: 'success',
                title: 'Thêm giảng viên thành công!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
        
        // Close the modal
        this.instructorModal.hide();
      } catch (error) {
        console.error('Error saving instructor:', error);
        this.$toast.error('Có lỗi xảy ra khi lưu thông tin giảng viên. Vui lòng thử lại sau.');
      }
    },
    
    async deleteInstructor() {
      this.isDeleting = true;
      
      try {
        await instructorService.deleteInstructor(this.currentInstructor.id);
        
        // Remove from the local data
        const index = this.instructors.findIndex(i => i.id === this.currentInstructor.id);
        if (index !== -1) {
          this.instructors.splice(index, 1);
        }
        
        this.$toast.success('Xóa giảng viên thành công!');
        this.deleteModal.hide();
      } catch (error) {
        console.error('Error deleting instructor:', error);
        this.$toast.error('Có lỗi xảy ra khi xóa giảng viên. Vui lòng thử lại sau.');
      } finally {
        this.isDeleting = false;
      }
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.instructor-skills {
  min-height: 2rem;
}
</style> 