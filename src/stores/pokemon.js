import { defineStore } from 'pinia'

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
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()
        this.pokemons = data.results.map((poke, idx) => ({
          id: idx + 1,
          name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
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