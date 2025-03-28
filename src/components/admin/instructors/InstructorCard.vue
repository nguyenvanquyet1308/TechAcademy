<template>
  <div class="card h-100">
    <div class="text-center pt-4">
      <img :src="instructor.avatar" class="rounded-circle mb-3" style="width: 120px; height: 120px; object-fit: cover;" :alt="`${instructor.name} avatar`">
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
        <button class="btn btn-sm btn-outline-primary" @click="$emit('edit', instructor)">
          <i class="bi bi-pencil me-1"></i> Sửa
        </button>
        <button class="btn btn-sm btn-outline-info" @click="$emit('view', instructor)">
          <i class="bi bi-eye me-1"></i> Xem
        </button>
        <button class="btn btn-sm btn-outline-danger" @click="$emit('delete', instructor)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructorCard',
  props: {
    instructor: {
      type: Object,
      required: true
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