<template>
  <form @submit.prevent="handleSubmit">
    <div class="row g-3">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="courseTitle" class="form-label">Tên khóa học <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="courseTitle" v-model="formData.title" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="courseInstructor" class="form-label">Giảng viên <span class="text-danger">*</span></label>
          <select class="form-select" id="courseInstructor" v-model="formData.instructorId" required>
            <option value="">Chọn giảng viên</option>
            <option v-for="instructor in instructors" :key="instructor.id" :value="instructor.id">
              {{ instructor.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="coursePrice" class="form-label">Học phí (VNĐ) <span class="text-danger">*</span></label>
          <input type="number" class="form-control" id="coursePrice" v-model="formData.price" min="0" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="courseLevel" class="form-label">Trình độ <span class="text-danger">*</span></label>
          <select class="form-select" id="courseLevel" v-model="formData.level" required>
            <option value="BEGINNER">Người mới bắt đầu</option>
            <option value="INTERMEDIATE">Trung cấp</option>
            <option value="ADVANCED">Nâng cao</option>
            <option value="ALL_LEVELS">Tất cả trình độ</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="courseDuration" class="form-label">Thời lượng (giờ) <span class="text-danger">*</span></label>
          <input type="number" class="form-control" id="courseDuration" v-model="formData.duration" min="1" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="courseStartDate" class="form-label">Ngày bắt đầu <span class="text-danger">*</span></label>
          <input type="date" class="form-control" id="courseStartDate" v-model="formData.startDate" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="courseDescription" class="form-label">Mô tả khóa học <span class="text-danger">*</span></label>
          <textarea class="form-control" id="courseDescription" rows="3" v-model="formData.description" required></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="courseThumbnail" class="form-label">Ảnh thumbnail <span class="text-danger">*</span></label>
          <input type="url" class="form-control" id="courseThumbnail" v-model="formData.thumbnail" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="courseActive" v-model="formData.active">
          <label class="form-check-label" for="courseActive">Khóa học hoạt động</label>
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
  name: 'CourseForm',
  props: {
    course: {
      type: Object,
      default: () => ({
        id: null,
        title: '',
        description: '',
        instructorId: '',
        price: 0,
        duration: 0,
        level: 'BEGINNER',
        thumbnail: '',
        active: true,
        startDate: new Date().toISOString().split('T')[0],
        studentsCount: 0
      })
    },
    instructors: {
      type: Array,
      default: () => []
    },
    submitButtonText: {
      type: String,
      default: 'Lưu khóa học'
    }
  },
  data() {
    return {
      formData: { ...this.course }
    }
  },
  watch: {
    course(newValue) {
      this.formData = { 
        ...newValue,
        // Ensure startDate is in the correct format for date input
        startDate: newValue.startDate ? new Date(newValue.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      };
    }
  },
  methods: {
    handleSubmit() {
      // Clone form data to avoid reactivity issues
      const courseData = { ...this.formData };
      
      // Ensure numeric fields are actually numbers
      courseData.price = Number(courseData.price);
      courseData.duration = Number(courseData.duration);
      
      // Emit the save event with the course data
      this.$emit('save', courseData);
    }
  }
}
</script> 