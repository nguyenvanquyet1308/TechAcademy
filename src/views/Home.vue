<template>
  <div class="home home-container">
    <div class="hero-section position-relative">
      <div class="video-background">
        <video autoplay muted loop playsinline>
          <source src="@/assets/video/vd1.mp4" type="video/mp4">
        </video>
        <div class="video-overlay gradient-overlay"></div>
      </div>
     
      <div class="hero-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
    <div class="container h-100 position-relative">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="hero-content"  v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
              <h1 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
                class="display-4 fw-bold mb-4 text-white"
              >
                Bắt đầu hành trình công nghệ của bạn tại TechAcademy
              </h1>
              <p 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
                class="lead mb-5 text-light"
              >
                Khóa học chất lượng cao, giảng viên chuyên nghiệp và lộ trình học tập cá nhân hóa giúp bạn nhanh chóng phát triển kỹ năng lập trình.
              </p>
              <div class="hero-btn" 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
              >
               <router-link to="course-content"><button class="btn btn-light btn-lg me-3">Khám phá khóa học</button></router-link>
                <!-- <button class="btn btn-outline-light btn-lg animated-btn">Tư vấn miễn phí</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Features Section -->
    <section class="section features diagonal-section">
      <div class="container">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="section-title " 
          style="font-size: 35px;"
        >
          <span class="text-gradient fs-1">Techzen Academy</span>
          <br>Nơi Kiến Tạo Tương Lai Lập Trình Viên Chuyên Nghiệp
        </h2>
        <div class="features-grid">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
            class="feature-card"
          >
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            </div>
            <h3>Giảng viên chuyên nghiệp</h3>
            <p>Đội ngũ giảng viên giàu kinh nghiệm, hiện đang là những chuyên gia trong ngành công nghệ.</p>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
            class="feature-card"
          >
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <h3>Chương trình cập nhật</h3>
            <p>Nội dung khóa học luôn được cập nhật với công nghệ mới nhất trong thị trường.</p>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }"
            class="feature-card"
          >
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3>Thực hành thực tế</h3>
            <p>Tập trung vào các dự án thực tế, giúp học viên nhanh chóng áp dụng kiến thức vào công việc.</p>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 800, duration: 800 } }"
            class="feature-card"
          >
            <div class="feature-icon pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3>Hỗ trợ 24/7</h3>
            <p>Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc trong suốt quá trình học tập.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Company Section -->
    <section class="section about-company py-5 bg-light parallax-section">
      <div class="container">
        <div class="row align-items-center">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            class="col-lg-6 mb-4 mb-lg-0"
          >
            <h2 class="section-title text-start fs-1 mb-4 with-side-line">Về Techzen Academy</h2>
            <div class="about-content">
              <p class="mb-4">Tại Techzen Academy, chúng tôi mang đến chương trình đào tạo lập trình toàn diện, từ nền tảng cơ bản đến các công nghệ hiện đại. Đội ngũ giảng viên giàu kinh nghiệm của chúng tôi sẽ hướng dẫn bạn một cách tỉ mỉ và chi tiết, giúp bạn nắm vững kiến thức và phát triển kỹ năng lập trình chuyên nghiệp.</p>
              <p>Chương trình học tập tại Techzen Academy không chỉ tập trung vào lý thuyết, mà còn chú trọng vào tình huống thực tế. Với sự chuẩn bị kỹ lưỡng từ Techzen Academy, bạn sẽ tự tin bước vào thế giới công nghệ và sẵn sàng chinh phục những cơ hội nghề nghiệp đầy triển vọng.</p>
            </div>
            <div class="about-stats mt-5">
              <div class="row g-3">
                <div class="col-6">
                  <div class="stat-card">
                    <div class="stat-icon">
                      <i class="bi bi-people-fill"></i>
                    </div>
                    <div class="stat-content">
                      <h3 class="stat-number">100+</h3>
                      <p class="stat-text">Học viên</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="stat-card">
                    <div class="stat-icon">
                      <i class="bi bi-award-fill"></i>
                    </div>
                    <div class="stat-content">
                      <h3 class="stat-number">98%</h3>
                      <p class="stat-text">Tỷ lệ hài lòng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            class="col-lg-6"
          >
            <div class="about-image-wrapper">
              <div class="about-image floating-animation">
                <img src="../assets/images/techacademy.jpg" alt="Techzen Academy Team" class="img-fluid rounded shadow">
              </div>
              <div class="about-pattern pattern-dots"></div>
              <div class="about-shape shape-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Agile Scrum Methodology Section -->
    <!-- <section class="section agile-scrum py-5 wave-section">
      <div class="container">
        <div class="row">
          <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
            class="col-lg-6 mb-4 mb-lg-0"
          >
            <div class="agile-scrum-image">
              <img src="../assets/images/agile.png" alt="Agile Scrum Methodology" class="img-fluid rounded shadow">
              <div class="image-badge">
                <span>Agile</span>
                <span>Methodology</span>
              </div>
            </div>
          </div>
          <div 
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            class="col-lg-6"
          >
            <h2 class="section-title text-start mb-4 with-side-line">Phương pháp Agile Scrum</h2>
            <div class="agile-scrum-content">
              <p class="mb-4">Phương pháp <strong>Agile Scrum</strong> là <span class="text-gradient fw-bold">điểm mạnh nổi bật</span> của Techzen Academy trong đào tạo và phát triển phần mềm. Khi tham gia các khóa học tại Techzen, học viên không chỉ được học lý thuyết mà còn được <span class="highlight-text">thực hành trực tiếp</span> theo quy trình Agile Scrum chuyên nghiệp, giúp sẵn sàng hòa nhập vào môi trường công nghiệp thực tế.</p>
              
              <div class="agile-principles mt-4">
                <div 
                  v-motion
                  :initial="{ opacity: 0, x: 50 }"
                  :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
                  class="principle-item d-flex align-items-start mb-3"
                >
                  <div class="principle-icon me-3">
                    <i class="bi bi-kanban text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5>Sprint Planning trong học tập</h5>
                    <p>Học viên được tham gia vào các buổi Sprint Planning để lên kế hoạch học tập, thiết lập mục tiêu cụ thể và lộ trình hoàn thành dự án trong từng giai đoạn học tập.</p>
                  </div>
                </div>
                
                <div 
                  v-motion
                  :initial="{ opacity: 0, x: 50 }"
                  :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
                  class="principle-item d-flex align-items-start mb-3"
                >
                  <div class="principle-icon me-3">
                    <i class="bi bi-people text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5>Daily Scrum thực tế</h5>
                    <p>Học viên được trải nghiệm các buổi Daily Scrum ngắn gọn, hiệu quả để báo cáo tiến độ, chia sẻ khó khăn và đề xuất giải pháp - kỹ năng thiết yếu trong môi trường làm việc thực tế.</p>
                  </div>
                </div>
                
                <div 
                  v-motion
                  :initial="{ opacity: 0, x: 50 }"
                  :visible="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
                  class="principle-item d-flex align-items-start"
                >
                  <div class="principle-icon me-3">
                    <i class="bi bi-graph-up text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5>Demo và Sprint Review</h5>
                    <p>Mỗi giai đoạn học tập kết thúc bằng buổi demo sản phẩm và Sprint Review, giúp học viên rèn luyện kỹ năng thuyết trình, đón nhận phản hồi và liên tục cải thiện sản phẩm của mình.</p>
                  </div>
                </div>
                <div 
                  v-motion
                  :initial="{ opacity: 0, x: 50 }"
                  :visible="{ opacity: 1, x: 0, transition: { delay: 800, duration: 600 } }"
                  class="principle-item d-flex align-items-start"
                >
                  <div class="principle-icon me-3">
                    <i class="bi bi-calendar-check text-primary fs-4"></i>            
                  </div>
                  <div>
                    <h5>Retrospective và cải tiến liên tục</h5>
                    <p>Học viên được hướng dẫn phương pháp tự đánh giá và cải tiến liên tục thông qua các buổi Retrospective, giúp phát triển tư duy cầu tiến - phẩm chất quan trọng của lập trình viên chuyên nghiệp.</p>
                  </div>
                </div>
              </div>
              <div 
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 600 } }"
                class="mt-4"
              >
                <a href="https://techzen.vn/strategic/" target="_blank" rel="noopener noreferrer">
                   <button class="btn btn-outline-gradient animated-btn">Khám phá điểm mạnh Agile Scrum tại Techzen Academy</button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section> -->

    <!-- Stats Section -->
    <div class="stats-section py-5 text-white parallax-bg">
      <div class="stats-overlay"></div>
      <div class="container position-relative">
        <div class="row text-center">
          <div class="col-md-3 col-6 mb-4 mb-md-0">
            <div class="stats-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              <div class="stats-icon">
                <i class="bi bi-journal-code"></i>
              </div>
              <div class="count h1">
                <AnimatedCount :value="2" :is-in-view="isStatsVisible" />
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
              <div class="stats-icon">
                <i class="bi bi-people"></i>
              </div>
              <div class="count h1">
                <AnimatedCount :value="100" :is-in-view="isStatsVisible" />
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
              <div class="stats-icon">
                <i class="bi bi-person-badge"></i>
              </div>
              <div class="count h1">
                <AnimatedCount :value="2" :is-in-view="isStatsVisible" />
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
              <div class="stats-icon">
                <i class="bi bi-emoji-smile"></i>
              </div>
              <div class="count h1">
                <AnimatedCount :value="98" :is-in-view="isStatsVisible" suffix="%" />
              </div>
              <div class="stats-title">Tỷ lệ hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instructors Section -->
    <section class="section instructors py-5 bg-glass">
      <div class="container">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="section-title mb-5 fs-1"
        >
          Đội ngũ giảng viên xuất sắc
        </h2>
        <div class="row d-flex justify-content-center">
          <div 
            v-for="(instructor, index) in instructors" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 200), duration: 800 } }"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="instructor-card-modern text-center h-100">
              <div class="instructor-card-inner">
                <div class="instructor-image mb-3">
                  <img :src="instructor.image" :alt="instructor.name">
                </div>
                <h3 class="instructor-name">{{ instructor.name }}</h3>
                <p class="instructor-title">{{ instructor.title }}</p>
                <div class="instructor-desc">
                  <p>{{ instructor.description }}</p>
                </div>
                <div class="instructor-social fade-in">
                  <a :href="instructor.linkedin" class="social-icon"><i class="bi bi-linkedin"></i></a>
                  <a :href="instructor.github" class="social-icon"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          class="text-center mt-4"
        >
          <router-link to="/instructors" class="btn btn-outline-gradient animated-btn">Xem tất cả giảng viên</router-link>
        </div>
      </div>
      <div class="bg-circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="section courses py-5 courses-diagonal">
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
            <div class="course-card-modern h-100 shadow-sm rounded overflow-hidden">
              <div class="course-image position-relative">
                <div class="course-overlay"></div>
                <span class="course-tag position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold flash-animation">Hot</span>
                <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course" class="img-fluid w-100" style="height: 300px; object-fit: cover;">
                <div class="course-hover-info">
                  <h3 class="text-white mb-2">Python Al</h3>
                  <p class="text-white-50 mb-3">Làm chủ ngôn ngữ lập trình Python và ứng dụng vào AI với giảng viên giàu kinh nghiệm từ Nhật Bản</p>
                  <router-link to="/course-python" class="btn btn-light btn-sm">Xem chi tiết</router-link>
                </div>
              </div>
              <div class="course-content p-4">
                <h3 class="mb-3">Python Al</h3>
                <p class="text-muted mb-3">Khóa học toàn diện về Python từ cơ bản đến nâng cao. Phù hợp cho người mới bắt đầu.</p>
                <div class="course-details-modern">
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-clock me-2 fs-3"></i>
                    <span class= "fs-5">5 Tháng</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-bar-chart me-2 fs-3"></i>
                    <span >Cơ bản - Nâng cao</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <div class="course-rating">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-half text-warning"></i>
                      <span class="ms-1">(4.5)</span>
                    </div>
                  </div>
                </div>
                <div class="course-price-action mt-4 d-flex justify-content-between align-items-center">
                  <div class="course-price">
                    <span class="new-price ">7.999.000 VNĐ</span>
                    <span class="old-price ">8.800.000 VNĐ</span>
                  </div>
                  <router-link to="/course-python" class="btn btn-primary btn-sm animated-btn fs-5">Xem chi tiết</router-link>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="course-card-modern h-100 shadow-sm rounded overflow-hidden">
              <div class="course-image position-relative">
                <div class="course-overlay"></div>
                <span class="course-tag position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold flash-animation">Hot</span>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Java Spring Boot Course" class="img-fluid w-100" style="height: 300px; object-fit: cover;">
                <div class="course-hover-info">
                  <h3 class="text-white mb-2">Java Backend</h3>
                  <p class="text-white-50 mb-3">Xây dựng ứng dụng web mạnh mẽ với Spring Boot dưới sự hướng dẫn của chuyên gia hàng đầu</p>
                  <router-link to="/course-java-spring" class="btn btn-light btn-sm">Xem chi tiết</router-link>
                </div>
              </div>
              <div class="course-content p-4">
                <h3 class="mb-3">Java Backend</h3>
                <p class="text-muted mb-3">Xây dựng ứng dụng web mạnh mẽ với Spring Boot. Phù hợp cho các lập trình viên Java.</p>
                <div class="course-details-modern">
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-clock me-2 fs-3"></i>
                    <span class="fs-5">3 Tháng</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <i class="bi bi-bar-chart me-2 fs-3"></i>
                    <span>Cơ bản - Nâng cao</span>
                  </div>
                  <div class="detail d-flex align-items-center">
                    <div class="course-rating">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <span class="ms-1">(5.0)</span>
                    </div>
                  </div>
                </div>
                <div class="course-price-action mt-4 d-flex justify-content-between align-items-center">
                  <div class="course-price">
                    <span class="new-price">6.999.000 VNĐ</span>
                    <span class="old-price">7.800.000 VNĐ</span>
                  </div>
                  <router-link to="/course-java-spring" class="btn btn-primary btn-sm animated-btn fs-5">Xem chi tiết</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- CTA Section -->
    <section class="section cta-modern">
      <div class="container">
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
          class="cta-content-modern"
        >
          <h2>Sẵn sàng bắt đầu hành trình học tập của bạn?</h2>
          <p>Đăng ký ngay hôm nay để nhận được ưu đãi đặc biệt và sự hỗ trợ từ đội ngũ chuyên gia của chúng tôi.</p>
          <router-link to="/register" class="btn btn-glow-white">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>

    <!-- End of Register Form Section -->

    <!-- Facebook Chatbot -->
    <FacebookChatbot />
  </div>
