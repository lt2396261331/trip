<template>
  <div class="city-group">
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script setup>

defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>

</style>

