<template>
  <div id="home">
      <Header />
      <!-- 往上鍵統一放在HEADER下一層 -->
      <el-backtop :bottom="60"></el-backtop>
      <Home />
  </div>
</template>

<script>
import Header from '../src/components/shared/Header'
import Home from '../src/views/Home'

export default {
  components: { Header, Home }
}
</script>

<style lang="scss">
@import'./assets/css/main';
</style>
