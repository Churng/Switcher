<template>
    <section id="switcherShop" class="bg-light">
        <div class="container pt-5">
                  <!-- 往上鍵統一放在HEADER下一層 -->
            <el-backtop :bottom="60"></el-backtop>
            <div class="row searchBar justify-content-end mb-3">
                <div class="col-md-5 d-flex">
                    <input type="text" class="form-control rounded-left" placeholder="請輸入關鍵字" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <span class="input-group-text bg-danger text-white rounded-right" id="basic-addon2"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="row shop-mainHeader">
                <ul class="col-md-8 nav nav-pills">
                    <li class="nav-item">
                        <router-link to="/findGames/allGame" class="nav-link rounded-top">全部商品</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/findGames/gameHost" class="nav-link rounded-top">遊戲主機</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/findGames/game" class="nav-link rounded-top">遊戲軟體</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/findGames/gameStick" class="nav-link rounded-top">遊戲配件</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      // allItem: [this.$root.productsData]
    }
  },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      const api = 'http://switcher.rocket-coding.com/api/product/all'
      axios.get(api).then(res => {
        this.$root.productsData = res.data.products
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  background-color: #E60012 !important;
  color: #fff !important;
}
</style>
