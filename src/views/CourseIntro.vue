<template>
  <div class="course-intro font-lato">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title font-lato-bold">Giới thiệu Techzen Academy</h1>
        <p class="page-description font-lato">Nơi Kiến Tạo Tương Lai Lập Trình Viên Chuyên Nghiệp</p>
      </div>
    </section>

    <!-- Techzen Company & Academy Introduction Section -->
    <section class="section company-intro" v-motion
             :initial="{ opacity: 0 }"
             :visible="{ opacity: 1, transition: { duration: 800 } }">
      <div class="container">
        <div class="company-intro-content">
          <div class="academy-intro" v-motion
               :initial="{ opacity: 0, scale: 0.9 }"
               :visible="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 800 } }">
            <div class="academy-content">
              <h3 class="academy-title">Techzen Academy</h3>
              <p>Tại <strong>Techzen Academy</strong>, chúng tôi mang đến chương trình đào tạo lập trình toàn diện, <strong>từ nền tảng cơ bản đến các công nghệ hiện đại. Đội ngũ giảng viên giàu kinh nghiệm</strong> của chúng tôi sẽ hướng dẫn bạn một cách tỉ mỉ và chi tiết, giúp bạn nắm vững kiến thức và <strong>phát triển kỹ năng lập trình chuyên nghiệp</strong>.</p>
              <p>Chương trình học tập tại Techzen Academy không chỉ tập trung vào lý thuyết, mà còn chú trọng vào tình huống thực tế. Với sự chuẩn bị kỹ lưỡng từ Techzen Academy, bạn sẽ tự tin bước vào thế giới công nghệ và sẵn sàng chinh phục những cơ hội nghề nghiệp đầy triển vọng.</p>
              <div class="infoTechzen">
              <a href="https://techzen.vn/"  target="_blank">  <button class ="btn btn-primary">Thông tin thêm về Techzen</button></a>
              </div>
              <div class="company-info">
                <div class="info-items-wrapper">
                  <div class="info-item">
                    <span class="info-label">Thành lập:</span>
                    <span class="info-value">14/01/2022</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Địa chỉ:</span>
                    <span class="info-value">06 Trần Phú, P. Thạch Thang, Q. Hải Châu, TP. Đà Nẵng</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Liên hệ:</span>
                    <span class="info-value">0236 628 1189 | contact@techzen.vn</span>
                  </div>
                </div>
              </div>
              
              
              <div class="profile-card">
                <div class="profile-image">
                  <img src="../assets/images/CEO.png" alt="CEO Le Duy Linh">
                </div>
                <div class="profile-content">
                  <h2 class="profile-name">LÊ DUY LINH</h2>
                  <p class="profile-title">CEO Techzen | Giám đốc Điều hành Techzen & Sáng lập Techzen Academy – Trung tâm Đào tạo Công nghệ Thực hành</p>
                  <div class="profile-section">
                    <div>
                      <i class="bi bi-handbag me-2 fs-4"></i>
                      <h3>Kinh nghiệm làm việc</h3>
                    </div>
                    <ul class="profile-list">
                      <li><span class="check-icon"></span> CEO & Founder của Techzen</li>
                      <li><span class="check-icon"></span> Giám đốc điều hành Techzen & Sáng lập Techzen Academy</li>
                      <li><span class="check-icon"></span> Hơn 10 năm kinh nghiệm trong ngành công nghệ thông tin</li>
                      <li><span class="check-icon"></span> Đã trực tiếp đào tạo phát triển Agile cho nhân sự tại Việt Nam, Trung Quốc và Nhật Bản</li>
                      <li><span class="check-icon"></span> Tư vấn cho nhiều dự án phần mềm lớn trong và ngoài nước</li>
                    </ul>
                  </div>
                  <div class="profile-section">
                    <i class="bi bi-bullseye me-2 fs-4"></i>  
                    <h3>Tầm nhìn</h3>
                    <ul class="profile-list">
                      <li><span class="check-icon"></span> 
                        Anh Lê Duy Linh không ngừng mở rộng Techzen và Techzen Academy với mục tiêu trở thành hệ sinh thái công nghệ và đào tạo toàn diện, 
                       không chỉ cung cấp dịch vụ công nghệ mà còn là cái nôi đào tạo những tài năng trẻ, tiên phong trong các giải pháp số hóa và công nghệ tại Việt Nam.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="section overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text"
               v-motion
               :initial="{ opacity: 0, x: -100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <h2 class="animated-heading">Lợi ích khi tham gia khóa học</h2>
            <div>
              <p class="fs-5">Techzen Academy cung cấp khóa học lập trình thực chiến với học phí tiết kiệm, lịch học linh hoạt và giảng viên giàu kinh nghiệm. Học viên được thực hành dự án thực tế, đào tạo từ cơ bản đến nâng cao và hỗ trợ định hướng nghề nghiệp.
                 Đây là môi trường lý tưởng để phát triển sự nghiệp trong ngành CNTT.</p>
            </div>
            <div class="benefits-list mt-2">
            <div class="benefit-item">
              <div class="benefit-number">01</div>
              <div class="benefit-content">
                <h3>Nâng cao cơ hội việc làm</h3>
                <p> Tăng khả năng cạnh tranh trên thị trường lao động với các kỹ năng đang được nhiều nhà tuyển dụng tìm kiếm.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">02</div>
              <div class="benefit-content">
                <h3>Cập nhật xu hướng công nghệ mới</h3>
                <p>Luôn được cập nhật các kiến thức và công nghệ mới nhất trong ngành.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">03</div>
              <div class="benefit-content">
                <h3>Hỗ trợ cơ hội việc làm</h3>
                <p>100% được thực tập tại Techzen</p>
              </div>
            </div>
          </div>
          </div>
          <div class="overview-image"
               v-motion
               :initial="{ opacity: 0, x: 100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="image-container">
              <img src="../assets/images/academy1.jpg" alt="Khóa học công nghệ" class="animated-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section -->
    <section class="section objectives">
      <div class="container">
        <h2 class="section-title font-lato-bold">Mục tiêu khóa học</h2>
        <div class="objectives-grid"  v-motion
               :initial="{ opacity: 0, x: 100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
          <div class="objective-card">
            <div class="objective-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 class="font-lato-bold">Hiểu sâu về kiến thức nền tảng</h3>
            <p class="font-lato">Nắm vững các khái niệm cơ bản và nền tảng trong lĩnh vực công nghệ</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 class="font-lato-bold">Phát triển kỹ năng thực hành</h3>
            <p class="font-lato">Thực hành với các dự án thực tế để áp dụng kiến thức vào công việc</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7"></path><path d="M17.01 12h5.95"></path></svg>
            </div>
            <h3 class="font-lato-bold">Nâng cao tư duy giải quyết vấn đề</h3>
            <p class="font-lato">Rèn luyện tư duy phân tích và giải quyết các vấn đề phức tạp</p>
          </div>
          <div class="objective-card">
            <div class="objective-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
            </div>
            <h3 class="font-lato-bold">Xây dựng portfolio cá nhân</h3>
            <p class="font-lato">Tạo dựng portfolio với các dự án chất lượng để thu hút nhà tuyển dụng</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Agile Scrum Methodology Section -->
    <section class="section agile-scrum">
      <div class="container">
        <h2 class="section-title">Phương pháp Agile Scrum</h2>
        <div class="agile-content" v-motion
               :initial="{ opacity: 0, x: 100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }" >
          <div class="agile-text">
            <p>Tại Techzen Academy, chúng tôi áp dụng phương pháp Agile Scrum vào quy trình phát triển phần mềm và đào tạo. Phương pháp này giúp tối ưu hóa quy trình làm việc, nâng cao hiệu suất và chất lượng sản phẩm. Học viên sẽ được tiếp cận và làm quen với phương pháp làm việc chuyên nghiệp này ngay từ khi bắt đầu khóa học.</p>
          </div>
          
          <div class="agile-image"  v-motion
               :initial="{ opacity: 0, x: 100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }" >
            <img src="../assets/images/agile.png" alt="Agile Scrum Methodology" class="img-fluid rounded shadow">
          </div>
        </div>
        
        <div class="agile-principles-grid">
          <div class="principle-item">
            <div class="principle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <div class="principle-content">
              <h4>Sprint Planning</h4>
              <p>Sprint Planning là cuộc họp để nhóm Scrum xác định mục tiêu của sprint và lập kế hoạch cho việc hoàn thành các mục tiêu đó.</p>
            </div>
          </div>
          
          <div class="principle-item">
            <div class="principle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div class="principle-content">
              <h4>Daily Scrum</h4>
              <p>Daily Scrum là cuộc họp ngắn hàng ngày của nhóm Scrum để thảo luận về tiến độ công việc và các vấn đề cần giải quyết.</p>
            </div>
          </div>
          
          <div class="principle-item">
            <div class="principle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div class="principle-content">
              <h4>Sprint Review</h4>
              <p>Sprint Review là cuộc họp để nhóm Scrum trình bày sản phẩm cho khách hàng và nhận phản hồi.</p>
            </div>
          </div>
          
          <div class="principle-item">
            <div class="principle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="principle-content">
              <h4>Sprint Retrospective</h4>
              <p>Sprint Retrospective là cuộc họp để nhóm Scrum phản ánh về sprint vừa qua và tìm ra các cách để cải thiện trong sprint tiếp theo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <!-- <section class="section benefits">
      <div class="container">
        <h2 class="section-title font-lato-bold">Lợi ích khi tham gia khóa học</h2>
        <div class="benefits-container">
          <div class="benefits-image">
            <img src="../assets/images/academy2.jpg" alt="Lợi ích khóa học">
          </div>
          <div class="benefits-list">
            <div class="benefit-item">
              <div class="benefit-number">01</div>
              <div class="benefit-content">
                <h3>Nâng cao cơ hội việc làm</h3>
                <p>Tăng khả năng cạnh tranh trên thị trường lao động với các kỹ năng đang được nhiều nhà tuyển dụng tìm kiếm.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">02</div>
              <div class="benefit-content">
                <h3>Cập nhật xu hướng công nghệ mới</h3>
                <p>Luôn được cập nhật các kiến thức và công nghệ mới nhất trong ngành.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">03</div>
              <div class="benefit-content">
                <h3>Mạng lưới kết nối rộng lớn</h3>
                <p>Kết nối với các chuyên gia trong ngành và các học viên khác, mở rộng mạng lưới quan hệ chuyên nghiệp.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-number">04</div>
              <div class="benefit-content">
                <h3>Hỗ trợ cơ hội việc làm</h3>
                <p>Được hỗ trợ tìm kiếm việc làm và giới thiệu đến các đối tác doanh nghiệp sau khi hoàn thành khóa học.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Target Audience Section -->
    <section class="section target-audience">
      <div class="container">
        <h2 class="section-title">Đối tượng phù hợp</h2>
        <div class="audience-cards">
          <div class="audience-card">
            <div class="audience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h3>Người mới bắt đầu</h3>
            <p>Những người chưa có kiến thức về lĩnh vực công nghệ nhưng có đam mê và mong muốn tìm hiểu.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Sinh viên CNTT</h3>
            <p>Sinh viên ngành CNTT muốn bổ sung kiến thức thực tế và chuẩn bị tốt hơn cho công việc tương lai.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3>Người chuyển ngành</h3>
            <p>Những người đang làm việc trong các lĩnh vực khác nhưng muốn chuyển sang ngành công nghệ.</p>
          </div>
          <div class="audience-card">
            <div class="audience-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            </div>
            <h3>Chuyên gia IT</h3>
            <p>Những người đã có kinh nghiệm trong lĩnh vực IT nhưng muốn nâng cao kỹ năng hoặc học thêm công nghệ mới.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="font-lato-bold">Bạn đã sẵn sàng nâng cao kỹ năng của mình?</h2>
          <p class="font-lato">Đăng ký ngay hôm nay để bắt đầu hành trình học tập và phát triển sự nghiệp.</p>
          <div class="cta-buttons">
            <router-link to="/course-content" class="btn btn-secondary font-lato">Xem nội dung khóa học</router-link>
            <router-link to="/register" class="btn font-lato">Đăng ký ngay</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Facebook Chatbot -->
    <FacebookChatbot />
  </div>
