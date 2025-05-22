import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Loading from '../views/Loading.vue'
import EmptyList from '../views/EmptyList.vue'
import PokemonList from '../views/PokemonList.vue'
import FavoritesList from '../views/FavoritesList.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/loading', component: Loading },
  { path: '/empty', component: EmptyList },
  { path: '/list', component: PokemonList },
  { path: '/favorites', component: FavoritesList },
  { path: '/details/:id', component: PokemonDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router