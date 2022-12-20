<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期选择 -->
    <div class="section date-range" @click="show = true">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">{{ startTime }}</span>
      </div>
      <div class="stay">共{{ stayTime }}晚</div>
      <div class="end">
        <span class="leave">离店</span>
        <span class="time">{{ endTime }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="handleConfirm"
      :round="false"
    />

    <!-- 价格/人数 -->
    <div class="section price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword">关键字/位置/民宿名</div>

    <!-- 热门推荐 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home'

const router = useRouter()
const { currentCity } = storeToRefs(useCityStore())
const { hotSuggests } = storeToRefs(useHomeStore())

// 位置/城市
const cityClick = () => {
  router.push('/city')
}

// 日期选择
const show = ref(false)
const today = new Date() // 今天
// 明天
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const startTime = ref(formatMonthDay(today))
const endTime = ref(formatMonthDay(tomorrow))
const stayTime = ref(getDiffDays(tomorrow, today))
// 确定选择日期
const handleConfirm = date => {
  console.log(date)
  const [start, end] = date
  startTime.value = formatMonthDay(start)
  endTime.value = formatMonthDay(end)
  stayTime.value = getDiffDays(end, start)

  show.value = false
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100vh;

  width: 100%;
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    line-height: 44px;

    .city {
      flex: 1;
      font-size: 15px;
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

  .section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 44px;
    padding: 0 22px;
    color: #999;

    .start {
      // flex: 1;
      display: flex;
      flex-direction: column;
      // align-items: center;
      .tip {
        font-size: 12px;
        color: #999;
      }
    }

    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }

    .end {
      min-width: 30%;
      // padding-right: 20px;
      display: flex;
      flex-direction: column;
      // align-items: center;
      .leave {
        font-size: 12px;
        color: #999;
      }
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .price-counter {
    justify-content: space-between;
  }

  .hot-suggests {
    padding: 0 20px;
    height: 52px;
    .item {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 14px;
      margin: 5px;
      line-height: 1;
      color: #333;
    }
  }
}
</style>
