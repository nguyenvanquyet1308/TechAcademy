<template>
  <div class="course-content font-lato">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container-fluid px-0">
        <h1 class="page-title font-lato-bold" v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          Nội dung khóa học
        </h1>
        <p class="page-description font-lato" v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }">
          Khám phá chi tiết các chương trình và bài giảng trong khóa học của chúng tôi
        </p>
      </div>
    </section>

    <!-- Available Courses Section -->
    <section class="section available-courses">
      <div class="container">
        <div class="courses-intro">
          <h2 class="section-title font-lato-bold" v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
            Các khóa học hiện có
          </h2>
          <p class="courses-desc font-lato" v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { delay: 200, duration: 800 } }">
            Chúng tôi cung cấp các khóa học chất lượng cao với nội dung cập nhật, phương pháp giảng dạy hiện đại và đội ngũ giảng viên giàu kinh nghiệm.
          </p>
        </div>

        <div class="courses-grid">
          <!-- Python AI Course -->
          <div class="course-card" v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python AI Course">
              <div class="course-overlay">
                <div class="overlay-content">
                  <router-link to="/course-python" class="btn-view-overlay">Xem chi tiết</router-link>
                </div>
              </div>
            </div>
            <div class="course-content" style="padding: 20px;">
              <h3 class="course-name font-lato-bold fs-2 text-gradient">Lập trình Python AI</h3>
              <div class="course-details">
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-clock"></i></span>
                  <span class="detail-text">5 tháng (64 buổi)</span>
                </div>
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-geo-alt"></i></span>
                  <span class="detail-text">Offline tại văn phòng Techzen</span>
                </div>
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-people"></i></span>
                  <span class="detail-text">Thứ 3, 5, 7 (18:30 - 20:30)</span>
                </div>
              </div>
              <p class="course-brief font-lato">Khóa học Python AI toàn diện giúp bạn làm chủ ngôn ngữ lập trình phổ biến nhất hiện nay, từ nền tảng cơ bản đến ứng dụng AI. Tập trung vào thực hành và dự án thực tế, phù hợp cho cả người mới bắt đầu và lập trình viên muốn nâng cao kỹ năng.</p>
              <div class="course-highlights">
                <span class="font-lato tag-animation">Python Core & OOP</span>
                <span class="font-lato tag-animation">MySQL</span>
                <span class="font-lato tag-animation">FastAPI</span>
                <span class="font-lato tag-animation">AI Integration</span>
              </div>
              <div class="course-footer">
                <div class="course-price font-lato-bold fs-3 animated-text">7.999.000đ</div>
                <router-link to="/course-python" class="btn btn-outline-primary font-lato animated-btn">Xem chi tiết</router-link>
              </div>
            </div>
          </div>

          <!-- Java Backend Course -->
          <div class="course-card" v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course">
              <div class="course-overlay">
                <div class="overlay-content">
                  <router-link to="/course-java-spring" class="btn-view-overlay">Xem chi tiết</router-link>
                </div>
              </div>
            </div>
            <div class="course-content" style="padding: 20px;">
              <h3 class="course-name font-lato-bold fs-2 text-gradient">Lập trình Java Back-end</h3>
              <div class="course-details">
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-clock"></i></span>
                  <span class="detail-text">3 tháng (36 buổi)</span>
                </div>
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-geo-alt"></i></span>
                  <span class="detail-text">Học offline tại văn phòng Techzen</span>
                </div>
                <div class="detail-item font-lato">
                  <span class="detail-icon pulse-animation"><i class="bi bi-people"></i></span>
                  <span class="detail-text">Thứ 2, 4, 6 (18:00 - 21:00)</span>
                </div>
              </div>
              <p class="course-brief font-lato">Khóa học Java Back-end toàn diện giúp bạn làm chủ ngôn ngữ lập trình Java và xây dựng các ứng dụng web hiện đại, RESTful API và hệ thống backend mạnh mẽ. Phù hợp cho sinh viên ngành CNTT và những người muốn nâng cao kỹ năng lập trình.</p>
              <div class="course-highlights">
                <span class="font-lato tag-animation">Java Core & OOP</span>
                <span class="font-lato tag-animation">MySQL</span>
                <span class="font-lato tag-animation">Spring Boot</span>
                <span class="font-lato tag-animation">RESTful API</span>
              </div>
              <div class="course-footer">
                <div class="course-price font-lato-bold fs-3 animated-text">4.999.000đ</div>
                <router-link to="/course-java-spring" class="btn btn-outline-primary font-lato animated-btn">Xem chi tiết</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <!-- <section class="section curriculum">
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
    </section> -->

    <!-- Materials Section -->
    <section class="section materials">
      <div class="container">
        <h2 class="section-title font-lato-bold" v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          Tài liệu học tập
        </h2>
        <div class="materials-grid">
          <div class="material-card" v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }">
            <div class="material-icon">
              <i class="bi bi-book fs-2"></i>
            </div>
            <h3 class="font-lato-bold">Sách và tài liệu điện tử</h3>
            <p class="font-lato">Học viên được cung cấp sách và tài liệu tham khảo đã được biên soạn kỹ lưỡng, cập nhật với xu hướng mới nhất.</p>
          </div>
          <!-- <div class="material-card" v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }">
            <div class="material-icon">
              <i class="bi bi-camera-video fs-2"></i>
            </div>
            <h3 class="font-lato-bold">Video bài giảng</h3>
            <p class="font-lato">Bài giảng được quay lại thành video, giúp học viên có thể xem lại sau khi buổi học kết thúc.</p>
          </div> -->
          <div class="material-card" v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }">
            <div class="material-icon">
              <i class="bi bi-laptop fs-2"></i>
            </div>
            <h3 class="font-lato-bold">Workshop và lab thực hành</h3>
            <p class="font-lato">Nội dung workshop được thiết kế theo hình thức thực hành, giúp học viên áp dụng kiến thức vào thực tế.</p>
          </div>
          <div class="material-card" v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }">
            <div class="material-icon">
              <i class="bi bi-people fs-2"></i>
            </div>
            <h3 class="font-lato-bold">Cộng đồng học tập</h3>
            <p class="font-lato">Truy cập vào cộng đồng học tập trực tuyến, nơi học viên có thể trao đổi, hỏi đáp và học hỏi lẫn nhau.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects">
      <div class="container">
        <h2 class="section-title font-lato-bold" v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          Các dự án thực tế
        </h2>
        <p class="section-desc font-lato" v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { delay: 200, duration: 800 } }">
          Trong khóa học, học viên sẽ được tham gia vào các dự án thực tế để áp dụng kiến thức đã học. Dưới đây là một số dự án tiêu biểu:
        </p>
        
        <div class="projects-grid">
          <div class="project-card" v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="E-commerce Website">
              <div class="project-badge">Web</div>
            </div>
            <div class="project-content">
              <h3 class="font-lato-bold animated-heading">Xây dựng website thương mại điện tử</h3>
              <p class="font-lato">Phát triển website thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán và quản lý sản phẩm.</p>
              <div class="project-tech">
                <span class="font-lato">HTML/CSS</span>
                <span class="font-lato">JavaScript</span>
                <span class="font-lato">Vue.js</span>
                <span class="font-lato">Node.js</span>
              </div>
            </div>
          </div>
          
          <div class="project-card" v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 800 } }">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile App">
              <div class="project-badge">Mobile</div>
            </div>
            <div class="project-content">
              <h3 class="font-lato-bold animated-heading">Ứng dụng quản lý cá nhân</h3>
              <p class="font-lato">Xây dựng ứng dụng quản lý công việc và thời gian với các tính năng như lịch, công việc và thống kê.</p>
              <div class="project-tech">
                <span class="font-lato">React Native</span>
                <span class="font-lato">Firebase</span>
                <span class="font-lato">Redux</span>
              </div>
            </div>
          </div>
          
          <div class="project-card" v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { delay: 700, duration: 800 } }">
            <div class="project-image">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Data Dashboard">
              <div class="project-badge">Data</div>
            </div>
            <div class="project-content">
              <h3 class="font-lato-bold animated-heading">Bảng điều khiển dữ liệu</h3>
              <p class="font-lato">Phát triển bảng điều khiển để hiển thị và phân tích dữ liệu với các biểu đồ và bảng tương tác.</p>
              <div class="project-tech">
                <span class="font-lato">Vue.js</span>
                <span class="font-lato">D3.js</span>
                <span class="font-lato">RESTful API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container-fluid px-0">
        <div class="cta-content" v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
          <h2 class="font-lato-bold cta-heading">Sẵn sàng để bắt đầu hành trình học tập?</h2>
          <p class="font-lato">Đăng ký ngay để tham gia khóa học và nâng cao kỹ năng của bạn!</p>
          <router-link to="/register" class="btn font-lato btn-glow">Đăng ký ngay</router-link>
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
  background: #0d6efd;
  color: white;
  padding: 80px 0;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.page-description {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  padding: 0 20px;
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
  background: linear-gradient(145deg, #e8f9ff, #f0f8ff);
}

.material-icon {
  width: 90px;
  height: 90px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #4a6bff;
}

.material-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #212529;
}

