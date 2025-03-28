<template>
  <div class="course-detail">
    <div class="row mb-4">
      <div class="col-md-4">
        <img :src="course.thumbnail" class="img-fluid rounded mb-3" :alt="course.title">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span :class="getStatusBadgeClass()">{{ getStatusText() }}</span>
          <span class="badge bg-info">{{ course.level }}</span>
        </div>
        <div class="fw-bold text-primary fs-4 mb-3">{{ formatPrice(course.price) }}</div>
        <div class="course-meta">
          <div class="meta-item">
            <i class="bi bi-person-fill me-2"></i>
            <span>{{ getInstructorName() }}</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-clock-fill me-2"></i>
            <span>{{ course.duration }} giờ</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-calendar-event-fill me-2"></i>
            <span>{{ formatDate(course.startDate) }}</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-people-fill me-2"></i>
            <span>{{ course.studentsCount || 0 }} học viên</span>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <h2 class="course-title mb-3">{{ course.title }}</h2>
        <div class="course-description mb-4">
          <h5>Mô tả khóa học</h5>
          <p>{{ course.description }}</p>
        </div>
        
        <!-- Thông tin chương và bài học -->
        <div v-if="chapters && chapters.length > 0" class="course-curriculum">
          <h5 class="mb-3">Nội dung khóa học</h5>
          <div class="accordion" id="chaptersAccordion">
            <div v-for="(chapter, index) in chapters" :key="chapter.id" class="accordion-item">
              <h2 class="accordion-header" :id="`heading${chapter.id}`">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${chapter.id}`" :aria-expanded="index === 0" :aria-controls="`collapse${chapter.id}`">
                  <div class="w-100 d-flex justify-content-between">
                    <span>{{ chapter.title }}</span>
                    <span class="badge bg-secondary rounded-pill">{{ chapter.lessons ? chapter.lessons.length : 0 }} bài</span>
                  </div>
                </button>
              </h2>
              <div :id="`collapse${chapter.id}`" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="`heading${chapter.id}`" data-bs-parent="#chaptersAccordion">
                <div class="accordion-body">
                  <ul class="list-group list-group-flush">
                    <li v-for="lesson in chapter.lessons" :key="lesson.id" class="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <i :class="getLessonIcon(lesson.type)" class="me-2"></i>
                        <span>{{ lesson.title }}</span>
                      </div>
                      <span class="badge bg-light text-dark">{{ formatDuration(lesson.duration) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center my-4 p-4 bg-light rounded">
          <i class="bi bi-journal-text display-4 text-muted"></i>
          <p class="mt-3">Chưa có nội dung cho khóa học này.</p>
          <button class="btn btn-sm btn-outline-primary" @click="$emit('curriculum', course)">
            <i class="bi bi-plus-circle me-1"></i> Thêm nội dung khóa học
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
  props: {
    course: {
      type: Object,
      required: true
    },
    instructors: {
      type: Array,
      default: () => []
    },
    chapters: {
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
    },
    getLessonIcon(type) {
      const iconMap = {
        VIDEO: 'bi bi-play-circle',
        READING: 'bi bi-file-text',
        QUIZ: 'bi bi-question-circle',
        ASSIGNMENT: 'bi bi-pencil-square'
      };
      return iconMap[type] || 'bi bi-file';
    },
    formatDuration(minutes) {
      if (!minutes) return '1 phút';
      if (minutes < 60) return `${minutes} phút`;
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return remainingMinutes 
        ? `${hours} giờ ${remainingMinutes} phút` 
        : `${hours} giờ`;
    }
  }
}
</script>

<style scoped>
.course-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.meta-item {
  display: flex;
  align-items: center;
  color: #6c757d;
}

.course-title {
  font-weight: 700;
  margin-bottom: 1rem;
}

.course-description {
  line-height: 1.6;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(13, 110, 253, 0.25);
}
</style> 