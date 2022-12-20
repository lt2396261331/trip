import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getHomeSuggests } from '@/services'

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref()

  const fetchHotSuggests = async () => {
    const res = await getHomeSuggests()
    hotSuggests.value = res.data
  }

  return { hotSuggests, fetchHotSuggests }
})

export default useHomeStore

