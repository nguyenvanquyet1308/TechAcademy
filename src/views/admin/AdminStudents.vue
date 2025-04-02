<template>
  <admin-layout>
    <div class="admin-students">
      <!-- Page Heading -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0 text-gray-800">Quản lý học viên</h1>
        <button class="btn btn-primary" @click="openAddModal">
          <i class="bi bi-plus-circle me-1"></i> Thêm học viên mới
        </button>
      </div>

      <!-- Filters and Search -->
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input type="text" class="form-control" placeholder="Tìm kiếm học viên..." v-model="searchQuery" @input="applyFilters">
              </div>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="selectedCourse" @change="applyFilters">
                <option value="">-- Tất cả khóa học --</option>
                <option v-for="course in courses" :key="course.id" :value="course.id">
                  {{ course.name }}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="selectedStatus" @change="applyFilters">
                <option value="">-- Tất cả trạng thái --</option>
                <option value="ACTIVE">Đang học</option>
                <option value="COMPLETED">Đã hoàn thành</option>
                <option value="PENDING">Chờ xác nhận</option>
                <option value="DROPPED">Đã nghỉ học</option>
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
        <p class="mt-3 text-muted">Đang tải dữ liệu học viên...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger">
        <i class="bi bi-exclamation-triangle me-2"></i>
        {{ error }}
        <button class="btn btn-outline-danger btn-sm ms-3" @click="fetchStudents">Thử lại</button>
      </div>
      
      <!-- Students Table -->
      <div v-else class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Khóa học</th>
                  <th>Trạng thái</th>
                  <th>Ngày đăng ký</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <student-row 
                  v-for="student in filteredStudents" 
                  :key="student.id"
                  :student="student"
                  :courses="courses"
                  @edit="openEditModal"
                  @view="viewStudent"
                  @delete="confirmDelete"
                />
              </tbody>
            </table>
          </div>

          <!-- Empty State -->
          <div v-if="filteredStudents.length === 0" class="text-center py-5">
            <i class="bi bi-people display-1 text-muted"></i>
            <p class="mt-3 text-muted">Không tìm thấy học viên nào phù hợp với điều kiện tìm kiếm.</p>
            <button class="btn btn-outline-secondary mt-2" @click="resetFilters">Đặt lại bộ lọc</button>
          </div>
        </div>
      </div>

      <!-- Add/Edit Student Modal -->
      <div class="modal fade" id="studentModal" tabindex="-1" aria-labelledby="studentModalLabel" aria-hidden="true" ref="studentModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="studentModalLabel">{{ isEditMode ? 'Chỉnh sửa học viên' : 'Thêm học viên mới' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <student-form
                :student="currentStudent"
                :courses="courses"
                :submit-button-text="isEditMode ? 'Cập nhật học viên' : 'Thêm học viên'"
                @save="saveStudent"
                @cancel="studentModal.hide()"
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
              <p>Bạn có chắc chắn muốn xóa học viên "<span class="fw-bold">{{ currentStudent.name }}</span>" không?</p>
              <p class="text-danger"><small>Lưu ý: Hành động này không thể hoàn tác.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-danger" @click="deleteStudent" :disabled="isDeleting">
                <span v-if="isDeleting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {{ isDeleting ? 'Đang xóa...' : 'Xóa học viên' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Student Modal -->
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true" ref="viewModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">Thông tin học viên</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="currentStudent.id">
              <student-detail 
                :student="currentStudent"
                :courses="courses"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary" @click="openEditModal(currentStudent)">Chỉnh sửa</button>
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
import { StudentRow, StudentForm, StudentDetail } from '../../components/admin/students'
import studentService from '../../api/services/studentService'
import Swal from 'sweetalert2'
import { courseService } from '@/api'

