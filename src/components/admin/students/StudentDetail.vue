<template>
  <div class="row">
    <div class="col-md-4 text-center">
      <img :src="student.avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;" :alt="`${student.name} avatar`">
      <h4>{{ student.name }}</h4>
      <p class="text-muted">ID: {{ student.id }}</p>
    </div>
    <div class="col-md-8">
      <div class="row mb-4">
        <div class="col-md-6">
          <h5>Thông tin liên hệ</h5>
          <p><i class="bi bi-envelope me-2"></i>{{ student.email }}</p>
          <p><i class="bi bi-telephone me-2"></i>{{ student.phone }}</p>
        </div>
        <div class="col-md-6">
          <h5>Khóa học</h5>
          <p>{{ courseName }}</p>
          <p><i class="bi bi-calendar me-2"></i>Đăng ký: {{ formattedDate }}</p>
          <p><i class="bi bi-circle-fill me-2" :class="statusColor"></i>{{ statusText }}</p>
        </div>
      </div>
      <div class="mb-4" v-if="student.notes">
        <h5>Ghi chú</h5>
        <p>{{ student.notes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentDetail',
  props: {
    student: {
      type: Object,
      required: true
    },
    courses: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    courseName() {
      const course = this.courses.find(c => c.id === this.student.courseId);
      return course ? course.name : 'N/A';
    },
    statusText() {
      const statusMap = {
        ACTIVE: 'Đang học',
        COMPLETED: 'Đã hoàn thành',
        PENDING: 'Chờ xác nhận',
        DROPPED: 'Đã nghỉ học'
      };
      return statusMap[this.student.status] || this.student.status;
    },
    statusColor() {
      const colorMap = {
        ACTIVE: 'text-success',
        COMPLETED: 'text-primary',
        PENDING: 'text-warning',
        DROPPED: 'text-danger'
      };
      return colorMap[this.student.status] || 'text-secondary';
    },
    formattedDate() {
      return new Date(this.student.enrollmentDate).toLocaleDateString('vi-VN');
    }
  }
}
</script> 