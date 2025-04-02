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
    <div class="social-media-testimonials-section">
      <div class="container">
        <h2 class="section-title">Chia sẻ từ cộng đồng</h2>
        <div class="row justify-content-center">
          <div class="col-lg-6 mb-4">
            <div class="facebook-post-container">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechzenacademy.vn%2Fposts%2Fpfbid02jFt1xV7nftsJgrtpCisPhok7LrGCXvhnZUuxnvfrmFLYiWLZWRMwgXFfUF1NdCQAl&show_text=true&width=500" 
                width="500" 
                height="755" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="facebook-post-container mb-4">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechzenacademy.vn%2Fposts%2Fpfbid02qBtjE8AxsfxGVWwSa8YZ5Hr2bD5YQUEPgRkJZnhyNR2AbMCGPBuJNk7GwtaGJPCdl&show_text=true&width=500" 
                width="500" 
                height="250" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div class="facebook-post-container">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechzenacademy.vn%2Fposts%2Fpfbid0jf2vag2AvBRh6ke9eP8CfMXsv9uYFvujCXwWC76i348kD769o3Y6wFEJTC9Eu4QNl&show_text=true&width=500" 
                width="500" 
                height="430" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="video-testimonial-section">
      <div class="container">
        <h2 class="section-title">Video Đánh Giá</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="video-container">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Goyte9ylIwo" 
                title="Đánh giá từ học viên TechAcademy" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
              ></iframe>
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
          name: 'Thái Hoàng Bảo',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          course: 'Khóa học Java Backend ',
          rating: 5,
          comment: 'Khóa học rất hay và chi tiết. Giảng viên nhiệt tình và có nhiều kinh nghiệm thực tế.'
        },
        {
          name: 'Dương Văn Nghĩa',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          course: 'Khóa học Java Backend',
          rating: 4,
          comment: 'Mình đã học được rất nhiều từ khóa học này. Nội dung cập nhật và phù hợp với nhu cầu thị trường.'
        },
        {
          name: 'Nguyễn Văn Quyết',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
          course: 'Khóa học Python AI',
          rating: 5,
          comment: 'Khóa học giúp mình hiểu rõ về hơn về AI và cách áp dụng vào công việc thực tế.'
        },
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

.video-testimonial-section {
  margin-bottom: 3rem;
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.social-media-testimonials-section {
  margin-bottom: 3rem;
  padding: 2rem 0;
  background-color: #f9f9fa;
  border-radius: 8px;
}

.facebook-post-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.facebook-post-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.facebook-post-container iframe {
  max-width: 100%;
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