import apiClient from '../config';

const API_PATH = '/students';

/**
 * Service for handling student API calls
 */
export default {
  /**
   * Get all students
   * @param {Object} params - Query parameters (courseId, status, search)
   * @returns {Promise} - Promise with student data
   */
  getAllStudents(params = {}) {
    return apiClient.get(API_PATH, { params });
  },

  /**
   * Get student by ID
   * @param {Number} id - Student ID
   * @returns {Promise} - Promise with student data
   */
  getStudentById(id) {
    return apiClient.get(`${API_PATH}/${id}`);
  },

  /**
   * Create a new student
   * @param {Object} student - Student data
   * @returns {Promise} - Promise with created student
   */
  createStudent(student) {
    return apiClient.post(API_PATH, student);
  },

  /**
   * Update an existing student
   * @param {Number} id - Student ID
   * @param {Object} student - Updated student data
   * @returns {Promise} - Promise with updated student
   */
  updateStudent(id, student) {
    return apiClient.put(`${API_PATH}/${id}`, student);
  },

  /**
   * Delete a student
   * @param {Number} id - Student ID
   * @returns {Promise} - Promise with delete confirmation
   */
  deleteStudent(id) {
    return apiClient.delete(`${API_PATH}/${id}`);
  },

  /**
   * Search students by query
   * @param {String} query - Search query
   * @returns {Promise} - Promise with search results
   */
  searchStudents(query) {
    return apiClient.get(API_PATH, { params: { search: query } });
  },

  /**
   * Get students by course ID
   * @param {Number} courseId - Course ID to filter by
   * @returns {Promise} - Promise with filtered students
   */
  getStudentsByCourseId(courseId) {
    return apiClient.get(API_PATH, { params: { courseId } });
  },

  /**
   * Get students by status
   * @param {String} status - Status to filter by (active, completed, pending, dropped)
   * @returns {Promise} - Promise with filtered students
   */
  getStudentsByStatus(status) {
    return apiClient.get(API_PATH, { params: { status } });
  }
}; 