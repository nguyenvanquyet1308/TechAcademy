<template>
  <admin-layout>
    <div class="admin-dashboard">
      <!-- Page Heading -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <div>
          <button class="btn btn-outline-primary me-2">
            <i class="bi bi-file-earmark-excel me-1"></i> Xuất báo cáo
          </button>
          <button class="btn btn-outline-info">
            <i class="bi bi-share me-1"></i> Chia sẻ
          </button>
        </div>
      </div>

      <!-- Overview Stats -->
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Tổng số học viên
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">1,250</div>
                  <div class="small text-success mt-2">
                    <i class="bi bi-arrow-up"></i> 12% so với tháng trước
                  </div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-person-fill fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Doanh thu
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">258,500,000 VNĐ</div>
                  <div class="small text-success mt-2">
                    <i class="bi bi-arrow-up"></i> 8.3% so với tháng trước
                  </div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-currency-dollar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Đăng ký mới
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">75</div>
                  <div class="small text-success mt-2">
                    <i class="bi bi-arrow-up"></i> 5.7% so với tháng trước
                  </div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-person-plus-fill fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Tỷ lệ hoàn thành
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">83%</div>
                  <div class="small text-success mt-2">
                    <i class="bi bi-arrow-up"></i> 2.1% so với tháng trước
                  </div>
                </div>
                <div class="col-auto">
                  <i class="bi bi-check-circle-fill fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Revenue & Enrollment Charts -->
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Doanh thu & Đăng ký khóa học</h6>
              <div class="dropdown">
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="chartTimeRange" data-bs-toggle="dropdown" aria-expanded="false">
                  6 tháng gần đây
                </button>
                <ul class="dropdown-menu" aria-labelledby="chartTimeRange">
                  <li><a class="dropdown-item" href="#">30 ngày gần đây</a></li>
                  <li><a class="dropdown-item" href="#">3 tháng gần đây</a></li>
                  <li><a class="dropdown-item" href="#">6 tháng gần đây</a></li>
                  <li><a class="dropdown-item" href="#">1 năm gần đây</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="revenue-tab" data-bs-toggle="tab" data-bs-target="#revenue" type="button" role="tab" aria-controls="revenue" aria-selected="true">Doanh thu</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="enrollment-tab" data-bs-toggle="tab" data-bs-target="#enrollment" type="button" role="tab" aria-controls="enrollment" aria-selected="false">Đăng ký</button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="revenue" role="tabpanel" aria-labelledby="revenue-tab">
                  <div class="chart-area mt-4">
                    <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
                      <p class="text-muted">Biểu đồ doanh thu sẽ hiển thị ở đây</p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="enrollment" role="tabpanel" aria-labelledby="enrollment-tab">
                  <div class="chart-area mt-4">
                    <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
                      <p class="text-muted">Biểu đồ đăng ký sẽ hiển thị ở đây</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Đăng ký gần đây</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive" style="max-height: 400px; overflow-y: auto;">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Học viên</th>
                      <th>Khóa học</th>
                      <th>Trạng thái</th>
                      <th>Ngày</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nguyễn Văn A</td>
                      <td>Vue.js</td>
                      <td><span class="badge bg-success">Hoàn thành</span></td>
                      <td>10/03/2023</td>
                    </tr>
                    <tr>
                      <td>Trần Thị B</td>
                      <td>React Native</td>
                      <td><span class="badge bg-warning">Chờ xác nhận</span></td>
                      <td>09/03/2023</td>
                    </tr>
                    <tr>
                      <td>Lê Văn C</td>
                      <td>SQL</td>
                      <td><span class="badge bg-primary">Đang học</span></td>
                      <td>08/03/2023</td>
                    </tr>
                    <tr>
                      <td>Phạm Thị D</td>
                      <td>Docker</td>
                      <td><span class="badge bg-info">Đã thanh toán</span></td>
                      <td>07/03/2023</td>
                    </tr>
                    <tr>
                      <td>Hoàng Văn E</td>
                      <td>Python</td>
                      <td><span class="badge bg-primary">Đang học</span></td>
                      <td>06/03/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Promotions -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Khuyến mãi đang hoạt động</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Mã</th>
                      <th>Hiệu lực</th>
                      <th>Sử dụng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ưu đãi tháng 3</td>
                      <td><code>SPRING20</code></td>
                      <td>01/03 - 31/03</td>
                      <td>45/100</td>
                    </tr>
                    <tr>
                      <td>Học viên mới</td>
                      <td><code>NEWSTUDENT</code></td>
                      <td>Không giới hạn</td>
                      <td>128</td>
                    </tr>
                    <tr>
                      <td>Combo khóa học</td>
                      <td><code>BUNDLE15</code></td>
                      <td>01/02 - 30/04</td>
                      <td>37/150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="false" class="text-center py-4">
                <i class="bi bi-tag display-4 text-muted"></i>
                <p class="mt-3 text-muted">Không có khuyến mãi nào đang hoạt động</p>
                <button class="btn btn-primary mt-2">
                  <i class="bi bi-plus-circle me-1"></i> Tạo khuyến mãi
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Instructor Performance -->
        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Hiệu suất giảng viên</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Giảng viên</th>
                      <th>Khóa học</th>
                      <th>Học viên</th>
                      <th>Đánh giá</th>
                      <th>Hoàn thành</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nguyễn Văn A</td>
                      <td>3</td>
                      <td>230</td>
                      <td>4.7 <i class="bi bi-star-fill text-warning"></i></td>
                      <td>87%</td>
                    </tr>
                    <tr>
                      <td>Trần Thị B</td>
                      <td>2</td>
                      <td>180</td>
                      <td>4.8 <i class="bi bi-star-fill text-warning"></i></td>
                      <td>92%</td>
                    </tr>
                    <tr>
                      <td>Lê Văn C</td>
                      <td>4</td>
                      <td>320</td>
                      <td>4.5 <i class="bi bi-star-fill text-warning"></i></td>
                      <td>79%</td>
                    </tr>
                    <tr>
                      <td>Phạm Thị D</td>
                      <td>1</td>
                      <td>150</td>
                      <td>4.9 <i class="bi bi-star-fill text-warning"></i></td>
                      <td>95%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats & Actions -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Thao tác nhanh</h6>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="d-grid">
                    <button class="btn btn-outline-primary py-3">
                      <i class="bi bi-journal-plus fs-4 d-block mb-2"></i>
                      Thêm khóa học mới
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-grid">
                    <button class="btn btn-outline-success py-3">
                      <i class="bi bi-person-plus fs-4 d-block mb-2"></i>
                      Thêm học viên mới
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-grid">
                    <button class="btn btn-outline-info py-3">
                      <i class="bi bi-tag fs-4 d-block mb-2"></i>
                      Tạo khuyến mãi
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-grid">
                    <button class="btn btn-outline-secondary py-3">
                      <i class="bi bi-file-earmark-text fs-4 d-block mb-2"></i>
                      Thêm bài viết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Báo cáo hàng tháng</h6>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <div>
                    <div class="fw-bold">Báo cáo tháng 3/2023</div>
                    <div class="small text-muted">Tạo ngày 01/04/2023</div>
                  </div>
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-download"></i>
                  </button>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <div>
                    <div class="fw-bold">Báo cáo tháng 2/2023</div>
                    <div class="small text-muted">Tạo ngày 01/03/2023</div>
                  </div>
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-download"></i>
                  </button>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <div>
                    <div class="fw-bold">Báo cáo tháng 1/2023</div>
                    <div class="small text-muted">Tạo ngày 01/02/2023</div>
                  </div>
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '../../components/admin/AdminLayout.vue'

export default {
  name: 'AdminDashboard',
  components: {
    AdminLayout
  },
  data() {
    return {
      // Dashboard data would go here
    }
  },
  methods: {
    // Dashboard methods would go here
  }
}
</script>

<style scoped>
.border-left-primary {
  border-left: .25rem solid #4e73df!important;
}

.border-left-success {
  border-left: .25rem solid #1cc88a!important;
}

.border-left-info {
  border-left: .25rem solid #36b9cc!important;
}

.border-left-warning {
  border-left: .25rem solid #f6c23e!important;
}

.text-xs {
  font-size: .7rem;
}

.chart-area {
  position: relative;
  height: 10rem;
  width: 100%;
}

@media (min-width: 768px) {
  .chart-area {
    height: 20rem;
  }
}
</style> 