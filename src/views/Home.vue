<template>
  <div class="home">
    <div class="hero-section position-relative overflow-hidden">
      <div class="video-background">
        <video autoplay muted loop playsinline>
          <source src="@/assets/video/vd1.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>
      <div class="container py-5 position-relative">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <div class="hero-content">
              <h1 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
                class="display-4 fw-bold mb-4"
              >
                Bắt đầu hành trình công nghệ của bạn tại TechAcademy
              </h1>
              <p 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
                class="lead mb-5"
              >
                Khóa học chất lượng cao, giảng viên chuyên nghiệp và lộ trình học tập cá nhân hóa giúp bạn nhanh chóng phát triển kỹ năng lập trình.
              </p>
              <div class="hero-btn" 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
              >
                <button class="btn btn-primary btn-lg me-3">Khám phá khóa học</button>
                <button class="btn btn-outline-light btn-lg">Tư vấn miễn phí</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <!-- About Company Section -->
    <section class="section about-company py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="section-title text-start mb-4">Về Techzen Academy</h2>
            <div class="about-content">
              <p class="mb-4">Tại Techzen Academy, chúng tôi mang đến chương trình đào tạo lập trình toàn diện, từ nền tảng cơ bản đến các công nghệ hiện đại. Đội ngũ giảng viên giàu kinh nghiệm của chúng tôi sẽ hướng dẫn bạn một cách tỉ mỉ và chi tiết, giúp bạn nắm vững kiến thức và phát triển kỹ năng lập trình chuyên nghiệp.</p>
              <p>Chương trình học tập tại Techzen Academy không chỉ tập trung vào lý thuyết, mà còn chú trọng vào tình huống thực tế. Với sự chuẩn bị kỹ lưỡng từ Techzen Academy, bạn sẽ tự tin bước vào thế giới công nghệ và sẵn sàng chinh phục những cơ hội nghề nghiệp đầy triển vọng.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Techzen Academy Team" class="img-fluid rounded shadow">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructors Section -->
    <section class="section instructors py-5">
      <div class="container">
        <h2 class="section-title mb-5">Đội ngũ giảng viên xuất sắc</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="instructor-card text-center h-100">
              <div class="instructor-image mb-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nguyễn Văn Minh" class="img-fluid rounded-circle">
              </div>
              <h3 class="instructor-name">Nguyễn Văn Minh</h3>
              <p class="instructor-title text-primary">Senior Developer</p>
              <p class="instructor-desc">10+ năm kinh nghiệm phát triển ứng dụng Enterprise, chuyên gia Java và Spring Boot</p>
              <div class="instructor-social">
                <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="instructor-card text-center h-100">
              <div class="instructor-image mb-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Trần Thị Hương" class="img-fluid rounded-circle">
              </div>
              <h3 class="instructor-name">Trần Thị Hương</h3>
              <p class="instructor-title text-primary">Frontend Expert</p>
              <p class="instructor-desc">Chuyên gia về React, Vue.js và các công nghệ frontend hiện đại với 8 năm kinh nghiệm</p>
              <div class="instructor-social">
                <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="instructor-card text-center h-100">
              <div class="instructor-image mb-3">
                <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Lê Quang Đạt" class="img-fluid rounded-circle">
              </div>
              <h3 class="instructor-name">Lê Quang Đạt</h3>
              <p class="instructor-title text-primary">Data Scientist</p>
              <p class="instructor-desc">Tiến sĩ về Khoa học dữ liệu, chuyên gia về Python, Machine Learning và AI</p>
              <div class="instructor-social">
                <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="instructor-card text-center h-100">
              <div class="instructor-image mb-3">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Phạm Minh Tâm" class="img-fluid rounded-circle">
              </div>
              <h3 class="instructor-name">Phạm Minh Tâm</h3>
              <p class="instructor-title text-primary">DevOps Engineer</p>
              <p class="instructor-desc">Chuyên gia về Cloud Computing, Docker, Kubernetes và CI/CD với 7 năm kinh nghiệm</p>
              <div class="instructor-social">
                <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/instructors" class="btn btn-outline-primary">Xem tất cả giảng viên</router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <div class="stats-section py-5 bg-primary text-white">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 col-6 mb-4 mb-md-0">
            <div class="stats-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              <div class="count h1">
                <AnimatedCount :value="15" :is-in-view="isStatsVisible" />
              </div>
              <div class="stats-title">Khóa học</div>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4 mb-md-0">
            <div class="stats-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            >
              <div class="count h1">
                <AnimatedCount :value="2000" :is-in-view="isStatsVisible" />
              </div>
              <div class="stats-title">Học viên</div>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="stats-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
            >
              <div class="count h1">
                <AnimatedCount :value="25" :is-in-view="isStatsVisible" />
              </div>
              <div class="stats-title">Giảng viên</div>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="stats-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
            >
              <div class="count h1">
                <AnimatedCount :value="95" :is-in-view="isStatsVisible" suffix="%" />
              </div>
              <div class="stats-title">Tỷ lệ hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popular Courses Section -->
    <section class="section courses py-5">
      <div class="container">
        <h2 class="section-title mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Khóa học nổi bật
        </h2>
        <div class="row">
          <div class="col-md-6 mb-4"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          >
            <div class="course-card h-100 shadow-sm rounded overflow-hidden">
              <div class="course-image position-relative">
                <span class="course-tag position-absolute top-0 end-0 bg-warning text-dark m-2 px-2 py-1 rounded-pill fw-bold">Bestseller</span>
                <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
              </div>
              <div class="course-content p-4">
                <h3 class="mb-3">Python Programming</h3>
                <p class="text-muted mb-3">Khóa học toàn diện về Python từ cơ bản đến nâng cao. Phù hợp cho người mới bắt đầu.</p>
                <div class="course-details d-flex justify-content-between mb-3">
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-clock me-2"></i>
                    <span>8 tuần</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-bar-chart me-2"></i>
                    <span>Cơ bản - Trung cấp</span>
                  </div>
                </div>
                <div class="course-price mb-3">
                  <span class="fs-5 fw-bold text-primary">3.500.000 VNĐ</span>
                  <span class="text-decoration-line-through text-muted ms-2">4.200.000 VNĐ</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="course-rating">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                    <span class="ms-1">(4.5)</span>
                  </div>
                  <router-link to="/course-python" class="btn btn-primary">Xem chi tiết</router-link>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="course-card h-100 shadow-sm rounded overflow-hidden">
              <div class="course-image position-relative">
                <span class="course-tag position-absolute top-0 end-0 bg-danger text-white m-2 px-2 py-1 rounded-pill fw-bold">Hot</span>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
              </div>
              <div class="course-content p-4">
                <h3 class="mb-3">Java Spring Boot</h3>
                <p class="text-muted mb-3">Xây dựng ứng dụng web mạnh mẽ với Spring Boot. Phù hợp cho các lập trình viên Java.</p>
                <div class="course-details d-flex justify-content-between mb-3">
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-clock me-2"></i>
                    <span>10 tuần</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-bar-chart me-2"></i>
                    <span>Trung cấp - Nâng cao</span>
                  </div>
                </div>
                <div class="course-price mb-3">
                  <span class="fs-5 fw-bold text-primary">6.500.000 VNĐ</span>
                  <span class="text-decoration-line-through text-muted ms-2">7.800.000 VNĐ</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="course-rating">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <span class="ms-1">(5.0)</span>
                  </div>
                  <router-link to="/course-java-spring" class="btn btn-primary">Xem chi tiết</router-link>
                </div>
              </div>
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
import ThreeJSHero from '@/components/ThreeJSHero.vue'
import AnimatedCount from '@/components/AnimatedCount.vue'

