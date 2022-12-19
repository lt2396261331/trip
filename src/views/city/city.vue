<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="onCancel"
      />
      <!-- 2.tab的切换 -->
      <van-tabs v-model:active="activeName" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 城市列表 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="activeName === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'

import CityGroup from './cpns/city-group.vue'

const router = useRouter()

// 搜索
const searchValue = ref()
const onCancel = () => {
  router.back()
}

// 标签
const activeName = ref()

// 获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
// storeToRefs函数进行结构不会失去响应式
const { allCities } = storeToRefs(cityStore)
// 根据选择的标签获取对应的数据
const cityGroupData = computed(() => {
  return allCities.value[activeName.value]
})
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
