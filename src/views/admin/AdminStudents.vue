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
                <option value="active">Đang học</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="dropped">Đã nghỉ học</option>
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

      <!-- Students Table -->
      <div class="card shadow mb-4">
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
                <tr v-for="student in filteredStudents" :key="student.id">
                  <td>{{ student.id }}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img :src="student.avatar" class="rounded-circle me-2" style="width: 32px; height: 32px; object-fit: cover;" alt="Student avatar">
                      {{ student.name }}
                    </div>
                  </td>
                  <td>{{ student.email }}</td>
                  <td>{{ student.phone }}</td>
                  <td>{{ getCourseName(student.courseId) }}</td>
                  <td>
                    <span :class="getStatusBadgeClass(student.status)">
                      {{ getStatusText(student.status) }}
                    </span>
                  </td>
                  <td>{{ formatDate(student.enrollmentDate) }}</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-sm btn-outline-primary" @click="openEditModal(student)">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-info" @click="viewStudent(student)">
                        <i class="bi bi-eye"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-danger" @click="confirmDelete(student)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
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
              <form @submit.prevent="saveStudent">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentName" class="form-label">Họ tên <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="studentName" v-model="currentStudent.name" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentEmail" class="form-label">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="studentEmail" v-model="currentStudent.email" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentPhone" class="form-label">Số điện thoại <span class="text-danger">*</span></label>
                      <input type="tel" class="form-control" id="studentPhone" v-model="currentStudent.phone" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentCourse" class="form-label">Khóa học <span class="text-danger">*</span></label>
                      <select class="form-select" id="studentCourse" v-model="currentStudent.courseId" required>
                        <option value="">Chọn khóa học</option>
                        <option v-for="course in courses" :key="course.id" :value="course.id">
                          {{ course.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentStatus" class="form-label">Trạng thái <span class="text-danger">*</span></label>
                      <select class="form-select" id="studentStatus" v-model="currentStudent.status" required>
                        <option value="active">Đang học</option>
                        <option value="completed">Đã hoàn thành</option>
                        <option value="pending">Chờ xác nhận</option>
                        <option value="dropped">Đã nghỉ học</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="studentEnrollmentDate" class="form-label">Ngày đăng ký <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" id="studentEnrollmentDate" v-model="currentStudent.enrollmentDate" required>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="studentNotes" class="form-label">Ghi chú</label>
                      <textarea class="form-control" id="studentNotes" rows="3" v-model="currentStudent.notes"></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer px-0 pb-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                  <button type="submit" class="btn btn-primary">Lưu học viên</button>
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
              <p>Bạn có chắc chắn muốn xóa học viên "<span class="fw-bold">{{ currentStudent.name }}</span>" không?</p>
              <p class="text-danger"><small>Lưu ý: Hành động này không thể hoàn tác.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-danger" @click="deleteStudent">Xóa học viên</button>
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
              <div class="row">
                <div class="col-md-4 text-center">
                  <img :src="currentStudent.avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;" alt="Student avatar">
                  <h4>{{ currentStudent.name }}</h4>
                  <p class="text-muted">ID: {{ currentStudent.id }}</p>
                </div>
                <div class="col-md-8">
                  <div class="row mb-4">
                    <div class="col-md-6">
                      <h5>Thông tin liên hệ</h5>
                      <p><i class="bi bi-envelope me-2"></i>{{ currentStudent.email }}</p>
                      <p><i class="bi bi-telephone me-2"></i>{{ currentStudent.phone }}</p>
                    </div>
                    <div class="col-md-6">
                      <h5>Khóa học</h5>
                      <p>{{ getCourseName(currentStudent.courseId) }}</p>
                      <p><i class="bi bi-calendar me-2"></i>Đăng ký: {{ formatDate(currentStudent.enrollmentDate) }}</p>
                      <p><i class="bi bi-circle-fill me-2" :class="getStatusColor(currentStudent.status)"></i>{{ getStatusText(currentStudent.status) }}</p>
                    </div>
                  </div>
                  <div class="mb-4" v-if="currentStudent.notes">
                    <h5>Ghi chú</h5>
                    <p>{{ currentStudent.notes }}</p>
                  </div>
                </div>
              </div>
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

export default {
  name: 'AdminStudents',
  components: {
    AdminLayout
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
      
      // Filters
      searchQuery: '',
      selectedCourse: '',
      selectedStatus: '',
      
      // Sample Data
      courses: [
        { id: 1, name: 'Vue.js Development' },
        { id: 2, name: 'React Native Mobile App' },
        { id: 3, name: 'Database Management' },
        { id: 4, name: 'DevOps Engineering' }
      ],
      
      students: [
        {
          id: 1,
          name: 'Nguyễn Văn A',
          email: 'nguyenvana@example.com',
          phone: '0901234567',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          courseId: 1,
          status: 'active',
          enrollmentDate: '2023-01-15',
          notes: 'Học viên có tiềm năng cao'
        },
        {
          id: 2,
          name: 'Trần Thị B',
          email: 'tranthib@example.com',
          phone: '0901234568',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          courseId: 2,
          status: 'completed',
          enrollmentDate: '2022-12-01',
          notes: 'Đã hoàn thành xuất sắc khóa học'
        },
        {
          id: 3,
          name: 'Lê Văn C',
          email: 'levanc@example.com',
          phone: '0901234569',
          avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
          courseId: 3,
          status: 'pending',
          enrollmentDate: '2023-02-20',
          notes: 'Chờ xác nhận thanh toán'
        },
        {
          id: 4,
          name: 'Phạm Thị D',
          email: 'phamthid@example.com',
          phone: '0901234570',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          courseId: 4,
          status: 'dropped',
          enrollmentDate: '2023-01-10',
          notes: 'Đã nghỉ học do lý do cá nhân'
        }
      ]
    }
  },
  
  computed: {
    filteredStudents() {
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
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.studentModal = new Modal(this.$refs.studentModal);
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
      this.selectedCourse = '';
      this.selectedStatus = '';
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
        status: 'pending',
        enrollmentDate: new Date().toISOString().split('T')[0],
        notes: ''
      };
    },
    
    getCourseName(courseId) {
      const course = this.courses.find(c => c.id === courseId);
      return course ? course.name : 'N/A';
    },
    
    getStatusText(status) {
      const statusMap = {
        active: 'Đang học',
        completed: 'Đã hoàn thành',
        pending: 'Chờ xác nhận',
        dropped: 'Đã nghỉ học'
      };
      return statusMap[status] || status;
    },
    
    getStatusBadgeClass(status) {
      const classMap = {
        active: 'badge bg-success',
        completed: 'badge bg-primary',
        pending: 'badge bg-warning',
        dropped: 'badge bg-danger'
      };
      return classMap[status] || 'badge bg-secondary';
    },
    
    getStatusColor(status) {
      const colorMap = {
        active: 'text-success',
        completed: 'text-primary',
        pending: 'text-warning',
        dropped: 'text-danger'
      };
      return colorMap[status] || 'text-secondary';
    },
    
    formatDate(date) {
      return new Date(date).toLocaleDateString('vi-VN');
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentStudent = this.getEmptyStudent();
      this.studentModal.show();
    },
    
    openEditModal(student) {
      this.isEditMode = true;
      this.currentStudent = JSON.parse(JSON.stringify(student)); // Deep copy
      this.studentModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewStudent(student) {
      this.currentStudent = JSON.parse(JSON.stringify(student)); // Deep copy
      this.viewModal.show();
    },
    
    confirmDelete(student) {
      this.currentStudent = student;
      this.deleteModal.show();
    },
    
    // Save and Delete methods
    saveStudent() {
      if (this.isEditMode) {
        // Update existing student
        const index = this.students.findIndex(s => s.id === this.currentStudent.id);
        if (index !== -1) {
          this.students.splice(index, 1, this.currentStudent);
        }
      } else {
        // Add new student
        this.currentStudent.id = Math.max(0, ...this.students.map(s => s.id)) + 1;
        this.students.push(this.currentStudent);
      }
      
      this.studentModal.hide();
      // In a real application, you would save to backend here
    },
    
    deleteStudent() {
      const index = this.students.findIndex(s => s.id === this.currentStudent.id);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
      this.deleteModal.hide();
      // In a real application, you would delete from backend here
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