</template>

<script>
import FacebookChatbot from '@/components/FacebookChatbot.vue'

export default {
  name: 'CourseIntroView',
  components: {
    FacebookChatbot
  }
}
</script>

<style scoped>
.page-header {
  background: #0d6efd;
  color: white;
  padding: 60px 0;
  text-align: center;
}
.infoTechzen{
  display: flex;
  justify-content: end;
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

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.overview-text h2 {
  font-size: 2.9rem;
  margin-bottom: 20px;
  color: #212529;
}

.overview-text p {
  margin-bottom: 20px;
  color: #495057;
  line-height: 1.7;
  font-size: 1.3rem;
}

.overview-highlights {
  margin-top: 30px;
}

.highlight-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  width: 50px;
  height: 50px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #4a6bff;
}

.highlight-text h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #212529;
}

.highlight-text p {
  margin-bottom: 0;
  color: #6c757d;
}

.overview-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.objective-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
}

.objective-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(145deg, #e8f9ff, #f0f8ff);
}

.objective-icon {
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

.objective-card h3 {
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #212529;
}

.objective-card p {
  color: #6c757d;
  font-size: 1.2rem;

}

.benefits {
  background: #f8f9fa;
}

.benefits-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-top: 40px;
}

.benefits-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.benefit-item {
  display: flex;
  margin-bottom: 30px;
}

