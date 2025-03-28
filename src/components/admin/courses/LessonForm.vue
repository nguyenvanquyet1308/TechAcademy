<template>
  <div class="lesson-form">
    <div class="form-group mb-3">
      <label for="lessonTitle" class="form-label">Tiêu đề bài học <span class="text-danger">*</span></label>
      <input
        type="text"
        id="lessonTitle"
        v-model="formData.title"
        class="form-control"
        :class="{ 'is-invalid': errors.title }"
        placeholder="Nhập tiêu đề bài học"
        required
      />
      <div v-if="errors.title" class="invalid-feedback">{{ errors.title }}</div>
    </div>

    <div class="form-group mb-3">
      <label for="lessonType" class="form-label">Loại bài học <span class="text-danger">*</span></label>
      <select
        id="lessonType"
        v-model="formData.type"
        class="form-select"
        :class="{ 'is-invalid': errors.type }"
        required
      >
        <option value="">-- Chọn loại bài học --</option>
        <option value="VIDEO">Video</option>
        <option value="READING">Đọc</option>
        <option value="QUIZ">Trắc nghiệm</option>
        <option value="ASSIGNMENT">Bài tập</option>
      </select>
      <div v-if="errors.type" class="invalid-feedback">{{ errors.type }}</div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <div class="form-group">
          <label for="lessonOrder" class="form-label">Thứ tự</label>
          <input
            type="number"
            id="lessonOrder"
            v-model="formData.order"
            class="form-control"
            min="1"
            placeholder="Thứ tự hiển thị"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="lessonDuration" class="form-label">Thời lượng (phút) <span class="text-danger">*</span></label>
          <input
            type="number"
            id="lessonDuration"
            v-model="formData.duration"
            class="form-control"
            :class="{ 'is-invalid': errors.duration }"
            min="1"
            placeholder="Thời lượng bài học tính bằng phút"
            required
          />
          <div v-if="errors.duration" class="invalid-feedback">{{ errors.duration }}</div>
        </div>
      </div>
    </div>

    <div class="form-group mb-3">
      <label for="lessonContent" class="form-label">Nội dung</label>
      <textarea
        id="lessonContent"
        v-model="formData.content"
        class="form-control"
        rows="5"
        placeholder="Nội dung bài học"
      ></textarea>
    </div>

    <div v-if="formData.type === 'VIDEO'" class="form-group mb-3">
      <label for="lessonVideoUrl" class="form-label">URL Video <span class="text-danger">*</span></label>
      <input
        type="url"
        id="lessonVideoUrl"
        v-model="formData.videoUrl"
        class="form-control"
        :class="{ 'is-invalid': errors.videoUrl }"
        placeholder="URL của video (YouTube, Vimeo, ...)"
      />
      <div v-if="errors.videoUrl" class="invalid-feedback">{{ errors.videoUrl }}</div>
    </div>

    <div v-if="formData.type === 'ASSIGNMENT'" class="form-group mb-3">
      <label for="lessonSubmissionType" class="form-label">Kiểu nộp bài</label>
      <select
        id="lessonSubmissionType"
        v-model="formData.submissionType"
        class="form-select"
      >
        <option value="TEXT">Văn bản</option>
        <option value="FILE">Tệp đính kèm</option>
        <option value="LINK">Đường dẫn</option>
      </select>
    </div>

    <div class="form-check mb-3">
      <input
        type="checkbox"
        id="lessonIsPreview"
        v-model="formData.isPreview"
        class="form-check-input"
      />
      <label for="lessonIsPreview" class="form-check-label">Cho phép xem thử</label>
      <small class="form-text text-muted d-block">
        Bài học xem thử sẽ có thể truy cập mà không cần đăng ký khóa học
      </small>
    </div>

    <div class="d-flex justify-content-end mt-4">
      <button type="button" class="btn btn-secondary me-2" @click="$emit('close')">Hủy</button>
      <button type="button" class="btn btn-primary" @click="handleSubmit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
        {{ isEditing ? 'Cập nhật' : 'Thêm bài học' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonForm',
  props: {
    lesson: {
      type: Object,
      default: () => ({})
    },
    chapterId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      formData: {
        title: '',
        type: '',
        content: '',
        duration: 15,
        order: 1,
        isPreview: false,
        videoUrl: '',
        submissionType: 'TEXT',
        chapterId: this.chapterId
      },
      errors: {},
      isSubmitting: false
    }
  },
  computed: {
    isEditing() {
      return !!this.lesson.id
    }
  },
  watch: {
    lesson: {
      handler(newVal) {
        if (newVal && newVal.id) {
          this.formData = { ...newVal }
        }
      },
      immediate: true
    },
    chapterId: {
      handler(newVal) {
        this.formData.chapterId = newVal
      },
      immediate: true
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      let isValid = true

      if (!this.formData.title || this.formData.title.trim() === '') {
        this.errors.title = 'Tiêu đề bài học không được để trống'
        isValid = false
      }

      if (!this.formData.type) {
        this.errors.type = 'Vui lòng chọn loại bài học'
        isValid = false
      }

      if (!this.formData.duration || this.formData.duration < 1) {
        this.errors.duration = 'Thời lượng bài học phải lớn hơn 0'
        isValid = false
      }

      if (this.formData.type === 'VIDEO' && !this.formData.videoUrl) {
        this.errors.videoUrl = 'URL video không được để trống'
        isValid = false
      }

      return isValid
    },
    handleSubmit() {
      if (!this.validateForm()) return

      this.isSubmitting = true
      const lessonData = { ...this.formData }
      
      this.$emit('submit', lessonData, () => {
        this.isSubmitting = false
      })
    }
  }
}
</script>

<style scoped>
.lesson-form {
  max-width: 800px;
  margin: 0 auto;
}
</style> 