<template>
  <div class="course-detail">
    <!-- Header Section -->
    <section class="header-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1 class="course-title">Python Programming</h1>
            <p class="course-description">
              Khóa học Python toàn diện từ cơ bản đến nâng cao, giúp bạn xây dựng nền tảng vững chắc 
              và tạo ra các ứng dụng thực tế trong thời gian ngắn.
            </p>
            <div class="course-meta">
              <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>8 tuần (32 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-signal"></i>
                <span>Cơ bản - Trung cấp</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-users"></i>
                <span>Tối đa 20 học viên/lớp</span>
              </div>
            </div>
            <div class="course-actions">
              <router-link to="/register" class="btn btn-primary">Đăng ký ngay</router-link>
              <router-link to="/tuition" class="btn btn-outline">Xem học phí</router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course">
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
            Python là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay, được sử dụng rộng rãi trong 
            nhiều lĩnh vực từ phát triển web, khoa học dữ liệu, trí tuệ nhân tạo đến tự động hóa và IoT. 
            Khóa học Python của TechAcademy được thiết kế đặc biệt để giúp học viên nhanh chóng nắm vững 
            kiến thức cơ bản và ứng dụng vào các dự án thực tế.
          </p>
          <p>
            Trong khóa học này, bạn sẽ được hướng dẫn bởi các giảng viên có nhiều năm kinh nghiệm trong 
            lĩnh vực phát triển phần mềm Python. Từ các khái niệm cơ bản đến các kỹ thuật nâng cao, 
            bạn sẽ được thực hành qua nhiều bài tập và dự án thực tế, giúp củng cố kiến thức và phát triển 
            kỹ năng lập trình.
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
                  Module 1: Nhập môn Python
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Giới thiệu về Python và các ứng dụng</li>
                    <li><i class="fas fa-check-circle"></i> Cài đặt Python và các công cụ cần thiết</li>
                    <li><i class="fas fa-check-circle"></i> Biến, kiểu dữ liệu và toán tử</li>
                    <li><i class="fas fa-check-circle"></i> Cấu trúc điều khiển: if, while, for</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Module 2: Cấu trúc dữ liệu trong Python
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Lists, Tuples, Sets và Dictionaries</li>
                    <li><i class="fas fa-check-circle"></i> Xử lý chuỗi và các hàm có sẵn</li>
                    <li><i class="fas fa-check-circle"></i> List comprehension</li>
                    <li><i class="fas fa-check-circle"></i> Các thao tác với tập tin</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Module 3: Hàm và Lập trình hướng đối tượng
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Định nghĩa và sử dụng hàm</li>
                    <li><i class="fas fa-check-circle"></i> Tham số và đối số</li>
                    <li><i class="fas fa-check-circle"></i> Lambda functions</li>
                    <li><i class="fas fa-check-circle"></i> Lớp và đối tượng</li>
                    <li><i class="fas fa-check-circle"></i> Kế thừa và đa hình</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Module 4: Xử lý lỗi và Modules
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Xử lý ngoại lệ trong Python</li>
                    <li><i class="fas fa-check-circle"></i> Try, except, finally</li>
                    <li><i class="fas fa-check-circle"></i> Tạo và sử dụng modules</li>
                    <li><i class="fas fa-check-circle"></i> Các packages phổ biến</li>
                    <li><i class="fas fa-check-circle"></i> PIP và quản lý packages</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Module 5: Làm việc với dữ liệu
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> CSV, JSON và XML</li>
                    <li><i class="fas fa-check-circle"></i> Thao tác với cơ sở dữ liệu (SQLite)</li>
                    <li><i class="fas fa-check-circle"></i> Giới thiệu về Pandas và NumPy</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Module 6: Web Development với Python
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Giới thiệu về Flask</li>
                    <li><i class="fas fa-check-circle"></i> Routing và templates</li>
                    <li><i class="fas fa-check-circle"></i> Xử lý form và dữ liệu</li>
                    <li><i class="fas fa-check-circle"></i> RESTful APIs</li>
                    <li><i class="fas fa-check-circle"></i> Bài tập thực hành</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  Module 7-8: Dự án thực tế
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#curriculumAccordion">
                <div class="accordion-body">
                  <ul class="curriculum-list">
                    <li><i class="fas fa-check-circle"></i> Phát triển ứng dụng web hoàn chỉnh</li>
                    <li><i class="fas fa-check-circle"></i> Tích hợp cơ sở dữ liệu</li>
                    <li><i class="fas fa-check-circle"></i> Xây dựng REST API</li>
                    <li><i class="fas fa-check-circle"></i> Triển khai ứng dụng</li>
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
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Nguyễn Minh Đức">
              </div>
              <div class="instructor-details">
                <h3>Nguyễn Minh Đức</h3>
                <p class="instructor-title">Python Developer & Data Scientist</p>
                <p class="instructor-bio">
                  Thạc sĩ Khoa học máy tính tại Đại học Stanford với hơn 8 năm kinh nghiệm phát triển ứng dụng Python. 
                  Hiện đang là Lead Developer tại công ty ABC Technology.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="instructor-card">
              <div class="instructor-avatar">
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Trần Thu Hà">
              </div>
              <div class="instructor-details">
                <h3>Trần Thu Hà</h3>
                <p class="instructor-title">AI & Machine Learning Specialist</p>
                <p class="instructor-bio">
                  Tiến sĩ về Trí tuệ nhân tạo với hơn 5 năm kinh nghiệm trong lĩnh vực Machine Learning và Data Science sử dụng Python.
                  Đã xuất bản nhiều bài báo khoa học về AI.
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
                  <span class="amount">3.500.000</span>
                  <span class="currency">VNĐ</span>
                </div>
              </div>
              <div class="price-features">
                <ul>
                  <li><i class="fas fa-check"></i> Tham gia đầy đủ 32 buổi học</li>
                  <li><i class="fas fa-check"></i> Tài liệu học tập điện tử</li>
                  <li><i class="fas fa-check"></i> Hỗ trợ giải đáp thắc mắc qua forum</li>
                  <li><i class="fas fa-check"></i> Chứng chỉ hoàn thành khóa học</li>
                </ul>
              </div>
              <div class="price-cta">
                <router-link to="/register" class="btn btn-primary">Đăng ký ngay</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="price-card featured">
              <div class="price-tag">Phổ biến</div>
              <div class="price-header">
                <h3>Gói nâng cao</h3>
                <div class="price">
                  <span class="amount">5.200.000</span>
                  <span class="currency">VNĐ</span>
                </div>
              </div>
              <div class="price-features">
                <ul>
                  <li><i class="fas fa-check"></i> Tất cả các quyền lợi của gói cơ bản</li>
                  <li><i class="fas fa-check"></i> Tài liệu học tập bản cứng</li>
                  <li><i class="fas fa-check"></i> Hướng dẫn 1-1 với mentor (4 giờ)</li>
                  <li><i class="fas fa-check"></i> Quyền truy cập vào các khóa học bổ sung</li>
                  <li><i class="fas fa-check"></i> Tham gia các workshop đặc biệt</li>
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
                <p>Giảm 15% học phí khi đăng ký trước ngày 30/04/2023</p>
              </div>
            </div>
            <div class="promotion-item">
              <div class="promotion-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="promotion-content">
                <h4>Đăng ký nhóm</h4>
                <p>Giảm 10% cho mỗi học viên khi đăng ký theo nhóm từ 3 người trở lên</p>
              </div>
            </div>
            <div class="promotion-item">
              <div class="promotion-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="promotion-content">
                <h4>Học viên cũ</h4>
                <p>Giảm 20% học phí cho học viên đã từng tham gia khóa học tại TechAcademy</p>
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
          <h2>Sẵn sàng bắt đầu hành trình với Python?</h2>
          <p>Đăng ký ngay hôm nay để nhận được ưu đãi đặc biệt và bắt đầu xây dựng tương lai trong lĩnh vực công nghệ.</p>
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
  name: 'CoursePythonView'
}
</script>

<style scoped>
.course-detail {
  padding-bottom: 4rem;
}

.header-section {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
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
  background: #4a6bff;
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
  color: #4a6bff;
  margin-top: 3px;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
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
  color: #4a6bff;
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
  color: #4a6bff;
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
  color: #4a6bff;
  margin-top: 3px;
}

.price-cta {
  padding: 0 2rem 2rem;
  text-align: center;
}

.featured {
  border: 2px solid #4a6bff;
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
  background: rgba(74, 107, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #4a6bff;
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
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
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
  background: #4a6bff;
  color: white;
  border: 2px solid #4a6bff;
}

.btn-primary:hover {
  background: #3955c8;
  border-color: #3955c8;
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