</template>

<script>
import ParallaxEffect from '@/components/ParallaxEffect.vue'
import AnimatedCount from '@/components/AnimatedCount.vue'
import FacebookChatbot from '@/components/FacebookChatbot.vue'

export default {
  name: 'HomeView',
  components: {
    ParallaxEffect,
    AnimatedCount,
    FacebookChatbot
  },
  data() {
    return {
      isLoaded: false,
      isStatsVisible: false,
      animationObserver: null,
      featuredCourses: [
        // ... existing courses data
      ],
      instructors: [
        {
          name: 'Huỳnh Hải Thiên',
          title: 'Manager bộ phận phát triển giải pháp AI tại Techzen & Giảng viên IT giàu kinh nghiệm',
          description: 'Thạc sĩ AI - Institute of Science Tokyo 7+ năm kinh nghiệm AI tại Nhật Bản 6+ năm đào tạo Fresher IT & AI',
          image: '/images/huynhhaithien.png',
          linkedin: '#',
          github: '#'
        },
        {
          name: 'Nguyễn Ngọc Quang',
          title: 'TeamLeader Developer tại Techzen & Giảng viên IT chuyên nghiệp',
          description: '7 năm tập trung vào các dự án web phức tạp, công nghệ hiện đại. 6 năm truyền đạt kiến thức từ căn bản đến nâng cao cho hàng ngàn học viên, từ các bạn mới bắt đầu đến những người đã có nền tảng.',
          image: '/images/nguyenngocquang.png',
          linkedin: '#',
          github: '#'
        },
        // {
        //   name: 'Nguyễn Ngọc Quang',
        //   title: 'TeamLeader Developer tại Techzen & Giảng viên IT chuyên nghiệp',
        //   description: '7 năm tập trung vào các dự án web phức tạp, công nghệ hiện đại. 6 năm truyền đạt kiến thức từ căn bản đến nâng cao cho hàng ngàn học viên, từ các bạn mới bắt đầu đến những người đã có nền tảng.',
        //   image: '/images/nguyenngocquang.png',
        //   linkedin: '#',
        //   github: '#'
        // }
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
/* Áp dụng font Lato cho toàn bộ trang Home */
.home-container {
  font-family: 'Lato', sans-serif;
}

/* Áp dụng các kiểu font cụ thể */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
  font-weight: 700; /* Bold */
}

.subtitle {
  font-family: 'Lato', sans-serif;
  font-weight: 300; /* Light */
}

.feature-title {
  font-family: 'Lato', sans-serif;
  font-weight: 700; /* Bold */
}

.feature-description {
  font-family: 'Lato', sans-serif;
  font-weight: 400; /* Regular */
}

/* Áp dụng SF Mono cho các phần code */
.code-block, pre, code {
  font-family: 'SF Mono', monospace;
  font-weight: normal;
}

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
  text-align: center;
  border: 1px solid rgba(74, 107, 255, 0.1);
  background: linear-gradient(145deg, #ffffff, #f0f8ff);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(145deg, #e8f9ff, #f0f8ff);
  box-shadow: 0 15px 30px rgba(74, 107, 255, 0.15);
  border: 1px solid rgba(74, 107, 255, 0.2);
}

.feature-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(145deg, rgba(74, 107, 255, 0.1), rgba(106, 58, 239, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 25px;
  color: #4a6bff;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 20px rgba(74, 107, 255, 0.1);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.feature-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(74, 107, 255, 0.2), rgba(106, 58, 239, 0.3));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-icon::before {
  opacity: 1;
}

.feature-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #212529;
  font-weight: 700;
  background: linear-gradient(90deg, #333, #666);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.feature-card p {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 500;
}

.pulse-animation {
  position: relative;
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

.cta {
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
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
  position: relative;
  z-index: 1;
  background: #D9EAFD;
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
  .hero-section {
    height: auto;
    min-height: 100vh;
    padding: 100px 0 80px;
  }
  
  .hero-content {
    padding: 1.5rem;
    margin-top: 0;
  }
  
  .hero-content h1 {
    font-size: 2.1rem;
  }
  
  .hero-btn {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .hero-btn .btn {
    width: 100%;
  }
}

/* Update hero section styles */
.hero-section {
  background: none;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);
  padding: 2.5rem;
  border-radius: 20px;
  background: #0d6efd;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 60px;
}

.hero-shape-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.hero-shape-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

.hero-shape-divider .shape-fill {
  fill: #FFFFFF;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5), -3px -3px 6px rgba(0, 0, 0, 0.2);
}

.text-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.1);
  background: linear-gradient(90deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.btn-glow {
  background: linear-gradient(45deg, #4a6bff, #6a3aef);
  border: none;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(74, 107, 255, 0.5);
}

.btn-glow:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #6a3aef, #4a6bff);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s;
}
.btn-light{
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.5);
  font-weight: 600;
}
.btn-glow:hover:before {
  opacity: 1;
}

.btn-glow:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.5);
}

.gradient-overlay {
  background: linear-gradient(135deg, rgba(26,32,44,0.8) 0%, rgba(113,54,186,0.6) 100%);
}

.text-gradient {
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: 800;
  text-shadow: 0 5px 15px rgba(74, 107, 255, 0.2);
}

.section-title.with-line {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 40px;
  font-weight: 800;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.section-title.with-line:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(74, 107, 255, 0.3);
}

.diagonal-section {
  position: relative;
  background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
  padding: 150px 0;
  margin-top: -2px;
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
}

.feature-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 1;
  position: relative;
}

.feature-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(74, 107, 255, 0.05), rgba(106, 58, 239, 0.05));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover:before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.flash-animation {
  animation: flash 2s infinite;
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0.5;
  }
}

