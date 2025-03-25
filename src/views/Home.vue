<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Khám phá tiềm năng công nghệ cùng <span>TechAcademy</span></h1>
          <p class="hero-text">Nâng cao kỹ năng và mở ra cơ hội nghề nghiệp mới với các khóa học chất lượng từ những chuyên gia hàng đầu trong ngành.</p>
          <div class="hero-buttons">
            <router-link to="/course-intro" class="btn btn-primary">Tìm hiểu thêm</router-link>
            <router-link to="/register" class="btn btn-secondary">Đăng ký ngay</router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Tech Education">
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
      <div class="container">
        <h2 class="section-title">Điểm nổi bật của khóa học</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            </div>
            <h3>Giảng viên chuyên nghiệp</h3>
            <p>Đội ngũ giảng viên giàu kinh nghiệm, hiện đang là những chuyên gia trong ngành công nghệ.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <h3>Chương trình cập nhật</h3>
            <p>Nội dung khóa học luôn được cập nhật với công nghệ mới nhất trong thị trường.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Thực hành thực tế</h3>
            <p>Tập trung vào các dự án thực tế, giúp học viên nhanh chóng áp dụng kiến thức vào công việc.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3>Hỗ trợ 24/7</h3>
            <p>Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc trong suốt quá trình học tập.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <h3 class="stat-number">1000+</h3>
            <p class="stat-text">Học viên</p>
          </div>
          <div class="stat-item">
            <h3 class="stat-number">20+</h3>
            <p class="stat-text">Khóa học</p>
          </div>
          <div class="stat-item">
            <h3 class="stat-number">50+</h3>
            <p class="stat-text">Dự án thực tế</p>
          </div>
          <div class="stat-item">
            <h3 class="stat-number">95%</h3>
            <p class="stat-text">Tỷ lệ việc làm</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="section courses">
      <div class="container">
        <h2 class="section-title">Khóa học nổi bật</h2>
        <div class="courses-grid">
          <div class="course-card">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course">
            </div>
            <div class="course-content">
              <span class="course-tag">Bestseller</span>
              <h3>Python Programming</h3>
              <p>Khóa học toàn diện về Python từ cơ bản đến nâng cao. Phù hợp cho người mới bắt đầu.</p>
              <div class="course-details">
                <div class="detail">
                  <i class="fas fa-clock"></i>
                  <span>8 tuần</span>
                </div>
                <div class="detail">
                  <i class="fas fa-signal"></i>
                  <span>Cơ bản - Trung cấp</span>
                </div>
              </div>
              <router-link to="/course-python" class="course-btn">Xem chi tiết</router-link>
            </div>
          </div>
          
          <div class="course-card">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course">
            </div>
            <div class="course-content">
              <span class="course-tag">Hot</span>
              <h3>Java Spring Boot</h3>
              <p>Xây dựng ứng dụng web mạnh mẽ với Spring Boot. Phù hợp cho các lập trình viên Java.</p>
              <div class="course-details">
                <div class="detail">
                  <i class="fas fa-clock"></i>
                  <span>10 tuần</span>
                </div>
                <div class="detail">
                  <i class="fas fa-signal"></i>
                  <span>Trung cấp - Nâng cao</span>
                </div>
              </div>
              <router-link to="/course-java-spring" class="course-btn">Xem chi tiết</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials">
      <div class="container">
        <h2 class="section-title">Học viên nói gì về chúng tôi</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Khóa học đã giúp tôi từ một người không biết gì về lập trình trở thành một developer chuyên nghiệp. Các kiến thức được truyền đạt dễ hiểu và thực tế."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nguyễn Văn A">
              <div class="author-info">
                <h4>Nguyễn Văn A</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Giảng viên rất tận tâm, luôn sẵn sàng giải đáp mọi thắc mắc. Tôi đặc biệt ấn tượng với cách tiếp cận thực tế trong các bài học."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Trần Thị B">
              <div class="author-info">
                <h4>Trần Thị B</h4>
                <p>UX/UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Sẵn sàng bắt đầu hành trình học tập của bạn?</h2>
          <p>Đăng ký ngay hôm nay để nhận được ưu đãi đặc biệt và sự hỗ trợ từ đội ngũ chuyên gia của chúng tôi.</p>
          <router-link to="/register" class="btn">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero {
  padding: 80px 0;
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  color: white;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-title span {
  color: #ffcc00;
}

.hero-text {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.hero-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: rgba(74, 107, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 20px;
  color: #4a6bff;
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #212529;
}

.feature-card p {
  color: #6c757d;
}

.stats {
  background: #212529;
  color: white;
  padding: 60px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #4a6bff;
}

.stat-text {
  font-size: 1.2rem;
  opacity: 0.8;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.testimonial-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-content {
  padding: 30px;
  font-style: italic;
  color: #495057;
}

.testimonial-author {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.author-info h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #212529;
}

.author-info p {
  color: #6c757d;
  font-size: 0.9rem;
}

.cta {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta .btn {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  padding: 12px 30px;
}

.cta .btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

.courses {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.course-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.course-card:hover {
  transform: translateY(-10px);
}

.course-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.course-content {
  padding: 25px;
}

.course-tag {
  display: inline-block;
  background: #4a6bff;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}

.course-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #212529;
}

.course-card p {
  color: #6c757d;
  margin-bottom: 20px;
}

.course-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #6c757d;
}

.detail {
  display: flex;
  align-items: center;
  gap: 5px;
}

.course-btn {
  display: inline-block;
  background: #212529;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
}

.course-btn:hover {
  background: #4a6bff;
}

@media (max-width: 992px) {
  .hero .container {
    grid-template-columns: 1fr;
  }

  .hero-image {
    order: -1;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}
</style> 