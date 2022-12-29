<template>
  <div class="home" ref="homeRef">
    <van-nav-bar title="弘源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
  </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';

import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useHomeStore from '@/stores/modules/home'
import useScroll from '@/hooks/useScroll';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const homeRef = ref()
const { isReachBottom } = storeToRefs(useScroll(homeRef))
 watchEffect(async () => {
  if (isReachBottom.value) {
    await homeStore.fetchHouseList()
    isReachBottom.value = false
  }
 })

</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 50px);
  overflow-y: auto;
  .banner {
    img {
      width: 100vw;
    }
  }
}
</style>