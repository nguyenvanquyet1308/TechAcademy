<template>
  <div class="instructors">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Đội ngũ giảng viên</h1>
        <p class="page-description">Gặp gỡ những chuyên gia hàng đầu sẽ hướng dẫn bạn trong hành trình học tập</p>
      </div>
    </section>

    <!-- Instructors Section -->
    <section class="section main-instructors">
      <div class="container">
        <h2 class="section-title">Giảng viên chính</h2>
        <p class="section-desc">Đội ngũ giảng viên chính của chúng tôi đều là những chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực công nghệ</p>
        
        <div class="instructors-grid">
          <div class="instructor-card">
            <div class="instructor-image">
              <img src="../assets/images/nguyenngocquang.png" alt="Nguyễn Ngọc Quang">
            </div>
            <div class="instructor-content">
              <h3 class="instructor-name">Nguyễn Ngọc Quang</h3>
              <p class="instructor-position">TeamLeader Developer tại Techzen & Giảng viên IT chuyên nghiệp</p>
              <p class="instructor-description">
7 năm tập trung vào các dự án web phức tạp, công nghệ hiện đại.
6 năm truyền đạt kiến thức từ căn bản đến nâng cao cho hàng ngàn học viên,
 từ các bạn mới bắt đầu đến những người đã có nền tảng.</p>
              <div class="instructor-expertise">
                <h4>Chuyên môn:</h4>
                <div class="expertise-tags">
                  
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                  <span>RESTful API</span>
                </div>
              </div>
              <div class="instructor-social">
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <div class="instructor-card">
            <div class="instructor-image">
              <img src="../assets/images/huynhhaithien.png" alt="Huỳnh Hải Thiên">
            </div>
            <div class="instructor-content">
              <h3 class="instructor-name">Huỳnh Hải Thiên</h3>
              <p class="instructor-position">Manager bộ phận phát triển giải pháp AI tại Techzen & Giảng viên IT giàu kinh nghiệm</p>
              <p class="instructor-description">7 năm tập trung triển khai các dự án công nghệ cao cấp, từ xây dựng ứng dụng web đến các giải pháp doanh nghiệp phức tạp,6 năm đồng hành cùng hàng ngàn học viên,
                 từ những người mới chập chững đến các lập trình viên chuyên nghiệp, xây dựng nền tảng vững chắc cho sự nghiệp IT.</p>
              <div class="instructor-expertise">
                <h4>Chuyên môn:</h4>
                <div class="expertise-tags">
                  <span>Python</span>
                  <span>AI & ML</span>
                  <span>FastAPI</span>
                  <span>MySQL</span>
                </div>
              </div>
              <div class="instructor-social">
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Guest Lecturers Section -->
    <section class="section guest-lecturers">
      <div class="container">
        <h2 class="section-title" v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }">
          Giảng viên thỉnh giảng
        </h2>
        <p class="section-desc" v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }">
          Ngoài đội ngũ giảng viên chính, khóa học còn có sự tham gia của các chuyên gia từ các doanh nghiệp hàng đầu
        </p>
        
        <div class="lecturers-grid">
          <div class="lecturer-card" v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }">
            <div class="lecturer-image">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Phạm Thị D">
            </div>
            <h3 class="lecturer-name">Phạm Thị D</h3>
            <p class="lecturer-position">Product Manager, Google</p>
            <div class="lecturer-expertise">
              <span>Product Management</span>
              <span>Agile</span>
            </div>
          </div>

          <div class="lecturer-card" v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }">
            <div class="lecturer-image">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Hoàng Văn E">
            </div>
            <h3 class="lecturer-name">Hoàng Văn E</h3>
            <p class="lecturer-position">DevOps Engineer, Amazon</p>
            <div class="lecturer-expertise">
              <span>CI/CD</span>
              <span>Docker</span>
            </div>
          </div>

          <div class="lecturer-card" v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 600 } }">
            <div class="lecturer-image">
              <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Đỗ Thị F">
            </div>
            <h3 class="lecturer-name">Đỗ Thị F</h3>
            <p class="lecturer-position">Data Scientist, Microsoft</p>
            <div class="lecturer-expertise">
              <span>Data Analysis</span>
              <span>Machine Learning</span>
            </div>
          </div>

          <div class="lecturer-card" v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 600 } }">
            <div class="lecturer-image">
              <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="Vũ Văn G">
            </div>
            <h3 class="lecturer-name">Vũ Văn G</h3>
            <p class="lecturer-position">Security Expert, IBM</p>
            <div class="lecturer-expertise">
              <span>Cybersecurity</span>
              <span>Penetration Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Our Instructors Section -->
    <section class="section why-instructors">
      <div class="container">
        <div class="why-content">
          <div class="why-text">
            <h2>Tại sao giảng viên của chúng tôi tạo nên sự khác biệt?</h2>
            <p>Đội ngũ giảng viên của TechAcademy không chỉ có kiến thức chuyên môn sâu rộng mà còn có nhiều năm kinh nghiệm thực tế trong ngành công nghệ.</p>
            <ul class="why-list">
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Kinh nghiệm thực chiến</h4>
                  <p>Tất cả giảng viên đều đang làm việc tại các công ty công nghệ hàng đầu, mang đến góc nhìn thực tế từ ngành công nghiệp.</p>
                </div>
              </li>
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Phương pháp giảng dạy hiệu quả</h4>
                  <p>Giảng viên sử dụng phương pháp giảng dạy tương tác, tập trung vào thực hành và giải quyết vấn đề thực tế.</p>
                </div>
              </li>
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Mạng lưới rộng lớn</h4>
                  <p>Sự kết nối của giảng viên với các doanh nghiệp công nghệ mang đến cơ hội việc làm và thực tập cho học viên xuất sắc.</p>
                </div>
              </li>
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Cập nhật công nghệ mới</h4>
                  <p>Giảng viên luôn cập nhật kiến thức với các công nghệ mới nhất, đảm bảo học viên được tiếp cận với những xu hướng hiện đại.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="why-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Giảng viên TechAcademy">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Học từ những chuyên gia hàng đầu</h2>
          <p>Đăng ký ngay để được học tập và trao đổi trực tiếp với đội ngũ giảng viên xuất sắc của chúng tôi!</p>
          <router-link to="/register" class="btn">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InstructorsView'
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
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.page-description {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

.section-desc {
  text-align: center;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
}

.instructors-grid {
  display: grid;
  gap: 40px;
  margin-top: 40px;
}

.instructor-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 300px 1fr;
}

