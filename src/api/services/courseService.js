import apiClient from '../config';

const API_PATH = '/courses';

/**
 * Service for handling course API calls
 */
export default {
  /**
   * Get all courses
   * @param {Object} params - Query parameters (active, search)
   * @returns {Promise} - Promise with course data
   */
  getAllCourses(params = {}) {
    return apiClient.get(API_PATH, { params });
  },

  /**
   * Get course by ID
   * @param {Number} id - Course ID
   * @returns {Promise} - Promise with course data
   */
  getCourseById(id) {
    return apiClient.get(`${API_PATH}/${id}`);
  },

  /**
   * Get courses by instructor ID
   * @param {Number} instructorId - Instructor ID
   * @returns {Promise} - Promise with courses data
   */
  getCoursesByInstructorId(instructorId) {
    return apiClient.get(`${API_PATH}/instructor/${instructorId}`);
  },

  /**
   * Create a new course
   * @param {Object} course - Course data
   * @returns {Promise} - Promise with created course
   */
  createCourse(course) {
    return apiClient.post(API_PATH, course);
  },

  /**
   * Update an existing course
   * @param {Number} id - Course ID
   * @param {Object} course - Updated course data
   * @returns {Promise} - Promise with updated course
   */
  updateCourse(id, course) {
    return apiClient.put(`${API_PATH}/${id}`, course);
  },

  /**
   * Update a course and its curriculum in a single request
   * @param {Number} id - Course ID
   * @param {Object} course - Updated course data including curriculum
   * @returns {Promise} - Promise with updated course
   */
  updateCourseWithCurriculum(id, course) {
    return apiClient.put(`${API_PATH}/${id}/with-curriculum`, course);
  },

  /**
   * Delete a course
   * @param {Number} id - Course ID
   * @returns {Promise} - Promise with delete confirmation
   */
  deleteCourse(id) {
    return apiClient.delete(`${API_PATH}/${id}`);
  },

  /**
   * Search courses by query
   * @param {String} query - Search query
   * @returns {Promise} - Promise with search results
   */
  searchCourses(query) {
    return apiClient.get(API_PATH, { params: { search: query } });
  },

  /**
   * Get courses by active status
   * @param {Boolean} active - Active status
   * @returns {Promise} - Promise with filtered courses
   */
  getCoursesByActive(active) {
    return apiClient.get(API_PATH, { params: { active } });
  },

  // Curriculum management methods
  
  /**
   * Get chapters for a course
   * @param {Number} courseId - Course ID
   * @returns {Promise} - Promise with chapters data
   */
  getCourseChapters(courseId) {
    return apiClient.get(`${API_PATH}/${courseId}/chapters`);
  },

  /**
   * Add chapter to course
   * @param {Number} courseId - Course ID
   * @param {Object} chapter - Chapter data
   * @returns {Promise} - Promise with created chapter
   */
  addChapterToCourse(courseId, chapter) {
    return apiClient.post(`${API_PATH}/${courseId}/chapters`, chapter);
  },

  /**
   * Update chapter
   * @param {Number} chapterId - Chapter ID
   * @param {Object} chapter - Updated chapter data
   * @returns {Promise} - Promise with updated chapter
   */
  updateChapter(chapterId, chapter) {
    return apiClient.put(`${API_PATH}/chapters/${chapterId}`, chapter);
  },

  /**
   * Delete chapter
   * @param {Number} chapterId - Chapter ID
   * @returns {Promise} - Promise with delete confirmation
   */
  deleteChapter(chapterId) {
    return apiClient.delete(`${API_PATH}/chapters/${chapterId}`);
  },

  /**
   * Get lessons for a chapter
   * @param {Number} chapterId - Chapter ID
   * @returns {Promise} - Promise with lessons data
   */
  getChapterLessons(chapterId) {
    return apiClient.get(`${API_PATH}/chapters/${chapterId}/lessons`);
  },

  /**
   * Add lesson to chapter
   * @param {Number} chapterId - Chapter ID
   * @param {Object} lesson - Lesson data
   * @returns {Promise} - Promise with created lesson
   */
  addLessonToChapter(chapterId, lesson) {
    return apiClient.post(`${API_PATH}/chapters/${chapterId}/lessons`, lesson);
  },

  /**
   * Update lesson
   * @param {Number} lessonId - Lesson ID
   * @param {Object} lesson - Updated lesson data
   * @returns {Promise} - Promise with updated lesson
   */
  updateLesson(lessonId, lesson) {
    return apiClient.put(`${API_PATH}/lessons/${lessonId}`, lesson);
  },

  /**
   * Delete lesson
   * @param {Number} lessonId - Lesson ID
   * @returns {Promise} - Promise with delete confirmation
   */
  deleteLesson(lessonId) {
    return apiClient.delete(`${API_PATH}/lessons/${lessonId}`);
  }
}; 