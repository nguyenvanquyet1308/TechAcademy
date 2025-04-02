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
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminCourses from '../views/admin/AdminCourses.vue'
import AdminInstructors from '../views/admin/AdminInstructors.vue'
import AdminBlog from '../views/admin/AdminBlog.vue'
import AdminStudents from '../views/admin/AdminStudents.vue'

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
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/courses',
    name: 'admin-courses',
    component: AdminCourses,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/instructors',
    name: 'admin-instructors',
    component: AdminInstructors,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/blog',
    name: 'admin-blog',
    component: AdminBlog,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/students',
    name: 'admin-students',
    component: AdminStudents,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Add navigation guard for admin routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true'
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/admin/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router 