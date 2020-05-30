<template>
  <div>
      <Header/>
      <!-- 往上鍵統一放在HEADER下一層 -->
      <!-- <el-backtop :bottom="60"></el-backtop> -->
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/shared/Header'
import Footer from '../src/views/Footer'

export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
@import'./assets/css/main';

.router-link-exact-active {
  .header-navBar-icon,.header-navBar-label{
    color: $red !important;
  }
  &::after{
      content: '';
      position: absolute;
      height: 3px;
      background-color: $red;
      right: 2px;
      left: 2px;
      bottom: 2px;
  }
}
</style>