.benefit-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(74, 107, 255, 0.2);
  margin-right: 20px;
  line-height: 1;
}

.benefit-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #212529;
}

.benefit-content p {
  color: black;
}

.audience-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.audience-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.audience-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(145deg, #e8f9ff, #f0f8ff);
}

.audience-icon {
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

.audience-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #212529;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
}

.audience-card p {
  color: #6c757d;
  font-size: 1.3rem;
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
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta p {
  font-size: 1rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta .btn {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  padding: 12px 30px;
}

.cta .btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.cta .btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

.cta .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 992px) {
  .overview-content,
  .benefits-container,
  .agile-content {
    grid-template-columns: 1fr;
  }

  .benefits-image {
    order: -1;
  }
  
  .agile-image {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  /* Make academy-intro full width on mobile */
  .academy-intro {
    margin-left: -15px; /* Adjust based on actual container padding */
    margin-right: -15px; /* Adjust based on actual container padding */
    border-radius: 0;
    box-shadow: none;
  }

  .academy-content {
    padding-left: 15px; /* Restore padding */
    padding-right: 15px; /* Restore padding */
  }
  
  /* Reset profile card margin adjusted by academy-intro margin */
  .profile-card {
      margin-left: 15px;
      margin-right: 15px;
  }
  
  /* Adjust profile content padding if necessary */
   .profile-content {
     padding: 15px; /* Ensure consistent padding */
   }
   
   .section-icon-wrapper {
    width: 36px;
    height: 36px;
  }
  
  .section-icon-wrapper i {
    font-size: 1.2rem;
  }
  
  .profile-list li {
    font-size: 1rem;
  }
  
  .profile-name {
    font-size: 1.8rem;
  }
  
  .profile-title {
    font-size: 1.1rem;
  }
  
  .profile-image {
    height: 250px;
  }
}

/* Agile Scrum Section Styles */
.agile-scrum {
  background: #f8f9fa;
  padding: 60px 0;
}

.agile-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

.agile-text p {
  color: #495057;
  line-height: 1.7;
  font-size: 1.4rem;
  text-align: justify;
}


.agile-image {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.agile-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.agile-image:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.agile-image:hover img {
  transform: scale(1.03);
}

.agile-principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.principle-item {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.principle-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.1);
  border-left: 3px solid #4a6bff;
}

.principle-icon {
  width: 70px;
  height: 70px;
  min-width: 70px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  color: #4a6bff;
  flex-shrink: 0;
}

.principle-content {
  flex: 1;
}

.principle-content h4 {
  font-size: 1.5rem;
  color: #212529;
  margin-bottom: 10px;
  font-weight: 600;
}

.principle-content p {
  color: #6c757d;
  margin-bottom: 0;
  font-size: 1.2rem;
  line-height: 1.5;
}

/* Media Queries for Agile Scrum Section */
@media (max-width: 992px) {
  .agile-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .agile-image {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
  
  .agile-principles-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .agile-scrum {
    padding: 40px 0;
  }
  
  .agile-principles-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .principle-item {
    padding: 15px;
  }
  
  .principle-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
  
  .principle-content h4 {
    font-size: 1.3rem;
  }
  
  .principle-content p {
    font-size: 1rem;
  }
}

/* Overview Section Animations */
.animated-heading {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.animated-heading:after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -8px;
  left: 0;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  animation: lineGrow 1.5s forwards 0.5s;
  border-radius: 3px;
}

@keyframes lineGrow {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}

.animated-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  padding: 15px;
}

.animated-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.15);
  background: rgba(255, 255, 255, 0.8);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.image-container:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.animated-image {
  width: 100%;
  transition: transform 0.8s ease;
  border-radius: 12px;
}

.image-container:hover .animated-image {
  transform: scale(1.05);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  color: #4a6bff;
  font-size: 18px;
  animation: float 6s infinite ease-in-out;
  opacity: 0;
  animation-fill-mode: forwards;
}

.element-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0.5s;
}

