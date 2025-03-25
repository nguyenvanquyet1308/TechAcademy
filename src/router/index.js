import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseIntro from '../views/CourseIntro.vue'
import CourseContent from '../views/CourseContent.vue'
import Instructors from '../views/Instructors.vue'
import Register from '../views/Register.vue'
import Tuition from '../views/Tuition.vue'
import Reviews from '../views/Reviews.vue'
import FAQ from '../views/FAQ.vue'
import CoursePython from '../views/CoursePython.vue'
import CourseJavaSpring from '../views/CourseJavaSpring.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/course-intro',
    name: 'course-intro',
    component: CourseIntro
  },
  {
    path: '/course-content',
    name: 'course-content',
    component: CourseContent
  },
  {
    path: '/instructors',
    name: 'instructors',
    component: Instructors
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/tuition',
    name: 'tuition',
    component: Tuition
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/course-python',
    name: 'course-python',
    component: CoursePython
  },
  {
    path: '/course-java-spring',
    name: 'course-java-spring',
    component: CourseJavaSpring
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 