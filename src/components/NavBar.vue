<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold fs-4">
        Tech<span class="text-primary">Academy</span>
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Trang chủ</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Khóa học
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/course-python" class="dropdown-item">Python Programming</router-link></li>
              <li><router-link to="/course-java-spring" class="dropdown-item">Java Spring Boot</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/course-content" class="dropdown-item">Tất cả khóa học</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/instructors" class="nav-link">Giảng viên</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tuition" class="nav-link">Học phí & Ưu đãi</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reviews" class="nav-link">Đánh giá</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link">FAQ</router-link>
          </li>
        </ul>
        
        <div class="d-flex align-items-center">
          <div class="contact-phone me-4 d-none d-lg-block">
            <i class="bi bi-telephone-fill text-primary me-2"></i>
            <span class="fw-bold">(028) 3847 1234</span>
          </div>
          <router-link to="/register" class="btn btn-primary px-4 py-2">Đăng ký tư vấn</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.5px;
}

.nav-link {
  color: #343a40;
  font-weight: 500;
  margin: 0 5px;
  padding: 8px 15px;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
  background-color: rgba(74, 107, 255, 0.08);
}

.dropdown-menu {
  border: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 10px 20px;
  font-weight: 500;
}

.dropdown-item:hover,
.dropdown-item:focus,
.dropdown-item.router-link-active {
  background-color: rgba(74, 107, 255, 0.08);
  color: var(--primary);
}

.btn-primary {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(74, 107, 255, 0.3);
}

.contact-phone {
  font-size: 0.95rem;
}

@media (max-width: 992px) {
  .nav-link {
    padding: 10px 15px;
    margin: 2px 0;
  }
  
  .dropdown-menu {
    border: none;
    box-shadow: none;
    padding-left: 15px;
  }
}
</style> 