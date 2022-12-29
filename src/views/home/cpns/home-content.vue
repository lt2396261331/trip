<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList">
        <house-item-v3
          v-if="item.discoveryContentType === 3"
          :house-data="item.data"
        />
        <house-item-v9
          v-if="item.discoveryContentType === 9"
          :house-data="item.data"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

import houseItemV3 from '@/components/house-item-v3/index.vue'
import houseItemV9 from '@/components/house-item-v9/index.vue'

const { houseList } = storeToRefs(useHomeStore())
</script>

<style lang="less" scoped>
.home-content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
