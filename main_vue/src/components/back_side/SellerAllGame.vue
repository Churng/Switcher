<template>
    <div>
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-2 mb-0">
          <h3 class="text-center w-100" v-if="$root.SellerproductData.length <=0">尚無任何商品</h3>
          <PerProduct v-for="(item, index) in searchList" :key="index" :item="item" :index="index" />
          <h3 class="text-center w-100" v-if="$root.SellerSearchData.length < 0">查無資料</h3>
        </ul>
    </div>
</template>

<script>
import PerProduct from '../back_side/PerProduct'

export default {
  data () {
    return {
      priceCondition: ''
    }
  },
  components: { PerProduct },
  computed: {
    searchList () {
      if (this.$root.SellerSearchData) {
        return this.$root.SellerSearchData
      } else {
        return this.$root.SellerproductData
      }
    }
  },
  methods: {
    isRentMethod () {
      this.isClick = !this.isClick
      const filterStatus = this.$root.SellerproductData.filter(data => {
        return data.Status.search('可出租') !== -1
      })
      this.$root.SellerSearchData = filterStatus
    },
    isNew () {
      const filterNew = this.$root.SellerproductData.sort(function (a, b) {
        return Date.parse(b.PublishDate.replace(/-/g, '/')) - Date.parse(a.PublishDate.replace(/-/g, '/'))
      })
      this.$root.SellerSearchData = filterNew
    },
    isCheap () {
      const filterPrice = this.$root.SellerproductData.filter(data => {
        return data.OriginPrice - data.Price > 0
      })
      this.$root.SellerSearchData = filterPrice
    },
    isAllItem (txt) {
      this.seletTxt = txt
      this.$root.SellerSearchData = this.$root.SellerproductData.sort(function (a, b) {
        return a.Price - b.Price
      })
    },
    turnAllItem (txt) {
      this.seletTxt = txt
      this.$root.SellerSearchData = this.$root.SellerproductData.sort(function (a, b) {
        return b.Price - a.Price
      })
    }
  }
}
</script>

<style lang="scss">
.activeColor{
  color: #e9ecef !important;
}
</style>
