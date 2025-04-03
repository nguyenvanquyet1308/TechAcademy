<template>
  <div class="course-java font-lato">
    <div class="header-section py-5 ">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="course-title fs-1 animate__animated animate__fadeInDown font-lato-bold">Lập trình Java Back-end</h1>
            <p class="course-description animate__animated animate__fadeIn animate__delay-1s fs-4">
              Khóa học Java Back-end toàn diện giúp bạn làm chủ ngôn ngữ lập trình Java và xây dựng các ứng dụng web hiện đại, RESTful API và hệ thống backend mạnh mẽ. Phù hợp cho sinh viên ngành CNTT và những người muốn nâng cao kỹ năng lập trình.
            </p>
            <div class="course-meta animate__animated animate__fadeIn animate__delay-1s">
              <div class="meta-item">
                <i class="bi bi-clock me-2"></i>
                <span>3 tháng (36 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-bar-chart me-2"></i>
                <span>Cơ bản đến nâng cao</span>
              </div>
              <!-- <div class="meta-item">
                <i class="bi bi-calendar me-2"></i>
                <span>Khai giảng: 09/5/2025</span>
              </div> -->
              <div class="meta-item">
                <i class="bi bi-geo-alt me-2"></i>
                <span>Học offline tại văn phòng Techzen</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-calendar-week me-2"></i>
                <span>Thứ 2, 4, 6 từ 18h00 - 21h00 hàng tuần</span>
              </div>
            </div>
            <div class="course-actions animate__animated animate__fadeIn animate__delay-1s">
              <button @click="showRegistrationModal = true" class="btn btn-light btn-lg me-2 pulse">Đăng ký học</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image animate__animated animate__fadeInRight parallax-element" data-speed="0.15">
              <img src="../assets/images/khoahocjava.jpg" style="width: 540px; height: 480px;" alt="Python Course" class="img-fluid">
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
          <section class="section mb-2 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-3 font-lato-bold">Tổng quan khóa học</h2>
            <div class="course-overview animate-on-scroll" data-animation="animate__fadeIn">
              <p>Khóa học Java Back-end cung cấp kiến thức toàn diện về Java Core, OOP, MySQL và Spring Framework, giúp bạn xây dựng các ứng dụng web hiện đại, RESTful API và hệ thống backend mạnh mẽ. Bạn sẽ học cách phát triển ứng dụng từ cơ bản đến nâng cao, kết nối cơ sở dữ liệu, xử lý bảo mật và triển khai ứng dụng thực tế.</p>
              <p class="mb-2">Được thiết kế cho sinh viên CNTT và những người muốn chuyên sâu vào mảng phát triển Back-end với Java, khóa học này kết hợp lý thuyết với thực hành qua nhiều bài tập, giúp bạn xây dựng portfolio và sẵn sàng tham gia vào dự án thực tế.</p>
            </div>
          </section>

          <section class="section mb-2 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-3 font-lato-bold">Đối tượng học viên</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="target-audience">
                  <ul class="list-unstyled">
                    <li class="d-flex mb-2">
                      <div class="icon-box me-3">
                        <i class="bi bi-mortarboard-fill text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Sinh viên ngành CNTT và các ngành liên quan</h5>
                        <p class="mb-1">Bao gồm những sinh viên muốn phát triển kỹ năng về Java Back-end để sẵn sàng tham gia vào dự án thực tế.</p>
                      </div>
                    </li>
                    <li class="d-flex mb-2">
                      <div class="icon-box me-3">
                        <i class="bi bi-person-fill text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Sinh viên năm 2, 3, 4</h5>
                        <p class="mb-1">Đang tìm kiếm cơ hội để tiếp cận công nghệ mới, nâng cao kỹ năng lập trình, và đáp ứng nhu cầu thực tiễn của doanh nghiệp.</p>
                      </div>
                    </li>
                    <li class="d-flex mb-2">
                      <div class="icon-box me-3">
                        <i class="bi bi-code-slash text-primary fs-4"></i>
                      </div>
                      <div>
                        <h5>Những người học muốn nâng cao kỹ năng lập trình</h5>
                        <p class="mb-1">Mong muốn chuyên sâu vào mảng phát triển Back-end với Java và các công nghệ liên quan như MySQL và Spring Boot.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section class="section mb-2 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-3 font-lato-bold">Lộ trình khóa học</h2>
            <div class="curriculum-overview mb-3">
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
                          <td>Java Core và OOP</td>
                          <td>10</td>
                          <td>Hiểu và thành thạo kỹ thuật lập trình hướng đối tượng với Java.</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>MySQL</td>
                          <td>6</td>
                          <td>Nắm vững kiến thức cơ bản về thiết kế, thao tác với CSDL, và kỹ thuật xử lý dữ liệu.</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Spring Boot</td>
                          <td>20</td>
                          <td>Xây dựng API theo kiến trúc RESTful, nắm vững mô hình MVC, và thao tác với JDBC.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="section mb-2 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-3 font-lato-bold">
              <i class="bi bi-book-fill text-primary me-2"></i>
              Nội dung khóa học
            </h2>
            <div class="accordion" id="courseContent">
              <div v-for="(module, index) in modules" :key="index" class="accordion-item animate-on-scroll" data-animation="animate__fadeInUp" :style="{ animationDelay: index * 0.2 + 's' }">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="bi bi-filetype-java text-primary me-2"></i>
                    Java Core & OOP (10 buổi)
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
                            <td>1</td>
                            <td>Cài đặt môi trường<br>Chương trình đầu tiên<br>Tổng quan về Java</td>
                            <td>- Cài đặt JDK (Java Development Kit)<br>- Cài đặt IntelliJ IDEA<br>- Chương trình đầu tiên<br>- Biến, Kiểu dữ liệu</td>
                          </tr>
                          <tr>
                            <td>2, 3</td>
                            <td>Cấu trúc điều kiện<br>Cấu trúc lặp</td>
                            <td>- Câu lệnh điều khiển<br>- Các vòng lặp trong Java</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Debug & String</td>
                            <td>- Debug và 1 số phương pháp debug<br>- So sánh String, StringBuilder và StringBuffer</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Mảng một chiều<br>ArrayList</td>
                            <td>- Mảng<br>- Wrapper Class và Autoboxing/Unboxing</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Tổng quan về lập trình<br>OOP</td>
                            <td>- OOP</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Constructor, Access<br>Static<br>Kế thừa</td>
                            <td>- Static<br>- Kế thừa</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Đa hình<br>Abstract class, Interface</td>
                            <td>- Đa hình<br>- Trừu tượng</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Java Collection</td>
                            <td>- So sánh ArrayList và MyArrayList</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Exception<br>Biểu thức chính quy</td>
                            <td>- Exception<br>- Kiểm tra chuỗi bằng Regex</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="bi bi-database-fill fs-5 text-primary me-2"></i>
                    MySQL (6 buổi)
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
                            <td>11</td>
                            <td>Cài đặt môi trường<br>Overview database</td>
                            <td>- Cài đặt MySQL Server và MySQL Workbench<br>- Cơ sở dữ liệu</td>
                          </tr>
                          <tr>
                            <td>12, 13</td>
                            <td>Thiết kế Cơ Sở Dữ Liệu</td>
                            <td>- ERD</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>Thao tác với CSDL</td>
                            <td>- Các loại JOIN</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>Group by, Having</td>
                            <td>- Làm việc với tập hợp dữ liệu</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>Kiểm tra chất lượng</td>
                            <td>- Đánh giá kết quả học tập</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i class="bi bi-gear-fill fs-5 text-primary me-2"></i>
                    Spring Boot (20 buổi)
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
                            <td>17</td>
                            <td>Tổng quan về web</td>
                            <td>- Phân biệt Request và Response</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>CRUD theo RestFul API</td>
                            <td>- Lombok</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>Mô hình MVC</td>
                            <td>- Mô hình MVC</td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td>JDBC</td>
                            <td>- Maven & Gradle</td>
                          </tr>
                          <tr>
                            <td>21</td>
                            <td>Kiểm tra chất lượng</td>
                            <td>- ORM (Object-Relational Mapping)</td>
                          </tr>
                          <tr>
                            <td>22</td>
                            <td>ORM</td>
                            <td>- ORM (Object-Relational Mapping)</td>
                          </tr>
                          <tr>
                            <td>23, 24</td>
                            <td>Spring Data JPA</td>
                            <td>- Flyway</td>
                          </tr>
                          <tr>
                            <td>25-29</td>
                            <td>Bảo mật và Kiểm tra</td>
                            <td>- Authentication và Authorization<br>- Spring Security<br>- JUnit, SonarLint<br>- Refresh Token</td>
                          </tr>
                          <tr>
                            <td>30-36</td>
                            <td>Case study</td>
                            <td>- Xây dựng ứng dụng hoàn chỉnh với tính năng Authentication, Authorization</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                <h3 class="font-lato-bold">Học phí</h3>
                <div class="price-amount">
                  <span class="amount">6.999.000 VND</span>
                  <p class="text-muted">Lộ trình: 3 tháng</p>
                </div>
              </div>
              <div class="price-body">
                <div class="price-features">
                <ul>
                  <li v-for="(benefit, index) in benefits" :key="index" :style="{ animationDelay: index * 0.1 + 's' }">
                    <i class="bi bi-check-circle-fill text-primary "></i>
                    {{ benefit }}
                  </li>
                </ul>
              </div>
              <button @click="showRegistrationModal = true" class="btn btn-primary w-100 mt-4 pulse">Đăng ký ngay</button> 
              </div>
            </div>

            <div class="instructor-card animate-on-scroll" data-animation="animate__fadeInRight">
              <div class="instructor-body">
              <div class="instructor-infomation">
                <div class="instructor-avatar">
                  <img src="../assets/images/nguyenngocquang.png" alt="Nguyễn Ngọc Quang">
                </div>
                <div class="instructor-name mt-4 font-lato-bold">NGUYỄN NGỌC QUANG</div>
              </div>
                <div class="instructor-title mt-2">TeamLeader Developer tại Techzen & Giảng viên IT chuyên nghiệp</div>
                <div class="instructor-info mt-3">
                  <ul class="list-unstyled">
                    <li class="d-flex align-items-baseline mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>7 năm tập trung vào các dự án web phức tạp, công nghệ hiện đại.</span>
                    </li>
                    <li class="d-flex align-items-baseline mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>6 năm truyền đạt kiến thức từ căn bản đến nâng cao cho hàng ngàn học viên, từ các bạn mới bắt đầu đến những người đã có nền tảng.</span>
                    </li>
                  </ul>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag java">Java</span>
                  <span class="skill-tag spring">Spring Boot</span>
                  <span class="skill-tag db">MySQL</span>
                  <span class="skill-tag api">RESTful API</span>
                </div>
              </div>
            </div>

            <section class="section animate-on-scroll" data-animation="animate__fadeInUp">
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
          </div>
        </div>
      </div>
      
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <section class="section mb-2 animate-on-scroll" data-animation="animate__fadeInUp">
            <h2 class="section-title mb-3 font-lato-bold">Lợi ích khi tham gia khóa học</h2>
            <div class="benefits-list">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="benefit-card h-100 p-3 border rounded shadow-sm">
                    <div class="benefit-icon mb-3 text-primary text-center">
                      <i class="bi bi-code-square fs-1" style="font-size: 3rem !important;"></i>
                    </div>
                    <h3 class="mb-3 text-center fw-bold">Lập trình Java Core và OOP</h3>
                    <h5>Hiểu và thành thạo kỹ thuật lập trình hướng đối tượng với Java, có khả năng sử dụng các cấu trúc điều kiện, cấu trúc lặp, phương thức, và quản lý mảng một chiều.</h5>
                  </div>
                </div>
                
                <div class="col-md-6 mb-3">
                  <div class="benefit-card h-100 p-3 border rounded shadow-sm">
                    <div class="benefit-icon mb-3 text-primary text-center">
                      <i class="bi bi-database fs-1" style="font-size: 3rem !important;"></i>
                    </div>
                    <h3 class="mb-3 text-center fw-bold">Làm việc với cơ sở dữ liệu MySQL</h3>
                    <h5>Nắm vững kiến thức cơ bản về thiết kế, thao tác với CSDL, và kỹ thuật xử lý dữ liệu với MySQL. Hiểu cách làm việc với các cơ chế truy vấn trong cơ sở dữ liệu.</h5>
                  </div>
                </div>
                
                <div class="col-md-6 mb-3">
                  <div class="benefit-card h-100 p-3 border rounded shadow-sm">
                    <div class="benefit-icon mb-3 text-primary text-center">
                      <i class="bi bi-gear fs-1" style="font-size: 3rem !important;"></i>
                    </div>
                    <h3 class="mb-3 text-center fw-bold">Xử lý Backend với Spring Boot</h3>
                    <h5>Xây dựng API theo kiến trúc RESTful, nắm vững mô hình MVC, và thao tác với JDBC. Thành thạo ORM với Spring Data JPA, làm việc với nhiều bảng, và sử dụng các công cụ kiểm tra chất lượng mã nguồn.</h5>
                  </div>
                </div>
                
                <div class="col-md-6 mb-3">
                  <div class="benefit-card h-100 p-3 border rounded shadow-sm">
                    <div class="benefit-icon mb-3 text-danger text-center">
                      <i class="bi bi-building fs-1" style="font-size: 3rem !important;"></i>
                    </div>
                    <h3 class="mb-3 text-center fw-bold">Thực tập tại doanh nghiệp</h3>
                    <h5>Học viên được hỗ trợ tham gia thực tập các dự án thực tế của công ty Techzen. Chứng chỉ học và thực hành tại Công ty TNHH Techzen, cùng hỗ trợ đặc biệt cho các bạn học viên năm cuối.</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="cta-section py-5 animated-gradient animate-on-scroll" data-animation="animate__fadeIn">
      <div class="container py-4 text-center text-white">
        <h2 class="mb-4">Sẵn sàng để bắt đầu hành trình Java của bạn?</h2>
        <p class="mb-4">Đừng bỏ lỡ cơ hội nâng cao kỹ năng và mở rộng cơ hội nghề nghiệp!</p>
      <router-link to="/register"> <button @click="showRegistrationModal = true" class="btn btn-light btn-lg pulse">Đăng ký học ngay</button> </router-link>
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

    <!-- Facebook Chatbot -->
    <FacebookChatbot />
  </div>
</template>

<script>
import Testimonials from '@/components/ui/Testimonials.vue'
import FacebookChatbot from '@/components/FacebookChatbot.vue'

export default {
  name: 'CourseJavaSpringView',
  components: {
    Testimonials,
    FacebookChatbot
  },
  data() {
    return {
      courseTestimonials: [
        {
          content: '"Khóa học Java Backend này đã giúp tôi có được kiến thức toàn diện về lập trình backend. Đặc biệt phần Spring Boot đã giúp tôi tự tin xây dựng API hoàn chỉnh."',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
          name: 'Lê Minh Tuấn',
          title: 'Java Developer tại FPT Software'
        },
        {
          content: '"Mentor rất tận tâm, kiến thức chuyên sâu về Java và Spring. Tôi đặc biệt ấn tượng với cách giảng viên áp dụng các dự án thực tế vào bài giảng."',
          avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
          name: 'Hoàng Thị Nga',
          title: 'Sinh viên Đại học Bách Khoa'
        }
      ],
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
      ],
      countdownInterval: null,
      animatedElements: [], // For tracking scroll-triggered animations
      scrollObserver: null,  // Intersection Observer for scroll animations
      showRegistrationModal: false,
      showSuccessModal: false,
      showTerms: false,
      form: {
        fullName: '',
        email: '',
        phone: '',
        course: 'Lập trình Java Back-end',
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
    
    // Initialize countdown timer
    this.startCountdown();
  },
  beforeUnmount() {
    // Clean up observers when component is destroyed
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
    
    // Remove any event listeners
    window.removeEventListener('scroll', this.handleParallaxEffect);
    
    // Clear the countdown interval
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
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
      console.log("chạy tơi sdya ")
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
      // If there are no errors, process the form
      if (Object.keys(this.errors).length === 0) {
        this.isSubmitting = true;
        
        // Chuẩn bị dữ liệu để gửi đến Google Sheets
        const formData = {
          fullName: this.form.fullName,
          email: this.form.email,
          phone: this.form.phone,
          course: this.form.course,
          experience: this.form.experience,
          message: this.form.message,
          timestamp: Date.now()  // Trả về số milliseconds từ 01/01/1970
        };
        
        // URL của Google Apps Script web app - cần thay thế bằng URL thực tế của bạn
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxWaH4JisBQDeb_HV4_cVKRmdTJtjOX2AdcrSIjQXGuvs_6erJuRAG44KFEdy7XGD79RQ/exec';
        
        // Tạo URL encoded string từ dữ liệu
        const urlEncodedData = Object.keys(formData)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
          .join('&');
        
        // Gửi dữ liệu đến Google Sheets
        console.log('Đang gửi dữ liệu đến:', scriptURL);
        console.log('Dữ liệu gửi đi:', formData);
        
        fetch(scriptURL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: urlEncodedData
        })
        .then(response => {
          // Kiểm tra nếu response là text hoặc json
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json();
          } else {
            return response.text().then(text => {
              // Nếu là "Added.." thì coi như thành công
              if (text.includes("Added")) {
                return { result: "success" };
              }
              return { result: "error", error: text };
            });
          }
        })
        .then(data => {
          console.log('Phản hồi từ server:', data);
          if (data.result === 'success') {
            this.isSubmitting = false;
            this.showRegistrationModal = false;
            this.showSuccessModal = true;
            this.resetForm();
          } else {
            this.isSubmitting = false;
            alert('Lỗi: ' + data.error);
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
          this.isSubmitting = false;
          alert('Có lỗi xảy ra khi gửi đơn đăng ký. Vui lòng thử lại sau.');
        });
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
        course: 'Lập trình Java Back-end',
        experience: 'beginner',
        message: '',
        terms: false
      };
    },
    
    acceptTerms() {
      this.form.terms = true;
      this.showTerms = false;
    },
    
    startCountdown() {
      // Set the opening date (May 9, 2025)
      const openingDate = new Date(2025, 4, 9).getTime(); // Tháng 0-11 trong JavaScript, tháng 5 = 4
      
      // Update the countdown every second
      this.countdownInterval = setInterval(() => {
        // Get the current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const timeRemaining = openingDate - now;
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Update the countdown elements
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        
        if (daysElement) daysElement.innerText = days;
        if (hoursElement) hoursElement.innerText = hours < 10 ? `0${hours}` : hours;
        if (minutesElement) minutesElement.innerText = minutes < 10 ? `0${minutes}` : minutes;
        if (secondsElement) secondsElement.innerText = seconds < 10 ? `0${seconds}` : seconds;
        
        // If the countdown is over, clear the interval
        if (timeRemaining < 0) {
          clearInterval(this.countdownInterval);
          if (daysElement) daysElement.innerText = '00';
          if (hoursElement) hoursElement.innerText = '00';
          if (minutesElement) minutesElement.innerText = '00';
          if (secondsElement) secondsElement.innerText = '00';
        }
      }, 1000);
    },
  }
}
</script>

