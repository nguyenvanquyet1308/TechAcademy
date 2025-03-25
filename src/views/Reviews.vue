<template>
  <div class="reviews-container">
    <div class="page-header">
      <h1>Đánh giá từ học viên</h1>
      <p class="lead">Những phản hồi chân thật từ các học viên đã tham gia khóa học tại TechAcademy</p>
    </div>

    <div class="reviews-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(review, index) in reviews" :key="index">
            <div class="review-card">
              <div class="review-header">
                <div class="reviewer-avatar">
                  <img :src="review.avatar" alt="Avatar">
                </div>
                <div class="reviewer-info">
                  <h4>{{ review.name }}</h4>
                  <p>{{ review.course }}</p>
                  <div class="rating">
                    <i class="fas fa-star" v-for="star in review.rating" :key="star"></i>
                  </div>
                </div>
              </div>
              <div class="review-content">
                <p>"{{ review.comment }}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonial-section">
      <div class="container">
        <h2 class="section-title">Câu chuyện thành công</h2>
        <div class="row">
          <div class="col-md-6 mb-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"{{ testimonial.content }}"</p>
              </div>
              <div class="testimonial-author">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsView',
  data() {
    return {
      reviews: [
        {
          name: 'Nguyễn Văn A',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          course: 'Khóa học Web Development',
          rating: 5,
          comment: 'Khóa học rất hay và chi tiết. Giảng viên nhiệt tình và có nhiều kinh nghiệm thực tế.'
        },
        {
          name: 'Trần Thị B',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          course: 'Khóa học Java Programming',
          rating: 4,
          comment: 'Tôi đã học được rất nhiều từ khóa học này. Nội dung cập nhật và phù hợp với nhu cầu thị trường.'
        },
        {
          name: 'Lê Văn C',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
          course: 'Khóa học Data Science',
          rating: 5,
          comment: 'Khóa học giúp tôi hiểu rõ về Data Science và cách áp dụng vào công việc thực tế.'
        },
        {
          name: 'Phạm Thị D',
          avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
          course: 'Khóa học Mobile App Development',
          rating: 5,
          comment: 'Tôi đã có thể phát triển ứng dụng di động của riêng mình sau khi hoàn thành khóa học này.'
        },
        {
          name: 'Hoàng Văn E',
          avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
          course: 'Khóa học UI/UX Design',
          rating: 4,
          comment: 'Khóa học cung cấp kiến thức toàn diện về thiết kế UI/UX và các công cụ hiện đại.'
        },
        {
          name: 'Ngô Thị F',
          avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
          course: 'Khóa học DevOps',
          rating: 5,
          comment: 'Tôi đã học được cách triển khai và quản lý hệ thống một cách hiệu quả từ khóa học này.'
        }
      ],
      testimonials: [
        {
          name: 'Trương Văn G',
          position: 'Senior Developer tại Tech Company',
          content: 'Sau khi học tại TechAcademy, tôi đã nâng cao kỹ năng lập trình và được thăng chức tại công ty. Các kiến thức học được đều rất thực tế và áp dụng ngay vào công việc.'
        },
        {
          name: 'Lý Thị H',
          position: 'Product Manager tại Startup X',
          content: 'TechAcademy đã giúp tôi chuyển đổi sự nghiệp từ một nhân viên hành chính sang Product Manager. Cảm ơn các giảng viên đã tận tình hướng dẫn.'
        },
        {
          name: 'Đặng Văn I',
          position: 'Founder tại Tech Startup',
          content: 'Những kiến thức học được từ TechAcademy đã giúp tôi xây dựng startup công nghệ của riêng mình. Tôi đặc biệt đánh giá cao phương pháp giảng dạy thực tế và cập nhật.'
        },
        {
          name: 'Vũ Thị K',
          position: 'Data Analyst tại Finance Corp',
          content: 'Khóa học Data Science tại TechAcademy đã mở ra cơ hội việc làm mới cho tôi. Tôi hiện đang làm việc tại một công ty tài chính lớn với mức lương tốt.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.reviews-container {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  background-color: #f8f9fa;
}

.page-header h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-header .lead {
  color: #6c757d;
  max-width: 700px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.reviews-section, .testimonial-section {
  margin-bottom: 3rem;
}

.review-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
}

.review-header {
  display: flex;
  margin-bottom: 1rem;
}

.reviewer-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}

.reviewer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reviewer-info h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.reviewer-info p {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.rating {
  color: #ffc107;
  margin-top: 0.5rem;
}

.review-content p {
  font-style: italic;
  color: #495057;
}

.testimonial-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  border-left: 4px solid #3498db;
}

.testimonial-content p {
  font-style: italic;
  color: #495057;
  margin-bottom: 1rem;
}

.testimonial-author h4 {
  margin: 0;
  color: #2c3e50;
}

.testimonial-author p {
  margin: 0.2rem 0;
  color: #6c757d;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .review-header {
    flex-direction: column;
  }
  
  .reviewer-avatar {
    margin-bottom: 1rem;
  }
}
</style> 