.fade-in {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.instructor-card:hover .fade-in {
  opacity: 1;
}

.parallax-section {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-bg {
  position: relative;
  overflow: hidden;
}

.parallax-bg:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat fixed;
  opacity: 0.1;
  z-index: -1;
}

.bg-light-gradient {
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.animated-background {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pulse-btn {
  animation: pulse-light 2s infinite;
  background: white;
  color: #4a6bff;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.pulse-btn:hover {
  background: #4a6bff;
  color: white;
  transform: scale(1.05);
}

@keyframes pulse-light {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.section-title.with-side-line {
  position: relative;
  padding-left: 20px;
  margin-bottom: 40px;
}

.section-title.with-side-line:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #4a6bff, #a74dff);
  border-radius: 5px;
}

.about-company {
  position: relative;
  background-color: #f8f9fa;
  padding: 120px 0;
  overflow: hidden;
}

.about-content {
  font-size: 1.4rem;
  color: #495057;
  line-height: 1.7;
  font-weight: 520;
}

.about-image-wrapper {
  position: relative;
  padding: 20px;
  z-index: 1;
}

.about-image {
  position: relative;
  z-index: 2;
}

.about-image img {
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  transition: all 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.about-pattern {
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: 0;
  right: 0;
  z-index: 0;
}

.pattern-dots {
  background-image: radial-gradient(#4a6bff 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.2;
}

.about-shape {
  position: absolute;
  z-index: 0;
}

.shape-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(74, 107, 255, 0.1), rgba(106, 58, 239, 0.1));
  top: -30px;
  left: -30px;
}

.about-stats {
  position: relative;
  z-index: 2;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.stat-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #4a6bff, #a74dff);
  color: white;
  font-size: 1.5rem;
  margin-right: 15px;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-text {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
}

.wave-section {
  position: relative;
  background-color: white;
  padding: 120px 0 160px;
  overflow: hidden;
}

.wave-section:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(74, 107, 255, 0.03), rgba(106, 58, 239, 0.03));
  z-index: 0;
}

.wave-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave-bottom svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

.wave-bottom .shape-fill {
  fill: #4A6BFF;
  opacity: 0.1;
}

.stats-section {
  position: relative;
  background: linear-gradient(135deg, #4a6bff, #a74dff);
  padding: 80px 0;
  overflow: hidden;
}

.stats-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
  background-size: 20px 20px;
  z-index: 1;
}

.stats-item {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  padding: 20px;
  border-radius: 12px;
}

.stats-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
}

.stats-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.8);
}

