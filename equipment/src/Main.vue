<template>
  <div class="home">
    <div class="content">
        <homeCom v-if="activeTab === 0" />
        <workbenchCom  v-if="activeTab === 1" />
    </div>
    <van-tabbar v-model="activeTab">
        <van-tabbar-item v-for="el in tabsArr" :key="el.value" :icon="el.icon">{{el.label}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import homeCom from './views/home/index.vue'
import workbenchCom from './views/Workbench.vue'

@Component({
  components: { homeCom, workbenchCom }
})
export default class App extends Vue {
    activeTab = 0
    tabsArr = [
      {
        label: '首页',
        icon: 'home-o',
        value: 'home'
      },
      {
        label: '工作台',
        icon: 'cashier-o',
        value: 'workbench'
      }
    ]
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .content {
    height: calc(100vh - 80px);
    overflow: scroll;
  }
}
</style>
