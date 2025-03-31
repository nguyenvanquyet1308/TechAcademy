<template>
  <div class="faq-container">
    <div class="page-header">
      <h1>Câu hỏi thường gặp</h1>
      <p class="lead">Giải đáp những thắc mắc phổ biến về khóa học tại TechAcademy</p>
    </div>

    <div class="faq-section">
      <div class="container">
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" 
                :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
                {{ faq.question }}
              </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" 
              :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <h2>Bạn vẫn có thắc mắc?</h2>
            <p>Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào khác.</p>
            <div class="contact-buttons">
              <a href="tel:+8493 550 56 40"class="btn btn-primary me-2">
                <i class="fas fa-phone-alt me-1"></i> Gọi ngay
              </a>
              <a href="mailto:academy@techzen.vn" class="btn btn-outline-primary">
                <i class="fas fa-envelope me-1"></i> Gửi email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQView',
  data() {
    return {
      faqs: [
        {
          question: 'TechAcademy có những khóa học nào?',
          answer: 'TechAcademy cung cấp nhiều khóa học đa dạng trong lĩnh vực công nghệ, bao gồm: Lập trình Web (Frontend & Backend), Phát triển ứng dụng di động, Data Science, UI/UX Design, DevOps, Cloud Computing, và nhiều khóa học chuyên sâu khác.'
        },
        {
          question: 'Làm thế nào để đăng ký khóa học?',
          answer: 'Bạn có thể đăng ký khóa học tại TechAcademy bằng cách: <br>1. Truy cập trang đăng ký trên website của chúng tôi.<br>2. Điền thông tin cá nhân và chọn khóa học mong muốn.<br>3. Thanh toán học phí.<br>4. Nhận email xác nhận và hướng dẫn tham gia khóa học.'
        },
        {
          question: 'Tôi cần có kiến thức nền tảng gì để tham gia khóa học?',
          answer: 'Mỗi khóa học có yêu cầu đầu vào khác nhau. Chúng tôi có các khóa học dành cho người mới bắt đầu (không yêu cầu kiến thức nền) và các khóa học nâng cao (cần có kiến thức cơ bản). Thông tin chi tiết về yêu cầu đầu vào được mô tả cụ thể trong phần giới thiệu của từng khóa học.'
        },
        {
          question: 'Khóa học được tổ chức online hay offline?',
          answer: 'TechAcademy tổ chức cả hai hình thức học tập:<br>- <strong>Học trực tuyến (Online)</strong>: Học viên tham gia lớp học thông qua nền tảng học trực tuyến của chúng tôi.<br>- <strong>Học trực tiếp (Offline)</strong>: Học viên đến trực tiếp trung tâm để tham gia lớp học.'
        },
        {
          question: 'Tôi có thể thanh toán học phí bằng hình thức nào?',
          answer: 'TechAcademy chấp nhận nhiều hình thức thanh toán: Chuyển khoản ngân hàng, Thanh toán qua thẻ tín dụng/ghi nợ, Ví điện tử (MoMo, ZaloPay, VNPay), Thanh toán trực tiếp tại trung tâm.'
        },
        {
          question: 'TechAcademy có cấp chứng chỉ sau khi hoàn thành khóa học không?',
          answer: 'Có, học viên sẽ được cấp chứng chỉ hoàn thành khóa học sau khi đáp ứng các yêu cầu đánh giá. Chứng chỉ của TechAcademy được nhiều doanh nghiệp công nghệ trong và ngoài nước công nhận.'
        },
        {
          question: 'Tôi có được hỗ trợ tìm việc làm sau khi hoàn thành khóa học không?',
          answer: 'Có, TechAcademy có chương trình hỗ trợ việc làm cho học viên xuất sắc. Chúng tôi có mạng lưới đối tác doanh nghiệp rộng lớn và thường xuyên tổ chức các buổi gặp gỡ nhà tuyển dụng, workshop kỹ năng phỏng vấn và hỗ trợ hoàn thiện hồ sơ xin việc.'
        },
        {
          question: 'Nếu tôi bỏ lỡ một buổi học, tôi có thể học bù không?',
          answer: 'Có, TechAcademy cung cấp bản ghi hình của các buổi học và học viên có thể xem lại bất kỳ lúc nào. Ngoài ra, học viên cũng có thể đặt lịch học bù với mentor nếu cần thiết.'
        },
        {
          question: 'TechAcademy có chính sách hoàn tiền không?',
          answer: 'Có, TechAcademy có chính sách hoàn tiền trong vòng 7 ngày đầu tiên của khóa học nếu học viên không hài lòng với nội dung khóa học. Tuy nhiên, chính sách này chỉ áp dụng khi học viên đã tham gia ít hơn 25% tổng số buổi học.'
        },
        {
          question: 'Tôi cần chuẩn bị những thiết bị gì để tham gia khóa học?',
          answer: 'Đối với hầu hết các khóa học, bạn cần có một máy tính cá nhân (laptop hoặc desktop) với cấu hình đủ để chạy các phần mềm liên quan đến khóa học. Yêu cầu cụ thể về cấu hình máy tính và phần mềm cần thiết sẽ được cung cấp trước khi khóa học bắt đầu.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq-container {
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

.faq-section {
  margin-bottom: 4rem;
}

.accordion-item {
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.accordion-button {
  font-weight: bold;
  color: #2c3e50;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
}

.accordion-body {
  padding: 1.25rem;
  color: #495057;
}

.contact-section {
  background-color: #f8f9fa;
  padding: 3rem 0;
  border-radius: 8px;
}

.contact-section h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.contact-section p {
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.contact-buttons {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .accordion-button {
    font-size: 0.95rem;
  }
}
</style> 