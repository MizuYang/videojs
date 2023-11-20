import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('videoStore', () => {
  // data
  const player = ref(null)

  return {
    player
  }
})
