<template>
  <div class="centered">
    <img src="@/assets/Loader.svg" alt="Loading" class="pokeball" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/list')
  }, 1500)
})
</script>

<style scoped>
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--gray-bg);
}
.pokeball {
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>