.material-card p {
  color: #6c757d;
  font-size: 1rem;

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
  background: #0d6efd;
  color: white;
  text-align: center;
  width: 100vw;
  margin: 0;
  padding: 80px 0;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta .container-fluid {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta p {
  font-size: 1rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta .btn {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta .btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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

/* Available Courses Styles */
.courses-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
}

.courses-desc {
  color: #6c757d;
  font-size: 1.1rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.course-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.course-card:hover .course-image img {
  transform: scale(1.05);
}

.course-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.course-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #212529;
}

.course-details {
  margin-bottom: 15px;
  font-size: 17px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #495057;
}

.detail-icon {
  margin-right: 10px;
  color: #4a6bff;
}

.course-brief {
  color: #6c757d;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 18px;
}

.course-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.course-highlights span {
  background: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.course-price {
  font-size: 1.4rem;
  font-weight: 700;
  color: #4a6bff;
}

.course-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #4a6bff;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.course-badge.new {
  background: #ff6b6b;
}

@media (max-width: 992px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
/* Apply fonts to specific elements */
.page-title {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.section-title {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.course-name {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.material-card h3,
.project-card h3 {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.btn {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}

/* Additional CSS for Animations */
.text-gradient {
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.animated-text {
  position: relative;
  display: inline-block;
}

.animated-text::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  left: 0;
  background: rgba(74, 107, 255, 0.2);
  z-index: -1;
  transition: height 0.3s ease;
}

.animated-text:hover::before {
  height: 50%;
}

.animated-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
}

.animated-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(74, 107, 255, 0.2), transparent);
  transition: left 0.3s ease;
  z-index: -1;
}

.animated-btn:hover::before {
  left: 100%;
}

.animated-heading {
  position: relative;
  display: inline-block;
}

.animated-heading::after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  transition: width 0.3s ease;
}

.animated-heading:hover::after {
  width: 100%;
}

.pulse-animation {
  position: relative;
  display: inline-block;
}

.pulse-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: rgba(74, 107, 255, 0.4);
  opacity: 0;
  z-index: -1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}

.tag-animation {
  animation: tagFadeIn 0.8s ease forwards;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.course-highlights span:nth-child(1) {
  animation-delay: 0.1s;
}

.course-highlights span:nth-child(2) {
  animation-delay: 0.2s;
}

.course-highlights span:nth-child(3) {
  animation-delay: 0.3s;
}

.course-highlights span:nth-child(4) {
  animation-delay: 0.4s;
}

.course-highlights span:hover {
  background: #4a6bff;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(74, 107, 255, 0.3);
}

@keyframes tagFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.course-card:hover .course-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.course-card:hover .overlay-content {
  transform: translateY(0);
}

.btn-view-overlay {
  display: inline-block;
  padding: 10px 25px;
  background: rgba(255, 255, 255, 0.9);
  color: #4a6bff;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.btn-view-overlay:hover {
  background: white;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.material-card {
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.5s ease;
}

.material-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: 0;
  height: 0;
  background: rgba(74, 107, 255, 0.05);
  border-radius: 50%;
  z-index: -1;
  transition: all 0.6s ease;
}

.material-card:hover::before {
  width: 200%;
  height: 200%;
}

.material-card:hover {
  transform: translateY(-15px);
}

.material-card:hover .material-icon {
  transform: rotateY(180deg);
  background: rgba(74, 107, 255, 0.3);
}

.material-icon {
  transition: all 0.5s ease;
  transform-style: preserve-3d;
}

.project-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #4a6bff;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 1;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-badge {
  transform: translateY(0);
  opacity: 1;
}

.project-tech span {
  transition: all 0.3s ease;
}

.project-tech span:hover {
  background: #4a6bff;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(74, 107, 255, 0.3);
}

.btn-glow {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  padding: 15px 40px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-glow:hover {
  background: white;
  color: #a74dff;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-heading {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.cta-heading::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.5);
  animation: lineGrow 1.5s forwards 0.5s;
  border-radius: 4px;
}

@keyframes lineGrow {
  0% {
    width: 0;
  }
  100% {
    width: 100px;
  }
}

.cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 10s infinite ease-in-out;
}

.particle-1 {
  width: 150px;
  height: 150px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  left: 15%;
  animation-delay: 2s;
}

.particle-3 {
  width: 100px;
  height: 100px;
  top: 40%;
  right: 15%;
  animation-delay: 1s;
}

.particle-4 {
  width: 120px;
  height: 120px;
  top: 70%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float {
  0% {
    transform: translateY(20px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.6;
  }
  100% {
    transform: translateY(20px);
    opacity: 0.3;
  }
}

@media (max-width: 992px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .particle {
    opacity: 0.4;
  }
}

@media (max-width: 768px) {
  .tag-animation, .project-tech span {
    margin-bottom: 5px;
  }
  
  .material-card:hover {
    transform: translateY(-5px);
  }
}
</style> 