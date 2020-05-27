<template>
  <div id="home">
      <Header />
      <!-- 往上鍵統一放在HEADER下一層 -->
      <el-backtop :bottom="60"></el-backtop>
      <div class="container pt-5">
        <ShopList />
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/Header'
import Footer from '../src/views/Footer'
import ShopList from '../src/components/ShopList'

export default {
  components: { Header, Footer, ShopList }
}
</script>

<style lang="scss">
@import'./assets/css/main';
</style>
