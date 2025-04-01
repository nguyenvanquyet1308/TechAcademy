<template>
  <footer class="footer py-5 bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h2 class="footer-logo">Techzen <span class="text-primary">Academy</span></h2>
          <p class="mt-3">Trung tâm đào tạo lập trình chuyên nghiệp. Với đội ngũ giảng viên giàu kinh nghiệm, chúng tôi cam kết mang đến các khóa học chất lượng cao.</p>
          <div class="social-links mt-4">
            <a href="#" class="me-3"><i class="bi bi-facebook fs-5"></i></a>
            <a href="#" class="me-3"><i class="bi bi-youtube fs-5"></i></a>
            <a href="#" class="me-3"><i class="bi bi-linkedin fs-5"></i></a>
            <a href="#"><i class="bi bi-instagram fs-5"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h3 class="footer-heading mb-4">Khóa học</h3>
          <ul class="footer-links">
            <li><router-link to="/course-python">Python Programming</router-link></li>
            <li><router-link to="/course-java-spring">Java Spring Boot</router-link></li>
            <li><router-link to="/course-content">Tất cả khóa học</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h3 class="footer-heading mb-4">Liên kết</h3>
          <ul class="footer-links">
            <li><router-link to="/course-intro">Về chúng tôi</router-link></li>
            <li><router-link to="/instructors">Giảng viên</router-link></li>
            <!-- <li><router-link to="/tuition">Học phí & Ưu đãi</router-link></li> -->
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h3 class="footer-heading mb-4">Liên hệ</h3>
          <ul class="footer-contact">
            <li class="d-flex mb-3">
              <i class="bi bi-geo-alt me-3"></i>
              <p class="mb-0">Tầng 3,
                06 Trần Phú, Thạch Thang, Hải Châu, Đà Nẵng</p>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-envelope me-3"></i>
              <p class="mb-0">academy@techzen.vn</p>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-telephone me-3"></i>
              <p class="mb-0">
                093 550 56 40</p>
            </li>
          </ul>
          <div class="mt-4">
            <router-link to="/register" class="btn btn-primary">Đăng ký tư vấn</router-link>
          </div>
        </div>
      </div>
      <hr class="mt-5 border-secondary">
      <div class="row mt-4">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-md-0">© 2025 Techzen Academy. Tất cả quyền được bảo lưu.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <router-link to="/privacy" class="text-white me-3">Chính sách bảo mật</router-link>
          <router-link to="/terms" class="text-white">Điều khoản sử dụng</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
import logo from "@/assets/images/logo.png";
</script>

<style scoped>
.footer {
  background-color: #212529;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-heading {
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
}

.footer-heading:after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: var(--primary);
  margin-top: 15px;
}

.footer-links, .footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  padding-left: 15px;
}

.footer-links a:before {
  content: "›";
  position: absolute;
  left: 0;
  color: var(--primary);
}

.footer-links a:hover {
  color: var(--primary);
}

.social-links a {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-3px);
}

.footer-contact i {
  color: var(--primary);
}

.btn-primary {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  border: none;
  font-weight: 600;
}

@media (max-width: 992px) {
  .footer-heading:after {
    margin: 15px auto 0;
  }
}
</style> 