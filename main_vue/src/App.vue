<template>
  <div>
      <Header />
      <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
      <router-view v-if="isRouterAlive" ></router-view>
      <Footer />
  </div>
</template>

<script>
import Header from '../src/components/shared/Header'
import Footer from '../src/views/Footer'

export default {
  data () {
    return {
      loading: false,
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  components: { Header, Footer },
  created () {
    this.getProductData()
    this.getSellersData()
  },
  methods: {
    getProductData () {
      const api = 'http://switcher.rocket-coding.com/api/product/all'
      this.loading = true
      this.$http.get(api).then(res => {
        const data = res.data.products
        this.$root.productsData = data.sort(function (a, b) {
          return a.Price - b.Price
        })
        this.loading = false
      }).catch(err => {
        this.$message(err)
      })
    },
    getSellersData () {
      const api = 'http://switcher.rocket-coding.com/api/members'
      this.loading = true
      this.$http.get(api).then(res => {
        this.$root.menbersData = res.data.members
        this.loading = false
      }).catch(err => {
        this.$message(err)
      })
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss">
@import'./assets/css/main';
.loading > img{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 999;
}
</style>
