<template>
  <admin-layout>
    <div class="admin-blog">
      <!-- Page Heading -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0 text-gray-800">Quản lý bài viết</h1>
        <button class="btn btn-primary" @click="openAddModal">
          <i class="bi bi-plus-circle me-1"></i> Thêm bài viết mới
        </button>
      </div>

      <!-- Filters and Search -->
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input type="text" class="form-control" placeholder="Tìm kiếm bài viết..." v-model="filters.search" @input="applyFilters">
              </div>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="filters.category" @change="applyFilters">
                <option value="">-- Tất cả danh mục --</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="form-select" v-model="filters.status" @change="applyFilters">
                <option value="">-- Tất cả trạng thái --</option>
                <option value="published">Đã xuất bản</option>
                <option value="draft">Bản nháp</option>
                <option value="archived">Đã lưu trữ</option>
              </select>
            </div>
            <div class="col-md-2">
              <button class="btn btn-outline-secondary w-100" @click="resetFilters">
                <i class="bi bi-arrow-repeat me-1"></i> Đặt lại
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Table -->
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th style="width: 60px"></th>
                  <th>Tiêu đề</th>
                  <th>Danh mục</th>
                  <th>Tác giả</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái</th>
                  <th style="width: 180px">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in filteredPosts" :key="post.id">
                  <td>
                    <img :src="post.thumbnail" alt="Post thumbnail" class="img-fluid rounded" style="width: 50px; height: 50px; object-fit: cover;">
                  </td>
                  <td>
                    <div class="fw-bold">{{ post.title }}</div>
                    <div class="small text-muted text-truncate" style="max-width: 300px">{{ post.excerpt }}</div>
                  </td>
                  <td>{{ getCategoryName(post.categoryId) }}</td>
                  <td>{{ post.author }}</td>
                  <td>{{ formatDate(post.createdAt) }}</td>
                  <td>
                    <span class="badge" :class="{
                      'bg-success': post.status === 'published',
                      'bg-secondary': post.status === 'draft',
                      'bg-info': post.status === 'archived'
                    }">{{ getStatusDisplay(post.status) }}</span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <button class="btn btn-outline-primary" @click="viewPost(post)">
                        <i class="bi bi-eye"></i>
                      </button>
                      <button class="btn btn-outline-info" @click="openEditModal(post)">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-outline-danger" @click="confirmDelete(post)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Empty State -->
            <div v-if="filteredPosts.length === 0" class="text-center py-5">
              <i class="bi bi-journals display-1 text-muted"></i>
              <p class="mt-3 text-muted">Không tìm thấy bài viết nào phù hợp với điều kiện tìm kiếm.</p>
              <button class="btn btn-outline-secondary mt-2" @click="resetFilters">Đặt lại bộ lọc</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Add/Edit Blog Post Modal -->
      <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true" ref="blogModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="blogModalLabel">{{ isEditMode ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="savePost">
                <div class="row g-3">
                  <div class="col-md-8">
                    <div class="mb-3">
                      <label for="postTitle" class="form-label">Tiêu đề <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="postTitle" v-model="currentPost.title" required>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label for="postCategory" class="form-label">Danh mục <span class="text-danger">*</span></label>
                      <select class="form-select" id="postCategory" v-model="currentPost.categoryId" required>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                          {{ category.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="postExcerpt" class="form-label">Tóm tắt <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="postExcerpt" rows="2" v-model="currentPost.excerpt" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="mb-3">
                      <label for="postThumbnail" class="form-label">URL ảnh thumbnail <span class="text-danger">*</span></label>
                      <input type="url" class="form-control" id="postThumbnail" v-model="currentPost.thumbnail" required>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label for="postStatus" class="form-label">Trạng thái <span class="text-danger">*</span></label>
                      <select class="form-select" id="postStatus" v-model="currentPost.status" required>
                        <option value="published">Đã xuất bản</option>
                        <option value="draft">Bản nháp</option>
                        <option value="archived">Đã lưu trữ</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label for="postContent" class="form-label">Nội dung <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="postContent" rows="15" v-model="currentPost.content" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="postTags" class="form-label">Tags (phân cách bằng dấu phẩy)</label>
                      <input type="text" class="form-control" id="postTags" v-model="tagInput" placeholder="e.g. technology, programming, web">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="postAuthor" class="form-label">Tác giả <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="postAuthor" v-model="currentPost.author" required>
                    </div>
                  </div>
                  <div class="col-md-12" v-if="tagInput">
                    <div class="mb-3">
                      <label class="form-label d-block">Tags đã chọn:</label>
                      <div class="d-flex flex-wrap gap-2">
                        <span v-for="(tag, index) in parsedTags" :key="index" class="badge bg-secondary">
                          {{ tag }}
                          <i class="bi bi-x ms-1" role="button" @click="removeTag(index)"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer px-0 pb-0">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                  <button type="submit" class="btn btn-primary">Lưu bài viết</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true" ref="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Xác nhận xóa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Bạn có chắc chắn muốn xóa bài viết "<span class="fw-bold">{{ currentPost.title }}</span>" không?</p>
              <p class="text-danger"><small>Lưu ý: Hành động này không thể hoàn tác.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-danger" @click="deletePost">Xóa bài viết</button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Post Modal -->
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true" ref="viewModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">Chi tiết bài viết</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="currentPost.id">
              <div class="mb-3">
                <img :src="currentPost.thumbnail" alt="Post thumbnail" class="img-fluid rounded mb-3" style="max-height: 300px; width: 100%; object-fit: cover;">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h3>{{ currentPost.title }}</h3>
                  <span class="badge" :class="{
                    'bg-success': currentPost.status === 'published',
                    'bg-secondary': currentPost.status === 'draft',
                    'bg-info': currentPost.status === 'archived'
                  }">{{ getStatusDisplay(currentPost.status) }}</span>
                </div>
                <div class="text-muted mb-3">
                  <small>
                    <i class="bi bi-tag me-1"></i> {{ getCategoryName(currentPost.categoryId) }} |
                    <i class="bi bi-person me-1"></i> {{ currentPost.author }} |
                    <i class="bi bi-calendar me-1"></i> {{ formatDate(currentPost.createdAt) }}
                  </small>
                </div>
                <p class="fs-5">{{ currentPost.excerpt }}</p>
                <hr>
                <div class="blog-content">
                  {{ currentPost.content }}
                </div>
                <hr>
                <div class="mt-3">
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-light text-dark" v-for="(tag, index) in currentPost.tags" :key="index">
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary" @click="openEditModal(currentPost)">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '../../components/admin/AdminLayout.vue'
import { Modal } from 'bootstrap'

export default {
  name: 'AdminBlog',
  components: {
    AdminLayout
  },
  data() {
    return {
      // Modals
      blogModal: null,
      deleteModal: null,
      viewModal: null,
      
      // State
      isEditMode: false,
      currentPost: this.getEmptyPost(),
      tagInput: '',
      
      // Filters
      filters: {
        search: '',
        category: '',
        status: ''
      },
      
      // Sample Data
      categories: [
        { id: 1, name: 'Tin tức công nghệ' },
        { id: 2, name: 'Lập trình' },
        { id: 3, name: 'Thiết kế web' },
        { id: 4, name: 'Phát triển di động' },
        { id: 5, name: 'Kỹ năng mềm' },
        { id: 6, name: 'Sự kiện' }
      ],
      
      posts: [
        {
          id: 1,
          title: 'Vue 3 + TypeScript: Phát triển ứng dụng web hiện đại',
          excerpt: 'Tìm hiểu cách sử dụng Vue 3 kết hợp với TypeScript để xây dựng các ứng dụng web mạnh mẽ và bền vững.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vivamus at auctor urna. Maecenas sed massa tristique. Duis placerat in eros non placerat. Sed volutpat eros at nisi rhoncus efficitur.\n\nProin lobortis efficitur dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec urna ipsum. In vitae metus a massa vestibulum fermentum quis sit amet ipsum. Mauris molestie varius facilisis. Nulla facilisi.\n\nDonec pharetra leo vitae risus convallis, in lobortis sem finibus. Etiam fermentum, nulla vel cursus blandit, urna felis convallis enim, nec eleifend nulla risus in justo. Duis ornare mauris ut ex feugiat, non ultrices magna ullamcorper. Phasellus ultricies nisi at augue efficitur, a consequat odio aliquet. Proin lacinia nibh eu sapien faucibus porttitor. Cras porttitor nisi id nunc mattis, a efficitur metus pellentesque.',
          thumbnail: 'https://v3.vuejs.org/logo.png',
          categoryId: 2,
          author: 'Nguyễn Văn A',
          createdAt: '2023-08-15T08:30:00',
          status: 'published',
          tags: ['vuejs', 'typescript', 'frontend']
        },
        {
          id: 2,
          title: 'Cách tối ưu hiệu suất ứng dụng React',
          excerpt: 'Những kỹ thuật và phương pháp tốt nhất để cải thiện hiệu suất ứng dụng React của bạn.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vivamus at auctor urna. Maecenas sed massa tristique. Duis placerat in eros non placerat. Sed volutpat eros at nisi rhoncus efficitur.\n\nProin lobortis efficitur dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec urna ipsum. In vitae metus a massa vestibulum fermentum quis sit amet ipsum. Mauris molestie varius facilisis. Nulla facilisi.\n\nDonec pharetra leo vitae risus convallis, in lobortis sem finibus. Etiam fermentum, nulla vel cursus blandit, urna felis convallis enim, nec eleifend nulla risus in justo. Duis ornare mauris ut ex feugiat, non ultrices magna ullamcorper. Phasellus ultricies nisi at augue efficitur, a consequat odio aliquet. Proin lacinia nibh eu sapien faucibus porttitor. Cras porttitor nisi id nunc mattis, a efficitur metus pellentesque.',
          thumbnail: 'https://reactjs.org/logo-og.png',
          categoryId: 2,
          author: 'Trần Thị B',
          createdAt: '2023-07-20T10:15:00',
          status: 'published',
          tags: ['react', 'javascript', 'performance']
        },
        {
          id: 3,
          title: 'TechZen Academy tổ chức Hackathon 2023',
          excerpt: 'Sự kiện hackathon lớn nhất năm với nhiều giải thưởng hấp dẫn cho các lập trình viên.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vivamus at auctor urna. Maecenas sed massa tristique. Duis placerat in eros non placerat. Sed volutpat eros at nisi rhoncus efficitur.\n\nProin lobortis efficitur dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec urna ipsum. In vitae metus a massa vestibulum fermentum quis sit amet ipsum. Mauris molestie varius facilisis. Nulla facilisi.\n\nDonec pharetra leo vitae risus convallis, in lobortis sem finibus. Etiam fermentum, nulla vel cursus blandit, urna felis convallis enim, nec eleifend nulla risus in justo. Duis ornare mauris ut ex feugiat, non ultrices magna ullamcorper. Phasellus ultricies nisi at augue efficitur, a consequat odio aliquet. Proin lacinia nibh eu sapien faucibus porttitor. Cras porttitor nisi id nunc mattis, a efficitur metus pellentesque.',
          thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
          categoryId: 6,
          author: 'Lê Văn C',
          createdAt: '2023-09-05T14:00:00',
          status: 'upcoming',
          tags: ['event', 'hackathon', 'competition']
        },
        {
          id: 4,
          title: '10 xu hướng thiết kế web trong năm 2023',
          excerpt: 'Tổng hợp các xu hướng thiết kế web hiện đại đang được các designer áp dụng trong năm nay.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vivamus at auctor urna. Maecenas sed massa tristique. Duis placerat in eros non placerat. Sed volutpat eros at nisi rhoncus efficitur.\n\nProin lobortis efficitur dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec urna ipsum. In vitae metus a massa vestibulum fermentum quis sit amet ipsum. Mauris molestie varius facilisis. Nulla facilisi.\n\nDonec pharetra leo vitae risus convallis, in lobortis sem finibus. Etiam fermentum, nulla vel cursus blandit, urna felis convallis enim, nec eleifend nulla risus in justo. Duis ornare mauris ut ex feugiat, non ultrices magna ullamcorper. Phasellus ultricies nisi at augue efficitur, a consequat odio aliquet. Proin lacinia nibh eu sapien faucibus porttitor. Cras porttitor nisi id nunc mattis, a efficitur metus pellentesque.',
          thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
          categoryId: 3,
          author: 'Phạm Thị D',
          createdAt: '2023-06-10T09:45:00',
          status: 'published',
          tags: ['webdesign', 'ux', 'trends']
        },
        {
          id: 5,
          title: 'Cách phát triển kỹ năng giao tiếp cho lập trình viên',
          excerpt: 'Những phương pháp hiệu quả giúp lập trình viên cải thiện kỹ năng giao tiếp trong môi trường làm việc.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vivamus at auctor urna. Maecenas sed massa tristique. Duis placerat in eros non placerat. Sed volutpat eros at nisi rhoncus efficitur.\n\nProin lobortis efficitur dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec urna ipsum. In vitae metus a massa vestibulum fermentum quis sit amet ipsum. Mauris molestie varius facilisis. Nulla facilisi.\n\nDonec pharetra leo vitae risus convallis, in lobortis sem finibus. Etiam fermentum, nulla vel cursus blandit, urna felis convallis enim, nec eleifend nulla risus in justo. Duis ornare mauris ut ex feugiat, non ultrices magna ullamcorper. Phasellus ultricies nisi at augue efficitur, a consequat odio aliquet. Proin lacinia nibh eu sapien faucibus porttitor. Cras porttitor nisi id nunc mattis, a efficitur metus pellentesque.',
          thumbnail: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6',
          categoryId: 5,
          author: 'Nguyễn Văn A',
          createdAt: '2023-05-20T11:30:00',
          status: 'draft',
          tags: ['softskills', 'communication', 'career']
        }
      ]
    }
  },
  
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        const matchSearch = !this.filters.search || 
          post.title.toLowerCase().includes(this.filters.search.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(this.filters.search.toLowerCase()) ||
          post.author.toLowerCase().includes(this.filters.search.toLowerCase());
        
        const matchCategory = !this.filters.category || post.categoryId === parseInt(this.filters.category);
        const matchStatus = !this.filters.status || post.status === this.filters.status;
        
        return matchSearch && matchCategory && matchStatus;
      });
    },
    
    parsedTags() {
      if (!this.tagInput) return [];
      return this.tagInput.split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
    }
  },
  
  mounted() {
    // Initialize Bootstrap modals
    this.blogModal = new Modal(this.$refs.blogModal);
    this.deleteModal = new Modal(this.$refs.deleteModal);
    this.viewModal = new Modal(this.$refs.viewModal);
  },
  
  methods: {
    // Filter methods
    applyFilters() {
      // Filters are applied via computed property
    },
    
    resetFilters() {
      this.filters = {
        search: '',
        category: '',
        status: ''
      };
    },
    
    // Helper methods
    getEmptyPost() {
      return {
        id: null,
        title: '',
        excerpt: '',
        content: '',
        thumbnail: '',
        categoryId: this.categories ? this.categories[0]?.id : null,
        author: '',
        createdAt: new Date().toISOString(),
        status: 'draft',
        tags: []
      };
    },
    
    getCategoryName(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.name : 'Chưa phân loại';
    },
    
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    
    getStatusDisplay(status) {
      const statusMap = {
        'published': 'Đã xuất bản',
        'draft': 'Bản nháp',
        'archived': 'Đã lưu trữ',
        'upcoming': 'Sắp diễn ra'
      };
      return statusMap[status] || status;
    },
    
    removeTag(index) {
      const tags = this.parsedTags;
      tags.splice(index, 1);
      this.tagInput = tags.join(', ');
    },
    
    // Modal methods
    openAddModal() {
      this.isEditMode = false;
      this.currentPost = this.getEmptyPost();
      this.tagInput = '';
      this.blogModal.show();
    },
    
    openEditModal(post) {
      this.isEditMode = true;
      this.currentPost = JSON.parse(JSON.stringify(post)); // Deep copy
      this.tagInput = post.tags.join(', ');
      this.blogModal.show();
      
      // Close other modals if open
      if (this.viewModal._isShown) {
        this.viewModal.hide();
      }
    },
    
    viewPost(post) {
      this.currentPost = JSON.parse(JSON.stringify(post)); // Deep copy
      this.viewModal.show();
    },
    
    confirmDelete(post) {
      this.currentPost = post;
      this.deleteModal.show();
    },
    
    // Save and Delete methods
    savePost() {
      // Set tags from input
      this.currentPost.tags = this.parsedTags;
      
      if (this.isEditMode) {
        // Update existing post
        const index = this.posts.findIndex(p => p.id === this.currentPost.id);
        if (index !== -1) {
          this.posts.splice(index, 1, this.currentPost);
        }
      } else {
        // Add new post
        this.currentPost.id = Math.max(0, ...this.posts.map(p => p.id)) + 1;
        this.currentPost.createdAt = new Date().toISOString();
        this.posts.push(this.currentPost);
      }
      
      this.blogModal.hide();
      // In a real application, you would save to backend here
    },
    
    deletePost() {
      const index = this.posts.findIndex(p => p.id === this.currentPost.id);
      if (index !== -1) {
        this.posts.splice(index, 1);
      }
      this.deleteModal.hide();
      // In a real application, you would delete from backend here
    }
  }
}
</script>

<style scoped>
.admin-blog .table th {
  border-top: none;
}

.blog-content {
  white-space: pre-line;
}
</style> 