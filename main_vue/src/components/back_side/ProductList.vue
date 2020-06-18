<template>
    <ul class="row switcherStore-body list-unstyled flex-wrap bg-white pt-5 pb-5" >
      <PerProduct v-for="(item, index) in allItem" :key="index" :item="item" :index="index"/>
    </ul>
</template>

<script>
import PerProduct from '../back_side/PerProduct'

export default {
  components: { PerProduct },
  data () {
    return {
      allItem: this.$root.SellerproductData
    }
  }
}
</script>
