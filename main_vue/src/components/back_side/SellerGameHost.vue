<template>
    <div class="bg-white">
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-2 mb-0">
          <h3 class="text-center w-100" v-if="searchList.length <=0">尚無任何商品</h3>
          <PerProduct v-for="(item, index) in searchList" :key="index" :item="item" :index="index"/>
        </ul>
    </div>
</template>

<script>
import PerProduct from '../back_side/PerProduct'

export default {
  data () {
    return {
      dataHost: [],
      seletTxt: '價格(低到高)'
    }
  },
  components: { PerProduct },
  computed: {
    searchList () {
      if (this.$root.productSearchData) {
        return this.$root.productSearchData
      } else {
        return this.dataHost
      }
    }
  },
  created () {
    this.gameHost()
  },
  methods: {
    gameHost: function () {
      const filterHost = this.$root.productsData.filter(item => {
        return item.Category.search('遊戲主機') !== -1
      })
      this.dataHost = filterHost.sort(function (a, b) {
        return a.Price - b.Price
      })
    },
    isRentMethod () {
      const filterStatus = this.dataHost.filter(data => {
        return data.Status.search('可出租') !== -1
      })
      this.$root.productSearchData = filterStatus
    },
    isNew () {
      const filterNew = this.dataHost.sort(function (a, b) {
        return Date.parse(b.PublishDate.replace(/-/g, '/')) - Date.parse(a.PublishDate.replace(/-/g, '/'))
      })
      this.$root.productSearchData = filterNew
    },
    isCheap () {
      const filterPrice = this.dataHost.filter(data => {
        return data.OriginPrice - data.Price > 0
      })
      this.$root.productSearchData = filterPrice
    },
    isAllItem (txt) {
      this.seletTxt = txt
      this.$root.productSearchData = this.dataHost.sort(function (a, b) {
        return a.Price - b.Price
      })
    },
    turnAllItem (txt) {
      this.seletTxt = txt
      this.$root.productSearchData = this.dataHost.sort(function (a, b) {
        return b.Price - a.Price
      })
    }
  }
}
</script>
