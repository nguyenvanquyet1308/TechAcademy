<template>
  <div>
    <div class="top-header py-2 bg-primary text-white d-none d-lg-block" :class="{ 'header-hidden': scrolled }">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="contact-info d-flex align-items-center">
            <div class="me-4">
              <i class="bi bi-envelope-fill me-2"></i>
              <span>info@techacademy.edu.vn</span>
            </div>
            <div>
              <i class="bi bi-geo-alt-fill me-2"></i>
              <span>Quang Trung Software City, Q.12, TP. HCM</span>
            </div>
          </div>
          <div class="social-links">
            <a href="#" class="text-white ms-3 slide-in-top delay-1"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white ms-3 slide-in-top delay-2"><i class="bi bi-youtube"></i></a>
            <a href="#" class="text-white ms-3 slide-in-top delay-3"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="text-white ms-3 slide-in-top delay-4"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <router-link to="/">
              <h1>Tech<span>Academy</span></h1>
            </router-link>
          </div>
          <nav class="nav" :class="{ 'nav-active': isMenuOpen }">
            <ul class="nav-list">
              <li><router-link to="/" @click="closeMenu">Trang chủ</router-link></li>
              <li><router-link to="/course-intro" @click="closeMenu">Giới thiệu</router-link></li>
              <li><router-link to="/course-content" @click="closeMenu">Nội dung khóa học</router-link></li>
              <li><router-link to="/instructors" @click="closeMenu">Giảng viên</router-link></li>
              <li><router-link to="/tuition" @click="closeMenu">Học phí & Ưu đãi</router-link></li>
              <li><router-link to="/reviews" @click="closeMenu">Đánh giá học viên</router-link></li>
              <li><router-link to="/faq" @click="closeMenu">FAQ</router-link></li>
            </ul>
          </nav>
          <div class="header-cta">
            <router-link to="/register" class="btn">Đăng ký ngay</router-link>
          </div>
          <div class="menu-toggle" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.classList.toggle('no-scroll', this.isMenuOpen)
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.classList.remove('no-scroll')
    },
    handleScroll() {
      this.scrolled = window.scrollY > 200;
    }
  }
}
</script>

<style scoped>
.top-header {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  overflow: hidden;
  max-height: 100px;
}

.header-hidden {
  max-height: 0;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  opacity: 0;
}

.contact-info,
.social-links {
  display: flex;
  align-items: center;
}

.social-links a {
  transition: all 0.2s ease;
  opacity: 0;
}

.social-links a:hover {
  opacity: 0.8;
  transform: translateY(-3px);
}

.slide-in-top {
  animation: slideInTop 0.5s ease forwards;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }

.header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo a {
  text-decoration: none;
  color: #333;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.logo span {
  color: #4a6bff;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-list li {
  margin: 0 15px;
}

.nav-list a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: #4a6bff;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 992px) {
  .nav {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: white;
    transition: 0.3s;
    overflow-y: auto;
  }

  .nav-active {
    left: 0;
  }

  .nav-list {
    flex-direction: column;
    padding: 20px;
  }

  .nav-list li {
    margin: 15px 0;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-active ~ .menu-toggle .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .nav-active ~ .menu-toggle .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-active ~ .menu-toggle .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .header-cta {
    display: none;
  }
}
</style> 