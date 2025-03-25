<template>
  <div class="course-java">
    <div class="header-section py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="course-title animate__animated animate__fadeInDown">Lập trình Java Spring Boot</h1>
            <p class="course-description animate__animated animate__fadeIn animate__delay-1s">
              Khóa học Java Spring Boot toàn diện giúp bạn làm chủ framework Spring Boot và xây dựng các ứng dụng web hiện đại, 
              RESTful API và hệ thống backend mạnh mẽ. Từ người mới bắt đầu đến Java developer muốn nâng cao.
            </p>
            <div class="course-meta animate__animated animate__fadeIn animate__delay-2s">
              <div class="meta-item">
                <i class="bi bi-clock me-2"></i>
                <span>12 tuần (36 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-bar-chart me-2"></i>
                <span>Trung cấp</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-people me-2"></i>
                <span>Học online hoặc offline</span>
              </div>
            </div>
            <div class="course-actions animate__animated animate__fadeIn animate__delay-3s">
              <button class="btn btn-primary btn-lg me-2">Đăng ký học</button>
              <button class="btn btn-outline-light btn-lg">Tải syllabus</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image animate__animated animate__fadeInRight">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <section class="section mb-5">
            <h2 class="section-title mb-4 animate__animated animate__fadeInUp">Tổng quan khóa học</h2>
            <div class="course-overview animate__animated animate__fadeIn animate__delay-1s">
              <p>Khóa học Java Spring Boot cung cấp kiến thức toàn diện về Spring framework, tập trung vào Spring Boot để xây dựng các ứng dụng Java hiện đại. Bạn sẽ học cách phát triển RESTful API, kết nối cơ sở dữ liệu, xử lý bảo mật và triển khai ứng dụng thực tế.</p>
              <p>Được thiết kế cho cả người mới bắt đầu và các developer muốn nâng cao kỹ năng, khóa học này kết hợp lý thuyết với các dự án thực tế, giúp bạn xây dựng portfolio ấn tượng và sẵn sàng cho các vị trí Java Developer.</p>
            </div>
          </section>

          <section class="section mb-5">
            <h2 class="section-title mb-4 animate__animated animate__fadeInUp">Bạn sẽ học được gì?</h2>
            <div class="row">
              <div v-for="(benefit, index) in benefits" :key="index" class="col-md-6 mb-4">
                <div class="benefit-item animate__animated animate__fadeInLeft" :style="{ animationDelay: index * 0.2 + 's' }">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="section mb-5">
            <h2 class="section-title mb-4 animate__animated animate__fadeInUp">Nội dung khóa học</h2>
            <div class="accordion" id="courseContent">
              <div v-for="(module, index) in modules" :key="index" class="accordion-item animate__animated animate__fadeInUp" :style="{ animationDelay: index * 0.2 + 's' }">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Module 1: Cơ bản về Spring Framework
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Giới thiệu về Spring Framework và lịch sử phát triển</li>
                      <li><i class="fas fa-check-circle"></i> Spring Core và Dependency Injection</li>
                      <li><i class="fas fa-check-circle"></i> Cấu hình Spring với Java Config và Annotations</li>
                      <li><i class="fas fa-check-circle"></i> Spring IoC Container và Bean Life Cycle</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Module 2: Spring Boot Fundamentals
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Giới thiệu về Spring Boot và lợi ích</li>
                      <li><i class="fas fa-check-circle"></i> Tạo dự án Spring Boot với Spring Initializr</li>
                      <li><i class="fas fa-check-circle"></i> Auto-configuration và Starters</li>
                      <li><i class="fas fa-check-circle"></i> Cấu hình ứng dụng và properties</li>
                      <li><i class="fas fa-check-circle"></i> Tích hợp với các công cụ build (Maven, Gradle)</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Module 3: Spring MVC và RESTful Web Services
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Spring MVC architecture</li>
                      <li><i class="fas fa-check-circle"></i> Controllers, RequestMapping và ModelAndView</li>
                      <li><i class="fas fa-check-circle"></i> Xây dựng RESTful APIs với Spring Boot</li>
                      <li><i class="fas fa-check-circle"></i> Content negotiation và HTTP status codes</li>
                      <li><i class="fas fa-check-circle"></i> Exception handling trong RESTful services</li>
                      <li><i class="fas fa-check-circle"></i> API documentation với Swagger/OpenAPI</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Module 4: Spring Data JPA và Database Access
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Giới thiệu về Spring Data JPA</li>
                      <li><i class="fas fa-check-circle"></i> Entity mapping và Repository pattern</li>
                      <li><i class="fas fa-check-circle"></i> CRUD operations với Spring Data repositories</li>
                      <li><i class="fas fa-check-circle"></i> Query methods và JPQL</li>
                      <li><i class="fas fa-check-circle"></i> Transactions và @Transactional</li>
                      <li><i class="fas fa-check-circle"></i> Tích hợp với các databases (MySQL, PostgreSQL, H2)</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Module 5: Spring Security
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Giới thiệu về Spring Security</li>
                      <li><i class="fas fa-check-circle"></i> Authentication và Authorization</li>
                      <li><i class="fas fa-check-circle"></i> Form-based authentication</li>
                      <li><i class="fas fa-check-circle"></i> JWT authentication cho RESTful services</li>
                      <li><i class="fas fa-check-circle"></i> Role-based access control</li>
                      <li><i class="fas fa-check-circle"></i> OAuth2 và Social login</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Module 6: Testing trong Spring Boot
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Unit testing với JUnit và Mockito</li>
                      <li><i class="fas fa-check-circle"></i> Integration testing trong Spring Boot</li>
                      <li><i class="fas fa-check-circle"></i> Testing web controllers và REST APIs</li>
                      <li><i class="fas fa-check-circle"></i> Testing database operations</li>
                      <li><i class="fas fa-check-circle"></i> Test coverage và best practices</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Module 7: Spring Boot Microservices
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Kiến trúc Microservices và lợi ích</li>
                      <li><i class="fas fa-check-circle"></i> Spring Cloud ecosystem</li>
                      <li><i class="fas fa-check-circle"></i> Service Discovery với Eureka</li>
                      <li><i class="fas fa-check-circle"></i> API Gateway với Spring Cloud Gateway</li>
                      <li><i class="fas fa-check-circle"></i> Circuit Breaker pattern với Resilience4j</li>
                      <li><i class="fas fa-check-circle"></i> Distributed tracing</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Module 8: Containerization và Deployment
                  </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <ul class="curriculum-list">
                      <li><i class="fas fa-check-circle"></i> Containerization với Docker</li>
                      <li><i class="fas fa-check-circle"></i> Đóng gói ứng dụng Spring Boot với Docker</li>
                      <li><i class="fas fa-check-circle"></i> Orchestration với Kubernetes cơ bản</li>
                      <li><i class="fas fa-check-circle"></i> Deploying Spring Boot trên cloud platforms</li>
                      <li><i class="fas fa-check-circle"></i> Monitoring và logging</li>
                      <li><i class="fas fa-check-circle"></i> CI/CD pipeline</li>
                      <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="col-lg-4">
          <div class="course-sidebar">
            <div class="price-section mb-4 animate__animated animate__fadeInRight">
              <div class="price-card">
                <div class="price-header">
                  <h3>Học phí</h3>
                  <div class="price">
                    <span class="amount">6.500.000</span>
                    <span class="currency">VNĐ</span>
                  </div>
                </div>
                <div class="price-features">
                  <ul>
                    <li><i class="fas fa-check"></i> Tham gia đầy đủ 36 buổi học</li>
                    <li><i class="fas fa-check"></i> Tài liệu học tập</li>
                    <li><i class="fas fa-check"></i> Hỗ trợ 24/7</li>
                    <li><i class="fas fa-check"></i> Chứng chỉ hoàn thành</li>
                  </ul>
                </div>
                <div class="price-cta">
                  <button class="btn btn-primary w-100">Đăng ký ngay</button>
                </div>
              </div>
            </div>

            <div class="instructor-section mb-4 animate__animated animate__fadeInRight animate__delay-1s">
              <h3 class="sidebar-title">Giảng viên</h3>
              <div class="instructor-card">
                <div class="instructor-avatar">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Lê Văn Tuấn">
                </div>
                <div class="instructor-details">
                  <h4>Lê Văn Tuấn</h4>
                  <p class="instructor-title">Senior Java Developer</p>
                  <p class="instructor-bio">10+ năm kinh nghiệm phát triển ứng dụng Java Enterprise</p>
                </div>
              </div>
            </div>

            <div class="promotions-section animate__animated animate__fadeInRight animate__delay-2s">
              <h3 class="sidebar-title">Ưu đãi</h3>
              <div class="promotion-item">
                <div class="promotion-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="promotion-content">
                  <h4>Đăng ký sớm</h4>
                  <p>Giảm 15% học phí khi đăng ký trước 15/05/2023</p>
                </div>
              </div>
              <div class="promotion-item">
                <div class="promotion-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="promotion-content">
                  <h4>Đăng ký nhóm</h4>
                  <p>Giảm 12% cho mỗi học viên khi đăng ký theo nhóm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section bg-primary text-white">
      <div class="container">
        <div class="cta-content text-center animate__animated animate__fadeInUp">
          <h2 class="mb-4">Sẵn sàng trở thành Spring Boot Developer?</h2>
          <p class="mb-4">Đăng ký ngay hôm nay để nâng cao kỹ năng và mở ra cơ hội việc làm với mức lương hấp dẫn!</p>
          <button class="btn btn-light btn-lg">Đăng ký ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseJavaSpringView',
  data() {
    return {
      benefits: [
        'Nắm vững kiến trúc và các thành phần của Spring Framework',
        'Xây dựng RESTful APIs với Spring Boot',
        'Làm việc với cơ sở dữ liệu thông qua Spring Data JPA',
        'Xây dựng ứng dụng web với Spring MVC và Thymeleaf',
        'Xác thực và bảo mật với Spring Security',
        'Phát triển và triển khai ứng dụng Spring Boot'
      ],
      modules: [
        {
          title: 'Module 1: Cơ bản về Spring Framework',
          content: [
            'Giới thiệu về Spring Framework và lịch sử phát triển',
            'Spring Core và Dependency Injection',
            'Cấu hình Spring với Java Config và Annotations',
            'Spring IoC Container và Bean Life Cycle',
            'Bài tập thực hành'
          ]
        },
        // ... Add other modules here
      ]
    }
  },
  mounted() {
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });
  }
}
</script>

