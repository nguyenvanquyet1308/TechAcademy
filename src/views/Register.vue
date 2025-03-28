<template>
  <div class="register">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Đăng ký khóa học</h1>
        <p class="page-description">Hoàn thành mẫu đăng ký dưới đây để bắt đầu hành trình học tập cùng chúng tôi</p>
      </div>
    </section>

    <!-- Registration Form Section -->
    <section class="section registration-form">
      <div class="container">
        <div class="form-container">
          <div class="form-content">
            <h2>Thông tin đăng ký</h2>
            <p>Vui lòng điền đầy đủ thông tin bên dưới. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ sau khi nhận được đăng ký.</p>
            
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="fullName">Họ và tên <span class="required">*</span></label>
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="form.fullName" 
                  :class="{ 'error': errors.fullName }"
                  required
                >
                <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
              </div>
              
              <div class="form-group">
                <label for="email">Email <span class="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  :class="{ 'error': errors.email }"
                  required
                >
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
              
              <div class="form-group">
                <label for="phone">Số điện thoại <span class="required">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  :class="{ 'error': errors.phone }"
                  required
                >
                <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
              </div>
              
              <div class="form-group">
                <label for="course">Khóa học quan tâm <span class="required">*</span></label>
                <select 
                  id="course" 
                  v-model="form.course"
                  :class="{ 'error': errors.course }"
                  required
                >
                  <option value="" disabled selected>-- Chọn khóa học --</option>
                  <option value="Python AI">Python AI</option>
                  <option value="Java Backend">Java Backend</option>
                </select>
                <span class="error-message" v-if="errors.course">{{ errors.course }}</span>
              </div>
              
              <div class="form-group">
                <label for="experience">Kinh nghiệm lập trình</label>
                <select id="experience" v-model="form.experience">
                  <option value="Mới bắt đầu">Mới bắt đầu</option>
                  <option value="Có kinh nghiệm cơ bản">Có kinh nghiệm cơ bản</option>
                  <option value="Có kiến thức chuyên sâu">Có kiến thức chuyên sâu</option>
                </select>
              </div>
              
              <!-- <div class="form-group">
                <label for="referral">Bạn biết đến chúng tôi qua đâu?</label>
                <select id="referral" v-model="form.referral">
                  <option value="social-media">Mạng xã hội</option>
                  <option value="friend">Bạn bè giới thiệu</option>
                  <option value="search">Tìm kiếm Google</option>
                  <option value="blog">Blog/Forum</option>
                  <option value="other">Khác</option>
                </select>
              </div> -->
              
              <div class="form-group">
                <label for="message">Ghi chú thêm</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="4"
                ></textarea>
              </div>
              
              <div class="form-group checkbox">
                <input 
                  type="checkbox" 
                  id="terms" 
                  v-model="form.terms"
                  :class="{ 'error': errors.terms }"
                  required
                >
                <label for="terms">
                  Tôi đồng ý với <a href="#" @click.prevent="showTerms = true">điều khoản và điều kiện</a> <span class="required">*</span>
                </label>
                <span class="error-message" v-if="errors.terms">{{ errors.terms }}</span>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Đang gửi...' : 'Đăng ký ngay' }}
                </button>
              </div>
            </form>
          </div>
          
          <div class="form-sidebar">
            <div class="sidebar-card contact-info">
              <h3>Thông tin liên hệ</h3>
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Địa chỉ</h4>
                  <p>Số 06 Trần Phú, Thạch Thang, Hải Châu, Đà Nẵng</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Điện thoại</h4>
                  <p>
                    093 550 56 40</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    academy@techzen.vn</p>
                </div>
              </div>
            </div>
            
            <div class="sidebar-card faq">
              <h3>Câu hỏi thường gặp</h3>
              <div class="faq-item">
                <h4>Khi nào khóa học bắt đầu?</h4>
                <p>Các khóa học mới của chúng tôi thường bắt đầu vào đầu mỗi tháng. Sau khi đăng ký, bạn sẽ được thông báo về lịch học cụ thể.</p>
              </div>
              <div class="faq-item">
                <h4>Tôi có cần laptop riêng không?</h4>
                <p>Có, học viên cần có máy tính cá nhân để tham gia học tập và làm bài tập.</p>
              </div>
              <!-- <div class="faq-item">
                <h4>Phương thức thanh toán?</h4>
                <p>Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, thẻ tín dụng hoặc tiền mặt.</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div class="modal" v-if="showSuccessModal">
      <div class="modal-content">
        <span class="close-btn" @click="showSuccessModal = false">&times;</span>
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2>Đăng ký thành công!</h2>
        <p>Cảm ơn bạn đã đăng ký khóa học. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
        <button class="btn" @click="showSuccessModal = false">Đóng</button>
      </div>
    </div>

    <!-- Terms Modal -->
    <div class="modal" v-if="showTerms">
      <div class="modal-content terms-content">
        <span class="close-btn" @click="showTerms = false">&times;</span>
        <h2>Điều khoản và điều kiện</h2>
        <div class="terms-text">
          <h3>1. Điều khoản sử dụng</h3>
          <p>Bằng việc đăng ký và tham gia khóa học tại TechAcademy, học viên đồng ý tuân theo các điều khoản và điều kiện được nêu dưới đây.</p>
          
          <h3>2. Thanh toán và hoàn tiền</h3>
          <p>Học viên cần thanh toán đầy đủ học phí trước khi bắt đầu khóa học. Trong trường hợp học viên muốn rút khỏi khóa học, chính sách hoàn tiền sẽ được áp dụng theo quy định của TechAcademy.</p>
          
          <h3>3. Tài liệu học tập</h3>
          <p>Tất cả tài liệu học tập được cung cấp trong khóa học đều thuộc bản quyền của TechAcademy. Học viên không được sao chép, phân phối hoặc sử dụng các tài liệu này cho mục đích thương mại mà không có sự cho phép bằng văn bản từ TechAcademy.</p>
          
          <h3>4. Chứng chỉ</h3>
          <p>Chứng chỉ hoàn thành khóa học sẽ được cấp cho học viên đáp ứng đầy đủ các yêu cầu của khóa học, bao gồm tham gia các buổi học và hoàn thành các bài tập, dự án theo quy định.</p>
          
          <h3>5. Quy tắc ứng xử</h3>
          <p>Học viên cần tuân thủ các quy tắc ứng xử trong suốt quá trình học tập, tôn trọng giảng viên và các học viên khác, không có hành vi gây rối hoặc làm ảnh hưởng đến môi trường học tập.</p>
        </div>
        <button class="btn" @click="acceptTerms">Tôi đồng ý</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        course: '',
        experience: 'beginner',
        referral: 'social-media',
        message: '',
        terms: false
      },
      errors: {},
      isSubmitting: false,
      showSuccessModal: false,
      showTerms: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {};
      
      if (!this.form.fullName.trim()) {
        this.errors.fullName = 'Vui lòng nhập họ và tên';
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Vui lòng nhập email';
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Email không hợp lệ';
      }
      
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Vui lòng nhập số điện thoại';
      }
      
      if (!this.form.course) {
        this.errors.course = 'Vui lòng chọn khóa học';
      }
      
      if (!this.form.terms) {
        this.errors.terms = 'Vui lòng đồng ý với điều khoản và điều kiện';
      }
      
      return Object.keys(this.errors).length === 0;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      if (this.validateForm()) {
        this.isSubmitting = true;
        
        // Chuẩn bị dữ liệu để gửi đến Google Sheets
        const formData = {
          fullName: this.form.fullName,
          email: this.form.email,
          phone: this.form.phone,
          course: this.form.course,
          experience: this.form.experience,
          message: this.form.message,
          timestamp: new Date().toLocaleString()
        };
        
        // URL của Google Apps Script web app - cần thay thế bằng URL thực tế của bạn
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwD0eXTln4nJMqlBTtIQp3JoBTHcSRmkIvf0c68JltfIadcKZH-cskCWVk_N140DDH6BQ/exec';
        
        // Tạo URL encoded string từ dữ liệu
        const urlEncodedData = Object.keys(formData)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
          .join('&');
        
        // Gửi dữ liệu đến Google Sheets
        console.log('Đang gửi dữ liệu đến:', scriptURL);
        console.log('Dữ liệu gửi đi:', formData);
        
        fetch(scriptURL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: urlEncodedData
        })
        .then(response => {
          // Kiểm tra nếu response là text hoặc json
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json();
          } else {
            return response.text().then(text => {
              // Nếu là "Added.." thì coi như thành công
              if (text.includes("Added")) {
                return { result: "success" };
              }
              return { result: "error", error: text };
            });
          }
        })
        .then(data => {
          console.log('Phản hồi từ server:', data);
          if (data.result === 'success') {
            this.isSubmitting = false;
            this.showSuccessModal = true;
            this.resetForm();
          } else {
            this.isSubmitting = false;
            alert('Lỗi: ' + data.error);
          }
        })
        .catch(error => {
          console.error('Lỗi:', error);
        });
      }
    },
    resetForm() {
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        course: '',
        experience: 'beginner',
        referral: 'social-media',
        message: '',
        terms: false
      };
    },
    acceptTerms() {
      this.form.terms = true;
      this.showTerms = false;
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #4a6bff 0%, #6a3aef 100%);
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

.registration-form {
  background: #f8f9fa;
}

.form-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.form-content {
  background: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-content h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #212529;
}

.form-content > p {
  color: #6c757d;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #495057;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #4a6bff;
  outline: none;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #dc3545;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 5px;
}

.required {
  color: #dc3545;
}

.checkbox {
  display: flex;
  align-items: flex-start;
}

.checkbox input {
  margin-top: 5px;
  margin-right: 10px;
}

.checkbox label {
  margin-bottom: 0;
}

.checkbox a {
  color: #4a6bff;
  text-decoration: none;
}

.checkbox a:hover {
  text-decoration: underline;
}

.form-actions {
  margin-top: 30px;
}

.btn-primary {
  background: #4a6bff;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #3451d1;
}

.btn-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.form-sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.sidebar-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.sidebar-card h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #212529;
}

.info-item {
  display: flex;
  margin-bottom: 20px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  margin-right: 15px;
  color: #4a6bff;
}

.info-item h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #212529;
}

.info-item p {
  color: #6c757d;
  margin: 0;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #212529;
}

.faq-item p {
  color: #6c757d;
  margin: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
}

.terms-content {
  max-width: 700px;
  text-align: left;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #4a6bff;
}

.modal h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #212529;
}

.modal p {
  color: #6c757d;
  margin-bottom: 25px;
}

.modal .btn {
  background: #4a6bff;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.modal .btn:hover {
  background: #3451d1;
}

.terms-text {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
}

.terms-text h3 {
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: #212529;
}

.terms-text p {
  color: #6c757d;
  margin-bottom: 15px;
}

@media (max-width: 992px) {
  .form-container {
    grid-template-columns: 1fr;
  }
  
  .form-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }
  
  .form-content {
    padding: 30px 20px;
  }
}
</style> 