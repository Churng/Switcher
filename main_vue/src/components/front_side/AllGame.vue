<template>
    <div>
        <div class="row shop-navSelects bg-danger text-white flex-nowrap">
            <nav class="col-md-8 navbar navbar-expand-lg navbar-light">
                <span class="navbar-brand text-white">篩選 :</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item" @click.prevent="isRentMethod">
                      <a class="nav-link text-white">所有可租借商品</a>
                    </li>
                    <li class="nav-item" @click.prevent="isNew">
                      <a class="nav-link text-white">最新推出</a>
                    </li>
                    <li class="nav-item" @click.prevent="isCheap">
                      <a class="nav-link text-white">優惠活動</a>
                    </li>
                  </ul>
                </div>
            </nav>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
                <div class="sortNav">排序 :</div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle bg-light text-dark ml-2 pr-4 pl-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        價格(低到高)
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item disabled" type="button">價格(低到高)</button>
                        <button class="dropdown-item" type="button">價格(高到低)</button>
                    </div>
                </div>
            </div>
        </div>
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5 mb-0">
          <ShopItem v-for="(item, index) in searchList" :key="index" :item="item" :index="index" />
          <h3 class="text-center w-100" v-if="$root.productSearchData.length <= 0">查無資料</h3>
        </ul>
    </div>
</template>

<script>
// import FilterColumn from '../front_side/FilterColumn'
import ShopItem from '../shared/ShopItem'

export default {
  data () {
    return {
      isRent: false
    }
  },
  components: { ShopItem },
  computed: {
    searchList () {
      if (this.$root.productSearchData) {
        return this.$root.productSearchData
      } else {
        return this.$root.productsData
      }
      // if (this.isRent === true) {
      //   const filterStatus = this.$root.productsData.filter(data => {
      //     return data.Status.search('可出租') !== -1
      //   })
      //   return filterStatus
      // }
    },
    isCheap () {
      const filterPrice = this.$root.productsData.filter(data => {
        return data.Price - data.OriginPrice >= -1
      })
      console.log(filterPrice)
      return filterPrice
    }
  },
  methods: {
    isRentMethod () {
      const filterStatus = this.$root.productsData.filter(data => {
        return data.Status.search('可出租') !== -1
      })
      this.$root.productsData = filterStatus
    },
    isNew () {
      this.$root.productsData.sort(function (a, b) {
        return Date.parse(b.PublishDate.replace(/-/g, '/')) - Date.parse(a.PublishDate.replace(/-/g, '/'))
      })
      console.log(this.$root.productsData)
    }
  }
}
</script>

<style lang="scss" scoped>
.activeColor{
  color: #e9ecef !important;
}
</style>
