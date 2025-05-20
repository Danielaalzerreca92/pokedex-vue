<template>
  <div class="empty-list-container">
    <div class="empty-content">
      <h1 class="empty-title">Uh-oh!</h1>
      <p class="empty-desc">You look lost on your journey!</p>
      <button class="empty-btn" @click="goHome">Go back home</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<style scoped>
.empty-list-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.empty-content {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-title {
  font-family: 'Lato', Arial, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #353535;
  margin-bottom: 8px;
}

.empty-desc {
  font-family: 'Lato', Arial, sans-serif;
  font-size: 22px;
  color: #5e5e5e;
  margin-bottom: 32px;
}

.empty-btn {
  background: #f22539;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 20px;
  font-family: 'Lato', Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.empty-btn:hover {
  background: #c00e20;
}
</style>