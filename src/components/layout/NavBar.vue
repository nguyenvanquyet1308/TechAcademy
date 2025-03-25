<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm" :class="{'navbar-scrolled': scrolled}">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <span class="brand-text">Tech<span class="text-primary">Academy</span></span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course-intro" active-class="active">Giới thiệu</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nội dung khóa học
            </a>
            <ul class="dropdown-menu" aria-labelledby="coursesDropdown">
              <li><router-link class="dropdown-item" to="/course-python">Python Programming</router-link></li>
              <li><router-link class="dropdown-item" to="/course-java-spring">Java Spring Boot</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/course-content">Tất cả khóa học</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/instructors" active-class="active">Giảng viên</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tuition" active-class="active">Học phí & Ưu đãi</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reviews" active-class="active">Đánh giá học viên</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq" active-class="active">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-primary text-white ms-lg-3 px-4 py-2" to="/register">Đăng ký ngay</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
}

.navbar-scrolled .navbar-brand {
  font-size: 1.35rem;
}

.navbar-scrolled .nav-link {
  font-size: 0.9rem;
  padding: 0.4rem 0.25rem;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.brand-text {
  letter-spacing: -0.5px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin: 0 0.5rem;
  padding: 0.5rem 0.25rem;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover, .nav-link.active {
  color: #4a6bff !important;
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #4a6bff;
  left: 0;
  bottom: 0;
  transition: width 0.3s;
}

.nav-link:hover:after, .nav-link.active:after {
  width: 100%;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  animation: dropdown-fade 0.2s ease-out;
}

@keyframes dropdown-fade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
}

.dropdown-divider {
  margin: 0.5rem 0;
}

.btn-primary {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  border: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(74, 107, 255, 0.4);
}

@media (max-width: 992px) {
  .nav-link.btn {
    margin: 0.75rem 0 0 0;
    display: block;
    text-align: center;
  }
  
  .nav-link:after {
    display: none;
  }
}
</style> 