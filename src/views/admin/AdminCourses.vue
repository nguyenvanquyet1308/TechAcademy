<template>
  <admin-layout>
    <div class="admin-courses">
      <!-- Page Heading -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0 text-gray-800">Quản lý khóa học</h1>
        <button class="btn btn-primary" @click="openAddModal">
          <i class="bi bi-plus-circle me-1"></i> Thêm khóa học mới
        </button>
      </div>

      <!-- Filters and Search -->
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input type="text" class="form-control" placeholder="Tìm kiếm khóa học..." v-model="filters.search" @input="applyFilters">
              </div>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="filters.category" @change="applyFilters">
                <option value="">-- Tất cả danh mục --</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="filters.status" @change="applyFilters">
                <option value="">-- Tất cả trạng thái --</option>
                <option value="active">Đang hoạt động</option>
                <option value="draft">Bản nháp</option>
                <option value="upcoming">Sắp mở</option>
                <option value="completed">Đã kết thúc</option>
              </select>
            </div>
            <div class="col-md-2">
              <button class="btn btn-outline-secondary w-100" @click="resetFilters">
                <i class="bi bi-arrow-repeat me-1"></i> Đặt lại
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Course List -->
      <div class="row">
        <div v-for="course in filteredCourses" :key="course.id" class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow h-100">
            <div class="position-relative">
              <img :src="course.thumbnail" class="card-img-top" alt="Course thumbnail" style="height: 180px; object-fit: cover;">
              <div class="position-absolute top-0 end-0 m-2">
                <span class="badge" :class="{
                  'bg-success': course.status === 'active',
                  'bg-warning': course.status === 'upcoming',
                  'bg-secondary': course.status === 'draft',
                  'bg-info': course.status === 'completed'
                }">{{ getStatusDisplay(course.status) }}</span>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ course.title }}</h5>
              <div class="small text-muted mb-2">
                <i class="bi bi-tag me-1"></i> {{ getCategoryName(course.categoryId) }}
              </div>
              <p class="card-text text-truncate">{{ course.shortDescription }}</p>
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <i class="bi bi-people me-1"></i> {{ course.enrolledCount }}
                </div>
                <div>
                  <i class="bi bi-star-fill text-warning me-1"></i> {{ course.rating }}/5
                </div>
                <div>
                  <i class="bi bi-currency-dollar me-1"></i> {{ formatPrice(course.price) }}
                </div>
              </div>
            </div>
            <div class="card-footer bg-white border-0 pt-0">
              <div class="d-flex">
                <button class="btn btn-sm btn-outline-primary flex-grow-1 me-1" @click="openEditModal(course)">
                  <i class="bi bi-pencil me-1"></i> Sửa
                </button>
                <button class="btn btn-sm btn-outline-info flex-grow-1 me-1" @click="viewCourseDetails(course)">
                  <i class="bi bi-eye me-1"></i> Xem
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="confirmDelete(course)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredCourses.length === 0" class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-journal-x display-1 text-muted"></i>
            <p class="mt-3 text-muted">Không tìm thấy khóa học nào phù hợp với điều kiện tìm kiếm.</p>
            <button class="btn btn-outline-secondary mt-2" @click="resetFilters">Đặt lại bộ lọc</button>
          </div>
        </div>
      </div>

      <!-- Add/Edit Course Modal -->
      <div class="modal fade" id="courseModal" tabindex="-1" aria-labelledby="courseModalLabel" aria-hidden="true" ref="courseModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="courseModalLabel">{{ isEditMode ? 'Chỉnh sửa khóa học' : 'Thêm khóa học mới' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="saveCourse">
                <div class="row g-3">
                  <div class="col-md-8">
                    <div class="mb-3">
                      <label for="courseTitle" class="form-label">Tên khóa học <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="courseTitle" v-model="currentCourse.title" required>
                    </div>
                  </div>
                  <!-- <div class="col-md-4">
                    <div class="mb-3">
                      <label for="courseCategory" class="form-label">Danh mục <span class="text-danger">*</span></label>
                      <select class="form-select" id="courseCategory" v-model="currentCourse.categoryId" required>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                          {{ category.name }}
                        </option>
                      </select>
                    </div>
                  </div> -->
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="courseShortDesc" class="form-label">Mô tả ngắn <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="courseShortDesc" v-model="currentCourse.shortDescription" required>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="courseDescription" class="form-label">Mô tả chi tiết <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="courseDescription" rows="5" v-model="currentCourse.description" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="courseThumbnail" class="form-label">URL ảnh thumbnail <span class="text-danger">*</span></label>
                      <input type="url" class="form-control" id="courseThumbnail" v-model="currentCourse.thumbnail" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="courseStatus" class="form-label">Trạng thái <span class="text-danger">*</span></label>
                      <select class="form-select" id="courseStatus" v-model="currentCourse.status" required>
                        <option value="active">Đang hoạt động</option>
                        <option value="draft">Bản nháp</option>
                        <option value="upcoming">Sắp mở</option>
                        <option value="completed">Đã kết thúc</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label for="coursePrice" class="form-label">Giá (VNĐ) <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" id="coursePrice" v-model="currentCourse.price" min="0" required>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label for="courseDuration" class="form-label">Thời lượng (giờ) <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" id="courseDuration" v-model="currentCourse.duration" min="1" required>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label for="courseLevel" class="form-label">Cấp độ <span class="text-danger">*</span></label>
                      <select class="form-select" id="courseLevel" v-model="currentCourse.level" required>
                        <option value="beginner">Người mới bắt đầu</option>
                        <option value="intermediate">Trung cấp</option>
                        <option value="advanced">Nâng cao</option>
                        <option value="all-levels">Tất cả các cấp độ</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="courseInstructor" class="form-label">Giảng viên <span class="text-danger">*</span></label>
                      <select class="form-select" id="courseInstructor" v-model="currentCourse.instructorId" required>
                        <option v-for="instructor in instructors" :key="instructor.id" :value="instructor.id">
                          {{ instructor.name }} - {{ instructor.specialty }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label">Chương trình học <span class="text-danger">*</span></label>
                      <div class="card">
                        <div class="card-body p-2">
                          <div v-for="(module, index) in currentCourse.curriculum" :key="index" class="border-bottom pb-2 mb-2">
                            <div class="d-flex align-items-center mb-2">
                              <input type="text" class="form-control me-2" placeholder="Tên chương/phần học" v-model="module.title" required>
                              <button type="button" class="btn btn-sm btn-outline-danger" @click="removeModule(index)">
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                            <div v-for="(lesson, lIndex) in module.lessons" :key="`${index}-${lIndex}`" class="d-flex align-items-center ms-4 mb-2">
                              <input type="text" class="form-control me-2" placeholder="Tên bài học" v-model="lesson.title" required>
                              <input type="number" class="form-control me-2" placeholder="Phút" v-model="lesson.duration" min="1" required style="max-width: 100px;">
                              <button type="button" class="btn btn-sm btn-outline-danger" @click="removeLesson(index, lIndex)">
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                            <div class="ms-4">
                              <button type="button" class="btn btn-sm btn-outline-secondary" @click="addLesson(index)">
                                <i class="bi bi-plus-circle me-1"></i> Thêm bài học
                              </button>
                            </div>
                          </div>
                          <button type="button" class="btn btn-outline-primary btn-sm mt-2" @click="addModule">
                            <i class="bi bi-plus-circle me-1"></i> Thêm chương/phần học
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer px-0 pb-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                  <button type="submit" class="btn btn-primary">Lưu khóa học</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true" ref="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Xác nhận xóa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Bạn có chắc chắn muốn xóa khóa học "<span class="fw-bold">{{ currentCourse.title }}</span>" không?</p>
              <p class="text-danger"><small>Lưu ý: Hành động này không thể hoàn tác.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-danger" @click="deleteCourse">Xóa khóa học</button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Course Details Modal -->
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true" ref="viewModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">Chi tiết khóa học</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="currentCourse.id">
              <div class="row">
                <div class="col-md-4">
                  <img :src="currentCourse.thumbnail" class="img-fluid rounded mb-3" alt="Course thumbnail">
                  <div class="d-flex justify-content-between mb-2">
                    <span class="badge" :class="{
                      'bg-success': currentCourse.status === 'active',
                      'bg-warning': currentCourse.status === 'upcoming',
                      'bg-secondary': currentCourse.status === 'draft',
                      'bg-info': currentCourse.status === 'completed'
                    }">{{ getStatusDisplay(currentCourse.status) }}</span>
                    <span class="badge bg-primary">{{ getLevelDisplay(currentCourse.level) }}</span>
                  </div>
                  <div class="card mb-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Giá:</span>
                        <span class="fw-bold">{{ formatPrice(currentCourse.price) }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Thời lượng:</span>
                        <span>{{ currentCourse.duration }} giờ</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Đăng ký:</span>
                        <span>{{ currentCourse.enrolledCount }} học viên</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Đánh giá:</span>
                        <span>
                          <i class="bi bi-star-fill text-warning"></i> {{ currentCourse.rating }}/5
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8">
                  <h4>{{ currentCourse.title }}</h4>
                  <p class="text-muted small">
                    <i class="bi bi-tag me-1"></i> {{ getCategoryName(currentCourse.categoryId) }}
                  </p>
                  <p>{{ currentCourse.description }}</p>
                  
                  <div class="instructor-info d-flex align-items-center mb-3">
                    <img :src="getInstructor(currentCourse.instructorId).avatar" class="rounded-circle me-2" width="40" height="40" alt="Instructor">
                    <div>
                      <div class="fw-bold">{{ getInstructor(currentCourse.instructorId).name }}</div>
                      <div class="small text-muted">{{ getInstructor(currentCourse.instructorId).specialty }}</div>
                    </div>
                  </div>
                  
                  <h5 class="mt-4">Chương trình học</h5>
                  <div class="accordion" id="curriculumAccordion">
                    <div v-for="(module, index) in currentCourse.curriculum" :key="index" class="accordion-item">
                      <h2 class="accordion-header" :id="`heading-${index}`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${index}`" aria-expanded="false" :aria-controls="`collapse-${index}`">
                          {{ module.title }}
                          <span class="badge bg-secondary ms-auto">{{ module.lessons.length }} bài học</span>
                        </button>
                      </h2>
                      <div :id="`collapse-${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading-${index}`" data-bs-parent="#curriculumAccordion">
                        <div class="accordion-body p-0">
                          <ul class="list-group list-group-flush">
                            <li v-for="(lesson, lIndex) in module.lessons" :key="`${index}-${lIndex}`" class="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <i class="bi bi-play-circle me-2"></i>
                                {{ lesson.title }}
                              </div>
                              <span class="badge bg-light text-dark">{{ lesson.duration }} phút</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary" @click="openEditModal(currentCourse)">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '../../components/admin/AdminLayout.vue'
import { Modal } from 'bootstrap'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api'; // Update this to your actual API base URL

export default {
  name: 'AdminCourses',
  components: {
    AdminLayout
  },
  data() {
    return {
      // Modals
      courseModal: null,
      deleteModal: null,
      viewModal: null,
      
      // State
      isEditMode: false,
      currentCourse: this.getEmptyCourse(),
      
      // Filters
      filters: {
        search: '',
        category: '',
        status: ''
      },
      
      // Data from API
      categories: [],
      instructors: [],
      courses: [],
      
      // Loading state
      loading: false,
      error: null
    }
  },
  
  computed: {
    filteredCourses() {
      return this.courses.filter(course => {
        const matchSearch = !this.filters.search || 
          course.title.toLowerCase().includes(this.filters.search.toLowerCase()) ||
          course.shortDescription.toLowerCase().includes(this.filters.search.toLowerCase());
        
        const matchCategory = !this.filters.category || course.categoryId === parseInt(this.filters.category);
        const matchStatus = !this.filters.status || course.status === this.filters.status;
        
        return matchSearch && matchCategory && matchStatus;
      });
    }
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.courseModal = new Modal(this.$refs.courseModal);
    this.deleteModal = new Modal(this.$refs.deleteModal);
    this.viewModal = new Modal(this.$refs.viewModal);
    
    // Fetch data from API
    this.fetchCourses();
    this.fetchCategories();
    this.fetchInstructors();
  },
  
  methods: {
    // API methods
    async fetchCourses() {
      try {
        this.loading = true;
        const response = await axios.get(`${API_URL}/courses`);
        // Transform API data to match our component's structure
        this.courses = response.data.map(course => this.mapApiCourseToLocal(course));
        this.loading = false;
      } catch (error) {
        console.error('Error fetching courses:', error);
        this.error = 'Failed to load courses';
        this.loading = false;
      }
    },
    
    async fetchCategories() {
      try {
        // Replace with your actual categories API endpoint
        const response = await axios.get(`${API_URL}/categories`);
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    
    async fetchInstructors() {
      try {
        // Replace with your actual instructors API endpoint
        const response = await axios.get(`${API_URL}/instructors`);
        this.instructors = response.data;
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    },
    
    // Data mapping methods
    mapApiCourseToLocal(apiCourse) {
      return {
        id: apiCourse.id,
        title: apiCourse.name,
        shortDescription: apiCourse.description?.substring(0, 100) || '',
        description: apiCourse.description,
        thumbnail: apiCourse.thumbnail,
        price: apiCourse.price,
        duration: apiCourse.duration,
        level: apiCourse.level,
        rating: 0, // Add if your API provides this
        enrolledCount: apiCourse.studentsCount || 0,
        status: apiCourse.isActive ? 'active' : 'draft', // Map isActive to status
        categoryId: 1, // Update if your API provides category
        instructorId: apiCourse.instructorId,
        curriculum: this.mapApiCurriculumToLocal(apiCourse.chapters)
      };
    },
    
    mapApiCurriculumToLocal(chapters) {
      if (!chapters || chapters.length === 0) {
        return [{
          title: '',
          lessons: [{ title: '', duration: 0 }]
        }];
      }
      
      return chapters.map(chapter => ({
        id: chapter.id,
        title: chapter.title,
        position: chapter.position,
        lessons: chapter.lessons.map(lesson => ({
          id: lesson.id,
          title: lesson.title,
          duration: lesson.duration,
          position: lesson.position,
          content: lesson.content,
          videoUrl: lesson.videoUrl
        }))
      }));
    },
    
    mapLocalCourseToApi(localCourse) {
      return {
        id: localCourse.id,
        name: localCourse.title,
        description: localCourse.description,
        price: localCourse.price,
        thumbnail: localCourse.thumbnail,
        duration: localCourse.duration,
        level: localCourse.level,
        instructorId: localCourse.instructorId,
        isActive: localCourse.status === 'active',
        chapters: this.mapLocalCurriculumToApi(localCourse.curriculum, localCourse.id)
      };
    },
    
    mapLocalCurriculumToApi(curriculum, courseId) {
      return curriculum.map((module, index) => ({
        id: module.id,
        title: module.title,
        position: index + 1,
        courseId: courseId,
        lessons: module.lessons.map((lesson, lIndex) => ({
          id: lesson.id,
          title: lesson.title,
          duration: lesson.duration,
          position: lIndex + 1,
          chapterId: module.id,
          content: lesson.content || '',
          videoUrl: lesson.videoUrl || ''
        }))
      }));
    },
    
    // CRUD methods
    async saveCourse() {
      try {
        this.loading = true;
        const courseData = this.mapLocalCourseToApi(this.currentCourse);
        
        let savedCourse;
        if (this.isEditMode) {
          // Update existing course
          const response = await axios.put(`${API_URL}/courses/${courseData.id}`, courseData);
          savedCourse = response.data;
          
          // Update chapters and lessons
          await this.updateCurriculum(savedCourse.id, this.currentCourse.curriculum);
          
          const index = this.courses.findIndex(c => c.id === savedCourse.id);
          if (index !== -1) {
            this.courses.splice(index, 1, this.mapApiCourseToLocal(savedCourse));
          }
        } else {
          // Add new course
          const response = await axios.post(`${API_URL}/courses`, courseData);
          savedCourse = response.data;
          
          // Create chapters and lessons
          await this.createCurriculum(savedCourse.id, this.currentCourse.curriculum);
          
          this.courses.push(this.mapApiCourseToLocal(savedCourse));
        }
        
        this.loading = false;
        this.courseModal.hide();
        // Reload courses to get fresh data
        this.fetchCourses();
      } catch (error) {
        console.error('Error saving course:', error);
        this.error = 'Failed to save course';
        this.loading = false;
      }
    },
    
    async updateCurriculum(courseId, curriculum) {
      // Get existing chapters
      const response = await axios.get(`${API_URL}/courses/${courseId}/chapters`);
      const existingChapters = response.data;
      
      // Process each chapter
      for (const module of curriculum) {
        let chapterId;
        
        if (module.id) {
          // Update existing chapter
          await axios.put(`${API_URL}/courses/chapters/${module.id}`, {
            id: module.id,
            title: module.title,
            position: module.position,
            courseId: courseId
          });
          chapterId = module.id;
        } else {
          // Create new chapter
          const chapterResponse = await axios.post(`${API_URL}/courses/${courseId}/chapters`, {
            title: module.title,
            position: module.position || 1,
            courseId: courseId
          });
          chapterId = chapterResponse.data.id;
        }
        
        // Process lessons for this chapter
        await this.updateLessons(chapterId, module.lessons);
      }
      
      // Delete chapters that are no longer present
      const currentChapterIds = curriculum.filter(m => m.id).map(m => m.id);
      for (const chapter of existingChapters) {
        if (!currentChapterIds.includes(chapter.id)) {
          await axios.delete(`${API_URL}/courses/chapters/${chapter.id}`);
        }
      }
    },
    
    async createCurriculum(courseId, curriculum) {
      for (const [index, module] of curriculum.entries()) {
        // Create chapter
        const chapterResponse = await axios.post(`${API_URL}/courses/${courseId}/chapters`, {
          title: module.title,
          position: index + 1,
          courseId: courseId
        });
        
        const chapterId = chapterResponse.data.id;
        
        // Create lessons for this chapter
        for (const [lIndex, lesson] of module.lessons.entries()) {
          await axios.post(`${API_URL}/courses/chapters/${chapterId}/lessons`, {
            title: lesson.title,
            duration: lesson.duration,
            position: lIndex + 1,
            chapterId: chapterId,
            content: lesson.content || '',
            videoUrl: lesson.videoUrl || ''
          });
        }
      }
    },
    
    async updateLessons(chapterId, lessons) {
      // Get existing lessons
      const response = await axios.get(`${API_URL}/courses/chapters/${chapterId}/lessons`);
      const existingLessons = response.data;
      
      // Process each lesson
      for (const [index, lesson] of lessons.entries()) {
        if (lesson.id) {
          // Update existing lesson
          await axios.put(`${API_URL}/courses/lessons/${lesson.id}`, {
            id: lesson.id,
            title: lesson.title,
            duration: lesson.duration,
            position: index + 1,
            chapterId: chapterId,
            content: lesson.content || '',
            videoUrl: lesson.videoUrl || ''
          });
        } else {
          // Create new lesson
          await axios.post(`${API_URL}/courses/chapters/${chapterId}/lessons`, {
            title: lesson.title,
            duration: lesson.duration,
            position: index + 1,
            chapterId: chapterId,
            content: lesson.content || '',
            videoUrl: lesson.videoUrl || ''
          });
        }
      }
      
      // Delete lessons that are no longer present
      const currentLessonIds = lessons.filter(l => l.id).map(l => l.id);
      for (const lesson of existingLessons) {
        if (!currentLessonIds.includes(lesson.id)) {
          await axios.delete(`${API_URL}/courses/lessons/${lesson.id}`);
        }
      }
    },
    
    async deleteCourse() {
      try {
        this.loading = true;
        await axios.delete(`${API_URL}/courses/${this.currentCourse.id}`);
        
        const index = this.courses.findIndex(c => c.id === this.currentCourse.id);
        if (index !== -1) {
          this.courses.splice(index, 1);
        }
        
        this.loading = false;
        this.deleteModal.hide();
      } catch (error) {
        console.error('Error deleting course:', error);
        this.error = 'Failed to delete course';
        this.loading = false;
      }
    },
    
    // Filter methods
    applyFilters() {
      // Filters are applied via computed property
    },
    
    resetFilters() {
      this.filters = {
        search: '',
        category: '',
        status: ''
      };
    },
    
    // Helper methods
    getEmptyCourse() {
      return {
        id: null,
        title: '',
        shortDescription: '',
        description: '',
        thumbnail: '',
        price: 0,
        duration: 0,
        level: 'beginner',
        rating: 0,
        enrolledCount: 0,
        status: 'draft',
        categoryId: this.categories && this.categories.length > 0 ? this.categories[0].id : null,
        instructorId: this.instructors && this.instructors.length > 0 ? this.instructors[0].id : null,
        curriculum: [
          {
            title: '',
            lessons: [{ title: '', duration: 0 }]
          }
        ]
      };
    },
    
    getCategoryName(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.name : 'Chưa phân loại';
    },
    
    getInstructor(instructorId) {
      return this.instructors.find(i => i.id === instructorId) || {
        name: 'Chưa xác định',
        specialty: '',
        avatar: 'https://via.placeholder.com/150'
      };
    },
    
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
        .format(price)
        .replace('₫', 'VNĐ');
    },
    
    getStatusDisplay(status) {
      const statusMap = {
        'active': 'Đang hoạt động',
        'draft': 'Bản nháp',
        'upcoming': 'Sắp mở',
        'completed': 'Đã kết thúc'
      };
      return statusMap[status] || status;
    },
    
    getLevelDisplay(level) {
      const levelMap = {
        'beginner': 'Người mới bắt đầu',
        'intermediate': 'Trung cấp',
        'advanced': 'Nâng cao',
        'all-levels': 'Tất cả cấp độ'
      };
      return levelMap[level] || level;
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentCourse = this.getEmptyCourse();
      this.courseModal.show();
    },
    
    openEditModal(course) {
      this.isEditMode = true;
      this.currentCourse = JSON.parse(JSON.stringify(course)); // Deep copy
      this.courseModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewCourseDetails(course) {
      this.currentCourse = JSON.parse(JSON.stringify(course)); // Deep copy
      this.viewModal.show();
    },
    
    confirmDelete(course) {
      this.currentCourse = course;
      this.deleteModal.show();
    },
    
    // Curriculum methods
    addModule() {
      this.currentCourse.curriculum.push({
        title: '',
        lessons: [{ title: '', duration: 0 }]
      });
    },
    
    removeModule(index) {
      this.currentCourse.curriculum.splice(index, 1);
      if (this.currentCourse.curriculum.length === 0) {
        this.addModule();
      }
    },
    
    addLesson(moduleIndex) {
      this.currentCourse.curriculum[moduleIndex].lessons.push({
        title: '',
        duration: 0
      });
    },
    
    removeLesson(moduleIndex, lessonIndex) {
      this.currentCourse.curriculum[moduleIndex].lessons.splice(lessonIndex, 1);
      if (this.currentCourse.curriculum[moduleIndex].lessons.length === 0) {
        this.addLesson(moduleIndex);
      }
    },
  }
}
</script>

<style scoped>
.admin-courses .card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.admin-courses .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
</style> 