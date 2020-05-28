<template>
    <div class="row switcherMap-searchArea pt-5 pb-5 justify-content-start">
        <div class="col-md-2 dropdown city">
            <button class="btn btn-outline-secondary dropdown-toggle pl-3 pr-3 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ selectCity }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <a class="dropdown-item" href="#" @click="selectCity=`${city.city_name}`" v-for="city in allStoreData" :key="city.city_id">{{ city.city_name }}</a>
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
              v-model="searchStore"
            >
            <div class="input-group-prepend border-none">
                <span class="input-group-text bg-danger text-white rounded-right" id="addon-wrapping">搜尋</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    console.log(this.allStoreData)
    return {
      selectCity: '全台灣',
      selectTown: '鄉鎮',
      searchStore: '',
      searchData: '',
      selectedData: []
    }
  },
  props: {
    allStoreData: {
      type: Array
    }
  },
  computed: {
    filteredSellers () {
      const searchStore = this.searchStore.trim()
      if (!searchStore) {
        return this.allStoreData
      }
      const sellersArr = this.allStoreData.filter(item => {
        if (item.stores.Address.indexOf(searchStore) !== -1) {
          return item
        }
      })
      return sellersArr
    }
  },
  watch: {
    selectCity (val) {
      // 監聽城市後,回傳一個有區域的新陣列
      this.allStoreData.some(storeData => {
        if (val === storeData.city_name) {
          this.selectedData = Array.from(new Set(storeData.stores.map(cityData => {
            return cityData.Address.slice(3, 6)
          })))
          return true
        }
      })
      // console.log(this.selectedData)
      this.selectTown = this.selectedData[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu{
  height: 200px;
  overflow-y: scroll;
}
</style>
