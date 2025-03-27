<template>
  <div class="card h-100 course-card">
    <div class="course-image">
      <img :src="course.thumbnail" class="card-img-top" :alt="course.title">
      <div class="course-status" v-if="course.status">
        <span :class="getStatusBadgeClass()">{{ getStatusText() }}</span>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text small text-muted mb-2">
        <i class="bi bi-person-fill me-1"></i> {{ getInstructorName() }}
      </p>
      <p class="card-text small mb-2">
        <i class="bi bi-calendar-event me-1"></i> {{ formatDate(course.startDate) }}
      </p>
      <p class="card-text small mb-3">
        <i class="bi bi-people-fill me-1"></i> {{ course.studentsCount || 0 }} học viên
      </p>
      <p class="card-text description">{{ course.description }}</p>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="badge bg-info">{{ course.level }}</span>
        <span class="fw-bold text-primary">{{ formatPrice(course.price) }}</span>
      </div>
    </div>
    <div class="card-footer bg-white">
      <div class="d-flex justify-content-between">
        <button class="btn btn-sm btn-outline-primary" @click="$emit('edit', course)">
          <i class="bi bi-pencil me-1"></i> Sửa
        </button>
        <button class="btn btn-sm btn-outline-info" @click="$emit('view', course)">
          <i class="bi bi-eye me-1"></i> Xem
        </button>
        <button class="btn btn-sm btn-outline-danger" @click="$emit('delete', course)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    },
    instructors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getInstructorName() {
      if (!this.course.instructorId) return 'Chưa có giảng viên';
      const instructor = this.instructors.find(i => i.id === this.course.instructorId);
      return instructor ? instructor.name : 'Chưa có giảng viên';
    },
    getStatusBadgeClass() {
      return this.course.active 
        ? 'badge bg-success' 
        : 'badge bg-secondary';
    },
    getStatusText() {
      return this.course.active 
        ? 'Đang mở' 
        : 'Đã đóng';
    },
    formatDate(dateString) {
      if (!dateString) return 'Chưa có ngày bắt đầu';
      return new Date(dateString).toLocaleDateString('vi-VN');
    },
    formatPrice(price) {
      if (price === 0) return 'Miễn phí';
      return new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
      }).format(price);
    }
  }
}
</script>

<style scoped>
.course-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.course-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-status {
  position: absolute;
  top: 10px;
  right: 10px;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.9rem;
}
</style> 