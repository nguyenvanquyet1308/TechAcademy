<template>
  <div class="admin-login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="p-5">
                <div class="text-center mb-4">
                  <h1 class="h4 text-gray-900">TechZen Academy</h1>
                  <h2 class="h5 mb-4">Đăng nhập quản trị</h2>
                </div>
                <div v-if="error" class="alert alert-danger">
                  {{ error }}
                </div>
                <form class="user" @submit.prevent="handleLogin">
                  <div class="form-group mb-3">
                    <input 
                      type="text" 
                      class="form-control form-control-user" 
                      id="username"
                      placeholder="Tên đăng nhập"
                      v-model="username" 
                      required
                    >
                  </div>
                  <div class="form-group mb-3">
                    <input 
                      type="password" 
                      class="form-control form-control-user" 
                      id="password"
                      placeholder="Mật khẩu"
                      v-model="password" 
                      required
                    >
                  </div>
                  <div class="form-group mb-3">
                    <div class="custom-control custom-checkbox small">
                      <input type="checkbox" class="custom-control-input" id="rememberMe" v-model="rememberMe">
                      <label class="custom-control-label" for="rememberMe">Ghi nhớ đăng nhập</label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-user btn-block" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Đăng nhập
                  </button>
                </form>
                <hr>
                <div class="text-center">
                  <router-link to="/" class="small">Quay lại trang chủ</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      loading: false,
      error: null
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch('http://localhost:8080/api/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          }),
          credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
          // Store authentication status
          localStorage.setItem('adminAuthenticated', 'true')
          if (this.rememberMe) {
            localStorage.setItem('adminUsername', this.username)
          } else {
            localStorage.removeItem('adminUsername')
          }
          
          // Handle redirect after successful login
          const redirectPath = this.$route.query.redirect || '/admin'
          this.$router.push(redirectPath)
        } else {
          this.error = data.message || 'Tên đăng nhập hoặc mật khẩu không đúng'
        }
      } catch (error) {
        this.error = 'Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.'
        console.error('Login error:', error)
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    // Check if username is stored
    const savedUsername = localStorage.getItem('adminUsername')
    if (savedUsername) {
      this.username = savedUsername
      this.rememberMe = true
    }
    
    // Clear authentication if coming from logout
    if (this.$route.query.logout) {
      localStorage.removeItem('adminAuthenticated')
      this.$router.replace({ name: 'admin-login' })
    }
  }
}
</script>

<style scoped>
.form-control-user {
  border-radius: 10rem;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
}

.btn-user {
  border-radius: 10rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #4e73df;
  border-color: #4e73df;
}

.custom-control-label {
  cursor: pointer;
}
</style> 