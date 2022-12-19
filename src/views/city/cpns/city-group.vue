<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="handleClickCity(city)">{{ city.cityName }}</div>
        </template>
      </div>


      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="handleClickCity(city)"/>
        </template>
      </template>

    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

const { currentCity } = storeToRefs(useCityStore())
const router = useRouter()
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 索引字符列表
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 点击城市
const handleClickCity = (city) => {
  currentCity.value = city
  router.back()
}

</script>

<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    // padding-top: 15px;

    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      color: #000;
      margin: 6px 0;
    }
  }
 }
</style>

