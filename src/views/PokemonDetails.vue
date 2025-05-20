<template>
  <div class="overlay" @click.self="close">
    <img src="@/assets/squirtle.svg" alt="Squirtle detalle" class="detail-img" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function close() {
  router.back()
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.detail-img {
  width: 570px;
  border-radius: 12px;
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.12);
  background: #fff;
}
</style>