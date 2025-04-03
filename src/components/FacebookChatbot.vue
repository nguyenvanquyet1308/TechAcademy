<template>
  <div class="facebook-chatbot">
    <a href="https://www.facebook.com/techzenacademy.vn" target="_blank" rel="noopener noreferrer">
      <div class="chatbot-icon">
        <i class="bi bi-chat-dots-fill"></i>
      </div>
      <div class="chatbot-text">Chat với chúng tôi</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FacebookChatbot'
}
</script>

<style scoped>
.facebook-chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: pulse 2s infinite ease-in-out;
}

.facebook-chatbot a {
  display: flex;
  align-items: center;
  background-color: #0d6efd;
  color: white;
  border-radius: 30px;
  padding: 8px 20px 8px 15px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.facebook-chatbot a:hover {
  background-color: #0b5ed7;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.chatbot-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  margin-right: 8px;
}

.chatbot-icon i {
  color: #0d6efd;
  font-size: 18px;
}

.chatbot-text {
  font-weight: 500;
  font-size: 14px;
}

@media (max-width: 768px) {
  .facebook-chatbot {
    bottom: 15px;
    right: 15px;
  }
  
  .facebook-chatbot a {
    padding: 8px;
    border-radius: 50%;
  }
  
  .chatbot-icon {
    width: 32px;
    height: 32px;
    margin-right: 0;
  }
  
  .chatbot-text {
    display: none;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}


</style> 