.instructor-image {
  height: 100%;
  overflow: hidden;
}

.instructor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instructor-content {
  padding: 30px;
}

.instructor-name {
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: #212529;
}

.instructor-position {
  color: #4a6bff;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.instructor-description {
  color: #6c757d;
  margin-bottom: 20px;
  line-height: 1.6;
}

.instructor-expertise h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #212529;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.expertise-tags span {
  background: #f8f9fa;
  color: #4a6bff;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.instructor-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  color: #4a6bff;
  transition: background 0.3s, transform 0.3s;
}

.social-icon:hover {
  background: #4a6bff;
  color: white;
  transform: translateY(-3px);
}

.guest-lecturers {
  background: #f8f9fa;
}

.lecturers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.lecturer-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  padding-bottom: 20px;
  transition: transform 0.5s, box-shadow 0.5s;
}

.lecturer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.lecturer-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 20px;
}

.lecturer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.lecturer-card:hover .lecturer-image img {
  transform: scale(1.1);
}

.lecturer-name {
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #212529;
  padding: 0 20px;
}

.lecturer-position {
  color: #4a6bff;
  margin-bottom: 15px;
  padding: 0 20px;
}

.lecturer-expertise {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
}

.lecturer-expertise span {
  background: #f8f9fa;
  color: #4a6bff;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.why-instructors {
  background: white;
}

.why-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.why-text h2 {
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: #212529;
}

.why-text > p {
  color: #6c757d;
  margin-bottom: 30px;
  line-height: 1.6;
}

.why-list {
  list-style: none;
  padding: 0;
}

.why-list li {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.list-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 50px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  color: #4a6bff;
}

.why-list h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #212529;
}

.why-list p {
  color: #6c757d;
  margin: 0;
}

.why-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  .instructor-card {
    grid-template-columns: 1fr;
  }

  .instructor-image {
    height: 300px;
  }

  .why-content {
    grid-template-columns: 1fr;
  }

  .why-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }

  .cta h2 {
    font-size: 2rem;
  }

  .lecturers-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .lecturer-image {
    height: 200px;
  }
}
</style> 