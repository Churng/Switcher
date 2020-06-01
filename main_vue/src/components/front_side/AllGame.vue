<template>
    <div class="vh-100">
        <FilterColumn />
        <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5">
          <ShopItem v-for="(item, index) in allItem" :key="index" :item="item" :index="index"/>
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
      allItem: this.$root.productsData
    }
  }
}
</script>
