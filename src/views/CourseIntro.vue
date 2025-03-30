<template>
  <div class="course-intro font-lato">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title font-lato-bold">Giới thiệu khóa học</h1>
        <p class="page-description font-lato">Hiểu rõ hơn về khóa học của chúng tôi và những lợi ích mà bạn sẽ nhận được</p>
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
            <h2 class="animated-heading">Tổng quan về khóa học</h2>
            <p>Khóa học của chúng tôi được thiết kế đặc biệt cho những người muốn nâng cao kỹ năng trong lĩnh vực công nghệ. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, chúng tôi đều có những chương trình phù hợp để giúp bạn phát triển.</p>
            <p>Với phương pháp giảng dạy kết hợp giữa lý thuyết và thực hành, học viên sẽ được trang bị đầy đủ kiến thức và kỹ năng cần thiết để có thể tự tin ứng dụng vào công việc thực tế.</p>
            <div class="overview-highlights">
              <div class="highlight-item animated-item"
                   v-motion
                   :initial="{ opacity: 0, y: 30 }"
                   :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }">
                <div class="highlight-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="highlight-text">
                  <h4>Quy mô lớp học</h4>
                  <p>10-15 học viên/lớp</p>
                </div>
              </div>
              <div class="highlight-item animated-item"
                   v-motion
                   :initial="{ opacity: 0, y: 30 }"
                   :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }">
                <div class="highlight-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div class="highlight-text">
                  <h4>Chứng chỉ</h4>
                  <p>Được cấp sau khi hoàn thành khóa học</p>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-image"
               v-motion
               :initial="{ opacity: 0, x: 100 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="image-container">
             
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Khóa học công nghệ" class="animated-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section -->
    <section class="section objectives">
      <div class="container">
        <h2 class="section-title font-lato-bold">Mục tiêu khóa học</h2>
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="objective-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
        <div class="agile-content">
          <div class="agile-text">
            <p>Tại Techzen, chúng tôi áp dụng phương pháp Agile Scrum vào quy trình phát triển phần mềm và đào tạo. Phương pháp này giúp tối ưu hóa quy trình làm việc, nâng cao hiệu suất và chất lượng sản phẩm. Học viên sẽ được tiếp cận và làm quen với phương pháp làm việc chuyên nghiệp này ngay từ khi học tập.</p>
            
            <div class="agile-principles">
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
          <div class="agile-image">
            <img src="../assets/images/agile.png" alt="Agile Scrum Methodology" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section benefits">
      <div class="container">
        <h2 class="section-title font-lato-bold">Lợi ích khi tham gia khóa học</h2>
        <div class="benefits-container">
          <div class="benefits-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Lợi ích khóa học">
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
    </section>

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
  </div>
</template>

<script>
export default {
  name: 'CourseIntroView'
}
</script>

<style scoped>
.page-header {
  background: #0d6efd;
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
  margin-bottom: 10px;
  color: #212529;
}

.benefit-content p {
  color: #6c757d;
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
}

.audience-icon {
  width: 70px;
  height: 70px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #4a6bff;
}

.audience-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #212529;
}

.audience-card p {
  color: #6c757d;
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
}

/* Agile Scrum Section Styles */
.agile-scrum {
  background: #f8f9fa;
}

.agile-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-top: 40px;
}

.agile-text p {
  margin-bottom: 30px;
  color: #495057;
  line-height: 1.7;
}

.agile-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.agile-image:hover img {
  transform: scale(1.03);
}

.agile-principles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.principle-item {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.principle-item:hover {
  transform: translateY(-5px);
}

.principle-icon {
  width: 50px;
  height: 50px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #4a6bff;
  flex-shrink: 0;
}

.principle-content h4 {
  font-size: 1rem;
  color: #212529;
}

.principle-content p {
  color: #6c757d;
  margin-bottom: 0;
  font-size: 14px;
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
</style> 