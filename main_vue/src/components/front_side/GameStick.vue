<template>
    <div>
        <FilterColumn />
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5 mb-0">
          <h3 class="text-center w-100" v-if="gameStick.length <=0">尚無任何商品</h3>
          <ShopItem v-for="(item, index) in gameStick" :key="index" :item="item" :index="index"/>
        </ul>
    </div>
</template>

<script>
import FilterColumn from '../front_side/FilterColumn'
import ShopItem from '../shared/ShopItem'

export default {
  components: { FilterColumn, ShopItem },
  data () {
    return {
      isItem: false
    }
  },
  computed: {
    gameStick: function () {
      const filterStick = this.$root.productsData.filter(item => {
        return item.Category.search('遊戲配件') !== -1
      })
      return filterStick
    }
  }
}
</script>
