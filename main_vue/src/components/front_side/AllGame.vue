<template>
    <div class="vh-100">
        <FilterColumn />
        <ShopList />
    </div>
</template>

<script>
import FilterColumn from '../front_side/FilterColumn'
import ShopList from '../shared/ShopList'

export default {
  components: { FilterColumn, ShopList }
}
</script>
