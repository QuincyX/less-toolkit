<template>
  <div id="app">
    <test></test>
  </div>
</template>

<script>
import test from './components/test'

export default {
  name: 'app',
  components: {
    test
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
