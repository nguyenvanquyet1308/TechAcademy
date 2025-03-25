<template>
  <div class="course-detail">
    <!-- Header Section -->
    <section class="header-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1 class="course-title">Java Spring Boot</h1>
            <p class="course-description">
              Khóa học Java Spring Boot chuyên sâu giúp bạn xây dựng các ứng dụng web mạnh mẽ, 
              microservices và các API hiệu suất cao với framework hiện đại nhất.
            </p>
            <div class="course-meta">
              <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>10 tuần (40 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-signal"></i>
                <span>Trung cấp - Nâng cao</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-users"></i>
                <span>Tối đa 15 học viên/lớp</span>
              </div>
            </div>
            <div class="course-actions">
              <router-link to="/register" class="btn btn-primary">Đăng ký ngay</router-link>
              <router-link to="/tuition" class="btn btn-outline">Xem học phí</router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section section">
      <div class="container">
        <h2 class="section-title">Tổng quan khóa học</h2>
        <div class="overview-content">
          <p>
            Spring Boot đã trở thành một trong những framework phổ biến nhất để phát triển ứng dụng 
            Java trong những năm gần đây. Framework này giúp đơn giản hóa quá trình phát triển ứng dụng Java, 
            đồng thời cung cấp các tính năng mạnh mẽ và linh hoạt.
          </p>
          <p>
            Khóa học Java Spring Boot của TechAcademy được thiết kế dành cho những lập trình viên đã có 
            kiến thức cơ bản về Java và mong muốn nâng cao kỹ năng phát triển ứng dụng web hiện đại. 
            Trong khóa học này, bạn sẽ học cách xây dựng các ứng dụng web full-stack với Spring Boot, 
            từ việc thiết kế RESTful APIs, tích hợp cơ sở dữ liệu, xử lý bảo mật đến triển khai microservices.
          </p>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section class="curriculum-section section">
      <div class="container">
        <h2 class="section-title">Nội dung khóa học</h2>
        <div class="curriculum-content">
          <div class="accordion" id="curriculumAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Module 1: Cơ bản về Spring Framework
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#curriculumAccordion">
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
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#curriculumAccordion">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  Module 9-10: Dự án thực tế
                </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Xây dựng microservices architecture</li>
                    <li><i class="fas fa-check-circle"></i> Thiết kế RESTful APIs và documentation</li>
                    <li><i class="fas fa-check-circle"></i> Tích hợp bảo mật với JWT</li>
                    <li><i class="fas fa-check-circle"></i> Front-end integration</li>
                    <li><i class="fas fa-check-circle"></i> Containerization và deployment</li>
                    <li><i class="fas fa-check-circle"></i> Thuyết trình và đánh giá dự án</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructors Section -->
    <section class="instructors-section section">
      <div class="container">
        <h2 class="section-title">Giảng viên</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="instructor-card">
              <div class="instructor-avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Lê Văn Tuấn">
              </div>
              <div class="instructor-details">
                <h3>Lê Văn Tuấn</h3>
                <p class="instructor-title">Senior Java Developer & Solution Architect</p>
                <p class="instructor-bio">
                  Hơn 10 năm kinh nghiệm phát triển ứng dụng Java Enterprise và Spring Boot. 
                  Hiện đang là Solution Architect tại một công ty phần mềm hàng đầu Việt Nam, 
                  chuyên phát triển các ứng dụng microservices quy mô lớn.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="instructor-card">
              <div class="instructor-avatar">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Hoàng Minh Châu">
              </div>
              <div class="instructor-details">
                <h3>Hoàng Minh Châu</h3>
                <p class="instructor-title">Java Technical Lead & DevOps Engineer</p>
                <p class="instructor-bio">
                  Chuyên gia về Java Spring Boot và microservices với hơn 8 năm kinh nghiệm. 
                  Đã triển khai nhiều dự án lớn cho các tập đoàn tài chính và thương mại điện tử. 
                  Có chứng chỉ AWS Certified Solutions Architect và Kubernetes Administrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tuition and Promotion Section -->
    <section class="tuition-section section">
      <div class="container">
        <h2 class="section-title">Học phí & Ưu đãi</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="price-card">
              <div class="price-header">
                <h3>Gói cơ bản</h3>
                <div class="price">
                  <span class="amount">6.500.000</span>
                  <span class="currency">VNĐ</span>
                </div>
              </div>
              <div class="price-features">
                <ul>
                  <li><i class="fas fa-check"></i> Tham gia đầy đủ 40 buổi học</li>
                  <li><i class="fas fa-check"></i> Tài liệu học tập điện tử</li>
                  <li><i class="fas fa-check"></i> Hỗ trợ giải đáp thắc mắc qua forum</li>
                  <li><i class="fas fa-check"></i> Chứng chỉ hoàn thành khóa học</li>
                  <li><i class="fas fa-check"></i> Code examples và repositories</li>
                </ul>
              </div>
              <div class="price-cta">
                <router-link to="/register" class="btn btn-primary">Đăng ký ngay</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="price-card featured">
              <div class="price-tag">Khuyên dùng</div>
              <div class="price-header">
                <h3>Gói chuyên nghiệp</h3>
                <div class="price">
                  <span class="amount">8.900.000</span>
                  <span class="currency">VNĐ</span>
                </div>
              </div>
              <div class="price-features">
                <ul>
                  <li><i class="fas fa-check"></i> Tất cả các quyền lợi của gói cơ bản</li>
                  <li><i class="fas fa-check"></i> Tài liệu học tập bản cứng</li>
                  <li><i class="fas fa-check"></i> Tư vấn 1-1 với giảng viên (8 giờ)</li>
                  <li><i class="fas fa-check"></i> Code review cho dự án cá nhân</li>
                  <li><i class="fas fa-check"></i> Hỗ trợ phỏng vấn việc làm sau khóa học</li>
                  <li><i class="fas fa-check"></i> Quyền truy cập vĩnh viễn vào các cập nhật khóa học</li>
                </ul>
              </div>
              <div class="price-cta">
                <router-link to="/register" class="btn btn-primary">Đăng ký ngay</router-link>
              </div>
            </div>
          </div>
        </div>
        
        <div class="promotions-container">
          <h3>Ưu đãi đặc biệt</h3>
          <div class="promotions">
            <div class="promotion-item">
              <div class="promotion-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="promotion-content">
                <h4>Đăng ký sớm</h4>
                <p>Giảm 15% học phí khi đăng ký trước ngày 15/05/2023</p>
              </div>
            </div>
            <div class="promotion-item">
              <div class="promotion-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="promotion-content">
                <h4>Đăng ký nhóm</h4>
                <p>Giảm 12% cho mỗi học viên khi đăng ký theo nhóm từ 3 người trở lên</p>
              </div>
            </div>
            <div class="promotion-item">
              <div class="promotion-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="promotion-content">
                <h4>Học viên cũ</h4>
                <p>Giảm 20% học phí cho học viên đã từng tham gia khóa học Java cơ bản</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Sẵn sàng trở thành Spring Boot Developer?</h2>
          <p>Đăng ký ngay hôm nay để nâng cao kỹ năng và mở ra cơ hội việc làm với mức lương hấp dẫn trong lĩnh vực phát triển Java Enterprise.</p>
          <div class="cta-buttons">
            <router-link to="/register" class="btn btn-primary btn-lg">Đăng ký ngay</router-link>
            <a href="#" class="btn btn-outline btn-lg">Liên hệ tư vấn</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CourseJavaSpringView'
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
</style> 