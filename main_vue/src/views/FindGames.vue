<template>
    <section id="switcherShop" class="bg-light">
        <div class="container pt-5">
                  <!-- 往上鍵統一放在HEADER下一層 -->
            <el-backtop :bottom="60"></el-backtop>
            <div class="row searchBar justify-content-end mb-3">
              <el-select v-model="countyValue" clearable placeholder="请選擇地區">
                  <el-option
                    v-for="(idx, county) in searchCity"
                    :key="county.id"
                    :label="county"
                    :value="idx">
                  </el-option>
                </el-select>
                <div class="col-md-5 d-flex">
                    <input type="text" class="form-control rounded-left" placeholder="請輸入遊戲關鍵字" aria-label="Recipient's username" aria-describedby="basic-addon2"
                      v-model="search"
                      @keyup.13="searchGame(search)"
                    >
                    <div class="input-group-append">
                        <span class="input-group-text bg-danger text-white rounded-right" id="basic-addon2" @click="searchGame(search)"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="row shop-mainHeader">
                <ul class="col-md-8 nav nav-pills">
                  <li class="nav-item">
                      <router-link to="/findGames/allGame" class="nav-link rounded-top" @click.native="isAllItem">全部商品</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/gameHost" class="nav-link rounded-top" @click.native="isAllItem">遊戲主機</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/game" class="nav-link rounded-top" @click.native="isAllItem">遊戲軟體</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/findGames/gameStick" class="nav-link rounded-top" @click.native="isAllItem">遊戲配件</router-link>
                  </li>
              </ul>
            </div>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      countyValue: [],
      search: '',
      searchData: {}
    }
  },
  computed: {
    searchCity () {
      const copyData = JSON.parse(JSON.stringify(this.$root.productsData))
      // 整理:城市篩選的api
      copyData.forEach(data => {
        const county = data.City
        if (!this.searchData[county]) {
          this.$set(this.searchData, county, [data])
        } else {
          this.searchData[county].push(data)
        }
      })
      return this.searchData
    }
  },
  methods: {
    searchGame (search) {
      if (!this.countyValue) {
        const filterSearch = this.$root.productsData.filter(data => {
          return (data.Name.search(search) !== -1)
        })
        this.$root.productSearchData = filterSearch
        this.search = ''
        return this.$root.productSearchData
      } else {
        const filterSearch = this.countyValue.filter(data => {
          return (data.Name.search(search) !== -1)
        })
        this.$root.productSearchData = filterSearch
        this.search = ''
        return this.$root.productSearchData
      }
    },
    isAllItem () {
      this.$root.productSearchData = false
    }
  },
  watch: {
    countyValue (val) {
      this.$root.productSearchData = val
      return this.$root.productSearchData
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  background-color: #E60012 !important;
  color: #fff !important;
}
</style>