.element-2 {
  top: 25%;
  right: 15%;
  animation-delay: 1s;
}

.element-3 {
  bottom: 20%;
  left: 15%;
  animation-delay: 1.5s;
}

.element-4 {
  bottom: 30%;
  right: 10%;
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(20px);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .floating-element {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  .animated-item:hover {
    transform: translateY(-5px);
  }
}

/* Benefits Section Styles */
.text-gradient {
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 550;
}

.animated-benefit {
  transition: all 0.4s ease;
  padding: 20px;
  border-radius: 12px;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.animated-benefit::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(to bottom, #4a6bff, #a74dff);
  transition: height 0.5s ease;
}

.animated-benefit:hover {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transform: translateX(10px);
}

.animated-benefit:hover::before {
  height: 100%;
}

.benefit-number {
  position: relative;
  transition: all 0.3s ease;
  display: inline-block;
}

.animated-benefit:hover .benefit-number {
  transform: scale(1.2);
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.count-up {
  animation: countEffect 2s ease forwards;
  display: inline-block;
}

@keyframes countEffect {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.benefit-content h3 {
  transition: all 0.3s ease;
}

.animated-benefit:hover .benefit-content h3 {
  color: #4a6bff;
  transform: translateX(5px);
}

/* Font Classes */
.font-lato {
  font-family: 'Lato', sans-serif;
}

.font-lato-bold {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.font-sf-mono {
  font-family: 'SF Mono', monospace;
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

.objective-card h3,
.benefit-card h3 {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.btn {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}

/* Company Introduction Section Styles */
.company-intro {
  padding: 20px 0;
  background: linear-gradient(to right, #f8f9fa, #e9f2ff);
  position: relative;
  overflow: hidden;
}

.company-intro:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="none"/><path d="M0,0L100,100" stroke="rgba(74, 107, 255, 0.05)" stroke-width="1"/><path d="M100,0L0,100" stroke="rgba(74, 107, 255, 0.05)" stroke-width="1"/></svg>');
  opacity: 0.3;
  z-index: 0;
}

.company-intro-content {
  position: relative;
  z-index: 1;
}

.company-logo-area {
  text-align: center;
  margin-bottom: 40px;
}
.company-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  background: radial-gradient(circle, rgba(74, 107, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 1;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
}

.company-motto {
  font-size: 1.2rem;
  color: #495057;
  font-style: italic;
  margin-top: 10px;
}

.company-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.company-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.company-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(74, 107, 255, 0.1);
}

.company-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.company-card:hover:before {
  transform: scaleX(1);
}

.card-icon {
  width: 70px;
  height: 70px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #4a6bff;
  transition: all 0.3s ease;
}

.company-card:hover .card-icon {
  background: #4a6bff;
  color: white;
  transform: rotateY(180deg);
}

.company-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #212529;
  font-weight: 700;
}

.company-card p {
  color: #495057;
  line-height: 1.7;
  font-size: 1rem;
}

.academy-intro {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.academy-intro:hover {
  box-shadow: 0 20px 50px rgba(74, 107, 255, 0.1);
}

.academy-content {
  padding: 20px;
  width: 100%;
}
.academy-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #212529;
  position: relative;
  display: inline-block;
  font-weight: 700;
}

.academy-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  border-radius: 2px;
}

.academy-content p {
  color: #495057;
  line-height: 1.8;
  font-size: 1.2rem;
}

.info-item {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #495057;
}

.info-label {
  font-weight: 700;
  color: #212529;
  margin-right: 10px;
}

.instructor-card {
  display: none;
}

/* Profile Card Styles */
.profile-card {
  display: flex;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;
  border: 1px solid rgba(74, 107, 255, 0.1);
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(74, 107, 255, 0.2);
  border-color: rgba(74, 107, 255, 0.3);
}

.profile-image {
  width: 30%;
  position: relative;
  overflow: hidden;
}

.profile-image img {
  width:100%;
  max-width: 550px;
  height: 100%;
  border-radius: 8px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.profile-content {
  width: 70%;
  padding: 15px;
  background: #fff;
}

.profile-name {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.profile-title {
  font-size: 1.2rem;
  color: #4a6bff;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
}

.profile-section {
  margin-bottom: 5px;
  position: relative;
}

.section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  margin-right: 10px;
  color: #4a6bff;
  vertical-align: middle;
}

.profile-section h3 {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  vertical-align: middle;
}

.profile-list {
  list-style: none;
  margin: 0;
}

.profile-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  font-size: 1.05rem;
  color: #495057;
  line-height: 1.6;
}

.check-icon:before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 20px;
  height: 20px;
  background: #3427c6;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(74, 107, 255, 0.2);
}

.check-icon:after {
  content: '✓';
  position: absolute;
  left: 5px;
  top: 4px;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.skill-tag {
  background: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
}

@media (max-width: 992px) {
  .profile-card {
    flex-direction: column;
  }
  
  .profile-image, .profile-content {
    width: 100%;
  }
  
  .profile-image {
    height: 450px;
  }
  
  .profile-name {
    font-size: 2rem;
    margin-top: 15px;
  }
}

@media (max-width: 768px) {
  .section-icon-wrapper {
    width: 36px;
    height: 36px;
  }
  
  .section-icon-wrapper i {
    font-size: 1.2rem;
  }
  
  .profile-list li {
    font-size: 1rem;
  }
  
  .profile-name {
    font-size: 1.8rem;
  }
  
  .profile-title {
    font-size: 1.1rem;
  }
  
}

.company-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}


</style> 