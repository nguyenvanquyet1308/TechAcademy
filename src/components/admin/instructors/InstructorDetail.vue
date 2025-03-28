<template>
  <div class="row">
    <div class="col-md-4 text-center">
      <img :src="instructor.avatar" class="rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;" :alt="`${instructor.name} avatar`">
      <h4>{{ instructor.name }}</h4>
      <p class="text-muted">{{ instructor.title }}</p>
      <div class="social-links mt-3">
        <a v-if="instructor.linkedin" :href="instructor.linkedin" target="_blank" class="btn btn-outline-primary btn-sm me-2">
          <i class="bi bi-linkedin"></i>
        </a>
        <a v-if="instructor.github" :href="instructor.github" target="_blank" class="btn btn-outline-dark btn-sm">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
    <div class="col-md-8">
      <div class="mb-4">
        <h5>Giới thiệu</h5>
        <p>{{ instructor.bio }}</p>
      </div>
      <div class="row mb-4">
        <div class="col-md-6">
          <h5>Thông tin liên hệ</h5>
          <p><i class="bi bi-envelope me-2"></i>{{ instructor.email }}</p>
          <p v-if="instructor.phone"><i class="bi bi-telephone me-2"></i>{{ instructor.phone }}</p>
        </div>
        <div class="col-md-6">
          <h5>Chuyên môn</h5>
          <p>{{ instructor.specialty }}</p>
        </div>
      </div>
      <div class="mb-4">
        <h5>Kỹ năng</h5>
        <div class="d-flex flex-wrap gap-2">
          <span v-for="(skill, index) in instructor.skills" :key="index" class="badge bg-primary">
            {{ skill }}
          </span>
        </div>
      </div>
      <div class="mb-4">
        <h5>Khóa học</h5>
        <p v-if="instructor.coursesCount === 0" class="text-muted">Chưa có khóa học nào.</p>
        <p v-else><strong>{{ instructor.coursesCount }}</strong> khóa học với <strong>{{ instructor.studentsCount }}</strong> học viên</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructorDetail',
  props: {
    instructor: {
      type: Object,
      required: true
    }
  }
}
</script> 