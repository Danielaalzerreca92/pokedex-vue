<template>
  <div class="pokemon-card" :class="{ active: isFavorite }">
    <span class="pokemon-name">{{ name }}</span>
    <span class="star" :class="{ favorite: isFavorite }" @click.stop="$emit('toggle-favorite')">★</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  isFavorite: Boolean
})
</script>

<style scoped>
.pokemon-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 12px;
  font-size: 1.2em;
  box-shadow: 0 2px 8px #0001;
  transition: box-shadow 0.2s;
}
.pokemon-card.active {
  /* Puedes resaltar el fondo si quieres */
}
.pokemon-name {
  color: var(--gray-dark);
  font-weight: 500;
}
.star {
  font-size: 1.6em;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
}
.star.favorite {
  color: var(--yellow);
  text-shadow: 0 0 4px #e2b43a55;
}
</style>