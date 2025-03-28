<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm" :class="{'navbar-scrolled': scrolled}">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/logo.png" alt="TechAcademy Logo" class="logo-img">
      </router-link>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{'show': isNavbarOpen}" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active" @click="closeNavbar">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course-intro" active-class="active" @click="closeNavbar">Giới thiệu</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nội dung khóa học
            </a>
            <ul class="dropdown-menu" aria-labelledby="coursesDropdown">
              <li><router-link class="dropdown-item" to="/course-python" @click="closeNavbar">Python AI</router-link></li>
              <li><router-link class="dropdown-item" to="/course-java-spring" @click="closeNavbar">Java Backend</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/course-content" @click="closeNavbar">Tất cả khóa học</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/instructors" active-class="active" @click="closeNavbar">Giảng viên</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reviews" active-class="active" @click="closeNavbar">Đánh giá học viên</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq" active-class="active" @click="closeNavbar">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-primary text-white ms-lg-3 px-4 py-2" to="/register" @click="closeNavbar">Đăng ký ngay</router-link>
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
      scrolled: false,
      isNavbarOpen: false
    };
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
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    }
  }
};
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
  font-size: 0.8rem;
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

.logo-img {
  height: 35px;
  width: auto;
  margin-right: 10px;
  vertical-align: middle;
  transition: all 0.3s ease;
}

.navbar-scrolled .logo-img {
   height:50px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin: 0 0.5rem;
  padding: 0.25rem 0.25rem;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover, .nav-link.active {
  color: #4a6bff !important;
}
.logo-img {
  width: 180px; /* Điều chỉnh kích thước */
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2)); /* Tạo hiệu ứng bóng */
  transition: transform 0.3s ease-in-out;
  background-color: #007bff; /* Màu xanh Bootstrap */
  padding: 5px; /* Khoảng cách viền */
  border-radius: 10px; /* Bo góc */
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
.slide-fade-enter-active {
  animation: slideDown 0.3s ease-out forwards;
}
.slide-fade-leave-active {
  animation: slideUp 0.3s ease-in forwards;
}
@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
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