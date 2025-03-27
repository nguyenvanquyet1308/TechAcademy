<template>
  <div class="course-python">
    <div class="header-section animated-gradient">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="course-title animate__animated animate__fadeInDown">
              Lập trình Python AI
            </h1>
            <p class="course-description animate__animated animate__fadeIn animate__delay-1s">
              Khóa học Python AI toàn diện giúp bạn làm chủ ngôn ngữ lập trình phổ biến nhất hiện nay, từ nền tảng cơ bản đến ứng dụng AI. Tập trung vào thực hành và dự án thực tế, phù hợp cho cả người mới bắt đầu và lập trình viên muốn nâng cao kỹ năng.
            </p>
            <div class="course-meta animate__animated animate__fadeIn animate__delay-2s">
              <div class="meta-item">
                <i class="bi bi-clock me-2"></i>
                <span>5 tháng (64 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-bar-chart me-2"></i>
                <span>Cơ bản đến nâng cao</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-calendar me-2"></i>
                <span>Khai giảng: 25/03/2025</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-geo-alt me-2"></i>
                <span>Offline tại văn phòng Techzen</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-people me-2"></i>
                <span>Thứ 3, 5, 7 (18:30 - 20:30)</span>
              </div>
            </div>
            <div class="course-actions animate__animated animate__fadeIn animate__delay-3s">
              <router-link to="register" > <button class="btn btn-primary btn-lg me-2 pulse">Đăng ký học</button> </router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image animate__animated animate__fadeInRight parallax-element" data-speed="0.15">
              <img src="../assets/images/pythonAl.png" style="width: 390px; height: 320px;" alt="Python Course" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col text-center">
            <div class="scroll-indicator bounce">
              <i class="bi bi-chevron-down text-white fs-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <section class="section mb-5 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-4">
              Tổng quan khóa học
            </h2>
            <div class="course-overview animate-on-scroll" data-animation="animate__fadeIn">
              <p>Khóa học Python AI là chương trình đào tạo toàn diện, giúp học viên nắm vững kiến thức lập trình với ngôn ngữ Python và ứng dụng vào phát triển AI. Khóa học cung cấp từ kiến thức nền tảng về Python Core & OOP, làm việc với cơ sở dữ liệu MySQL, xây dựng RESTful API với FastAPI đến tích hợp các công nghệ AI hiện đại.</p>
              <p>Được thiết kế theo lộ trình rõ ràng với tổng cộng 64 buổi học, khóa học phù hợp cho cả sinh viên ngành CNTT và những người muốn chuyển hướng sang lập trình Python. Học viên sẽ được thực hành qua nhiều bài tập và hoàn thiện dự án thực tế, giúp ứng dụng kiến thức vào giải quyết các vấn đề thực tiễn.</p>
              <p>Đặc biệt, khóa học được giảng dạy bởi đội ngũ giảng viên có ít nhất 7 năm kinh nghiệm thực tế, có khả năng truyền đạt từ kiến thức cơ bản đến chuyên sâu trong môi trường làm việc với MySQL và Python.</p>
            </div>
          </section>

          <section class="section mb-5 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-4">Đối tượng học viên</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="target-audience">
                  <ul class="list-unstyled">
                    <li class="d-flex mb-3 animate-on-scroll" data-animation="animate__fadeInLeft">
                      <div class="icon-box me-3">
                        <i class="bi bi-mortarboard-fill text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Sinh viên ngành CNTT và các ngành liên quan</h5>
                        <p>Bao gồm những sinh viên muốn phát triển kỹ năng lập trình Python để sẵn sàng tham gia vào các dự án thực tế.</p>
                      </div>
                    </li>
                    <li class="d-flex mb-3 animate-on-scroll" data-animation="animate__fadeInLeft" style="animation-delay: 0.2s">
                      <div class="icon-box me-3">
                        <i class="bi bi-person-fill text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Sinh viên năm 2, 3, 4</h5>
                        <p>Đang tìm kiếm cơ hội tiếp cận công nghệ mới, nâng cao kỹ năng lập trình, và đáp ứng nhu cầu thực tiễn của doanh nghiệp.</p>
                      </div>
                    </li>
                    <li class="d-flex mb-3 animate-on-scroll" data-animation="animate__fadeInLeft" style="animation-delay: 0.4s">
                      <div class="icon-box me-3">
                        <i class="bi bi-code-slash text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Những người muốn tăng kỹ năng lập trình</h5>
                        <p>Mong muốn chuyên sâu vào mảng lập trình Python, bao gồm các ứng dụng Back-end, xử lý dữ liệu, phát triển API và ứng dụng AI.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="section mb-5 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-4">Lộ trình khóa học</h2>
            <div class="curriculum-overview mb-4 animate-on-scroll" data-animation="animate__fadeIn">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead class="table-primary">
                        <tr>
                          <th>STT</th>
                          <th>Học phần</th>
                          <th>Số buổi</th>
                          <th>Mục tiêu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Python Core & OOP</td>
                          <td>21</td>
                          <td>Hiểu và thành thạo kỹ thuật lập trình hướng đối tượng với Python.</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>MySQL</td>
                          <td>8</td>
                          <td>Nắm vững kiến thức cơ bản về thiết kế, thao tác với CSDL, và kỹ thuật xử lý dữ liệu.</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>FastAPI</td>
                          <td>21</td>
                          <td>Xây dựng API theo kiến trúc RESTful, nắm vững mô hình MVC, và thao tác với database.</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Tích hợp AI</td>
                          <td>6</td>
                          <td>Giới thiệu & Gọi API: AI, NLP, OpenAI API, tối ưu prompt.</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Case Study</td>
                          <td>8</td>
                          <td>Thiết kế Database: Mô hình Entity, quan hệ, tích hợp ORM với FastAPI.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="courseContent">
              <div class="accordion-item animate-on-scroll" data-animation="animate__fadeInUp">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Python Core & OOP (21 buổi)
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <div class="table-responsive">
                      <table class="table table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Buổi</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1, 2</td>
                            <td>Cài đặt môi trường<br>Chương trình đầu tiên<br>Tổng quan về Python</td>
                            <td>- Cài đặt Python và pip<br>- Cài đặt PyCharm<br>- Kiểm tra cài đặt Python<br>- Chương trình đầu tiên<br>- Biến, Kiểu dữ liệu</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Cấu trúc điều kiện</td>
                            <td>- Câu lệnh điều khiển</td>
                          </tr>
                          <tr>
                            <td>4, 5</td>
                            <td>Cấu trúc lặp</td>
                            <td>- Các vòng lặp trong Python</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Hàm (Function)</td>
                            <td>- Khai báo và sử dụng hàm</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Debug & String</td>
                            <td>- Debug và 1 số phương pháp debug</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Module và DateTime</td>
                            <td>- Import module và sử dụng thư viện chuẩn</td>
                          </tr>
                          <tr>
                            <td>9-20</td>
                            <td>Danh sách, Dictionary, Ôn tập, OOP, Exception...</td>
                            <td>- Các cấu trúc dữ liệu<br>- Lập trình hướng đối tượng<br>- Xử lý ngoại lệ<br>- File I/O</td>
                          </tr>
                          <tr>
                            <td>21</td>
                            <td>Kiểm tra chất lượng</td>
                            <td>- Đánh giá kết quả học tập</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="accordion-item animate-on-scroll" data-animation="animate__fadeInUp" style="animation-delay: 0.2s">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    MySQL (8 buổi)
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <div class="table-responsive">
                      <table class="table table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Buổi</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>22</td>
                            <td>Cài đặt môi trường<br>Overview database</td>
                            <td>- Cài đặt MySQL Server và MySQL Workbench<br>- Cơ sở dữ liệu</td>
                          </tr>
                          <tr>
                            <td>23, 24</td>
                            <td>Thiết kế Cơ Sở Dữ Liệu</td>
                            <td>- ERD</td>
                          </tr>
                          <tr>
                            <td>25</td>
                            <td>Thao tác với CSDL</td>
                            <td>- Các loại JOIN</td>
                          </tr>
                          <tr>
                            <td>26, 27</td>
                            <td>Thao tác với CSDL</td>
                            <td>- Group by, Having</td>
                          </tr>
                          <tr>
                            <td>28</td>
                            <td>Ôn tập tổng hợp</td>
                            <td>- Ôn tập các kiến thức MySQL</td>
                          </tr>
                          <tr>
                            <td>29</td>
                            <td>Kiểm tra chất lượng</td>
                            <td>- Đánh giá kết quả học tập</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item animate-on-scroll" data-animation="animate__fadeInUp" style="animation-delay: 0.4s">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    FastAPI (21 buổi)
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <div class="table-responsive">
                      <table class="table table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Buổi</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>30</td>
                            <td>Tổng quan về web</td>
                            <td>- Phân biệt Request và Response</td>
                          </tr>
                          <tr>
                            <td>31</td>
                            <td>CRUD theo RestFul API</td>
                            <td>- Tạo API cơ bản với FastAPI</td>
                          </tr>
                          <tr>
                            <td>32-44</td>
                            <td>Mô hình MVC, ORM, validation...</td>
                            <td>- ORM cơ bản với SQLAlchemy<br>- Relationship Mapping<br>- DTO và Pydantic<br>- Validate dữ liệu<br>- Pytest và Phân tích mã</td>
                          </tr>
                          <tr>
                            <td>45-50</td>
                            <td>Authentication và Security</td>
                            <td>- Authentication và Authorization<br>- Tích hợp OAuth2<br>- Refresh Token và Logout</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item animate-on-scroll" data-animation="animate__fadeInUp" style="animation-delay: 0.6s">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Tích hợp AI & Case Study (14 buổi)
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#courseContent">
                  <div class="accordion-body">
                    <div class="table-responsive">
                      <table class="table table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Buổi</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>51</td>
                            <td>Làm quen với OpenAI API</td>
                            <td>- Tổng quan về AI và ứng dụng trong công việc</td>
                          </tr>
                          <tr>
                            <td>52-56</td>
                            <td>Tích hợp ChatGPT và ứng dụng AI</td>
                            <td>- Tự động tạo email, báo cáo<br>- Giới thiệu Streaming API<br>- Sử dụng OpenAI Whisper API<br>- Giới thiệu GPT-4 Vision</td>
                          </tr>
                          <tr>
                            <td>57-64</td>
                            <td>Case study</td>
                            <td>- Thiết kế Database cho dự án<br>- Tạo Repository cho các Entity<br>- Validation nâng cao<br>- Cấu hình Authentication và Authorization</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section mb-5 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-4 typewriter">Lợi ích khi tham gia khóa học</h2>
            <div class="benefits-list">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="benefit-card h-100 p-4 border rounded shadow-sm animate-on-scroll" data-animation="animate__fadeInLeft">
                    <div class="benefit-icon mb-3 text-primary floating">
                      <i class="bi bi-code-square fs-1"></i>
                    </div>
                    <h4 class="mb-3">Lập trình Python Core và OOP</h4>
                    <p>Nắm vững từ cú pháp cơ bản đến lập trình hướng đối tượng với Python, tạo nền tảng vững chắc để phát triển các ứng dụng phức tạp.</p>
                  </div>
                </div>
                
                <div class="col-md-6 mb-4">
                  <div class="benefit-card h-100 p-4 border rounded shadow-sm animate-on-scroll" data-animation="animate__fadeInRight">
                    <div class="benefit-icon mb-3 text-primary floating" style="animation-delay: 0.2s">
                      <i class="bi bi-laptop-code fs-1"></i>
                    </div>
                    <h4 class="mb-3">Tạo ra sản phẩm thực tế</h4>
                    <p>Hoàn thành dự án cuối khóa, giúp học viên áp dụng kiến thức vào dự án hoàn chỉnh, đóng góp vào portfolio cá nhân.</p>
                  </div>
                </div>
                
                <div class="col-md-6 mb-4">
                  <div class="benefit-card h-100 p-4 border rounded shadow-sm animate-on-scroll" data-animation="animate__fadeInLeft">
                    <div class="benefit-icon mb-3 text-danger floating" style="animation-delay: 0.4s">
                      <i class="bi bi-building fs-1"></i>
                    </div>
                    <h4 class="mb-3">Thực tập tại doanh nghiệp</h4>
                    <p>Học viên được hỗ trợ tham gia thực tập các dự án thực tế của công ty Techzen, tích lũy kinh nghiệm làm việc thực tế.</p>
                  </div>
                </div>
                
                <div class="col-md-6 mb-4">
                  <div class="benefit-card h-100 p-4 border rounded shadow-sm animate-on-scroll" data-animation="animate__fadeInRight">
                    <div class="benefit-icon mb-3 text-danger floating" style="animation-delay: 0.6s">
                      <i class="bi bi-award fs-1"></i>
                    </div>
                    <h4 class="mb-3">Chứng chỉ và hỗ trợ thực tập</h4>
                    <p>Nhận chứng chỉ học và thực hành tại Công ty TNHH Techzen, cùng hỗ trợ đặc biệt cho các bạn học viên năm cuối.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="col-lg-4">
          <div class="course-sidebar">
            <div class="price-card mb-4 animate-on-scroll" data-animation="animate__fadeInRight">
              <div class="price-header">
                <h3>Học phí</h3>
                <div class="price">
                  <span class="amount">7.999.000</span>
                  <span class="currency">VND</span>
                </div>
                <p class="text-muted">Lộ trình: 5 tháng</p>
              </div>
              <div class="price-features">
                <ul>
                  <li v-for="(benefit, index) in benefits" :key="index" :style="{ animationDelay: index * 0.1 + 's' }">
                    <i class="fas fa-check"></i> {{ benefit }}
                  </li>
                </ul>
              </div>
              <div class="price-cta">
                <button @click="showRegistrationModal = true" class="btn btn-primary w-100 pulse">ĐĂNG KÝ NGAY</button>
              </div>
            </div>
            <div class="instructor-card animate-on-scroll" data-animation="animate__fadeInRight">
              <div class="instructor-body">
              <div class="instructor-infomation">
                <div class="instructor-avatar">
                  <img src="../assets/images/huynhhaithien.png" alt="Huỳnh Hải Thiên">
                </div>
                <div class="instructor-name mt-4">HUỲNH HẢI THIÊN</div>
              </div>
                <div class="instructor-title mt-2">Manager bộ phận phát triển giải pháp AI tại Techzen & Giảng viên IT giàu kinh nghiệm</div>
                <div class="instructor-info mt-3">
                  <ul class="list-unstyled">
                    <li class="d-flex align-items-baseline mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Hơn 7 năm du học Nhật Bản mảng AI</span>
                    </li>
                    <li class="d-flex align-items-baseline mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Hơn 6 năm kinh nghiệm làm mentor đào tạo các bạn Fresher IT mảng AI</span>
                    </li>
                    <li class="d-flex align-items-baseline mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Chuyên gia đào tạo AI cho Techzen</span>
                    </li>
                  </ul>
                </div>
                <div class="skill-tags mt-3">
                  <span class="skill-tag python">Python</span>
                  <span class="skill-tag ai">AI & ML</span>
                  <span class="skill-tag fastapi">FastAPI</span>
                  <span class="skill-tag db">MySQL</span>
                </div>
              </div>
            </div>

            <section class="section  animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-2 fs-3 ">Khuyến mãi đặc biệt</h2>
            <div class="promotions-section">
              <div class="promotions-list">
                <div class="promotion-item compact d-flex align-items-start">
                  <div class="promotion-icon me-2">
                    <i class="bi bi-tag-fill text-danger"></i>
                  </div>
                  <div>
                    <h5>Đăng ký sớm</h5>
                    <p class="small mb-0">Giảm 20% học phí cho học viên đăng ký trước ngày 8/3/2024.</p>
                  </div>
                </div>
                <div class="promotion-item compact d-flex align-items-start">
                  <div class="promotion-icon me-2">
                    <i class="bi bi-people-fill text-primary"></i>
                  </div>
                  <div>
                    <h5>Đăng ký nhóm</h5>
                    <p class="small mb-0">Giảm 200.000đ/người với nhóm 2 người, 500.000đ/người với nhóm 3 người trở lên.</p>
                  </div>
                </div>
                <div class="promotion-item compact d-flex align-items-start">
                  <div class="promotion-icon me-2">
                    <i class="bi bi-briefcase-fill text-success"></i>
                  </div>
                  <div>
                    <h5>Cơ hội thực tập</h5>
                    <p class="small mb-0">100% học viên được thực tập tại Techzen với cơ hội làm việc lâu dài.</p>
                  </div>
                </div>
              </div>
              <div class="hotline mt-4 pulse">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="bi bi-telephone-fill text-primary me-2 fs-4"></i>
                  <p class="mb-0 fw-bold fs-5">Hotline đăng ký: <span class="text-primary">093 550 56 40</span></p>
                </div>
              </div>
            </div>
          </section>
            <div class="course-location  animate-on-scroll" data-animation="animate__fadeInRight" style="animation-delay: 0.7s">
              <h3 class="sidebar-title">Địa điểm học</h3>
              <div class="location-card p-3 border rounded">
                <p class="mb-0"><i class="bi bi-geo-alt text-primary me-2"></i> 06 Trần Phú, Hải Châu, Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section animated-gradient animate-on-scroll" data-animation="animate__fadeIn">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="mb-4">Sẵn sàng bắt đầu hành trình Python AI của bạn?</h2>
          <p class="mb-4">Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và bắt đầu xây dựng tương lai công nghệ!</p>
          <button @click="showRegistrationModal = true" class="btn btn-light btn-lg pulse">Đăng ký học</button>
        </div>
      </div>
    </div>

    <!-- Registration Modal -->
    <div class="modal" v-if="showRegistrationModal">
      <div class="modal-content registration-modal-content">
        <span class="close-btn" @click="showRegistrationModal = false">&times;</span>
        <h2>Đăng ký khóa học</h2>
        <p>Hoàn thành mẫu đăng ký dưới đây để bắt đầu hành trình học tập cùng chúng tôi</p>
        
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="fullName">Họ và tên <span class="required">*</span></label>
            <input 
              type="text" 
              id="fullName" 
              v-model="form.fullName" 
              :class="{ 'error': errors.fullName }"
              required
            >
            <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
          </div>
          
          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              :class="{ 'error': errors.email }"
              required
            >
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="phone">Số điện thoại <span class="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone"
              :class="{ 'error': errors.phone }"
              required
            >
            <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
          </div>
          
          <div class="form-group">
            <label for="course">Khóa học đăng ký</label>
            <input 
              type="text" 
              id="course" 
              v-model="form.course"
              disabled
            >
          </div>
          
          <div class="form-group">
            <label for="experience">Kinh nghiệm lập trình</label>
            <select id="experience" v-model="form.experience">
              <option value="beginner">Mới bắt đầu</option>
              <option value="intermediate">Có kinh nghiệm cơ bản</option>
              <option value="advanced">Có kiến thức chuyên sâu</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Ghi chú thêm</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="4"
            ></textarea>
          </div>
          
          <div class="form-group checkbox">
            <input 
              type="checkbox" 
              id="terms" 
              v-model="form.terms"
              :class="{ 'error': errors.terms }"
              required
            >
            <label for="terms">
              Tôi đồng ý với <a href="#" @click.prevent="showTerms = true">điều khoản và điều kiện</a> <span class="required">*</span>
            </label>
            <span class="error-message" v-if="errors.terms">{{ errors.terms }}</span>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Đang gửi...' : 'Đăng ký ngay' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <div class="modal" v-if="showSuccessModal">
      <div class="modal-content success-modal-content">
        <span class="close-btn" @click="showSuccessModal = false">&times;</span>
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2>Đăng ký thành công!</h2>
        <p>Cảm ơn bạn đã đăng ký khóa học. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
        <button class="btn" @click="showSuccessModal = false">Đóng</button>
      </div>
    </div>

    <!-- Terms Modal -->
    <div class="modal" v-if="showTerms">
      <div class="modal-content terms-content">
        <span class="close-btn" @click="showTerms = false">&times;</span>
        <h2>Điều khoản và điều kiện</h2>
        <div class="terms-text">
          <h3>1. Điều khoản sử dụng</h3>
          <p>Bằng việc đăng ký và tham gia khóa học tại TechAcademy, học viên đồng ý tuân theo các điều khoản và điều kiện được nêu dưới đây.</p>
          
          <h3>2. Thanh toán và hoàn tiền</h3>
          <p>Học viên cần thanh toán đầy đủ học phí trước khi bắt đầu khóa học. Trong trường hợp học viên muốn rút khỏi khóa học, chính sách hoàn tiền sẽ được áp dụng theo quy định của TechAcademy.</p>
          
          <h3>3. Tài liệu học tập</h3>
          <p>Tất cả tài liệu học tập được cung cấp trong khóa học đều thuộc bản quyền của TechAcademy. Học viên không được sao chép, phân phối hoặc sử dụng các tài liệu này cho mục đích thương mại mà không có sự cho phép bằng văn bản từ TechAcademy.</p>
          
          <h3>4. Chứng chỉ</h3>
          <p>Chứng chỉ hoàn thành khóa học sẽ được cấp cho học viên đáp ứng đầy đủ các yêu cầu của khóa học, bao gồm tham gia các buổi học và hoàn thành các bài tập, dự án theo quy định.</p>
          
          <h3>5. Quy tắc ứng xử</h3>
          <p>Học viên cần tuân thủ các quy tắc ứng xử trong suốt quá trình học tập, tôn trọng giảng viên và các học viên khác, không có hành vi gây rối hoặc làm ảnh hưởng đến môi trường học tập.</p>
        </div>
        <button class="btn" @click="acceptTerms">Tôi đồng ý</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursePythonView',
  data() {
    return {
      benefits: [
        'Nắm vững Python Core, OOP & MySQL',
        'Xây dựng API RESTful với FastAPI',
        'Tích hợp AI trong các ứng dụng thực tế',
        'Thực hành với dự án thực tế',
        'Hỗ trợ thực tập tại doanh nghiệp',
        'Chứng chỉ hoàn thành từ Techzen'
      ],
      animatedElements: [], // For tracking scroll-triggered animations
      scrollObserver: null,  // Intersection Observer for scroll animations
      showRegistrationModal: false,
      showSuccessModal: false,
      showTerms: false,
      form: {
        fullName: '',
        email: '',
        phone: '',
        course: 'Lập trình Python AI',
        experience: 'beginner',
        message: '',
        terms: false
      },
      errors: {},
      isSubmitting: false
    }
  },
  mounted() {
    // Initialize scroll-triggered animations
    this.initializeScrollAnimations();
    
    // Add subtle background animation
    this.initializeBackgroundEffects();
  },
  beforeUnmount() {
    // Clean up observers when component is destroyed
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
    
    // Remove any event listeners
    window.removeEventListener('scroll', this.handleParallaxEffect);
  },
  methods: {
    initializeScrollAnimations() {
      // Configure the intersection observer
      const options = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when at least 10% of the element is visible
      };
      
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation class when element comes into view
            entry.target.classList.add('animate__animated');
            
            const animationType = entry.target.dataset.animation || 'animate__fadeIn';
            entry.target.classList.add(animationType);
            
            // Unobserve after animation is triggered
            this.scrollObserver.unobserve(entry.target);
          }
        });
      }, options);
      
      // Select elements to observe
      this.animatedElements = document.querySelectorAll('.animate-on-scroll');
      this.animatedElements.forEach(element => {
        this.scrollObserver.observe(element);
      });
    },
    
    initializeBackgroundEffects() {
      // Add parallax scrolling effect to header
      window.addEventListener('scroll', this.handleParallaxEffect);
      
      // Initialize animated background effect for header
      const headerSection = document.querySelector('.header-section');
      if (headerSection) {
        // Add animated gradient to header
        headerSection.classList.add('animated-gradient');
      }
    },
    
    handleParallaxEffect() {
      const scrollPosition = window.scrollY;
      
      // Parallax effect for header
      const headerElements = document.querySelectorAll('.parallax-element');
      headerElements.forEach(element => {
        const speed = element.dataset.speed || 0.3;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    },
    submitForm() {
      // Validate form
      this.errors = {};
      
      if (!this.form.fullName.trim()) {
        this.errors.fullName = 'Vui lòng nhập họ và tên';
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Vui lòng nhập email';
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Email không hợp lệ';
      }
      
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Vui lòng nhập số điện thoại';
      }
      
      if (!this.form.terms) {
        this.errors.terms = 'Vui lòng đồng ý với điều khoản và điều kiện';
      }
      
      // If there are no errors, process the form
      if (Object.keys(this.errors).length === 0) {
        this.isSubmitting = true;
        
        // Simulate API call for form submission
        setTimeout(() => {
          this.isSubmitting = false;
          this.showRegistrationModal = false;
          this.showSuccessModal = true;
          this.resetForm();
        }, 1500);
      }
    },
    
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    
    resetForm() {
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        course: 'Lập trình Python AI',
        experience: 'beginner',
        message: '',
        terms: false
      };
    },
    
    acceptTerms() {
      this.form.terms = true;
      this.showTerms = false;
    }
  }
}
</script>

