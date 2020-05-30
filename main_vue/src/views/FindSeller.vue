<template>
    <section id="switcherMap" class="bg-light">
        <div class="container">
            <MapSearch />
        </div>
        <div class="container-fluid">
            <div class="row switcherMap-contain">
                <SwitcherMap />
                <MapContain />
            </div>
        </div>
    </section>
</template>

<script>
import MapSearch from '../components/front_side/MapSearch'
import SwitcherMap from '../components/front_side/SwitcherMap'
import MapContain from '../components/front_side/MapContain'
// const Store = require.context('@/assets/JSON/7-11', false, /json$/)
// const allStore = Store.keys().map(Store)

export default {
  data () {
    return {
      newData: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('12')
    }
  },
  components: { MapSearch, SwitcherMap, MapContain }
}
</script>
