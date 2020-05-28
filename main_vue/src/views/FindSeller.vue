<template>
    <section id="switcherMap" class="bg-light">
        <div class="container">
            <MapSearch :allStoreData="allStoreData"/>
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
const Store = require.context('@/assets/JSON/7-11', false, /json$/)
const allStore = Store.keys().map(Store)

export default {
  data () {
    return {
      allStoreData: allStore,
      newData: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      allStore.forEach(data => {
        const county = data.city_name
        const town = data.stores
        if (!this.newData[county]) {
          this.$set(this.newData, county, [town])
        } else {
          this.newData[county].push(town)
        }
      })
      console.log(this.newData)
    }
  },
  components: { MapSearch, SwitcherMap, MapContain }
}
</script>
