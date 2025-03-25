<template>
  <div class="course-content">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Nội dung khóa học</h1>
        <p class="page-description">Khám phá chi tiết các chương trình và bài giảng trong khóa học của chúng tôi</p>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section class="section curriculum">
      <div class="container">
        <div class="curriculum-intro">
          <h2 class="section-title">Chương trình học chi tiết</h2>
          <p class="curriculum-desc">Khóa học được chia thành các phần với nội dung từ cơ bản đến nâng cao, giúp học viên từng bước xây dựng kiến thức và kỹ năng.</p>
        </div>

        <div class="curriculum-modules">
          <div class="module">
            <div class="module-header" @click="toggleModule(1)">
              <h3 class="module-title">Module 1: Nền tảng cơ bản</h3>
              <div class="module-toggle" :class="{ 'active': activeModule === 1 }">
                <span class="toggle-icon"></span>
              </div>
            </div>
            <div class="module-content" :class="{ 'active': activeModule === 1 }">
              <ul class="lessons-list">
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 1: Giới thiệu và tổng quan</span>
                  </div>
                  <span class="lesson-duration">45 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 2: Cài đặt môi trường làm việc</span>
                  </div>
                  <span class="lesson-duration">60 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 3: Các khái niệm cơ bản</span>
                  </div>
                  <span class="lesson-duration">90 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon project">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    <span class="lesson-title">Dự án thực hành 1: Ứng dụng đầu tiên</span>
                  </div>
                  <span class="lesson-duration">120 phút</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="module">
            <div class="module-header" @click="toggleModule(2)">
              <h3 class="module-title">Module 2: Các công nghệ và công cụ</h3>
              <div class="module-toggle" :class="{ 'active': activeModule === 2 }">
                <span class="toggle-icon"></span>
              </div>
            </div>
            <div class="module-content" :class="{ 'active': activeModule === 2 }">
              <ul class="lessons-list">
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 1: Giới thiệu về các frameworks</span>
                  </div>
                  <span class="lesson-duration">90 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 2: Công cụ và IDE</span>
                  </div>
                  <span class="lesson-duration">60 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 3: Version control với Git</span>
                  </div>
                  <span class="lesson-duration">120 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon project">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    <span class="lesson-title">Dự án thực hành 2: Quản lý dự án</span>
                  </div>
                  <span class="lesson-duration">180 phút</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="module">
            <div class="module-header" @click="toggleModule(3)">
              <h3 class="module-title">Module 3: Xây dựng ứng dụng nâng cao</h3>
              <div class="module-toggle" :class="{ 'active': activeModule === 3 }">
                <span class="toggle-icon"></span>
              </div>
            </div>
            <div class="module-content" :class="{ 'active': activeModule === 3 }">
              <ul class="lessons-list">
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 1: Thiết kế kiến trúc ứng dụng</span>
                  </div>
                  <span class="lesson-duration">120 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 2: API và tích hợp backend</span>
                  </div>
                  <span class="lesson-duration">150 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 3: Quản lý state và performance</span>
                  </div>
                  <span class="lesson-duration">120 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon project">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    <span class="lesson-title">Dự án thực hành 3: Ứng dụng đầy đủ tính năng</span>
                  </div>
                  <span class="lesson-duration">240 phút</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="module">
            <div class="module-header" @click="toggleModule(4)">
              <h3 class="module-title">Module 4: Triển khai và bảo mật</h3>
              <div class="module-toggle" :class="{ 'active': activeModule === 4 }">
                <span class="toggle-icon"></span>
              </div>
            </div>
            <div class="module-content" :class="{ 'active': activeModule === 4 }">
              <ul class="lessons-list">
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 1: CI/CD và quy trình triển khai</span>
                  </div>
                  <span class="lesson-duration">90 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 2: Bảo mật ứng dụng</span>
                  </div>
                  <span class="lesson-duration">120 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                    <span class="lesson-title">Bài 3: Testing và monitoring</span>
                  </div>
                  <span class="lesson-duration">150 phút</span>
                </li>
                <li class="lesson">
                  <div class="lesson-info">
                    <span class="lesson-icon project">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    <span class="lesson-title">Dự án cuối khóa: Xây dựng và triển khai ứng dụng hoàn chỉnh</span>
                  </div>
                  <span class="lesson-duration">300 phút</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="section materials">
      <div class="container">
        <h2 class="section-title">Tài liệu học tập</h2>
        <div class="materials-grid">
          <div class="material-card">
            <div class="material-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3>Sách và tài liệu điện tử</h3>
            <p>Học viên được cung cấp sách và tài liệu tham khảo đã được biên soạn kỹ lưỡng, cập nhật với xu hướng mới nhất.</p>
          </div>
          <div class="material-card">
            <div class="material-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            </div>
            <h3>Video bài giảng</h3>
            <p>Bài giảng được quay lại thành video, giúp học viên có thể xem lại sau khi buổi học kết thúc.</p>
          </div>
          <div class="material-card">
            <div class="material-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            </div>
            <h3>Workshop và lab thực hành</h3>
            <p>Nội dung workshop được thiết kế theo hình thức thực hành, giúp học viên áp dụng kiến thức vào thực tế.</p>
          </div>
          <div class="material-card">
            <div class="material-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Cộng đồng học tập</h3>
            <p>Truy cập vào cộng đồng học tập trực tuyến, nơi học viên có thể trao đổi, hỏi đáp và học hỏi lẫn nhau.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects">
      <div class="container">
        <h2 class="section-title">Các dự án thực tế</h2>
        <p class="section-desc">Trong khóa học, học viên sẽ được tham gia vào các dự án thực tế để áp dụng kiến thức đã học. Dưới đây là một số dự án tiêu biểu:</p>
        
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="E-commerce Website">
            </div>
            <div class="project-content">
              <h3>Xây dựng website thương mại điện tử</h3>
              <p>Phát triển website thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán và quản lý sản phẩm.</p>
              <div class="project-tech">
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>Vue.js</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile App">
            </div>
            <div class="project-content">
              <h3>Ứng dụng quản lý cá nhân</h3>
              <p>Xây dựng ứng dụng quản lý công việc và thời gian với các tính năng như lịch, công việc và thống kê.</p>
              <div class="project-tech">
                <span>React Native</span>
                <span>Firebase</span>
                <span>Redux</span>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Data Dashboard">
            </div>
            <div class="project-content">
              <h3>Bảng điều khiển dữ liệu</h3>
              <p>Phát triển bảng điều khiển để hiển thị và phân tích dữ liệu với các biểu đồ và bảng tương tác.</p>
              <div class="project-tech">
                <span>Vue.js</span>
                <span>D3.js</span>
                <span>RESTful API</span>
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
          <h2>Sẵn sàng để bắt đầu hành trình học tập?</h2>
          <p>Đăng ký ngay để tham gia khóa học và nâng cao kỹ năng của bạn!</p>
          <router-link to="/register" class="btn">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CourseContentView',
  data() {
    return {
      activeModule: 1
    }
  },
  methods: {
    toggleModule(moduleId) {
      this.activeModule = this.activeModule === moduleId ? null : moduleId;
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-title {
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.page-description {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

.curriculum-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
}

.curriculum-desc {
  color: #6c757d;
  font-size: 1.1rem;
}

.curriculum-modules {
  margin-top: 40px;
}

.module {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.module-header {
  padding: 20px 30px;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
}

.module-header:hover {
  background: #e9ecef;
}

.module-title {
  font-size: 1.3rem;
  margin: 0;
  color: #212529;
}

.module-toggle {
  width: 24px;
  height: 24px;
  position: relative;
}

.toggle-icon {
  width: 100%;
  height: 2px;
  background: #6c757d;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.toggle-icon::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background: #6c757d;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s;
}

.module-toggle.active .toggle-icon::after {
  transform: translateX(-50%) rotate(90deg);
}

.module-content {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s, padding 0.5s;
}

.module-content.active {
  max-height: 600px;
  padding: 20px 30px;
}

.lessons-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lesson {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
}

.lesson:last-child {
  border-bottom: none;
}

.lesson-info {
  display: flex;
  align-items: center;
}

.lesson-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  margin-right: 15px;
  color: #4a6bff;
}

.lesson-icon.project {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
}

.lesson-title {
  font-size: 1.1rem;
  color: #495057;
}

.lesson-duration {
  font-size: 0.9rem;
  color: #6c757d;
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 4px;
}

.materials {
  background: #f8f9fa;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.material-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
}

.material-card:hover {
  transform: translateY(-10px);
}

.material-icon {
  width: 80px;
  height: 80px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #4a6bff;
}

.material-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #212529;
}

.material-card p {
  color: #6c757d;
}

.section-desc {
  text-align: center;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.project-content {
  padding: 20px;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #212529;
}

.project-content p {
  color: #6c757d;
  margin-bottom: 15px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-tech span {
  background: #f8f9fa;
  color: #4a6bff;
  padding: 5px 10px;
  border-radius: 4px;
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

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style> 