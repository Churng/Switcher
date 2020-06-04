<template>
    <div class="home-newItems-area pb-5 text-center">
        <h2 class="mb-5">最新商品</h2>
        <ul class="home-newItems-item row list-unstyled flex-wrap pb-5">
          <ShopItem v-for="(item, index) in isNewList()" :key="index" :item="item" :index="index" />
        </ul>
        <button type="button" class="btn btn-danger btn-lg"
        @click="$router.push({name: 'FindGames', params: '/findGames/allGame'})">
        <span class="fas fa-chevron-circle-right mr-2"></span>尋找更多
        </button>
    </div>
</template>

<script>
import ShopItem from '../shared/ShopItem'

export default {
  props: {
    originalData: Array
  },
  components: { ShopItem },
  methods: {
    isNewList () {
      // 深拷貝(賦予新址)
      const copyData = JSON.parse(JSON.stringify(this.originalData))
      const sliceData = copyData.slice(0, 8)
      sliceData.sort(function (a, b) {
        return Date.parse(b.PublishDate.replace(/-/g, '/')) - Date.parse(a.PublishDate.replace(/-/g, '/'))
      })
      return sliceData
    }
  }
}
</script>
