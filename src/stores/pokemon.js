import { defineStore } from 'pinia'
import { POKE_API_BASE_URL, POKE_API_SPRITES_URL, POKEMON_LIMIT } from '../constants/api'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    favorites: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchPokemons() {
      this.loading = true
      try {
        const res = await fetch(`${POKE_API_BASE_URL}/pokemon?limit=${POKEMON_LIMIT}`)
        const data = await res.json()
        this.pokemons = data.results.map((poke, idx) => ({
          id: idx + 1,
          name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
          image: `${POKE_API_SPRITES_URL}/${idx + 1}.png`
        }))
      } catch (e) {
        this.error = 'Failed to fetch pokemons'
      }
      this.loading = false
    },
    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter(fav => fav !== id)
      } else {
        this.favorites.push(id)
      }
    }
  }
})