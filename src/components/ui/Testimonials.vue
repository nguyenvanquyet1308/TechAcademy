<template>
  <section class="section testimonials">
    <div class="container">
      <h2 class="section-title">Học viên nói gì về chúng tôi</h2>
      <p class="section-subtitle">Phản hồi chân thực từ học viên đã tham gia khóa học tại Techzen Academy</p>
      
      <!-- Navigation buttons -->
      <div class="testimonial-nav">
        <button class="nav-btn prev" @click="prevPage" :disabled="currentPage === 0">
          <i class="bi bi-chevron-left"></i>
        </button>
        <div class="pagination-dots">
          <span 
            v-for="(_, index) in totalPages" 
            :key="index" 
            :class="['dot', { active: currentPage === index }]"
            @click="goToPage(index)"
          ></span>
        </div>
        <button class="nav-btn next" @click="nextPage" :disabled="currentPage === totalPages - 1">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      
      <transition-group name="testimonial-fade" tag="div" class="testimonials-grid">
        <div 
          class="testimonial-card" 
          v-for="(testimonial, index) in visibleTestimonials" 
          :key="testimonial.id || index"
          :class="{ 'highlight': testimonial.highlight }"
        >
          <div class="testimonial-badge" v-if="testimonial.highlight">Nổi bật</div>
          <div class="testimonial-content">
            <div class="rating">
              <span v-for="star in 5" :key="star" class="star">
                <i :class="star <= testimonial.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
              </span>
            </div>
            <p>{{ testimonial.content }}</p>
            <div class="course-tag" v-if="testimonial.course">
              <i class="bi bi-journal-code"></i> {{ testimonial.course }}
            </div>
          </div>
          <div class="testimonial-author">
            <img :src="testimonial.avatar" :alt="testimonial.name">
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.title }}</p>
              <small v-if="testimonial.date">{{ testimonial.date }}</small>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  props: {
    customTestimonials: {
      type: Array,
      default: null
    },
    itemsPerPage: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      currentPage: 0,
      defaultTestimonials: [
        {
          id: 1,
          content: '"Khóa học đã giúp tôi từ một người không biết gì về lập trình trở thành một developer chuyên nghiệp. Các kiến thức được truyền đạt dễ hiểu và thực tế."',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          name: 'Nguyễn Văn A',
          title: 'Frontend Developer',
          rating: 5,
          course: 'JavaScript Advanced',
          date: 'Tháng 3, 2023',
          highlight: true
        },
        {
          id: 2,
          content: '"Giảng viên rất tận tâm, luôn sẵn sàng giải đáp mọi thắc mắc. Tôi đặc biệt ấn tượng với cách tiếp cận thực tế trong các bài học."',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          name: 'Trần Thị B',
          title: 'UX/UI Designer',
          rating: 4,
          course: 'UI/UX Design',
          date: 'Tháng 5, 2023'
        },
        {
          id: 3,
          content: '"Nhờ khóa học Python AI tại Techzen, tôi đã được nhận vào vị trí Data Analyst tại công ty công nghệ hàng đầu. Kiến thức thực tế và các dự án trong khóa học đã giúp tôi rất nhiều."',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          name: 'Lê Minh Tuấn',
          title: 'Data Analyst',
          rating: 5,
          course: 'Python AI',
          date: 'Tháng 6, 2023',
          highlight: true
        },
        {
          id: 4,
          content: '"Ban đầu tôi rất lo lắng khi bắt đầu học lập trình ở độ tuổi 35, nhưng nhờ sự kiên nhẫn và phương pháp giảng dạy của các thầy cô tại Techzen, tôi đã có thể chuyển đổi nghề nghiệp thành công."',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
          name: 'Hoàng Thị Mai',
          title: 'Java Developer',
          rating: 5,
          course: 'Java Backend',
          date: 'Tháng 7, 2023'
        },
        {
          id: 5,
          content: '"Tôi đánh giá cao cách Techzen Academy cập nhật liên tục nội dung khóa học theo xu hướng công nghệ mới nhất. Điều này giúp tôi luôn tự tin với kiến thức của mình khi phỏng vấn."',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
          name: 'Phạm Văn Hùng',
          title: 'DevOps Engineer',
          rating: 4,
          course: 'Cloud & DevOps',
          date: 'Tháng 8, 2023'
        }
      ]
    }
  },
  computed: {
    allTestimonials() {
      return this.customTestimonials || this.defaultTestimonials;
    },
    totalPages() {
      return Math.ceil(this.allTestimonials.length / this.itemsPerPage);
    },
    visibleTestimonials() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allTestimonials.slice(start, end);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    goToPage(pageIndex) {
      this.currentPage = pageIndex;
    }
  }
}
</script>

<style scoped>
.section-subtitle {
  text-align: center;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.nav-btn {
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #f0f0f0;
  border-color: #aaa;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #4a6bff;
  transform: scale(1.2);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 1rem;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #eee;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.testimonial-card.highlight {
  border: 1px solid rgba(74, 107, 255, 0.3);
  background: linear-gradient(to bottom, #f7f9ff, white);
}

.testimonial-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #4a6bff;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
}

.testimonial-content {
  padding: 30px;
  font-style: italic;
  color: #495057;
  position: relative;
}

.rating {
  margin-bottom: 1rem;
  color: #f8c01a;
}

.star {
  display: inline-block;
  margin-right: 2px;
}

.course-tag {
  display: inline-block;
  margin-top: 1rem;
  padding: 5px 10px;
  background: rgba(74, 107, 255, 0.1);
  color: #4a6bff;
  border-radius: 20px;
  font-size: 0.85rem;
  font-style: normal;
}

.testimonial-author {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.author-info h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.author-info p {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #4a6bff;
  font-weight: 500;
}

.author-info small {
  display: block;
  color: #999;
  font-size: 0.8rem;
  margin-top: 3px;
}

/* Transition effects */
.testimonial-fade-enter-active, 
.testimonial-fade-leave-active {
  transition: all 0.5s ease;
}

.testimonial-fade-enter-from, 
.testimonial-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-author img {
    width: 50px;
    height: 50px;
  }
}
</style> 