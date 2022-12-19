import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref()

  const getHotSuggests = () => {
    
  }

  return hotSuggests
})

