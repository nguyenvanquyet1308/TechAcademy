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
        <h2 class="section-title" v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          Giảng viên chính
        </h2>
        <p class="section-desc" v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }">
          Đội ngũ giảng viên chính của chúng tôi đều là những chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực công nghệ
        </p>
        
        <div class="instructors-grid">
          <div 
            v-for="(instructor, index) in instructors" 
            :key="instructor.id"
            class="instructor-card" 
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 300 + (index * 200), duration: 800 } }"
          >
            <div class="instructor-image">
              <img :src="instructor.image" :alt="instructor.name">
            </div>
            <div class="instructor-content">
              <h3 class="instructor-name">{{ instructor.name }}</h3>
              <p class="instructor-position">{{ instructor.position }}</p>
              
              <ul class="infoTeacher">
                <li v-for="(experience, expIndex) in instructor.experiences" :key="expIndex">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  {{ experience }}
                </li>
              </ul>
              
              <div class="instructor-expertise">
                <h4>Chuyên môn:</h4>
                <div class="expertise-tags">
                  <span 
                    v-for="(skill, skillIndex) in instructor.skills" 
                    :key="skillIndex" 
                    class="tag-animation"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <div class="instructor-social">
                <a v-if="instructor.linkedin" :href="instructor.linkedin" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a v-if="instructor.twitter" :href="instructor.twitter" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a v-if="instructor.github" :href="instructor.github" class="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Lecturers Section -->
    <!-- <section class="section guest-lecturers">
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
    </section> -->

    <!-- Why Our Instructors Section -->
    <section class="section why-instructors">
      <div class="container">
        <div class="why-content">
          <div class="why-text">
            <h2 class="animated-heading" v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
              Tại sao giảng viên của chúng tôi tạo nên sự khác biệt?
            </h2>
            <p v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 200, duration: 800 } }">
              Đội ngũ giảng viên của TechAcademy không chỉ có kiến thức chuyên môn sâu rộng mà còn có nhiều năm kinh nghiệm thực tế trong ngành công nghệ.
            </p>
            <ul class="why-list">
              <li v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
                class="animate-list-item">
                <div class="list-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Kinh nghiệm thực chiến</h4>
                  <p>Tất cả giảng viên đều đang làm việc tại các công ty công nghệ hàng đầu, mang đến góc nhìn thực tế từ ngành công nghiệp.</p>
                </div>
              </li>
              <li v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
                class="animate-list-item">
                <div class="list-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Phương pháp giảng dạy hiệu quả</h4>
                  <p>Giảng viên sử dụng phương pháp giảng dạy tương tác, tập trung vào thực hành và giải quyết vấn đề thực tế.</p>
                </div>
              </li>
              <li v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
                class="animate-list-item">
                <div class="list-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Mạng lưới rộng lớn</h4>
                  <p>Sự kết nối của giảng viên với các doanh nghiệp công nghệ mang đến cơ hội việc làm và thực tập cho học viên xuất sắc.</p>
                </div>
              </li>
              <li v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 900, duration: 600 } }"
                class="animate-list-item">
                <div class="list-icon pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4>Cập nhật công nghệ mới</h4>
                  <p>Giảng viên luôn cập nhật kiến thức với các công nghệ mới nhất, đảm bảo học viên được tiếp cận với những xu hướng hiện đại.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="why-image" v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 800 } }">
            <img src="/public/images/academy3.jpg" alt="Giảng viên TechAcademy">
          
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content" v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
          <h2 class="cta-heading">Học từ những chuyên gia hàng đầu</h2>
          <p>Đăng ký ngay để được học tập và trao đổi trực tiếp với đội ngũ giảng viên xuất sắc của chúng tôi!</p>
          <router-link to="/register" class="btn btn-glow">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InstructorsView',
  data() {
    return {
      instructors: [
        {
          id: 1,
          name: 'Nguyễn Ngọc Quang',
          position: 'TeamLeader Developer tại Techzen & Giảng viên IT chuyên nghiệp',
          image: '/images/nguyenngocquang.png',
          experiences: [
            '7 năm tập trung vào các dự án web phức tạp, công nghệ hiện đại.',
            '6 năm truyền đạt kiến thức từ căn bản đến nâng cao cho hàng ngàn học viên, từ các bạn mới bắt đầu đến những người đã có nền tảng.'
          ],
          skills: ['Java', 'Spring Boot', 'MySQL', 'RESTful API'],
          linkedin: '#',
          twitter: '#',
          github: '#'
        },
        {
          id: 2,
          name: 'Huỳnh Hải Thiên',
          position: 'Manager bộ phận phát triển giải pháp AI tại Techzen & Giảng viên IT giàu kinh nghiệm',
          image: '/images/huynhhaithien.png',
          experiences: [
            '7 năm tập trung triển khai các dự án công nghệ cao cấp, từ xây dựng ứng dụng web đến các giải pháp doanh nghiệp phức tạp.',
            '6 năm đồng hành cùng hàng ngàn học viên, từ những người mới chập chững đến các lập trình viên chuyên nghiệp, xây dựng nền tảng vững chắc cho sự nghiệp IT.'
          ],
          skills: ['Python', 'AI & ML', 'FastAPI', 'MySQL'],
          linkedin: '#',
          twitter: '#',
          github: '#'
        },
        // {
        //   id: 3,
        //   name: 'Huỳnh Hải Thiên',
        //   position: 'Manager bộ phận phát triển giải pháp AI tại Techzen & Giảng viên IT giàu kinh nghiệm',
        //   image: 'public/images/huynhhaithien.png',
        //   experiences: [
        //     '7 năm tập trung triển khai các dự án công nghệ cao cấp, từ xây dựng ứng dụng web đến các giải pháp doanh nghiệp phức tạp.',
        //     '6 năm đồng hành cùng hàng ngàn học viên, từ những người mới chập chững đến các lập trình viên chuyên nghiệp, xây dựng nền tảng vững chắc cho sự nghiệp IT.'
        //   ],
        //   skills: ['Python', 'AI & ML', 'FastAPI', 'MySQL'],
        //   linkedin: '#',
        //   twitter: '#',
        //   github: '#'
        // }
      ]
    }
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
.infoTeacher li{
  list-style: none;
  font-size: 20px;
  display: flex;
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 300px 1fr;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.instructor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(74, 107, 255, 0.1);
}

.instructor-image {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.instructor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.instructor-card:hover .instructor-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
  opacity: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  transition: opacity 0.3s ease;
}

.instructor-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  border-radius: 30px;
  background: rgba(74, 107, 255, 0.8);
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.overlay-content:hover {
  transform: scale(1.1);
  background: rgba(74, 107, 255, 1);
}

.instructor-content {
  padding: 30px;
}

.instructor-name {
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: blue;
}

.instructor-position {
  color: blue;
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 550;
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
  transition: all 0.3s ease;
}

.expertise-tags span:hover {
  background: #4a6bff;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(74, 107, 255, 0.2);
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
    height: 500px;
  }

  .why-content {
    grid-template-columns: 1fr;
  }

  .why-image {
    order: -1;
    margin-bottom: 30px;
  }
  
  .floating-element {
    width: 40px;
    height: 40px;
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
  
  .animate-list-item:hover {
    transform: translateX(5px);
  }
  
  .floating-element {
    width: 30px;
    height: 30px;
  }
  
  .instructor-card:hover {
    transform: translateY(-5px);
  }
}

/* Additional CSS styles for animations and enhancements */
.text-gradient {
  background: linear-gradient(90deg, #4a6bff, #a74dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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

.tag-animation {
  animation: tagFadeIn 0.8s ease forwards;
  opacity: 0;
  transform: translateY(10px);
}

.expertise-tags span:nth-child(1) {
  animation-delay: 0.1s;
}

.expertise-tags span:nth-child(2) {
  animation-delay: 0.2s;
}

.expertise-tags span:nth-child(3) {
  animation-delay: 0.3s;
}

.expertise-tags span:nth-child(4) {
  animation-delay: 0.4s;
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

.animated-heading {
  position: relative;
  display: inline-block;
}

.animated-heading:after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -10px;
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
    width: 100px;
  }
}

.animate-list-item {
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
}

.animate-list-item:hover {
  background: rgba(74, 107, 255, 0.05);
  transform: translateX(10px);
}

.animate-list-item h4 {
  transition: color 0.3s ease;
}

.animate-list-item:hover h4 {
  color: #4a6bff;
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

.why-image {
  position: relative;
}

.why-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.why-image:hover img {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.cta-heading {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.cta-heading:after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.5);
  animation: lineGrowCenter 1.5s forwards 0.5s;
  border-radius: 3px;
}

@keyframes lineGrowCenter {
  0% {
    width: 0;
  }
  100% {
    width: 100px;
  }
}

.btn-glow {
  background: white;
  color: #4a6bff;
  font-size: 1.1rem;
  padding: 12px 30px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  border: none;
}

.btn-glow:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.7);
  background: white;
  color: #a74dff;
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
</style> 