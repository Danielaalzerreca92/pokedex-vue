<template>
  <div class="welcome-container">
    <img src="@/assets/pikachu.png" alt="Pikachu" class="pikachu-img" />
    <h1 class="title">Welcome to Pokédex</h1>
    <p class="desc">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </p>
    <img
      :src="isPressed ? btnPressed : btnNormal"
      alt="Get started"
      class="btn-img"
      @mousedown="isPressed = true"
      @mouseup="onClick"
      @mouseleave="isPressed = false"
      @touchstart="isPressed = true"
      @touchend="onClick"
      tabindex="0"
      @keydown.enter="onClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import btnNormal from '@/assets/BtnNormal.svg'
import btnPressed from '@/assets/BtnPressed.svg'

const router = useRouter()
const isPressed = ref(false)

function onClick() {
  isPressed.value = false
  setTimeout(() => {
    router.push('/loading')
  }, 120)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,500,700&display=swap');

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--gray-bg);
  font-family: 'Lato', Arial, sans-serif;
}

.pikachu-img {
  width: 220px;
  margin-bottom: 32px;
}

.title {
  color: #353535;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 18px;
  line-height: 1;
  font-family: 'Lato', Arial, sans-serif;
}

.desc {
  color: #5e5e5e;
  text-align: center;
  max-width: 315px;
  margin-bottom: 36px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  font-family: 'Lato', Arial, sans-serif;
}

.btn-img {
  width: 131px;
  height: 44px;
  object-fit: contain;
  margin-top: 8px;
  outline: none;
  display: block;
  cursor: pointer;
}
</style>