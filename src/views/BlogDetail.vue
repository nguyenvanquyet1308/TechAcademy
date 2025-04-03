<template>
  <div class="blog-detail-container">
    <div class="container">
      <div class="row">
        <!-- Related Posts Sidebar -->
        <div class="col-lg-3">
          <div class="related-posts-sidebar">
            <h4>Bài viết liên quan</h4>
            <div class="related-posts-list">
              <div 
                v-for="post in blogs" 
                :key="post.id" 
                @click="showBlogPost(post.id)"
                class="related-post-link"
                :class="{ 'active': post.id === parseInt(currentBlogId) }"
              >
                <div class="related-post-card">
                  <div class="related-post-image">
                    <img :src="post.image" alt="Related Post" class="img-fluid">
                  </div>
                  <div class="related-post-content">
                    <h5>{{ post.title }}</h5>
                    <p class="related-post-date">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-lg-9">
          <transition name="fade" mode="out-in">
            <div :key="currentBlogId">
              <!-- Featured Image -->
              <!-- <div v-if="blog.image" class="blog-featured-image">
                <img :src="blog.image" alt="Blog Image" class="img-fluid">
              </div> -->
              
              <div class="blog-header">
                <h1 class="blog-title">{{ blog.title }}</h1>
                <div class="blog-meta">
                  <span class="blog-date"><i class="far fa-calendar-alt"></i> {{ blog.date }}</span>
                  <span class="blog-category"><i class="far fa-folder"></i> {{ blog.category || 'Tin tức' }}</span>
                </div>
              </div>
              
              <!-- Author Info -->
              <div class="blog-author">
                <div class="author-avatar">
                  <img :src="blog.authorAvatar || 'https://via.placeholder.com/80x80?text=Author'" alt="Author">
                </div>
                <div class="author-info">
                  <h5>{{ blog.authorName || 'Võ Minh Nguyệt' }}</h5>
                  <p>{{ blog.authorPosition || 'Admin tại Techzen' }}</p>
                </div>
              </div>
              
              <!-- Blog Content with Embedded Images -->
              <div class="blog-content-wrapper">
                <div v-if="blog.contentSections" class="blog-content-sections">
                  <div v-for="(section, index) in blog.contentSections" :key="index">
                    <!-- Text content section -->
                    <div v-if="section.type === 'text'" class="content-text" v-html="section.content"></div>
                    
                    <!-- Image section -->
                    <div v-else-if="section.type === 'image'" class="content-image">
                      <img :src="section.src" :alt="section.alt || 'Blog image'" class="img-fluid">
                      <p v-if="section.caption" class="image-caption">{{ section.caption }}</p>
                    </div>
                    
                    <!-- Image gallery within content -->
                    <div v-else-if="section.type === 'gallery'" class="content-gallery">
                      <div class="row">
                        <div v-for="(image, imgIndex) in section.images" :key="imgIndex" 
                             :class="section.images.length > 2 ? 'col-md-4' : 'col-md-6'" class="mb-4">
                          <div class="gallery-item">
                            <img :src="image.src" :alt="image.alt || 'Gallery image'" class="img-fluid">
                          </div>
                        </div>
                      </div>
                      <p v-if="section.caption" class="gallery-caption">{{ section.caption }}</p>
                    </div>
                  </div>
                </div>
                
                <div v-else class="blog-content" v-html="blog.content"></div>
              </div>
              
              <!-- Share Buttons -->
              <!-- <div class="blog-share">
                <h5>Xem chi tiết hơn tại</h5>
                <div class="share-buttons">
                  <a href="https://techzen.vn/news/" target="_blank" class="btn btn-facebook"><i class="fab fa-facebook-f"></i> Techzen</a>
                </div>
              </div> -->
              
              <!-- Back Button -->
              <div class="blog-actions">
                <router-link to="/reviews" class="btn btn-secondary">
                  <i class="fas fa-arrow-left"></i> Quay lại
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>
      
      <!-- Related Posts Bottom Section -->
      <div class="row mt-5">
        <div class="col-12">
          <h3 class="related-posts-title text-center mb-4">Có thể bạn quan tâm</h3>
        </div>
        <div class="col-md-4 mb-4" v-for="post in relatedPosts" :key="post.id">
          <div @click="showBlogPost(post.id)" class="related-post-card-bottom">
            <div class="related-post-image-bottom">
              <img :src="post.image" alt="Related Post" class="img-fluid">
            </div>
            <div class="related-post-content-bottom">
              <h5>{{ post.title }}</h5>
              <div class="post-meta">
                <span class="post-date"><i class="far fa-calendar-alt"></i> {{ post.date }}</span>
                <span class="post-category"><i class="far fa-folder"></i> {{ post.category }}</span>
              </div>
              <p class="post-preview">{{ post.preview }}</p>
              <div class="post-tags">
                <span v-for="(tag, idx) in post.tags" :key="idx" class="post-tag">{{ tag }}</span>
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
  name: 'BlogDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentBlogId: null,
      blog: {},
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
          gallery: [
            'https://via.placeholder.com/600x400?text=Lễ+Ký+kết+1',
            'https://via.placeholder.com/600x400?text=Lễ+Ký+kết+2',
            'https://via.placeholder.com/600x400?text=Lễ+Ký+kết+3'
          ],
          preview: 'Chiều ngày 10/7, Trong sự kiện khai trương văn phòng mới, Techzen đã kí kết hợp tác MOU với Trung tâm phát triển phần mềm SDC nhằm phối hợp trong công tác tuyển dụng học viên ngành IT cho học viện Techzen Academy.',
          content: `<p> Techzen chính thức công bố thành lập Học viện công nghệ thông tin – Techzen Academy, cam kết mang đến chương trình đào tạo bài bản, chuyên sâu, cập nhật xu hướng công nghệ mới nhất, giúp học viên trau dồi kiến thức và kỹ năng thực tiễn, trở thành những chuyên gia IT tài năng, sẵn sàng đáp ứng nhu cầu thị trường.</p>
          <p>Hi vọng với những nội dung mà Techzen và Trung tâm phát triển phần mềm SDC đã kí kết, sẽ thúc đẩy sự phát triển nhanh chóng và hiệu quả của Techzen Academy trong tương lai..</p>
          <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>`,
          contentSections: [
            {
              type: 'text',
              content: '<p>Techzen chính thức công bố thành lập Học viện công nghệ thông tin – Techzen Academy, cam kết mang đến chương trình đào tạo bài bản, chuyên sâu, cập nhật xu hướng công nghệ mới nhất, giúp học viên trau dồi kiến thức và kỹ năng thực tiễn, trở thành những chuyên gia IT tài năng, sẵn sàng đáp ứng nhu cầu thị trường.</p>'
            },
            {
              type: 'image',
              src: 'https://techzen.vn/wp-content/uploads/2024/07/ROM01773-min-1-1-2048x1365.jpg',
              alt: 'Lễ khai trương Techzen Academy',
              caption: 'Ban lãnh đạo Techzen trong buổi lễ khai trương Techzen Academy'
            },
            {
              type: 'text',
              content: '<p>Lễ ký kết hợp tác diễn ra trong không khí trang trọng với sự tham dự của đại diện lãnh đạo hai bên. Đại diện Techzen, ông Lê Duy Linh - CEO đã chia sẻ về tầm nhìn phát triển nhân lực IT chất lượng cao thông qua Techzen Academy và vai trò của việc hợp tác với Trung tâm phát triển phần mềm SDC.</p>'
            },
            {
              type: 'image',
              src: 'https://techzen.vn/wp-content/uploads/2024/07/ROM01127-min-2048x1365.jpg',
              caption: ''
            },
            {
              type: 'text',
              content: '<p>Hi vọng với những nội dung mà Techzen và Trung tâm phát triển phần mềm SDC đã kí kết, sẽ thúc đẩy sự phát triển nhanh chóng và hiệu quả của Techzen Academy trong tương lai.</p><p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế.</p>'
            }
          ]
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
          contentSections: [
            {
              type: 'text',
              content: '<p>Vừa qua, học viên của Techzen Academy đã có cơ hội thể hiện tài năng của mình trong buổi demo dự án đầy cảm xúc và thử thách. Đây không chỉ là một bài kiểm tra năng lực đơn thuần, mà còn là cơ hội để các bạn học viên trình bày sản phẩm trước hội đồng mentor và đặc biệt là sự góp mặt của CEO Techzen - anh Lê Duy Linh</p>'
            },
            {
              type: 'image',
              src: '/images/a1.jpg',
              alt: '',
              caption: 'Các bạn học viên demo dự án trước các mentor của công ty.'
            },
            {
              type: 'text',
              content: `<div>
                <p>Những điểm nổi bật trong buổi demo dự án,thuyết trình quy trình phát triển sản phẩm: Từ ý tưởng ban đầu, thiết kế giao diện, đến quá trình triển khai và hoàn thiện sản phẩm. Nhận góp ý từ các chuyên gia trong ngành:</p>
                <p>Các mentor, PMO, QC Manager của Techzen Academy đã trực tiếp đánh giá và đưa ra những lời khuyên quý báu. Rèn luyện kỹ năng mềm: Học viên có cơ hội trình bày ý tưởng, phản biện và trả lời các câu hỏi từ hội đồng đánh giá. Những sản phẩm chất lượng có thể trở thành "tấm vé vàng" giúp học viên chinh phục các nhà tuyển dụng công nghệ hàng đầu. Buổi demo không chỉ giúp học viên kiểm chứng lại những kiến thức đã học, mà còn tạo động lực để họ tiếp tục phát triển bản thân và theo đuổi đam mê lập trình.</p>
                <p>Dự án thực tế - Cơ hội nghề nghiệp.</p>
              </div>`
            },
            {
              type: 'gallery',
              images: [
                { src: '/images/a2.jpg', alt: '' },
                { src: '/images/a3.jpg', alt: '' }
              ],
              caption: 'Các bạn học viên demo dự án trước các mentor của công ty.'
            },
            {
              type: 'text',
              content: '<p>Hãy cùng Techzen Academy điểm lại những khoảnh khắc đáng nhớ của các bạn học viên trong buổi demo dự án!.</p><p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế...</p>'
            }
          ]
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
          tags: ['Academy', '', 'Nhật Bản'],
          image: '/images/academy1.jpg',
          authorAvatar: 'https://techzen.vn/wp-content/themes/Techzen/assets/images/msNguyet-read-news.png',
          contentSections: [
            {
              type: 'text',
              content: `<div>
                <h3>Bước Chân Đầu Tiên Trên Hành Trình Chinh Phục Back-end </h3>
                <p>Ngày 4/3/2025, Techzen Academy đã chính thức khai giảng khóa học Java Back-end 02, đánh dấu một cột mốc quan trọng trong hành trình đào tạo các lập trình viên chuyên nghiệp. Đây là cơ hội tuyệt vời để các bạn học viên xây dựng nền tảng vững chắc về công nghệ Back-end, đặc biệt là với ngôn ngữ lập trình Java – một trong những công nghệ phổ biến và mạnh mẽ nhất hiện nay.</p>
                <h3>Chương Trình Học Bài Bản Kết Hợp Thực Chiến</h3>
                <p>Techzen Academy luôn hướng đến mục tiêu mang lại những khóa học chất lượng cao, giúp học viên không chỉ tiếp cận với lý thuyết mà còn được trải nghiệm thực tế thông qua các dự án thực chiến. Khóa học Java Back-end này được thiết kế nhằm trang bị cho học viên kiến thức từ cơ bản đến nâng cao, bao gồm:
                <li>Lập trình Java căn bản và nâng cao </li>
                <li>Cấu trúc dữ liệu & thuật toán</li>
                <li>Spring Boot và hệ sinh thái Spring</li>
                <li>Cơ sở dữ liệu & ORM (JPA, Hibernate)</li>
                <li>Xây dựng API và bảo mật hệ thống</li>
                <li>Triển khai và vận hành ứng dụng thực tế
                </li></p>
                <p>Dự án thực tế - Cơ hội nghề nghiệp.</p>
              </div>`
            },
            {
              type: 'image',
              src: '/images/academy1.jpg',
              alt: '',
              caption: ''
            },
            {
              type: 'text',
              content: `<div>
                <h3>Đồng Hành Cùng Đội Ngũ Giảng Viên Giàu Kinh Nghiệm </h3>
                <p>Một trong những yếu tố quan trọng góp phần vào chất lượng đào tạo tại Techzen Academy chính là đội ngũ giảng viên dày dặn kinh nghiệm, đã từng làm việc tại các công ty công nghệ hàng đầu. Học viên sẽ được hướng dẫn tận tình, giải đáp thắc mắc nhanh chóng và được chia sẻ những kinh nghiệm thực tế từ các chuyên gia trong ngành.</p>
                <h3>Cơ Hội Nghề Nghiệp Rộng Mở</h3>
                <p>
                Hoàn thành khóa học, học viên không chỉ nắm vững các kiến thức cốt lõi về Java Back-end mà còn có thể tự tin tham gia vào các dự án thực tế, ứng tuyển vào các vị trí lập trình viên Back-end tại các công ty công nghệ. Đây chính là bệ phóng giúp các bạn tiến xa hơn trong sự nghiệp lập trình của mình.</p>
              </div>`
            },
            {
              type: 'image',
              src: '/images/academy2.jpg',
              alt: '',
              caption: ''
            },
            {
              type: 'text',
              content: '<p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế.</p>'
            }
          ]
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
          contentSections: [
            {
              type: 'text',
              content: `<div>
                <h3>Ngày 04/03/2025, Techzen vinh dự chào đón đoàn sinh viên đến từ Đại học Kyoto Sangyo trong chuyến tham quan và giao lưu đầy ý nghĩa. </h3>
                <p>Ngày 04/03/2025, Techzen vinh dự chào đón đoàn sinh viên đến từ Đại học Kyoto Sangyo trong chuyến tham quan và giao lưu đầy ý nghĩa. Sự kiện không chỉ là dịp để các bạn trẻ khám phá môi trường làm việc chuyên nghiệp tại một công ty công nghệ Việt Nam mà còn tạo cơ hội giao lưu văn hóa giữa sinh viên hai nước.</p>
                <p>Các bạn sinh viên đã được giới thiệu về lịch sử phát triển, văn hóa doanh nghiệp cùng các dự án nổi bật mà Techzen đang triển khai. Đặc biệt, đoàn đã dành nhiều thời gian trao đổi với các kỹ sư và nhân viên tại Techzen về môi trường làm việc, cơ hội nghề nghiệp và những kinh nghiệm làm việc trong lĩnh vực công nghệ.</p>
                <p>Buổi giao lưu diễn ra trong không khí thân thiện, cởi mở với nhiều hoạt động chia sẻ văn hóa và trò chơi gắn kết. Kết thúc chuyến thăm, đoàn sinh viên bày tỏ sự ngạc nhiên và ấn tượng trước sự phát triển mạnh mẽ của ngành công nghệ Việt Nam nói chung và Techzen nói riêng.</p>
              </div>`
            },
            {
              type: 'image',
              src: 'https://techzen.vn/wp-content/uploads/2025/03/481766616_631404866316039_3406295449497427355_n.jpg',
              alt: '',
              caption: 'Đoàn sinh viên đến từ Đại học Kyoto Sangyo.'
            },
            {
              type: 'text',
              content: `<div>
              <p>Buổi giao lưu diễn ra trong không khí thân thiện, cởi mở với nhiều hoạt động chia sẻ văn hóa và trò chơi gắn kết. Kết thúc chuyến thăm, đoàn sinh viên bày tỏ sự ngạc nhiên và ấn tượng trước sự phát triển mạnh mẽ của ngành công nghệ Việt Nam nói chung và Techzen nói riêng.</p>
              </div>`
            },
            {
              type: 'text',
              content: `<div>
                <h3>Cầu Nối Tri Thức và Hợp Tác Quốc Tế</h3>
                <p>Chuyến tham quan không chỉ giúp sinh viên Kyoto Sangyo hiểu thêm về thị trường công nghệ Việt Nam mà còn là cơ hội để Techzen chia sẻ tầm nhìn và sứ mệnh của mình. Hy vọng rằng những trải nghiệm thực tế này sẽ tiếp thêm động lực để các bạn trẻ tiếp tục hành trình học tập và phát triển trong lĩnh vực công nghệ.</p>
              </div>`
            },
            {
              type: 'image',
              src: 'https://techzen.vn/wp-content/uploads/2025/03/482020942_631404876316038_6838269712623256208_n.jpg',
              alt: '',
              caption: 'Các bạn sinh viên trường Đại học Kyoto Sangyo.'
            },
            {
              type: 'text',
              content: `<div>
                <p>Techzen mong rằng đây sẽ là tiền đề cho nhiều hoạt động hợp tác và giao lưu quốc tế trong tương lai. Hẹn gặp lại các bạn trong những sự kiện sắp tới..</p>
                <p>Techzen - Người tử tế sẽ tạo ra những sản phẩm tử tế.</p>
                </div>`
            },
          ]
        },
      ]
    }
  },
  computed: {
    relatedPosts() {
      const currentId = parseInt(this.currentBlogId);
      // Get blogs with the same category or tags, excluding the current one
      let related = this.blogs
        .filter(blog => blog.id !== currentId)
        .filter(blog => {
          if (!this.blog.category && !this.blog.tags) return true;
          
          // Check for matching category
          const categoryMatch = blog.category === this.blog.category;
          
          // Check for matching tags
          let tagMatch = false;
          if (this.blog.tags && blog.tags) {
            tagMatch = blog.tags.some(tag => this.blog.tags.includes(tag));
          }
          
          return categoryMatch || tagMatch;
        });
      
      // Limit to 3 related posts
      return related.slice(0, 3);
    }
  },
  methods: {
    loadBlogPost(id) {
      const blogId = parseInt(id);
      this.blog = this.blogs.find(blog => blog.id === blogId) || {};
      this.currentBlogId = id;
      
      // Set page title
      document.title = this.blog.title ? `${this.blog.title} | TechAcademy` : 'Blog | TechAcademy';
      
      // Scroll to top
      window.scrollTo(0, 0);
    },
    showBlogPost(id) {
      // Update URL without reloading the page
      this.$router.push({ name: 'BlogDetail', params: { id: id.toString() } });
      
      // Load the blog content
      this.loadBlogPost(id);
    }
  },
  created() {
    this.currentBlogId = this.id;
    this.loadBlogPost(this.id);
  },
  watch: {
    // Watch for route changes to update the selected blog
    '$route.params.id': function(newId) {
      if (newId !== this.currentBlogId) {
        this.loadBlogPost(newId);
      }
    }
  }
}
</script>

