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

      <!-- Instructors Grid -->
      <div class="row">
        <div v-for="instructor in filteredInstructors" :key="instructor.id" class="col-xl-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
            <div class="text-center pt-4">
              <img :src="instructor.avatar" class="rounded-circle mb-3" style="width: 120px; height: 120px; object-fit: cover;" alt="Instructor avatar">
              <h5 class="card-title">{{ instructor.name }}</h5>
              <p class="card-subtitle text-muted">{{ instructor.title }}</p>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <p class="card-text text-truncate">{{ instructor.bio }}</p>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <small class="text-muted"><i class="bi bi-book me-1"></i> {{ instructor.coursesCount }} khóa học</small>
                <small class="text-muted"><i class="bi bi-people me-1"></i> {{ instructor.studentsCount }} học viên</small>
              </div>
              <div class="instructor-skills mb-3">
                <div class="d-flex flex-wrap gap-1">
                  <span v-for="(skill, index) in instructor.skills" :key="index" class="badge bg-light text-dark">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
            <div class="card-footer bg-white">
              <div class="d-flex justify-content-between">
                <button class="btn btn-sm btn-outline-primary" @click="openEditModal(instructor)">
                  <i class="bi bi-pencil me-1"></i> Sửa
                </button>
                <button class="btn btn-sm btn-outline-info" @click="viewInstructor(instructor)">
                  <i class="bi bi-eye me-1"></i> Xem
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="confirmDelete(instructor)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
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
              <form @submit.prevent="saveInstructor">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorName" class="form-label">Họ tên <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="instructorName" v-model="currentInstructor.name" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorTitle" class="form-label">Chức danh <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="instructorTitle" v-model="currentInstructor.title" required>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="instructorBio" class="form-label">Giới thiệu <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="instructorBio" rows="3" v-model="currentInstructor.bio" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorEmail" class="form-label">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="instructorEmail" v-model="currentInstructor.email" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorPhone" class="form-label">Số điện thoại</label>
                      <input type="tel" class="form-control" id="instructorPhone" v-model="currentInstructor.phone">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorAvatar" class="form-label">URL ảnh đại diện <span class="text-danger">*</span></label>
                      <input type="url" class="form-control" id="instructorAvatar" v-model="currentInstructor.avatar" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="instructorSpecialty" class="form-label">Chuyên môn <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="instructorSpecialty" v-model="currentInstructor.specialty" required>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="instructorSkills" class="form-label">Kỹ năng (phân cách bằng dấu phẩy)</label>
                      <input type="text" class="form-control" id="instructorSkills" v-model="skillsInput" placeholder="e.g. JavaScript, Vue.js, Node.js">
                    </div>
                  </div>
                  <div class="col-md-12" v-if="skillsInput">
                    <div class="mb-3">
                      <label class="form-label d-block">Kỹ năng đã chọn:</label>
                      <div class="d-flex flex-wrap gap-2">
                        <span v-for="(skill, index) in parsedSkills" :key="index" class="badge bg-secondary">
                          {{ skill }}
                          <i class="bi bi-x ms-1" role="button" @click="removeSkill(index)"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">LinkedIn</label>
                      <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-linkedin"></i></span>
                        <input type="url" class="form-control" v-model="currentInstructor.linkedin">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">GitHub</label>
                      <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-github"></i></span>
                        <input type="url" class="form-control" v-model="currentInstructor.github">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer px-0 pb-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                  <button type="submit" class="btn btn-primary">Lưu giảng viên</button>
                </div>
              </form>
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
              <button type="button" class="btn btn-danger" @click="deleteInstructor">Xóa giảng viên</button>
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
              <div class="row">
                <div class="col-md-4 text-center">
                  <img :src="currentInstructor.avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;" alt="Instructor avatar">
                  <h4>{{ currentInstructor.name }}</h4>
                  <p class="text-muted">{{ currentInstructor.title }}</p>
                  <div class="social-links mt-3">
                    <a v-if="currentInstructor.linkedin" :href="currentInstructor.linkedin" target="_blank" class="btn btn-outline-primary btn-sm me-2">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a v-if="currentInstructor.github" :href="currentInstructor.github" target="_blank" class="btn btn-outline-dark btn-sm">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="mb-4">
                    <h5>Giới thiệu</h5>
                    <p>{{ currentInstructor.bio }}</p>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-6">
                      <h5>Thông tin liên hệ</h5>
                      <p><i class="bi bi-envelope me-2"></i>{{ currentInstructor.email }}</p>
                      <p v-if="currentInstructor.phone"><i class="bi bi-telephone me-2"></i>{{ currentInstructor.phone }}</p>
                    </div>
                    <div class="col-md-6">
                      <h5>Chuyên môn</h5>
                      <p>{{ currentInstructor.specialty }}</p>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h5>Kỹ năng</h5>
                    <div class="d-flex flex-wrap gap-2">
                      <span v-for="(skill, index) in currentInstructor.skills" :key="index" class="badge bg-primary">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h5>Khóa học</h5>
                    <p v-if="currentInstructor.coursesCount === 0" class="text-muted">Chưa có khóa học nào.</p>
                    <p v-else><strong>{{ currentInstructor.coursesCount }}</strong> khóa học với <strong>{{ currentInstructor.studentsCount }}</strong> học viên</p>
                  </div>
                </div>
              </div>
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