<style scoped>
.course-detail {
  padding-bottom: 4rem;
}

.header-section {
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  color: white;
  padding: 4rem 0;
}

.course-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.course-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.course-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.course-actions {
  display: flex;
  gap: 1rem;
}

.course-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #2c3e50;
  position: relative;
}

.section-title:after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: #2f80ed;
  margin: 15px auto 0;
}

.overview-content {
  color: #495057;
  line-height: 1.7;
}

.overview-content p {
  margin-bottom: 1.5rem;
}

.curriculum-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.curriculum-list li {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.curriculum-list li i {
  color: #2f80ed;
  margin-top: 3px;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(47, 128, 237, 0.1);
  color: #2f80ed;
}

.instructor-card {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.instructor-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}

.instructor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instructor-details h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.instructor-title {
  color: #2f80ed;
  font-weight: 600;
  margin-bottom: 1rem;
}

.instructor-bio {
  color: #6c757d;
  line-height: 1.6;
}

.price-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  height: 100%;
}

.price-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4757;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.price-header {
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
}

.price-header h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.25rem;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f80ed;
}

.currency {
  font-size: 1rem;
  color: #6c757d;
}

.price-features {
  padding: 2rem;
}

.price-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.price-features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.price-features li i {
  color: #2f80ed;
  margin-top: 3px;
}

