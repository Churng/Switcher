<template>
    <section id="switcherShop" class="bg-light">
        <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
        <div class="container pt-5" v-else>
                  <!-- 往上鍵統一放在HEADER下一層 -->
            <el-backtop :bottom="60"></el-backtop>
            <div class="row searchBar justify-content-end mb-3">
                <div class="col-md-5 d-flex">
                    <input type="text" class="form-control rounded-left" placeholder="請輸入遊戲關鍵字" aria-label="Recipient's username" aria-describedby="basic-addon2"
                      v-model="search"
                      @keydown="searchGame(search)"
                    >
                    <div class="input-group-append">
                        <span class="input-group-text bg-danger text-white rounded-right" id="basic-addon2" @click="searchGame(search)"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="row shop-mainHeader">
                <ul class="col-md-8 nav nav-pills">
                  <li class="nav-item">
                      <router-link to="/findGames/allGame" class="nav-link rounded-top" @click.native="isAllItem">全部商品</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/gameHost" class="nav-link rounded-top" @click.native="isAllItem">遊戲主機</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/game" class="nav-link rounded-top" @click.native="isAllItem">遊戲軟體</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/gameStick" class="nav-link rounded-top" @click.native="isAllItem">遊戲配件</router-link>
                  </li>
              </ul>
            </div>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>

export default {
  data () {
    return {
      originalData: [],
      search: '',
      loading: false
    }
  },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      const api = 'http://switcher.rocket-coding.com/api/product/all'
      this.loading = true
      this.$http.get(api).then(res => {
        const originalData = res.data.products
        this.originalData = originalData
        this.$root.productsData = originalData.sort(function (a, b) {
          return a.Price - b.Price
        })
        this.loading = false
        // console.log(this.$root.productsData)
      })
    },
    searchGame (val) {
      const filterSearch = this.$root.productsData.filter(data => {
        return data.Name.search(val) !== -1
      })
      this.$root.productSearchData = filterSearch
      this.search = ''
    },
    isAllItem () {
      this.$root.productSearchData = false
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  background-color: #E60012 !important;
  color: #fff !important;
}
.loading img{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 999;
}
</style>
