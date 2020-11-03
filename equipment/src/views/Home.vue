<template>
  <div class="home">
    <div class="div"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  .div {
    width: 375px;
    height: 375px;
    background-color: green;
  }
}
</style>