.price-cta {
  padding: 0 2rem 2rem;
  text-align: center;
}

.featured {
  border: 2px solid #2f80ed;
  transform: scale(1.05);
}

.promotions-container {
  margin-top: 3rem;
}

.promotions-container h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.promotions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.promotion-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
}

.promotion-icon {
  width: 50px;
  height: 50px;
  background: rgba(47, 128, 237, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #2f80ed;
  font-size: 1.25rem;
}

.promotion-content h4 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.promotion-content p {
  color: #6c757d;
  margin: 0;
}

.cta-section {
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: 600;
}

.btn-primary {
  background: #2f80ed;
  color: white;
  border: 2px solid #2f80ed;
}

.btn-primary:hover {
  background: #1a68d4;
  border-color: #1a68d4;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .header-section {
    padding: 3rem 0;
  }
  
  .course-title {
    font-size: 2rem;
  }
  
  .course-image {
    margin-top: 2rem;
  }
  
  .instructor-card {
    flex-direction: column;
  }
  
  .instructor-avatar {
    margin: 0 auto 1.5rem;
  }
  
  .featured {
    transform: none;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Add animation classes */
.animate__animated {
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

.animate__fadeIn {
  animation-name: fadeIn;
}

.animate__fadeInDown {
  animation-name: fadeInDown;
}

.animate__fadeInUp {
  animation-name: fadeInUp;
}

.animate__fadeInLeft {
  animation-name: fadeInLeft;
}

.animate__fadeInRight {
  animation-name: fadeInRight;
}

.animate__delay-1s {
  animation-delay: 1s;
}

.animate__delay-2s {
  animation-delay: 2s;
}

.animate__delay-3s {
  animation-delay: 3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Add hover effects */
.benefit-item {
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateX(10px);
}

.price-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.instructor-card {
  transition: transform 0.3s ease;
}

.instructor-card:hover {
  transform: scale(1.02);
}

.promotion-item {
  transition: transform 0.3s ease;
}

.promotion-item:hover {
  transform: translateX(5px);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Add accordion animation */
.accordion-button:not(.collapsed) {
  transition: all 0.3s ease;
}

.accordion-body {
  transition: all 0.3s ease;
}

/* Add image hover effect */
.course-image img {
  transition: transform 0.3s ease;
}

.course-image img:hover {
  transform: scale(1.02);
}
</style> 