.count {
  font-weight: 700;
  color: white;
  font-size: 3rem;
  margin-bottom: 5px;
}

.stats-title {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.agile-scrum-image {
  position: relative;
  margin-bottom: 30px;
}

.agile-scrum-image img {
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  transition: all 0.5s ease;
}

.image-badge {
  position: absolute;
  bottom: -15px;
  right: -15px;
  background: linear-gradient(135deg, #4a6bff, #a74dff);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  transform: rotate(-5deg);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-outline-gradient {
  background: transparent;
  position: relative;
  z-index: 1;
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #4a6bff, #a74dff);
  border-image-slice: 1;
  color: #4a6bff;
  transition: all 0.3s ease;
}

.btn-outline-gradient:hover {
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  color: white;
  border-image: none;
  border: 2px solid #4a6bff;
}

.bg-glass {
  position: relative;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(236, 240, 255, 0.9));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
}

.bg-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(74, 107, 255, 0.1), rgba(167, 77, 255, 0.1));
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
}

.circle-2 {
  width: 500px;
  height: 500px;
  bottom: -200px;
  right: -200px;
}

.instructor-card-modern {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem;
}

.instructor-card-modern:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
}

.instructor-card-modern:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.instructor-card-inner {
  position: relative;
  z-index: 2;
}

