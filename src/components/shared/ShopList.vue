<template>
    <ul class="row shop-body list-unstyled flex-wrap bg-white pt-5 pb-5">
      <ShopItem v-for="(item, index) in allItem" :key="index" :item="item" :index="index"/>
    </ul>
</template>

<script>
import ShopItem from '../shared/ShopItem'

export default {
  components: { ShopItem },
  data () {
    return {
      allItem: this.$root.productsData
    }
  }
}
</script>