<style scoped>
.course-detail {
  padding-bottom: 3rem;
}

.sidebar-title {
  font-size: 20px;
}

/* Font styles */
.font-lato {
  font-family: 'Lato', sans-serif;
}

.font-lato-bold {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}

.font-sf-mono {
  font-family: 'SF Mono', monospace;
}

/* Apply SF Mono to code sections */
.code-block {
  font-family: 'SF Mono', monospace;
}

.header-section {
  background: #0d6efd;
  color: white;
  padding: 3rem 0;
}

.course-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.course-description {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.course-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.meta-item span{
  font-size: 18px;
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
  padding: 2rem 0;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.course-overview p {
  font-size: 18px;
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
  font-weight: 600;
  padding: 1.2rem;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.instructor-card {
  display: flex;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.instructor-infomation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.instructor-avatar {
  width: 150px;
  height: 170px;
  border-radius: 20%;
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
  width: 30px;
  height: 30px;
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
  font-size: 15px;
}

.promotion-content p {
  color: #6c757d;
  margin: 0;
  font-size: 15px;
}

.cta-section {
  background: #0d6efd;
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

.skill-tag.java {
  background-color: #5382a1;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-right: 5px;
  font-size: 12px;
}

.skill-tag.spring {
  background-color: #6db33f;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-right: 5px;
  font-size: 12px;
}

.skill-tag.db {
  background-color: #00758f;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-right: 5px;
  font-size: 12px;
}

.skill-tag.api {
  background-color: #ff6c37;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-right: 5px;
  font-size: 12px;
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
  background: #0d6efd;
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
}

.curriculum-overview .table tbody tr:hover {
  background-color: #f8f9ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 107, 255, 0.1);
}

.target-audience li {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.target-audience li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.icon-box {
  width: 50px;
  height: 50px;
  background: rgba(47, 128, 237, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.golden-opportunity {
  background-color: #ffffff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border-top: 5px solid #2f80ed;
}

.golden-opportunity::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/images/pattern-bg.png');
  opacity: 0.03;
  pointer-events: none;
}

.golden-opportunity .lead {
  color: #2c3e50;
  font-weight: 600;
}

.opportunity-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  transition: all 0.3s ease;
}

.opportunity-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  background: #f0f7ff;
}

.opportunity-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  background: rgba(47, 128, 237, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hotline {
  border-left: 4px solid #2f80ed;
}

.contact-info {
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.promotions-section {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.promotions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.promotion-item.compact {
  background: white;
  border-radius: 6px;
  padding: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  display: flex;
  gap: 0.75rem;
  align-items: center;
  transition: all 0.2s ease;
}

.promotion-item.compact:hover {
  transform: translateX(3px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
}

.promotion-item.compact .promotion-icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  font-size: 0.9rem;
}

.promotion-item.compact .promotion-content h5 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

.promotion-item.compact .promotion-content p {
  font-size: 0.8rem;
  color: #6c757d;
}

/* Add animated background gradient */
.animated-gradient {
  background: #0d6efd;
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

/* Enhanced button animations */
.btn-primary {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary:before {
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

.btn-primary:hover:before {
  left: 100%;
}

/* Animated section headers */
.section-title {
  position: relative;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #2f80ed 0%, #56ccf2 100%);
  transition: width 0.5s ease;
}

.section-title:hover:after {
  width: 100px;
}

/* Enhanced accordion animations */
.accordion-item {
  overflow: hidden;
}

.accordion-button {
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  color: #2f80ed;
  box-shadow: 0 5px 15px rgba(47, 128, 237, 0.1);
}

.accordion-button:not(.collapsed)::after {
  transform: rotate(-180deg) scale(1.2);
}

/* Card hover effects with 3D tilt */
.price-card, .instructor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.price-card:hover, .instructor-card:hover {
  transform: translateY(-5px) rotateX(3deg) rotateY(3deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Staggered animation for list items */
.benefit-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUpStaggered 0.5s ease forwards;
}

@keyframes fadeInUpStaggered {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating elements */
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

/* Pulse animation for CTA elements */
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

/* Enhanced animations for table rows */
.curriculum-overview .table tbody tr {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.curriculum-overview .table tbody tr:hover {
  opacity: 1;
  background-color: #f0f4ff;
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 8px 20px rgba(74, 107, 255, 0.15);
  z-index: 1;
}

/* Advanced skill tag animations */
.skill-tag {
  position: relative;
  overflow: hidden;
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

/* Typewriter effect for important text */
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

/* Arrow bounce animation for scroll indicators */
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

/* Progress bar animation */
.progress-bar {
  width: 0;
  transition: width 1.5s ease-in-out;
}

.progress-animated {
  width: 100%;
}

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

.countdown-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.countdown-card .card-header {
  padding: 1rem;
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
}

.countdown-card .card-body {
  padding: 1.5rem;
}

.opening-date {
  margin-bottom: 1.5rem;
}

.date-label {
  font-size: 1rem;
  color: #6c757d;
  display: block;
  margin-bottom: 0.5rem;
}

.countdown-timer {
  margin: 1rem 0;
}

.countdown-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.countdown-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.countdown-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2f80ed;
}

.countdown-label {
  font-size: 0.8rem;
  color: #6c757d;
}
</style> 