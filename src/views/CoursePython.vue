<template>
  <div class="course-python">
    <div class="header-section">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h1 class="course-title">
              Lập trình Python từ cơ bản đến nâng cao
            </h1>
            <p class="course-description">
              Khóa học Python toàn diện giúp bạn làm chủ ngôn ngữ lập trình phổ biến nhất hiện nay, từ nền tảng cơ bản đến kỹ thuật nâng cao. Phù hợp cho cả người mới bắt đầu và lập trình viên muốn mở rộng kỹ năng.
            </p>
            <div class="course-meta">
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
            <div class="course-actions">
              <button class="btn btn-primary btn-lg me-2">Đăng ký học</button>
              <button class="btn btn-outline-light btn-lg">Tải syllabus</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="course-image">
              <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Python Course" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <section class="section mb-5">
            <h2 class="section-title mb-4">
              Tổng quan khóa học
            </h2>
            <div class="course-overview">
              <p>Khóa học Python từ cơ bản đến nâng cao giúp học viên nắm vững kiến thức lập trình với ngôn ngữ Python - một trong những ngôn ngữ lập trình phổ biến nhất hiện nay. Từ những khái niệm cơ bản đến các kỹ thuật nâng cao, khóa học cung cấp nền tảng vững chắc cho học viên trong việc phát triển phần mềm, phân tích dữ liệu, trí tuệ nhân tạo và nhiều lĩnh vực khác.</p>
              <p>Được thiết kế với lộ trình rõ ràng, từng bước, khóa học phù hợp cho cả người mới bắt đầu và những người đã có kiến thức lập trình muốn mở rộng kỹ năng. Học viên sẽ được thực hành qua nhiều bài tập và dự án thực tế, giúp ứng dụng kiến thức vào giải quyết các vấn đề thực tiễn.</p>
            </div>
          </section>
        </div>

        <div class="col-lg-4">
          <div class="course-sidebar">
            <div class="price-section mb-4">
              <!-- Price card content -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section bg-primary text-white">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="mb-4">Sẵn sàng bắt đầu hành trình Python của bạn?</h2>
          <p class="mb-4">Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và bắt đầu xây dựng tương lai công nghệ!</p>
          <button class="btn btn-light btn-lg">Đăng ký học</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursePythonView',
  data() {
    return {
      // Giữ lại các data cần thiết khác
    }
  }
  // ... phương thức khác giữ nguyên
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
</style> 