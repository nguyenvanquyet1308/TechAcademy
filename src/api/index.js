import apiClient from './config';
import instructorService from './services/instructorService';
import studentService from './services/studentService';
import courseService from './services/courseService';

// Export all services
export {
  apiClient,
  instructorService,
  studentService,
  courseService
};

// Default export for convenient import
export default {
  apiClient,
  instructorService,
  studentService,
  courseService
}; 