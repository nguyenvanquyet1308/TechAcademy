<template>
  <form @submit.prevent="handleSubmit">
    <div class="row g-3">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="studentName" class="form-label">Họ tên <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="studentName" v-model="formData.name" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email <span class="text-danger">*</span></label>
          <input type="email" class="form-control" id="studentEmail" v-model="formData.email" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="studentPhone" class="form-label">Số điện thoại <span class="text-danger">*</span></label>
          <input type="tel" class="form-control" id="studentPhone" v-model="formData.phone" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="studentCourse" class="form-label">Khóa học <span class="text-danger">*</span></label>
          <select class="form-select" id="studentCourse" v-model="formData.courseId" required>
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
          <select class="form-select" id="studentStatus" v-model="formData.status" required>
            <option value="ACTIVE">Đang học</option>
            <option value="COMPLETED">Đã hoàn thành</option>
            <option value="PENDING">Chờ xác nhận</option>
            <option value="DROPPED">Đã nghỉ học</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="studentEnrollmentDate" class="form-label">Ngày đăng ký <span class="text-danger">*</span></label>
          <input type="date" class="form-control" id="studentEnrollmentDate" v-model="formData.enrollmentDate" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="studentAvatar" class="form-label">Avatar URL</label>
          <input type="url" class="form-control" id="studentAvatar" v-model="formData.avatar">
          <small class="text-muted">Để trống để sử dụng avatar mặc định</small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="studentNotes" class="form-label">Ghi chú</label>
          <textarea class="form-control" id="studentNotes" rows="3" v-model="formData.notes"></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer px-0 pb-0">
      <slot name="actions">
        <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Hủy</button>
        <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
      </slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'StudentForm',
  props: {
    student: {
      type: Object,
      default: () => ({
        id: null,
        name: '',
        email: '',
        phone: '',
        avatar: '',
        courseId: '',
        status: 'PENDING',
        enrollmentDate: new Date().toISOString().split('T')[0],
        notes: ''
      })
    },
    courses: {
      type: Array,
      default: () => []
    },
    submitButtonText: {
      type: String,
      default: 'Lưu học viên'
    }
  },
  data() {
    return {
      formData: { ...this.student }
    }
  },
  watch: {
    student(newValue) {
      this.formData = { ...newValue };
    }
  },
  methods: {
    handleSubmit() {
      // Ensure avatar has a default value if empty
      if (!this.formData.avatar) {
        this.formData.avatar = 'https://randomuser.me/api/portraits/lego/1.jpg';
      }
      
      // Emit the save event with the updated student
      this.$emit('save', this.formData);
    }
  }
}
</script> 