<template>
    <div id="home">
        <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
        <div class="container-fluid">
          <Banner />
          <UseInstructions />
        </div>
        <div class="container mb-5">
            <NewItems-area :originalData="originalData"/>
            <Sellers-area />
        </div>
        <div class="container-fluid">
            <Features />
            <Footer-logo />
        </div>
    </div>
</template>

<script>
import Banner from './front_side/Banner'
import UseInstructions from './front_side/UseInstructions'
import NewItemsArea from '../components/front_side/NewItemsArea'
import SellersArea from '../components/front_side/SellersArea'
import Features from './front_side/Features'
import FooterLogo from './front_side/FooterLogo'

export default {
  data () {
    return {
      originalData: [],
      loading: false
    }
  },
  components: { Banner, UseInstructions, NewItemsArea, SellersArea, Features, FooterLogo },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      const api = 'http://switcher.rocket-coding.com/api/product/all'
      this.loading = true
      this.$http.get(api).then(res => {
        this.originalData = res.data.products
        console.log(this.originalData)
        this.$root.productsData = this.originalData.sort(function (a, b) {
          return a.Price - b.Price
        })
        this.loading = false
        // console.log(this.$root.productsData)
      })
    }
  }
}
</script>

<style lang="scss">
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
