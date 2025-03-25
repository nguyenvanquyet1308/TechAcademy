<template>
  <div class="tuition">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Học phí & Ưu đãi</h1>
        <p class="page-description">Thông tin chi tiết về học phí và các chương trình ưu đãi tại TechAcademy</p>
      </div>
    </section>

    <!-- Pricing Plans Section -->
    <section class="section pricing-plans">
      <div class="container">
        <h2 class="section-title">Các gói học phí</h2>
        <p class="section-desc">Chúng tôi cung cấp nhiều lựa chọn học phí phù hợp với nhu cầu của bạn</p>
        
        <div class="pricing-grid">
          <div class="pricing-card basic">
            <div class="card-header">
              <h3>Gói Cơ Bản</h3>
              <div class="price">
                <span class="amount">3.500.000 VNĐ</span>
                <span class="period">/ khóa học</span>
              </div>
            </div>
            <div class="card-body">
              <ul class="features-list">
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Truy cập khóa học online</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Tài liệu học tập</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Hỗ trợ qua diễn đàn</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Chứng chỉ hoàn thành</span>
                </li>
                <li class="unavailable">
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                  <span>Hướng dẫn 1-1</span>
                </li>
                <li class="unavailable">
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                  <span>Đánh giá CV/Portfolio</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <router-link to="/register" class="btn btn-outline">Đăng ký ngay</router-link>
            </div>
          </div>

          <div class="pricing-card standard">
            <div class="popular">Phổ biến nhất</div>
            <div class="card-header">
              <h3>Gói Tiêu Chuẩn</h3>
              <div class="price">
                <span class="amount">5.800.000 VNĐ</span>
                <span class="period">/ khóa học</span>
              </div>
            </div>
            <div class="card-body">
              <ul class="features-list">
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Truy cập khóa học online</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Tài liệu học tập</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Hỗ trợ trực tiếp</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Chứng chỉ hoàn thành</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>4 buổi hướng dẫn 1-1</span>
                </li>
                <li class="unavailable">
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                  <span>Đánh giá CV/Portfolio</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <router-link to="/register" class="btn">Đăng ký ngay</router-link>
            </div>
          </div>

          <div class="pricing-card premium">
            <div class="card-header">
              <h3>Gói Cao Cấp</h3>
              <div class="price">
                <span class="amount">8.500.000 VNĐ</span>
                <span class="period">/ khóa học</span>
              </div>
            </div>
            <div class="card-body">
              <ul class="features-list">
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Truy cập khóa học online</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Tài liệu học tập mở rộng</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Hỗ trợ ưu tiên 24/7</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Chứng chỉ hoàn thành</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>8 buổi hướng dẫn 1-1</span>
                </li>
                <li>
                  <span class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Đánh giá CV/Portfolio</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <router-link to="/register" class="btn btn-outline">Đăng ký ngay</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Options Section -->
    <section class="section payment-options">
      <div class="container">
        <h2 class="section-title">Phương thức thanh toán</h2>
        <p class="section-desc">Chúng tôi cung cấp nhiều phương thức thanh toán linh hoạt, giúp bạn dễ dàng đăng ký khóa học</p>
        
        <div class="payment-grid">
          <div class="payment-card">
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <h3>Thanh toán một lần</h3>
            <p>Thanh toán toàn bộ học phí một lần và nhận ưu đãi giảm 5% tổng học phí.</p>
          </div>
          
          <div class="payment-card">
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <h3>Trả góp</h3>
            <p>Chia nhỏ học phí thành 3 đợt thanh toán: 50% khi đăng ký, 25% sau 1 tháng, và 25% còn lại sau 2 tháng.</p>
          </div>
          
          <div class="payment-card">
            <div class="payment-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><rect x="9" y="9" width="10" height="10" rx="2"></rect></svg>
            </div>
            <h3>Hợp đồng đào tạo</h3>
            <p>Dành cho các doanh nghiệp muốn đào tạo nhóm nhân viên từ 5 người trở lên, với mức giá ưu đãi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotions Section -->
    <section class="section promotions">
      <div class="container">
        <h2 class="section-title">Chương trình ưu đãi</h2>
        <div class="promotions-grid">
          <div class="promotion-card">
            <div class="promotion-badge">Giảm 10%</div>
            <h3>Ưu đãi đăng ký sớm</h3>
            <p>Đăng ký trước ngày khai giảng 30 ngày để nhận ưu đãi giảm 10% học phí.</p>
            <p class="promotion-period">Thời gian: Từ nay đến 30/06/2025</p>
          </div>
          
          <div class="promotion-card">
            <div class="promotion-badge">Giảm 15%</div>
            <h3>Ưu đãi nhóm</h3>
            <p>Đăng ký theo nhóm từ 3 người trở lên để nhận ưu đãi giảm 15% học phí cho mỗi người.</p>
            <p class="promotion-period">Thời gian: Không giới hạn</p>
          </div>
          
          <div class="promotion-card">
            <div class="promotion-badge">Giảm 20%</div>
            <h3>Học viên cũ</h3>
            <p>Học viên đã từng tham gia khóa học tại TechAcademy sẽ được giảm 20% khi đăng ký khóa học mới.</p>
            <p class="promotion-period">Thời gian: Không giới hạn</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scholarship Section -->
    <section class="section scholarships">
      <div class="container">
        <div class="scholarship-content">
          <div class="scholarship-text">
            <h2>Chương trình học bổng</h2>
            <p>TechAcademy cung cấp học bổng cho các cá nhân có hoàn cảnh khó khăn hoặc có thành tích xuất sắc.</p>
            <ul class="scholarship-list">
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4>Học bổng tài năng</h4>
                  <p>Dành cho các bạn trẻ có thành tích học tập xuất sắc, có dự án công nghệ ấn tượng hoặc đạt giải trong các cuộc thi về công nghệ.</p>
                </div>
              </li>
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4>Học bổng khuyến học</h4>
                  <p>Dành cho các bạn có hoàn cảnh khó khăn nhưng có quyết tâm cao trong việc học tập và phát triển bản thân.</p>
                </div>
              </li>
              <li>
                <div class="list-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4>Học bổng đa dạng</h4>
                  <p>Nhằm tăng cường sự đa dạng trong ngành công nghệ, chúng tôi cung cấp học bổng đặc biệt cho phụ nữ và các nhóm thiểu số.</p>
                </div>
              </li>
            </ul>
            <router-link to="/register" class="btn btn-primary">Đăng ký học bổng</router-link>
          </div>
          <div class="scholarship-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Học bổng TechAcademy">
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq">
      <div class="container">
        <h2 class="section-title">Câu hỏi thường gặp</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Học phí đã bao gồm những gì?</h3>
            <p>Học phí bao gồm toàn bộ chi phí tham gia khóa học, tài liệu học tập, quyền truy cập vào nền tảng học trực tuyến, và chứng chỉ hoàn thành khóa học.</p>
          </div>
          <div class="faq-item">
            <h3>Có thể hoàn tiền sau khi đăng ký không?</h3>
            <p>Học viên có thể yêu cầu hoàn tiền trong vòng 7 ngày kể từ ngày bắt đầu khóa học. Sau thời gian này, chúng tôi không chấp nhận yêu cầu hoàn tiền.</p>
          </div>
          <div class="faq-item">
            <h3>Các chương trình ưu đãi có được áp dụng cùng lúc không?</h3>
            <p>Mỗi học viên chỉ được áp dụng một chương trình ưu đãi. Trong trường hợp học viên đủ điều kiện cho nhiều ưu đãi, chúng tôi sẽ áp dụng ưu đãi có giá trị cao nhất.</p>
          </div>
          <div class="faq-item">
            <h3>Làm thế nào để đăng ký học bổng?</h3>
            <p>Để đăng ký học bổng, học viên cần điền đơn đăng ký và cung cấp các giấy tờ chứng minh đủ điều kiện. Ban xét duyệt sẽ đánh giá và thông báo kết quả trong vòng 2 tuần.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Sẵn sàng đầu tư cho tương lai của bạn?</h2>
          <p>Đăng ký ngay hôm nay để nhận tư vấn miễn phí về khóa học phù hợp nhất với bạn!</p>
          <router-link to="/register" class="btn">Đăng ký ngay</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TuitionView'
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

