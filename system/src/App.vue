<template>
  <div id="app">
    <mainCom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mainCom from './components/mainCom.vue';

@Component({
  components: {
    mainCom,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
  font-size: calc(100vw / 13.66);
  color: #333;
}
html, body, p, div, img {
  margin: 0;
  padding: 0;
}
</style>