export default {
  name: 'AdminInstructors',
  components: {
    AdminLayout
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
      skillsInput: '',
      
      // Filters
      searchQuery: '',
      selectedSpecialty: '',
      
      // Sample Data
      instructors: [
        { 
          id: 1, 
          name: 'Nguyễn Văn A', 
          title: 'Senior Frontend Developer',
          bio: 'Chuyên gia phát triển frontend với hơn 8 năm kinh nghiệm. Đã tham gia phát triển nhiều ứng dụng web lớn và phức tạp.',
          email: 'nguyenvana@techzen.edu.vn',
          phone: '0901234567',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg', 
          specialty: 'Web Development',
          skills: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React', 'Angular'],
          coursesCount: 3,
          studentsCount: 230,
          linkedin: 'https://linkedin.com/in/nguyenvana',
          github: 'https://github.com/nguyenvana'
        },
        { 
          id: 2, 
          name: 'Trần Thị B', 
          title: 'Mobile App Developer',
          bio: 'Chuyên gia phát triển ứng dụng di động với 5 năm kinh nghiệm trong các dự án React Native và Flutter.',
          email: 'tranthib@techzen.edu.vn',
          phone: '0901234568',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg', 
          specialty: 'Mobile Development',
          skills: ['React Native', 'Flutter', 'JavaScript', 'TypeScript', 'Firebase'],
          coursesCount: 2,
          studentsCount: 180,
          linkedin: 'https://linkedin.com/in/tranthib',
          github: 'https://github.com/tranthib'
        },
        { 
          id: 3, 
          name: 'Lê Văn C', 
          title: 'Database Architect',
          bio: 'Chuyên gia về cơ sở dữ liệu với hơn 10 năm kinh nghiệm. Thành thạo cả SQL và NoSQL, cũng như các kỹ thuật tối ưu hóa hiệu suất.',
          email: 'levanc@techzen.edu.vn',
          phone: '0901234569',
          avatar: 'https://randomuser.me/api/portraits/men/68.jpg', 
          specialty: 'Database Management',
          skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Database Design'],
          coursesCount: 4,
          studentsCount: 320,
          linkedin: 'https://linkedin.com/in/levanc',
          github: 'https://github.com/levanc'
        },
        { 
          id: 4, 
          name: 'Phạm Thị D', 
          title: 'DevOps Engineer',
          bio: 'Chuyên gia về DevOps với hơn 6 năm kinh nghiệm. Thành thạo các công cụ CI/CD, container và orchestration.',
          email: 'phamthid@techzen.edu.vn',
          phone: '0901234570',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg', 
          specialty: 'DevOps',
          skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'CI/CD'],
          coursesCount: 1,
          studentsCount: 150,
          linkedin: 'https://linkedin.com/in/phamthid',
          github: 'https://github.com/phamthid'
        }
      ]
    }
  },
  
  computed: {
    specialties() {
      const specialtiesSet = new Set(this.instructors.map(instructor => instructor.specialty));
      return Array.from(specialtiesSet);
    },
    
    filteredInstructors() {
      return this.instructors.filter(instructor => {
        const matchSearch = !this.searchQuery || 
          instructor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          instructor.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          instructor.bio.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          instructor.skills.some(skill => skill.toLowerCase().includes(this.searchQuery.toLowerCase()));
        
        const matchSpecialty = !this.selectedSpecialty || instructor.specialty === this.selectedSpecialty;
        
        return matchSearch && matchSpecialty;
      });
    },
    
    parsedSkills() {
      if (!this.skillsInput) return [];
      return this.skillsInput.split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);
    }
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.instructorModal = new Modal(this.$refs.instructorModal);
    this.deleteModal = new Modal(this.$refs.deleteModal);
    this.viewModal = new Modal(this.$refs.viewModal);
  },
  
  methods: {
    // Filter methods
    applyFilters() {
      // Filters are applied via computed property
    },
    
    resetFilters() {
      this.searchQuery = '';
      this.selectedSpecialty = '';
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
    
    removeSkill(index) {
      const skills = this.parsedSkills;
      skills.splice(index, 1);
      this.skillsInput = skills.join(', ');
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentInstructor = this.getEmptyInstructor();
      this.skillsInput = '';
      this.instructorModal.show();
    },
    
    openEditModal(instructor) {
      this.isEditMode = true;
      this.currentInstructor = JSON.parse(JSON.stringify(instructor)); // Deep copy
      this.skillsInput = instructor.skills.join(', ');
      this.instructorModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewInstructor(instructor) {
      this.currentInstructor = JSON.parse(JSON.stringify(instructor)); // Deep copy
      this.viewModal.show();
    },
    
    confirmDelete(instructor) {
      this.currentInstructor = instructor;
      this.deleteModal.show();
    },
    
    // Save and Delete methods
    saveInstructor() {
      // Set skills from input
      this.currentInstructor.skills = this.parsedSkills;
      
      if (this.isEditMode) {
        // Update existing instructor
        const index = this.instructors.findIndex(i => i.id === this.currentInstructor.id);
        if (index !== -1) {
          this.instructors.splice(index, 1, this.currentInstructor);
        }
      } else {
        // Add new instructor
        this.currentInstructor.id = Math.max(0, ...this.instructors.map(i => i.id)) + 1;
        this.currentInstructor.coursesCount = 0;
        this.currentInstructor.studentsCount = 0;
        this.instructors.push(this.currentInstructor);
      }
      
      this.instructorModal.hide();
      // In a real application, you would save to backend here
    },
    
    deleteInstructor() {
      const index = this.instructors.findIndex(i => i.id === this.currentInstructor.id);
      if (index !== -1) {
        this.instructors.splice(index, 1);
      }
      this.deleteModal.hide();
      // In a real application, you would delete from backend here
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