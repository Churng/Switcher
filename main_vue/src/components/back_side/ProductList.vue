<template>
    <ul class="row switcherStore-body list-unstyled flex-wrap pt-5 pb-4" >
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
