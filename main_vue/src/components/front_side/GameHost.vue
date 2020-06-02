<template>
    <div class="bg-white">
        <FilterColumn />
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5 mb-0">
          <h3 class="text-center w-100" v-if="gameHost.length <=0">尚無任何商品</h3>
          <ShopItem v-for="(item, index) in gameHost" :key="index" :item="item" :index="index"/>
        </ul>
    </div>
</template>

<script>
import FilterColumn from '../front_side/FilterColumn'
import ShopItem from '../shared/ShopItem'

export default {
  components: { FilterColumn, ShopItem },
  computed: {
    gameHost: function () {
      const filterHost = this.$root.productsData.filter(item => {
        return item.Category.search('遊戲主機') !== -1
      })
      return filterHost
    }
  }
}
</script>