export default {
  name: 'HomeView',
  components: {
    ThreeJSHero,
    AnimatedCount
  },
  data() {
    return {
      isLoaded: false,
      isStatsVisible: false,
      animationObserver: null,
      featuredCourses: [
        // ... existing courses data
      ]
    }
  },
  mounted() {
    // Trigger initial animations after a short delay
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
    
    // Initialize intersection observer for scroll animations
    this.initScrollAnimations();
  },
  beforeUnmount() {
    // Clean up observer when component is unmounted
    if (this.animationObserver) {
      this.animationObserver.disconnect();
    }
  },
  methods: {
    initScrollAnimations() {
      // Configure the intersection observer
      const options = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when at least 10% of the element is visible
      };
      
      // Create observer
      this.animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Check if this is the stats section
          if (entry.target.classList.contains('stats-section') && entry.isIntersecting) {
            this.isStatsVisible = true;
          }
          
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            // Unobserve the element after animating it
            this.animationObserver.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe elements with animate-on-scroll class
      document.querySelectorAll('.animate-on-scroll, .stats-section').forEach(element => {
        this.animationObserver.observe(element);
      });
    }
  }
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

/* Update hero section styles */
.hero-section {
  background: none;
  color: white;
  padding: 12rem 0 8rem;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.hero-btn .btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.hero-btn .btn-primary {
  background: #4a6bff;
  border-color: #4a6bff;
}

.hero-btn .btn-primary:hover {
  background: #3557d4;
  border-color: #3557d4;
  transform: translateY(-2px);
}

.hero-btn .btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Update video overlay */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 8rem 0 4rem;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .hero-btn {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .hero-btn .btn {
    width: 100%;
    max-width: 300px;
  }
}

.about-company {
  background-color: #f8f9fa;
}

.about-content {
  font-size: 1.05rem;
  color: #495057;
  line-height: 1.7;
}

.about-image img {
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.instructor-card {
  background: white;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.instructor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.instructor-image img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 3px solid #4a6bff;
  padding: 3px;
}

.instructor-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #212529;
}

.instructor-title {
  font-weight: 600;
  margin-bottom: 1rem;
}

.instructor-desc {
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.instructor-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
  transition: background 0.3s, color 0.3s;
}

.social-icon:hover {
  background: #4a6bff;
  color: white;
}

/* Add video background styles */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  z-index: 0;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

/* Add animation for video fade in */
.video-background {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 