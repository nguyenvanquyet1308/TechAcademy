<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3 class="footer-title">TechAcademy</h3>
          <p>Nơi học tập chất lượng, đào tạo các khóa học công nghệ hàng đầu với đội ngũ giảng viên giàu kinh nghiệm và chương trình học cập nhật.</p>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4H2v16h20V4z"></path><path d="M22 4l-10 8L2 4"></path></svg>
            </a>
          </div>
        </div>
        <div class="footer-section links">
          <h3 class="footer-title">Liên kết nhanh</h3>
          <ul>
            <li><router-link to="/">Trang chủ</router-link></li>
            <li><router-link to="/course-intro">Giới thiệu khóa học</router-link></li>
            <li><router-link to="/course-content">Nội dung khóa học</router-link></li>
            <li><router-link to="/instructors">Giảng viên</router-link></li>
            <li><router-link to="/faq">Câu hỏi thường gặp</router-link></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h3 class="footer-title">Liên hệ</h3>
          <div class="contact-info">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              123 Đường Công Nghệ, Quận 1, TP. HCM
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (84) 123 456 789
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@techacademy.edu.vn
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} TechAcademy. Tất cả các quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: #212529;
  color: #f8f9fa;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.footer-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: white;
}

.about p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #adb5bd;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: background 0.3s, transform 0.3s;
}

.social-icon:hover {
  background: #4a6bff;
  transform: translateY(-3px);
}

.links ul {
  list-style: none;
}

.links li {
  margin-bottom: 12px;
}

.links a {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s;
}

.links a:hover {
  color: white;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #adb5bd;
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #adb5bd;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style> 