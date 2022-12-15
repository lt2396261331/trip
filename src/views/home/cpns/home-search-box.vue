<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

// 位置/城市
const cityClick = () => {
  router.push('/city')
}


</script>

<style lang="less" scoped>
.search-box {
  width: 100%;
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    line-height: 44px;

    .city {
      flex: 1;
    }
    .position {
      width: 74px;
      display: flex;
      align-items: center;

      .text {
        // position: relative;
        // top: 2px;
        color: #666;
        font-size: 12px;
      }

      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>