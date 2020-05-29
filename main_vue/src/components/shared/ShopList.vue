<template>
    <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5">
      <ShopItem v-for="(item, index) in allItem" :key="index" :item="item" :index="index"/>
    </ul>
</template>

<script>
import axios from 'axios'
import ShopItem from '../shared/ShopItem'

export default {
  components: { ShopItem },
  data () {
    return {
      allItem: []
    }
  },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      const api = 'http://switcher.rocket-coding.com/api/product/all'
      axios.get(api).then(res => {
        this.allItem = res.data.products
        console.log(res.data.products)
      })
    }
  }
}
</script>
