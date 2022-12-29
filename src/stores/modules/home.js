import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getHomeSuggests, getCategories, getHouseList } from '@/services'

const useHomeStore = defineStore('home', () => {
  // 热门建议
  const hotSuggests = ref()
  // 推荐类别
  const categories = ref()
  
  // 房屋推荐
  const houseList = ref([])
  const houseListPage = ref(1)

  // 获取热门建议
  const fetchHotSuggests = async () => {
    const res = await getHomeSuggests()
    hotSuggests.value = res.data
  }

  // 获取推荐类别
  const fetchCategories = async () => {
    const res = await getCategories()
    categories.value = res.data
  }

  // 获取推荐房源
  const fetchHouseList = async () => {
    const res = await getHouseList(houseListPage.value++)
     houseList.value.push(...res.data)
  }

  return {
    hotSuggests,
    fetchHotSuggests,
    categories,
    fetchCategories,
    houseList,
    fetchHouseList
  }
})

export default useHomeStore
