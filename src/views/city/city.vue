<template>
  <div class="city top-page">
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
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'

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

</script>

<style lang="less" scoped></style>
