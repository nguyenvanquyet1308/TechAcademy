<template>
  <div class="admin-layout">
    <!-- Top Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/admin">
          <i class="bi bi-shield-lock me-2"></i>TechAcademy Admin
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin" active-class="active">
                <i class="bi bi-speedometer2 me-1"></i>Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/courses" active-class="active">
                <i class="bi bi-book me-1"></i>Khóa học
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/instructors" active-class="active">
                <i class="bi bi-person-badge me-1"></i>Giảng viên
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/students" active-class="active">
                <i class="bi bi-people me-1"></i>Học viên
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/blog" active-class="active">
                <i class="bi bi-pencil-square me-1"></i>Blog
              </router-link>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <button class="btn btn-link nav-link dropdown-toggle text-white" type="button" id="adminDropdown" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle me-1"></i>Admin
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" @click.prevent="logout">
                  <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container-fluid py-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  methods: {
    logout() {
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminUsername');
      this.$router.push('/admin/login');
    }
  }
}
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background-color: #f8f9fc;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.nav-link {
  padding: 0.5rem 1rem;
}

.nav-link.active {
  background-color: rgba(255,255,255,.1);
  border-radius: 0.25rem;
}

.dropdown-menu {
  min-width: 200px;
}

.dropdown-item {
  padding: 0.5rem 1rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}
</style> 