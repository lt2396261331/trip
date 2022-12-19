import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getCityAll } from '@/services'

const useCityStore = defineStore('city', () => {
  const allCities = ref({})
  const currentCity = ref({
    cityName: '上海'
  })

  const fetchAllCitiesData = async () => {
    const res = await getCityAll()
    allCities.value = res.data
  }

  return { allCities, fetchAllCitiesData, currentCity }
})

export default useCityStore

