<template>
  <button class="main-btn">
    <slot />
  </button>
</template>

<style scoped>
.main-btn {
  background: var(--red);
  color: var(--white);
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 1.1em;
  margin-top: 24px;
  cursor: pointer;
  transition: background 0.2s;
}
.main-btn:active {
  background: var(--red-dark);
}
</style>