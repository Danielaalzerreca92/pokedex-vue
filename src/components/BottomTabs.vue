<template>
  <div class="bottom-bar">
    <button
      :class="{ active: activeTab === 'all' }"
      @click="$emit('changeTab', 'all')"
    >
      <span class="icon">📋</span> All
    </button>
    <button
      :class="{ active: activeTab === 'favorites' }"
      @click="$emit('changeTab', 'favorites')"
    >
      <span class="icon">★</span> Favorites
    </button>
  </div>
</template>

<script setup>
defineProps({ activeTab: String })
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0 2px 8px #0001;
  padding: 8px 12px;
  margin-top: 24px;
}
button {
  flex: 1;
  border: none;
  background: none;
  padding: 12px 0;
  border-radius: 16px;
  font-size: 1.1em;
  color: var(--gray-mid);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
button.active {
  background: var(--red);
  color: var(--white);
}
.icon {
  font-size: 1.2em;
}
</style>