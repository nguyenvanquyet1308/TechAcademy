<template>
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
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.classList.toggle('no-scroll', this.isMenuOpen)
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.classList.remove('no-scroll')
    }
  }
}
</script>

<style scoped>
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