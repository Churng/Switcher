<template>
    <section id="switcherMap" class="bg-light">
        <div class="container">
            <div class="row switcherMap-searchArea pt-5 pb-5 justify-content-start">
                <div class="col-md-2 dropdown city">
                    <button class="btn btn-outline-secondary dropdown-toggle pl-3 pr-3 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ selectCity }}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <a class="dropdown-item" href="#" @click="selectCity=`${county}`" v-for="(value,county) in newData" :key="county">{{ county }}</a>
                    </div>
                </div>
                <div class="col-md-2 dropdown county">
                    <button class="btn btn-outline-secondary dropdown-toggle pl-4 pr-4 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ selectTown }}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" @click="selectTown=`${town}`" v-for="(town, index) in selectedData" :key="index">{{ town }}</a>
                    </div>
                </div>
                <div class="col-md-4 input-group flex-nowrap">
                    <input type="text" class="form-control rounded-left" placeholder="請輸入街道" aria-label="UserRoad" aria-describedby="addon-wrapping"
                      v-model="searchStreet"
                      @keyup.enter="searchMethod(searchStreet)"
                    >
                    <div class="input-group-prepend border-none">
                        <span class="input-group-text bg-danger text-white rounded-right" id="addon-wrapping" @click="searchMethod(searchStreet)">搜尋</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row switcherMap-contain">
                <SwitcherMap />
                <MapContain :sellers="sellers"/>
            </div>
        </div>
    </section>
</template>

<script>
// import MapSearch from '../components/front_side/MapSearch'
import SwitcherMap from '../components/front_side/SwitcherMap'
import MapContain from '../components/front_side/MapContain'
import Data from '@/assets/all.json'

export default {
  data () {
    return {
      newData: {},
      selectCity: '全台灣',
      selectTown: '鄉鎮',
      searchStreet: '',
      selectedData: [],
      sellers: []
    }
  },
  components: { SwitcherMap, MapContain },
  created () {
    const data = Data.stores
    // console.log(data)
    data.forEach(data => {
      const county = data.city_name
      if (!this.newData[county]) {
        this.$set(this.newData, county, [data])
      } else {
        this.newData[county].push(data)
      }
    })
    console.log(this.newData)
  },
  methods: {
    searchMethod (val) {
      const filterData = Data.stores.filter(data => {
        return data.Road.search(val) !== -1
      })
      this.sellers = filterData
    }
  },
  watch: {
    selectCity (val) {
      const data = this.newData[val]
      this.selectedData = Array.from(new Set(data.map(d => d.Zone)))
      this.selectTown = this.selectedData[0]
    },
    searchStreet (val) {
      this.searchMethod(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu{
  height: 150px;
  overflow-y: scroll;
}
</style>
