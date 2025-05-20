<template>
  <div class="page-bg">
    <div class="main-card">
      <SearchBar v-model="search" />
      <div v-if="filteredPokemons.length === 0">
         <EmptyList />
       </div>
       <div v-else>
         <!-- Aquí va el listado de pokémon -->
       </div>
      <div class="list-content">
        <div
          v-for="poke in filteredPokemons"
          :key="poke.id"
          class="list-item"
        >
          <span class="poke-name" @click="goToDetails(poke.id)">{{ poke.name }}</span>
          <img
            :src="store.favorites.includes(poke.id) ? favActive : favDisabled"
            class="star"
            @click="toggleFavorite(poke.id)"
          />
        </div>
      </div>
    </div>
    <div class="bottom-bar-wrapper">
      <div class="bottom-bar">
        <button class="tab-btn" @click="setTab('all')">
          <img
            :src="activeTab === 'all' ? btnIcoAllActive : btnIcoAllDisabled"
            alt="All"
          />
        </button>
        <button class="tab-btn" @click="setTab('favorites')">
          <img
            :src="activeTab === 'favorites' ? btnIcoFavActive : btnIcoFavDisabled"
            alt="Favorites"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToDetails(id) {
  router.push(`/details/${id}`)
}
import { ref, computed, onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import SearchBar from '@/components/SearchBar.vue'
import EmptyList from '@/views/EmptyList.vue'


import favActive from '@/assets/FavActive.svg'
import favDisabled from '@/assets/FavDisabled.svg'
import btnIcoAllActive from '@/assets/BtnIcoActive.png'
import btnIcoAllDisabled from '@/assets/BtnIcoDisabled.png'
import btnIcoFavActive from '@/assets/BtnIcoActive2.png'
import btnIcoFavDisabled from '@/assets/BtnIcoDisabled2.png'

const store = usePokemonStore()
const search = ref('')
const activeTab = ref('all')

onMounted(() => {
  if (!store.pokemons.length) store.fetchPokemons()
})

const filteredPokemons = computed(() => {
  let list = store.pokemons
  if (activeTab.value === 'favorites') {
    list = list.filter(p => store.favorites.includes(p.id))
  }
  return list.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

function toggleFavorite(id) {
  store.toggleFavorite(id)
}
function setTab(tab) {
  activeTab.value = tab
}
</script>

<style scoped>
.page-bg {
  background: #f5f5f5;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.main-card {
  width: 570px;
  margin: 40px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 40px 0;
}

.list-content {
  width: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px #0001;
  padding: 0 24px;
  margin-bottom: 16px;
  width: 570px;
  height: 56px;
}

.poke-name {
  font-family: 'Lato', Arial, sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: #353535;
  line-height: 56px;
  vertical-align: middle;
}

.star {
  width: 32px;
  height: 32px;
  cursor: pointer;
  user-select: none;
}

/* Bottom bar centrada y del mismo ancho que el card */
.bottom-bar-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}

.bottom-bar {
  background: #fff;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.08);
  width: 3000px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 0 0 24px 0;
  pointer-events: auto;
}

.tab-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 24px;
  transition: background 0.2s;
}
.tab-btn img {
  width: 160px;
  height: 48px;
  display: block;
}
</style>