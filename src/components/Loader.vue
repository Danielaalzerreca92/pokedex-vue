<template>
  <div class="loader-container">
    <img src="@/assets/Loader.png" alt="Loader" class="loader-img" />
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.loader-img {
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>