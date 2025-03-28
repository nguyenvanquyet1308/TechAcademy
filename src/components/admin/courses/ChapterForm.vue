<template>
  <div class="chapter-form">
    <div class="form-group mb-3">
      <label for="chapterTitle" class="form-label">Tiêu đề chương <span class="text-danger">*</span></label>
      <input
        type="text"
        id="chapterTitle"
        v-model="formData.title"
        class="form-control"
        :class="{ 'is-invalid': errors.title }"
        placeholder="Nhập tiêu đề chương"
        required
      />
      <div v-if="errors.title" class="invalid-feedback">{{ errors.title }}</div>
    </div>

    <div class="form-group mb-3">
      <label for="chapterOrder" class="form-label">Thứ tự</label>
      <input
        type="number"
        id="chapterOrder"
        v-model="formData.order"
        class="form-control"
        min="1"
        placeholder="Thứ tự hiển thị của chương"
      />
    </div>

    <div class="form-group mb-3">
      <label for="chapterDescription" class="form-label">Mô tả</label>
      <textarea
        id="chapterDescription"
        v-model="formData.description"
        class="form-control"
        rows="3"
        placeholder="Mô tả ngắn về nội dung chương"
      ></textarea>
    </div>

    <div class="d-flex justify-content-end mt-4">
      <button type="button" class="btn btn-secondary me-2" @click="$emit('close')">Hủy</button>
      <button type="button" class="btn btn-primary" @click="handleSubmit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
        {{ isEditing ? 'Cập nhật' : 'Thêm chương' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterForm',
  props: {
    chapter: {
      type: Object,
      default: () => ({})
    },
    courseId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      formData: {
        title: '',
        description: '',
        order: 1,
        courseId: this.courseId
      },
      errors: {},
      isSubmitting: false
    }
  },
  computed: {
    isEditing() {
      return !!this.chapter.id
    }
  },
  watch: {
    chapter: {
      handler(newVal) {
        if (newVal && newVal.id) {
          this.formData = { ...newVal }
        }
      },
      immediate: true
    },
    courseId: {
      handler(newVal) {
        this.formData.courseId = newVal
      },
      immediate: true
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      let isValid = true

      if (!this.formData.title || this.formData.title.trim() === '') {
        this.errors.title = 'Tiêu đề chương không được để trống'
        isValid = false
      }

      return isValid
    },
    handleSubmit() {
      if (!this.validateForm()) return

      this.isSubmitting = true
      const chapterData = { ...this.formData }
      
      this.$emit('submit', chapterData, () => {
        this.isSubmitting = false
      })
    }
  }
}
</script>

<style scoped>
.chapter-form {
  max-width: 600px;
  margin: 0 auto;
}
</style> 