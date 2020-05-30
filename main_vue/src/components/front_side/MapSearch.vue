<template>
    <div class="row switcherMap-searchArea pt-5 pb-5 justify-content-start">
        <div class="col-md-2 dropdown city">
            <button class="btn btn-outline-secondary dropdown-toggle pl-3 pr-3 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ selectCity }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <a class="dropdown-item" href="#" @click="selectCity=`${city.city_name}`" v-for="city in selectedData" :key="city.city_id">{{ city.city_name }}</a>
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
    return {
      selectCity: '全台灣',
      selectTown: '鄉鎮',
      searchStore: '',
      searchData: '',
      selectedData: []
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
