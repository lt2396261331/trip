<template>
  <div class="home">
    <van-nav-bar title="弘源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import homeSearchBox from './cpns/home-search-box.vue';
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100vw;
    }
  }
}
</style>