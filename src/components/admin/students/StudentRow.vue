<template>
  <tr>
    <td>{{ student.id }}</td>
    <td>
      <div class="d-flex align-items-center">
        <img :src="student.avatar" class="rounded-circle me-2" style="width: 32px; height: 32px; object-fit: cover;" :alt="`${student.name} avatar`">
        {{ student.name }}
      </div>
    </td>
    <td>{{ student.email }}</td>
    <td>{{ student.phone }}</td>
    <td>{{ courseName }}</td>
    <td>
      <span :class="statusBadgeClass">
        {{ statusText }}
      </span>
    </td>
    <td>{{ formattedDate }}</td>
    <td>
      <div class="btn-group">
        <button class="btn btn-sm btn-outline-primary" @click="$emit('edit', student)">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-sm btn-outline-info" @click="$emit('view', student)">
          <i class="bi bi-eye"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" @click="$emit('delete', student)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'StudentRow',
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
    statusBadgeClass() {
      const classMap = {
        ACTIVE: 'badge bg-success',
        COMPLETED: 'badge bg-primary',
        PENDING: 'badge bg-warning',
        DROPPED: 'badge bg-danger'
      };
      return classMap[this.student.status] || 'badge bg-secondary';
    },
    formattedDate() {
      return new Date(this.student.enrollmentDate).toLocaleDateString('vi-VN');
    }
  }
}
</script> 