<style scoped>
.blog-detail-container {
  padding: 3rem 0;
}

.blog-featured-image {
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.blog-header {
  margin-bottom: 2rem;
  text-align: center;
}

.blog-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.blog-meta {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.blog-author {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h5 {
  margin: 0 0 0.5rem 0;
  font-weight: bold;
  color: #2c3e50;
}

.author-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.blog-content-wrapper {
  margin-bottom: 2rem;
}

.content-text {
  color: #495057;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.content-image {
  margin: 2rem 0;
  text-align: center;
}

.content-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-caption, .gallery-caption {
  text-align: center;
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 0.75rem;
  font-style: italic;
}

.content-gallery {
  margin: 2rem 0;
}

.blog-gallery {
  margin: 2rem 0;
}

.gallery-title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.blog-tags {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.tag-label {
  font-weight: bold;
  margin-right: 0.5rem;
  color: #2c3e50;
}

.tag-item {
  display: inline-block;
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  margin: 0.25rem;
  font-size: 0.9rem;
}

.blog-share {
  margin: 2rem 0;
  text-align: center;
}

.blog-share h5 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.share-buttons .btn {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: white;
}

.btn-facebook {
  background-color: #3b5998;
}
.btn-facebook:hover{
  background-color: blue;
}
.related-posts-sidebar {
  position: sticky;
  top: 2rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.related-posts-sidebar h4 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.related-posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.related-post-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.related-post-card:hover {
  transform: translateY(-3px);
}

.related-post-image {
  height: 120px;
  overflow: hidden;
}

.related-post-content {
  padding: 0.75rem;
}

.related-post-content h5 {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #2c3e50;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-post-date {
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0;
}

.blog-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 991px) {
  .related-posts-sidebar {
    position: static;
    margin-bottom: 2rem;
  }
  
  .related-posts-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .related-posts-list {
    grid-template-columns: 1fr;
  }
}

.related-post-link {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1rem;
}

.related-post-link.active .related-post-card {
  border-left: 3px solid #007bff;
  background-color: rgba(0, 123, 255, 0.05);
}

/* Animation transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Related Posts Bottom Section Styles */
.related-posts-title {
  color: #2c3e50;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.related-posts-title:after {
  content: '';
  position: absolute;
  width: 80px;
  height: 3px;
  background-color: #3498db;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.related-post-card-bottom {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.related-post-card-bottom:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.related-post-image-bottom {
  height: 180px;
  overflow: hidden;
}

.related-post-image-bottom img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-post-card-bottom:hover .related-post-image-bottom img {
  transform: scale(1.05);
}

.related-post-content-bottom {
  padding: 1.5rem;
}

.related-post-content-bottom h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  color: #6c757d;
}

.post-preview {
  color: #495057;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-tag {
  background-color: #e9ecef;
  color: #495057;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .post-meta {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style> 