<template>
  <div class="search-bar-asset">
    <img :src="searchBarAsset" alt="Search bar" class="search-bar-bg" />
    <input
      class="search-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
      spellcheck="false"
      aria-label="Search"
    />
  </div>
</template>

<script setup>
import searchBarAsset from '@/assets/SearchEmpty.svg'
const props = defineProps({
  modelValue: String
})
</script>

<style scoped>
.search-bar-asset {
  position: relative;
  width: 650px;
  height: 80px; 
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-bar-bg {
  position: absolute;
  top: 0; left: 0;
  width: 650px; 
  height: 80px;  
  pointer-events: none;
  user-select: none;
  z-index: 1;
}
.search-input {
  position: absolute;
  top: 0; left: 0;
  width: 650px;   /* igual al card y los ítems */
  height: 80px;   /* igual al asset */
  border: none;
  outline: none;
  background: transparent;
  color: #353535;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 22px;
  font-weight: 400;
  padding-left: 48px; /* ajusta para alinear el texto con la lupa del asset */
  z-index: 2;
}
.search-input::placeholder {
  color: transparent;
}
</style>