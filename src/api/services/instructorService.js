import apiClient from '../config';

const API_PATH = '/instructors';

export const getAllInstructors = (params = {}) => apiClient.get(API_PATH, { params });

export const getInstructorById = (id) => apiClient.get(`${API_PATH}/${id}`);

export const createInstructor = (instructor) => apiClient.post(API_PATH, instructor);

export const updateInstructor = (id, instructor) => apiClient.put(`${API_PATH}/${id}`, instructor);

export const deleteInstructor = (id) => apiClient.delete(`${API_PATH}/${id}`);

export const searchInstructors = (query) => apiClient.get(API_PATH, { params: { search: query } });

export const getInstructorsBySpecialty = (specialty) => apiClient.get(API_PATH, { params: { specialty } });

export default {
  getAllInstructors,
  getInstructorById,
  createInstructor,
  updateInstructor,
  deleteInstructor,
  searchInstructors,
  getInstructorsBySpecialty
};