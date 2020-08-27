<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
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
