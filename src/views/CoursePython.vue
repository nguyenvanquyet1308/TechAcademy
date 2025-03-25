<template>
  <div class="course-python">
    <div class="header-section">
      <ThreeJSHero />
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="course-title" 
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              Lập trình Python từ cơ bản đến nâng cao
            </h1>
            <p class="course-description"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            >
              Khóa học Python toàn diện giúp bạn làm chủ ngôn ngữ lập trình phổ biến nhất hiện nay, từ nền tảng cơ bản đến kỹ thuật nâng cao. Phù hợp cho cả người mới bắt đầu và lập trình viên muốn mở rộng kỹ năng.
            </p>
            <div class="course-meta"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
            >
              <div class="meta-item">
                <i class="bi bi-clock me-2"></i>
                <span>10 tuần (30 buổi)</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-bar-chart me-2"></i>
                <span>Cơ bản đến nâng cao</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-people me-2"></i>
                <span>Học online hoặc offline</span>
              </div>
            </div>
            <div class="course-actions"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
            >
              <button class="btn btn-primary btn-lg me-2">Đăng ký học</button>
              <button class="btn btn-outline-light btn-lg">Tải syllabus</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image"
              v-motion
              :initial="{ opacity: 0, x: 100 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 1000 } }"
            >
              <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <ParallaxEffect :speed="0.2" direction="up">
            <section class="section mb-5 animate-on-scroll">
              <h2 class="section-title mb-4"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
              >
                Tổng quan khóa học
              </h2>
              <div class="course-overview"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
              >
                <p>Khóa học Python từ cơ bản đến nâng cao giúp học viên nắm vững kiến thức lập trình với ngôn ngữ Python - một trong những ngôn ngữ lập trình phổ biến nhất hiện nay. Từ những khái niệm cơ bản đến các kỹ thuật nâng cao, khóa học cung cấp nền tảng vững chắc cho học viên trong việc phát triển phần mềm, phân tích dữ liệu, trí tuệ nhân tạo và nhiều lĩnh vực khác.</p>
                <p>Được thiết kế với lộ trình rõ ràng, từng bước, khóa học phù hợp cho cả người mới bắt đầu và những người đã có kiến thức lập trình muốn mở rộng kỹ năng. Học viên sẽ được thực hành qua nhiều bài tập và dự án thực tế, giúp ứng dụng kiến thức vào giải quyết các vấn đề thực tiễn.</p>
              </div>
            </section>
          </ParallaxEffect>

          <!-- Other sections with ParallaxEffect and motion directives -->
        </div>

        <div class="col-lg-4">
          <div class="course-sidebar">
            <ParallaxEffect :speed="0.25" direction="up">
              <div class="price-section mb-4"
                v-motion
                :initial="{ opacity: 0, scale: 0.9 }"
                :visible="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }"
              >
                <!-- Price card content -->
              </div>
            </ParallaxEffect>
            
            <!-- Other sidebar sections with ParallaxEffect -->
          </div>
        </div>
      </div>
    </div>

    <ParallaxEffect :speed="0.1" direction="down">
      <div class="cta-section bg-primary text-white">
        <div class="container">
          <div class="cta-content text-center"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <h2 class="mb-4">Sẵn sàng bắt đầu hành trình Python của bạn?</h2>
            <p class="mb-4">Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và bắt đầu xây dựng tương lai công nghệ!</p>
            <button class="btn btn-light btn-lg">Đăng ký học</button>
          </div>
        </div>
      </div>
    </ParallaxEffect>
  </div>
</template>

<script>
import ThreeJSHero from '@/components/ThreeJSHero.vue'
import ParallaxEffect from '@/components/ParallaxEffect.vue'

export default {
  name: 'CoursePythonView',
  components: {
    ThreeJSHero,
    ParallaxEffect
  },
  data() {
    return {
      isHeaderVisible: false,
      animateSections: false
    }
  },
  // ... existing methods
}
</script>

<style scoped>
.course-python {
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