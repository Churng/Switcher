<template>
    <div class="home-sellers-area mt-5">
        <h2 class="mb-5 text-center">精選賣家</h2>
        <div class="home-sellers mb-5">
            <el-carousel :interval="4000" type="card">
              <el-carousel-item v-for="item in isNewList()" :key="item.Id">
                  <div class="card-main w-100">
                    <div class="card-body d-flex flex-column flex-lg-row justify-content-center align-items-center">
                        <div class="card-img">
                            <img :src="item.Photo" :alt="item.Name">
                        </div>
                        <div class="card-txtArea ml-lg-3">
                            <h5 class="card-title text-center text-lg-left mr-2 mr-lg-0">{{item.Name}}</h5>
                            <ul class="list-unstyled card-text d-md-flex flex-wrap ">
                              <li>主要商品 : </li>
                              <li class="pl-md-2 " v-for="(game, index) in item.Category" :key="index">{{game}}</li>
                            </ul>
                            <div class="evaluation d-flex align-items-baseline">
                                <p class="mr-2"><span><font-awesome-icon icon="star"/>評價 :</span></p>
                                <p class="evaluation-content">5.0</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-buttons d-flex justify-content-around mt-3">
                        <button type="button" class="btn btn-light" @click="$router.push({name: 'Seller', params: { id: item.Id }})">進入賣場</button>
                    </div>
                  </div>
              </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    isNewList () {
      // 深拷貝(賦予新址)
      const copyData = JSON.parse(JSON.stringify(this.$root.menbersData))
      const sliceData = copyData.slice(0, 6)
      return sliceData
    }
  }
}
</script>
