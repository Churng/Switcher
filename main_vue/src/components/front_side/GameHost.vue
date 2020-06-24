<template>
    <div class="bg-white">
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
                     {{ seletTxt }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button" @click="isAllItem('價格(低到高)')">價格(低到高)</button>
                        <button class="dropdown-item" type="button" @click="turnAllItem('價格(高到低)')">價格(高到低)</button>
                    </div>
                </div>
            </div>
        </div>
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-2 mb-0">
          <h3 class="text-center w-100" v-if="searchList.length <=0">尚無任何商品</h3>
          <ShopItem v-for="(item, index) in searchList" :key="index" :item="item" :index="index"/>
        </ul>
    </div>
</template>

<script>
import ShopItem from '../shared/ShopItem'

export default {
  data () {
    return {
      dataHost: [],
      seletTxt: '價格(低到高)'
    }
  },
  components: { ShopItem },
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