<style scoped>

.header-section {
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  color: white;
  padding: 4rem 0;
}

/* Add animated background gradient */
.animated-gradient {
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
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
  transition: transform 0.5s ease;
}

.course-image:hover img {
  transform: scale(1.03);
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
  transition: width 0.5s ease;
}

.section-title:hover:after {
  width: 100px;
}

.target-audience li {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.target-audience li:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.icon-box {
  width: 50px;
  height: 50px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.target-audience li:hover .icon-box {
  background: rgba(74, 107, 255, 0.2);
  transform: scale(1.1);
}

.curriculum-overview .table th {
  background-color: #4a6bff;
  color: white;
}

.accordion-item {
  border: none;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.accordion-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.accordion-button {
  font-weight: 600;
  padding: 1.2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, #4a6bff20 0%, #6a3aef20 100%);
  color: #4a6bff;
}

.accordion-button:not(.collapsed)::after {
  transform: rotate(-180deg) scale(1.2);
}

.accordion-body {
  background-color: #ffffff;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.benefit-card {
  transition: transform 0.3s, box-shadow 0.3s;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.benefit-card:hover {
  transform: translateY(-10px) rotateX(2deg) rotateY(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

.price-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
  transition: transform 0.3s ease;
}

.price-features li:hover {
  transform: translateX(5px);
}

.price-features li i {
  color: #4a6bff;
  margin-top: 3px;
}

.price-cta {
  padding: 0 2rem 2rem;
  text-align: center;
}

.price-cta .btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.price-cta .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.price-cta .btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  z-index: -1;
  transition: left 0.5s ease;
}

.price-cta .btn:hover:before {
  left: 100%;
}

.instructor-card {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.instructor-card:hover {
  transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.instructor-infomation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.instructor-avatar {
  width: 100px;
  height: 120px;
  border-radius: 20%;
  overflow: hidden;
}

.instructor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.instructor-card:hover .instructor-avatar img {
  transform: scale(1.05);
}

.instructor-details h4 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.instructor-title {
  color: #4a6bff;
  font-weight: 600;
  margin-bottom: 1rem;
}

.sidebar-title {
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-size: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.sidebar-title:after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: #4a6bff;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

.sidebar-title:hover:after {
  width: 80px;
}

.promotion-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.promotion-item:hover {
  transform: translateX(8px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.promotion-icon {
  width: 40px;
  height: 40px;
  background: rgba(74, 107, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #4a6bff;
  transition: all 0.3s ease;
}

.promotion-item:hover .promotion-icon {
  transform: scale(1.1);
  background: rgba(74, 107, 255, 0.2);
}

.promotion-content h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
}

.promotion-content p {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
}

.cta-section {
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.cta-section.animated-gradient {
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
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

.cta-content .btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-content .btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .course-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .course-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .course-actions .btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .header-section {
    padding: 3rem 0;
  }
  
  .course-title {
    font-size: 2rem;
  }
  
  .instructor-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .instructor-avatar {
    margin-bottom: 1rem;
  }
  
  .sidebar-title:after {
    left: 50%;
    transform: translateX(-50%);
  }
}

.section-subtitle {
  font-size: 1rem;
  color: #4a6bff;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.instructor-education li,
.instructor-experience li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
}

.skill-tag:after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  opacity: 0;
  transition: all 0.6s;
}

.skill-tag:hover:after {
  opacity: 1;
  transform: rotate(45deg) translate(-10%, -10%);
}

.skill-tag.python {
  background-color: #3776ab20;
  color: #3776AB;
}

.skill-tag.ai {
  background-color: #00800020;
  color: #008000;
}

.skill-tag.fastapi {
  background-color: #80008020;
  color: #800080;
}

.skill-tag.sql {
  background-color: #ffd70020;
  color: #B8860B;
}

.skill-tag.vue {
  background-color: #42b88320;
  color: #42b883;
}

.skill-tag.db {
  background-color: #0080ff20;
  color: #0080ff;
}

.skill-tag.cloud {
  background-color: #ff660020;
  color: #ff6600;
}

/* Làm nổi bật lộ trình học */
.curriculum-overview {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.curriculum-overview .table {
  margin-bottom: 0;
}

.curriculum-overview .table th {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
  color: white;
  font-weight: 600;
  border: none;
  padding: 1rem;
}

.curriculum-overview .table td {
  padding: 1rem;
  vertical-align: middle;
}

.curriculum-overview .table tbody tr {
  transition: all 0.3s ease;
  opacity: 0.8;
}

.curriculum-overview .table tbody tr:hover {
  background-color: #f0f4ff;
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 8px 20px rgba(74, 107, 255, 0.15);
  z-index: 1;
  opacity: 1;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f8f9ff;
}

/* Animation classes */
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
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

/* Floating animation */
.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Pulse animation */
.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(74, 107, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(74, 107, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(74, 107, 255, 0);
  }
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid #4a6bff;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #4a6bff }
}

/* Bounce animation */
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 95%;
  max-height: 95vh;
  overflow-y: auto;
  animation: modalFadeIn 0.3s ease-out;
}

.registration-modal-content {
  width: 600px;
  padding: 30px;
}

.success-modal-content {
  width: 450px;
  padding: 40px;
  text-align: center;
}

.terms-content {
  width: 700px;
  padding: 30px;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #dc3545;
}

.modal h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #212529;
}

.modal p {
  color: #6c757d;
  margin-bottom: 25px;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #495057;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #4a6bff;
  outline: none;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #dc3545;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 5px;
}

.required {
  color: #dc3545;
}

.checkbox {
  display: flex;
  align-items: flex-start;
}

.checkbox input {
  margin-top: 5px;
  margin-right: 10px;
}

.checkbox label {
  margin-bottom: 0;
}

.checkbox a {
  color: #4a6bff;
  text-decoration: none;
}

.checkbox a:hover {
  text-decoration: underline;
}

.form-actions {
  margin-top: 30px;
  text-align: center;
}

/* Success Modal Styles */
.success-icon {
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

/* Terms Modal Styles */
.terms-text {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
}

.terms-text h3 {
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: #212529;
}

.terms-text p {
  color: #6c757d;
  margin-bottom: 15px;
}

/* Button Styles */
.register-btn {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  background: #4a6bff;
  border: none;
  transition: all 0.3s ease;
}

.register-btn:hover {
  background: #3451d1;
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
}

.btn {
  background: #4a6bff;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  background: #3451d1;
  transform: translateY(-2px);
}

.btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

/* Animation */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .registration-modal-content,
  .success-modal-content,
  .terms-content {
    width: 100%;
    padding: 20px;
  }
}

.instructor-info li {
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.4;
}

.instructor-info .bi {
  color: #4a6bff;
  font-size: 0.8rem;
  flex-shrink: 0;
}
</style> 