.instructor-image {
  position: relative;
  width: 170px;
  height: 230px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.instructor-image:before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(74, 107, 255, 0.1), rgba(167, 77, 255, 0.1));
  z-index: 1;
}

.instructor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.instructor-card-modern:hover .instructor-image img {
  transform: scale(1.1);
}

.instructor-name {
  font-size: 1.4rem;
  margin: 1rem 0 0.5rem;
  color: #212529;
  font-weight: 700;
}

.instructor-title {
  color: #4a6bff;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.instructor-desc {
  color: #6c757d;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.instructor-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.instructor-card-modern:hover .instructor-social {
  opacity: 1;
  transform: translateY(0);
}

.courses-diagonal {
  position: relative;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
  padding: 150px 0;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
  margin-top: -50px;
  margin-bottom: -50px;
}

.course-card-modern {
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.course-card-modern:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(74, 107, 255, 0.15) !important;
  border: 1px solid rgba(74, 107, 255, 0.1);
}

.course-image {
  position: relative;
  overflow: hidden;
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.course-hover-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: 2;
}

.course-card-modern:hover .course-overlay {
  opacity: 1;
}

.course-card-modern:hover .course-hover-info {
  transform: translateY(0);
}

.course-tag {
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.course-content h3 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #212529;
  background: linear-gradient(90deg, #333, #555);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.course-content p {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 500;
}

.course-details-modern {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  color: #6c757d;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.detail {
  font-size: 0.9rem;
  font-weight: 600;
}

.detail i {
  color: #4a6bff;
  font-size: 1.2rem;
}

.course-rating i {
  font-size: 1.1rem;
}

.course-price {
  display: flex;
  flex-direction: column;
}

.new-price {
  font-size: 1.9rem;
  font-weight: 700;
  color: #4a6bff;
}

.old-price {
  font-size: 1.3rem;
  text-decoration: line-through;
  color: black;
}

.animated-btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.animated-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(74, 107, 255, 0.8), rgba(106, 58, 239, 0.8));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.animated-btn:hover::before {
  opacity: 1;
}

.cta-modern {
  position: relative;
  background: linear-gradient(135deg, #4a6bff 0%, #a74dff 100%);
  padding: 120px 0;
  color: white;
  overflow: hidden;
}

.cta-content-modern {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}

.cta-content-modern h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cta-content-modern p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.btn-glow-white {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 15px 40px;
  border-radius: 30px;
  box-shadow: 0 5px 25px rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  border: none;
}

.btn-glow-white:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.4);
  background: white;
  color: #a74dff;
}

.cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(20px);
  }
  50% {
    transform: translateY(0) translateX(40px);
  }
  75% {
    transform: translateY(30px) translateX(20px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

.highlight-text {
  color: #4a6bff;
  font-weight: 700;
  position: relative;
  padding: 0 5px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 4px;
}

.principle-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(74, 107, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.principle-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.1);
  border: 1px solid rgba(74, 107, 255, 0.2);
}

.principle-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(74, 107, 255, 0.1), rgba(106, 58, 239, 0.1));
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(74, 107, 255, 0.1);
}

.principle-item h5 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #212529;
  background: linear-gradient(90deg, #333, #666);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.principle-item p {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.6;
}

/* Đã chuyển CSS của Facebook Chatbot sang component riêng */
</style> 