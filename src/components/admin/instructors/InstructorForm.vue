<template>
  <form @submit.prevent="handleSubmit">
    <div class="row g-3">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorName" class="form-label">Họ tên <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="instructorName" v-model="formData.name" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorTitle" class="form-label">Chức danh <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="instructorTitle" v-model="formData.title" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="instructorBio" class="form-label">Giới thiệu <span class="text-danger">*</span></label>
          <textarea class="form-control" id="instructorBio" rows="3" v-model="formData.bio" required></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorEmail" class="form-label">Email <span class="text-danger">*</span></label>
          <input type="email" class="form-control" id="instructorEmail" v-model="formData.email" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorPhone" class="form-label">Số điện thoại</label>
          <input type="tel" class="form-control" id="instructorPhone" v-model="formData.phone">
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorAvatar" class="form-label">URL ảnh đại diện <span class="text-danger">*</span></label>
          <input type="url" class="form-control" id="instructorAvatar" v-model="formData.avatar" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="instructorSpecialty" class="form-label">Chuyên môn <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="instructorSpecialty" v-model="formData.specialty" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="instructorSkills" class="form-label">Kỹ năng (phân cách bằng dấu phẩy)</label>
          <input type="text" class="form-control" id="instructorSkills" v-model="skillsInput" placeholder="e.g. JavaScript, Vue.js, Node.js">
        </div>
      </div>
      <div class="col-md-12" v-if="parsedSkills.length">
        <div class="mb-3">
          <label class="form-label d-block">Kỹ năng đã chọn:</label>
          <div class="d-flex flex-wrap gap-2">
            <span v-for="(skill, index) in parsedSkills" :key="index" class="badge bg-secondary">
              {{ skill }}
              <i class="bi bi-x ms-1" role="button" @click="removeSkill(index)"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">LinkedIn</label>
          <div class="input-group">
            <span class="input-group-text"><i class="bi bi-linkedin"></i></span>
            <input type="url" class="form-control" v-model="formData.linkedin">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">GitHub</label>
          <div class="input-group">
            <span class="input-group-text"><i class="bi bi-github"></i></span>
            <input type="url" class="form-control" v-model="formData.github">
          </div>
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
  name: 'InstructorForm',
  props: {
    instructor: {
      type: Object,
      default: () => ({
        id: null,
        name: '',
        title: '',
        bio: '',
        email: '',
        phone: '',
        avatar: '',
        specialty: '',
        skills: [],
        coursesCount: 0,
        studentsCount: 0,
        linkedin: '',
        github: ''
      })
    },
    submitButtonText: {
      type: String,
      default: 'Lưu giảng viên'
    }
  },
  data() {
    return {
      formData: { ...this.instructor },
      skillsInput: this.instructor.skills ? this.instructor.skills.join(', ') : ''
    }
  },
  computed: {
    parsedSkills() {
      if (!this.skillsInput) return [];
      return this.skillsInput.split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);
    }
  },
  watch: {
    instructor(newValue) {
      this.formData = { ...newValue };
      this.skillsInput = newValue.skills ? newValue.skills.join(', ') : '';
    }
  },
  methods: {
    removeSkill(index) {
      const skills = this.parsedSkills;
      skills.splice(index, 1);
      this.skillsInput = skills.join(', ');
    },
    handleSubmit() {
      // Create a copy of the form data
      const updatedInstructor = { ...this.formData };
      
      // Set the skills from the parsed input
      updatedInstructor.skills = this.parsedSkills;
      
      // Emit the save event with the updated instructor
      this.$emit('save', updatedInstructor);
    }
  }
}
</script> 