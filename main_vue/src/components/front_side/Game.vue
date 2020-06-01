<template>
    <div>
        <FilterColumn />
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5 mb-0">
          <h3 class="text-center w-100" v-if="games.length <=0">尚無任何商品</h3>
          <ShopItem v-for="(item, index) in games" :key="index" :item="item" :index="index"/>
        </ul>
    </div>
</template>

<script>
import FilterColumn from '../front_side/FilterColumn'
import ShopItem from '../shared/ShopItem'

export default {
  components: { FilterColumn, ShopItem },
  computed: {
    games: function () {
      const filterGame = this.$root.productsData.filter(item => {
        return item.Category.search('遊戲片') !== -1
      })
      return filterGame
    }
  }
}
</script>
