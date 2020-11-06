<template>
  <div class="main-container">
    <h6 class="page-title">首页</h6>
    <van-tabs v-model="active" color='#1989fa'>
      <van-tab title="产线运转率">
          <tab1 />
      </van-tab>
      <van-tab title="设备运转">
          <tab2 />
      </van-tab>
      <van-tab title="报警统计">报警统计</van-tab>
      <van-tab title="计划达成">计划达成</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tab1 from './tabs/tab1.vue'
import tab2 from './tabs/tab2.vue'

@Component({
  components: { tab1, tab2 }
})
export default class App extends Vue {
  active = 1
}
</script>

<style lang="scss" scoped>
.main-container {}
</style>