export default {
  name: 'AdminStudents',
  components: {
    AdminLayout,
    StudentRow,
    StudentForm,
    StudentDetail
  },
  data() {
    return {
      // Modals
      studentModal: null,
      deleteModal: null,
      viewModal: null,
      
      // State
      isEditMode: false,
      currentStudent: this.getEmptyStudent(),
      loading: false,
      error: null,
      isDeleting: false,
      
      // Filters
      searchQuery: '',
      selectedCourse: '',
      selectedStatus: '',
      
      // Data
      courses: [],
      students: []
    }
  },
  
  computed: {
    filteredStudents() {
      if (this.searchQuery || this.selectedCourse || this.selectedStatus) {
        return this.students.filter(student => {
          const matchSearch = !this.searchQuery || 
            student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            student.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            student.phone.includes(this.searchQuery);
          
          const matchCourse = !this.selectedCourse || student.courseId === this.selectedCourse;
          const matchStatus = !this.selectedStatus || student.status === this.selectedStatus;
          
          return matchSearch && matchCourse && matchStatus;
        });
      }
      return this.students;
    }
  },
  
  created() {
    this.fetchStudents();
    this.fetchAllCourse();
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.studentModal = new Modal(this.$refs.studentModal);
    this.deleteModal = new Modal(this.$refs.deleteModal);
    this.viewModal = new Modal(this.$refs.viewModal);
  },
  
  methods: {
    async fetchStudents() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await studentService.getAllStudents();
        this.students = response.data;
      } catch (error) {
        console.error('Error fetching students:', error);
        this.error = 'Không thể tải dữ liệu học viên. Vui lòng thử lại sau.';
      } finally {
        this.loading = false;
      }
    },
    
    // Filter methods
    applyFilters() {
      // If using server-side filtering, we would make API calls here
      if (this.searchQuery && this.searchQuery.length > 2) {
        this.fetchFilteredStudents();
      } else if (this.selectedCourse) {
        this.fetchFilteredStudents();
      } else if (this.selectedStatus) {
        this.fetchFilteredStudents();
      }
    },
    async fetchAllCourse(){
      this.loading = true;
      try{
        const response = await courseService.getAllCourses();
        this.courses = response.data.map(course => ({
          id: course.id,
          name: course.name
        }));

      }catch{

      }
    },
    async fetchFilteredStudents() {
      this.loading = true;
      
      try {
        let response;
        const params = {};
        
        if (this.selectedCourse) {
          params.courseId = this.selectedCourse;
        }
        
        if (this.selectedStatus) {
          params.status = this.selectedStatus;
        }
        
        if (this.searchQuery && this.searchQuery.length > 2) {
          params.search = this.searchQuery;
        }
        
        response = await studentService.getAllStudents(params);
        this.students = response.data;
      } catch (error) {
        console.error('Error filtering students:', error);
        this.error = 'Không thể lọc dữ liệu học viên. Vui lòng thử lại sau.';
      } finally {
        this.loading = false;
      }
    },
    
    resetFilters() {
      this.searchQuery = '';
      this.selectedCourse = '';
      this.selectedStatus = '';
      this.fetchStudents();
    },
    
    // Helper methods
    getEmptyStudent() {
      return {
        id: null,
        name: '',
        email: '',
        phone: '',
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
        courseId: '',
        status: 'PENDING',
        enrollmentDate: new Date().toISOString().split('T')[0],
        notes: ''
      };
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentStudent = this.getEmptyStudent();
      this.studentModal.show();
    },
    
    openEditModal(student) {
      this.isEditMode = true;
      this.currentStudent = { ...student }; // Clone to avoid direct mutation
      this.studentModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewStudent(student) {
      this.currentStudent = { ...student }; // Clone to avoid direct mutation
      this.viewModal.show();
    },
    
    confirmDelete(student) {
      this.currentStudent = student;
      this.deleteModal.show();
    },
    
    // API methods
    async saveStudent(student) {
      try {
        if (this.isEditMode) {
          // Update existing student
          await studentService.updateStudent(student.id, student);
          
          // Update the local data
          const index = this.students.findIndex(s => s.id === student.id);
          if (index !== -1) {
            this.students.splice(index, 1, student);
          }
          
          Swal.fire({
            icon: 'success',
            title: 'Cập nhật học viên thành công!',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          // Add new student
          const response = await studentService.createStudent(student);
          
          // Add to the local data
          this.students.push(response.data);
          
          Swal.fire({
            icon: 'success',
            title: 'Thêm học viên thành công!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        
        // Close the modal
        this.studentModal.hide();
      } catch (error) {
        console.error('Error saving student:', error);
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra',
          text: 'Không thể lưu thông tin học viên. Vui lòng thử lại sau.'
        });
      }
    },
    
    async deleteStudent() {
      this.isDeleting = true;
      
      try {
        await studentService.deleteStudent(this.currentStudent.id);
        
        // Remove from the local data
        const index = this.students.findIndex(s => s.id === this.currentStudent.id);
        if (index !== -1) {
          this.students.splice(index, 1);
        }
        
        Swal.fire({
          icon: 'success',
          title: 'Xóa học viên thành công!',
          showConfirmButton: false,
          timer: 1500,
        });
        
        this.deleteModal.hide();
      } catch (error) {
        console.error('Error deleting student:', error);
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra',
          text: 'Không thể xóa học viên. Vui lòng thử lại sau.'
        });
      } finally {
        this.isDeleting = false;
      }
    }
  }
}
</script>

<style scoped>
.table th {
  white-space: nowrap;
}

.table td {
  vertical-align: middle;
}
</style> 