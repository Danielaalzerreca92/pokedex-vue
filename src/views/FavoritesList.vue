<template>
  <div class="list-container">
    <SearchBar v-model="search" />
    <div v-if="filteredFavorites.length === 0">
      <EmptyList />
    </div>
    <div v-else>
      <PokemonCard
        v-for="poke in filteredFavorites"
        :key="poke.id"
        :name="poke.name"
        :isFavorite="true"
        @toggle-favorite="() => toggleFavorite(poke.id)"
      />
    </div>
    <BottomTabs :activeTab="'favorites'" @changeTab="changeTab" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import SearchBar from '@/components/SearchBar.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import BottomTabs from '@/components/BottomTabs.vue'
import EmptyList from './EmptyList.vue'
import { useRouter } from 'vue-router'

const store = usePokemonStore()
const search = ref('')
const router = useRouter()

const filteredFavorites = computed(() => {
  return store.pokemons.filter(
    poke =>
      store.favorites.includes(poke.id) &&
      poke.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

function toggleFavorite(id) {
  store.toggleFavorite(id)
}
function changeTab(tab) {
  if (tab === 'all') {
    router.push('/list')
  }
}
</script>

<style scoped>
.list-container {
  background: var(--white);
  border-radius: 16px;
  padding: 24px 16px 80px 16px;
  max-width: 350px;
  margin: 40px auto;
  box-shadow: 0 2px 16px #0001;
}
</style>