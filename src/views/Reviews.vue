<template>
  <div class="reviews-container">
    <div class="blog-section">
      <div class="container">
        <h2 class="section-title">Tin tức mới nhất</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(blog, index) in blogs" :key="index">
            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id }}" class="blog-link">
              <div class="blog-card">
                <div class="blog-image">
                  <img :src="blog.image" alt="Blog Image" class="img-fluid">
                </div>
                <div class="blog-content">
                  <h4>{{ blog.title }}</h4>
                  <p class="blog-date">{{ blog.date }}</p>
                  <p class="blog-preview">{{ blog.preview }}</p>
                  <button class="btn btn-primary btn-sm">Xem thêm</button>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
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
      ],
      blogs: [
        {
          id: 1,
          title: 'Techzen kí kết MOU với Trung tâm phát triển phần mềm SDC trong việc hợp tác phát triển Techzen Academy',
          date: '15/7/2024',
          category: 'Sự kiện',
          views: 378,
          authorName: 'Võ Minh Nguyệt',
          authorPosition: 'Admin tại Techzen',
          authorAvatar: 'https://techzen.vn/wp-content/themes/Techzen/assets/images/msNguyet-read-news.png',
          tags: ['Academy', 'Hợp tác', 'Nhật Bản', 'Phát triển'],
          image: 'https://techzen.vn/wp-content/uploads/2024/07/ROM01773-min-1-1-2048x1365.jpg',
          preview: 'Chiều ngày 10/7, Trong sự kiện khai trương văn phòng mới, Techzen đã kí kết hợp tác MOU với Trung tâm phát triển phần mềm SDC nhằm phối hợp trong công tác tuyển dụng học viên ngành IT cho học viện Techzen Academy.',
          content: `<p> Techzen chính thức công bố thành lập Học viện công nghệ thông tin – Techzen Academy, cam kết mang đến chương trình đào tạo bài bản, chuyên sâu, cập nhật xu hướng công nghệ mới nhất, giúp học viên trau dồi kiến thức và kỹ năng thực tiễn, trở thành những chuyên gia IT tài năng, sẵn sàng đáp ứng nhu cầu thị trường.</p>
          <p>Hi vọng với những nội dung mà Techzen và Trung tâm phát triển phần mềm SDC đã kí kết, sẽ thúc đẩy sự phát triển nhanh chóng và hiệu quả của Techzen Academy trong tương lai..</p>
          <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>`
        },
        {
          id: 2,
          title: 'BUỔI DEMO DỰ ÁN CỦA HỌC VIÊN NHÀ TECHZEN ACADEMY',
          date: '28/02/2025',
          category: 'Sự kiện',
          views: 325,
          authorName: 'Võ Minh Nguyệt',
          authorPosition: 'Admin tại Techzen',
          authorAvatar: 'https://techzen.vn/wp-content/themes/Techzen/assets/images/msNguyet-read-news.png',
          tags: ['Ngoại giao', 'Nhật Bản', 'Hợp tác'],
          image: '/images/a1.jpg',
          preview: 'Học lập trình không chỉ là viết code, mà còn là khả năng biến ý tưởng thành sản phẩm thực tế!',
          content: `<p>Vừa qua, học viên của Techzen Academy đã có cơ hội thể hiện tài năng của mình trong buổi demo dự án đầy cảm xúc và thử thách. Đây không chỉ là một bài kiểm tra năng lực đơn thuần, mà còn là cơ hội để các bạn học viên trình bày sản phẩm trước hội đồng mentor và đặc biệt là sự góp mặt của CEO Techzen - anh Lê Duy Linh.</p>
          <p>Những điểm nổi bật trong buổi demo dự án,thuyết trình quy trình phát triển sản phẩm: Từ ý tưởng ban đầu, thiết kế giao diện, đến quá trình triển khai và hoàn thiện sản phẩm. Nhận góp ý từ các chuyên gia trong ngành.</p>
          <p>Hãy cùng Techzen Academy điểm lại những khoảnh khắc đáng nhớ của các bạn học viên trong buổi demo dự án!.</p>
          <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>`
        },
        {
          id: 3,
          title: 'Techzen Academy Khai Giảng Khóa Học Java Back-end Tháng 3/2025',
          date: '21/02/2025',
          category: 'Sự kiện',
          views: 412,
          authorName: 'Võ Minh Nguyệt',
          authorPosition: 'Admin tại Techzen',
          authorAvatar: 'https://techzen.vn/wp-content/themes/Techzen/assets/images/msNguyet-read-news.png',
          tags: ['Academy', 'Java', 'Back-end', 'Đào tạo'],
          image: '/images/academy1.jpg',
          preview: 'Ngày 4/3/2025, Techzen Academy đã chính thức khai giảng khóa học Java Back-end 02, đánh dấu một cột mốc quan trọng trong hành trình đào tạo các lập trình viên chuyên nghiệp.',
          content: `<p>Ngày 4/3/2025, Techzen Academy đã chính thức khai giảng khóa học Java Back-end 02, đánh dấu một cột mốc quan trọng trong hành trình đào tạo các lập trình viên chuyên nghiệp. Đây là cơ hội tuyệt vời để các bạn học viên xây dựng nền tảng vững chắc về công nghệ Back-end, đặc biệt là với ngôn ngữ lập trình Java – một trong những công nghệ phổ biến và mạnh mẽ nhất hiện nay.</p>
          <p>Techzen Academy luôn hướng đến mục tiêu mang lại những khóa học chất lượng cao, giúp học viên không chỉ tiếp cận với lý thuyết mà còn được trải nghiệm thực tế thông qua các dự án thực chiến. Khóa học Java Back-end này được thiết kế nhằm trang bị cho học viên kiến thức từ cơ bản đến nâng cao.</p>
          <p>Một trong những yếu tố quan trọng góp phần vào chất lượng đào tạo tại Techzen Academy chính là đội ngũ giảng viên dày dặn kinh nghiệm, đã từng làm việc tại các công ty công nghệ hàng đầu.</p>
          <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>`
        },
        {
          id: 4,
          title: 'CHÀO MỪNG SINH VIÊN ĐẠI HỌC KYOTO SANGYO ĐẾN THAM QUAN TECHZEN',
          date: '12/03/2025',
          category: 'Giáo dục',
          views: 287,
          authorName: 'Võ Minh Nguyệt',
          authorPosition: 'Admin tại Techzen',
          authorAvatar: 'https://techzen.vn/wp-content/themes/Techzen/assets/images/msNguyet-read-news.png',
          tags: ['Giáo dục', 'Sinh viên', 'Nhật Bản', 'Giao lưu'],
          image: 'https://techzen.vn/wp-content/uploads/2025/03/482208151_631404879649371_2471412739001962159_n.jpg',
          preview: 'Ngày 04/03/2025, Techzen vinh dự chào đón đoàn sinh viên đến từ Đại học Kyoto Sangyo trong chuyến tham quan và giao lưu đầy ý nghĩa.',
          content: `<p>Ngày 04/03/2025, Techzen vinh dự chào đón đoàn sinh viên đến từ Đại học Kyoto Sangyo trong chuyến tham quan và giao lưu đầy ý nghĩa. Sự kiện không chỉ là dịp để các bạn trẻ khám phá môi trường làm việc chuyên nghiệp tại một công ty công nghệ Việt Nam mà còn tạo cơ hội giao lưu văn hóa giữa sinh viên hai nước.</p>
          <p>Các bạn sinh viên đã được giới thiệu về lịch sử phát triển, văn hóa doanh nghiệp cùng các dự án nổi bật mà Techzen đang triển khai. Đặc biệt, đoàn đã dành nhiều thời gian trao đổi với các kỹ sư và nhân viên tại Techzen về môi trường làm việc, cơ hội nghề nghiệp và những kinh nghiệm làm việc trong lĩnh vực công nghệ.</p>
          <p>Buổi giao lưu diễn ra trong không khí thân thiện, cởi mở với nhiều hoạt động chia sẻ văn hóa và trò chơi gắn kết. Kết thúc chuyến thăm, đoàn sinh viên bày tỏ sự ngạc nhiên và ấn tượng trước sự phát triển mạnh mẽ của ngành công nghệ Việt Nam nói chung và Techzen nói riêng.</p>
          <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>`
        },
      ]
    }
  },
  methods: {
    openBlogDetail(blog) {
      this.selectedBlog = blog;
      this.showBlogModal = true;
      document.body.classList.add('modal-open');
    },
    closeBlogModal() {
      this.showBlogModal = false;
      document.body.classList.remove('modal-open');
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

.blog-section {
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.blog-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.blog-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 1.5rem;
}

.blog-content h4 {
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  min-height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-date {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.blog-preview {
  color: #495057;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 70px;
}

/* Modal Styles */
.modal-open {
  overflow: hidden;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  max-width: 800px;
  margin: 1.75rem auto;
}

.modal.show .modal-dialog {
  transform: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.blog-full-content {
  color: #495057;
  line-height: 1.6;
}

.blog-full-content p {
  margin-bottom: 1rem;
}

.blog-full-content ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
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