.section-desc {
  text-align: center;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.pricing-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-card.standard {
  box-shadow: 0 10px 25px rgba(74, 107, 255, 0.2);
  border: 2px solid #4a6bff;
}

.popular {
  position: absolute;
  top: 0;
  right: 0;
  background: #4a6bff;
  color: white;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: 500;
  border-bottom-left-radius: 10px;
}

.card-header {
  padding: 30px;
  text-align: center;
  border-bottom: 1px solid #f1f1f1;
}

.card-header h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #212529;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount {
  font-size: 2rem;
  font-weight: 700;
  color: #4a6bff;
}

.period {
  font-size: 0.9rem;
  color: #6c757d;
}

.card-body {
  padding: 30px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #495057;
}

.features-list li.unavailable {
  color: #adb5bd;
}

.feature-icon {
  display: flex;
  margin-right: 10px;
  color: #4a6bff;
}

.unavailable .feature-icon {
  color: #dc3545;
}

.card-footer {
  padding: 0 30px 30px;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;
}

.btn:hover {
  background: #3451d1;
}

.btn-outline {
  background: transparent;
  color: #4a6bff;
  border: 2px solid #4a6bff;
}

.btn-outline:hover {
  background: #4a6bff;
  color: white;
}

.payment-options {
  background: #f8f9fa;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.payment-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.payment-card:hover {
  transform: translateY(-10px);
}

.payment-icon {
  width: 70px;
  height: 70px;
  background: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #4a6bff;
}

.payment-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #212529;
}

.payment-card p {
  color: #6c757d;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.promotion-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.promotion-badge {
  position: absolute;
  top: 20px;
  right: -30px;
  background: #4a6bff;
  color: white;
  padding: 5px 30px;
  font-weight: 500;
  transform: rotate(45deg);
}

.promotion-card h3 {
  font-size: 1.3rem;
  margin: 20px 0 15px;
  color: #212529;
}

.promotion-card p {
  color: #6c757d;
  margin-bottom: 15px;
}

.promotion-period {
  font-size: 0.9rem;
  color: #4a6bff;
  font-weight: 500;
}

.scholarships {
  background: #f8f9fa;
}

.scholarship-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.scholarship-text h2 {
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: #212529;
}

.scholarship-text > p {
  color: #6c757d;
  margin-bottom: 30px;
  line-height: 1.6;
}

.scholarship-list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.scholarship-list li {
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

.scholarship-list h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #212529;
}

.scholarship-list p {
  color: #6c757d;
  margin: 0;
}

.scholarship-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.faq-item {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #212529;
}

.faq-item p {
  color: #6c757d;
  margin: 0;
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
  .pricing-grid,
  .payment-grid {
    grid-template-columns: 1fr;
  }

  .scholarship-content {
    grid-template-columns: 1fr;
  }

  .scholarship-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style> 