<template>
    <section id="switcherStore" class="bg-light pt-5">
        <div class="container mb-5">
            <div class="row returnMap mb-5">
                <div class="col-12 d-flex text-muted align-items-center">
                    <i class="mr-2"><font-awesome-icon icon="chevron-left"/></i>
                    <span @click="$router.go(-1)">返回上一頁</span>
                </div>
            </div>
            <div class="row switcherStore-header justify-content-center align-items-center pb-4 border-bottom">
                <div class="col-md-6">
                    <div class="switcherStore-sellerCard bg-dark d-flex justify-content-around align-items-start shadow-sm pt-3 mb-4 bg-white rounded">
                        <div class="sellerImg">
                            <img src="" alt="user">
                        </div>
                        <div class="sellerTxt text-white">
                            <h6 class="mb-0">{{}}</h6>
                            <p class="card-text mb-0">主要商品 : <span>遊戲片</span></p>
                            <button type="button" class="btn btn-light pl-4 pr-4 w-100">我要聊聊</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="switcherStore-sellerInfo">
                        <div class="sellerInfo-header d-flex justify-content-around">
                            <div class="sellerInfo-comment">
                                <font-awesome-icon icon="star"/>
                                <span>評價</span>
                                <span class="orange-txt">700 則</span>
                            </div>
                            <div class="sellerInfo-joinTime">
                                <font-awesome-icon icon="user-plus"/>
                                <span>加入時間</span>
                                <span class="orange-txt">3個月 前</span>
                            </div>
                        </div>
                        <div class="sellerInfo-footer d-flex justify-content-around">
                            <div class="sellerInfo-products">
                                <font-awesome-icon icon="shopping-bag"/>
                                <span>商品</span>
                                <span class="orange-txt">52</span>
                            </div>
                            <div class="sellerInfo-chat">
                                <font-awesome-icon icon="comment-dots"/>
                                <span>主要回應時間</span>
                                <span class="orange-txt">上午/ 晚上</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container switcherStore-about pt-1 pb-1">
            <h5 class="mt-4"><i class="mr-2"><font-awesome-icon icon="store"/></i>關於賣場</h5>
            <div class="row switcherStore-aboutInfo justify-content-between mb-5">
                <div class="col-md-6 about-text">
                    <p> 歡迎光臨 本賣場有實體店面 請安心租借 Switch 相關產品 保固採上網註冊 會給普評價跟負評價的買家請勿下標 買家若對商品疑慮的話 可先詢問清楚後再決定是否下標</p>
                </div>
                <div class="col-md-6 about-storeImg">
                    <div class="storeImg"></div>
                </div>
            </div>
            <div class="row switcherStore-main bg-danger justify-content-center text-center pt-2 pb-2">
                <div class="col-md-2 border-right"><a href="" class="main-item active d-block text-white">所有商品</a></div>
                <div class="col-md-2 border-right"><a href="" class="main-item d-block text-white">遊戲主機</a></div>
                <div class="col-md-2 border-right"><a href="" class="main-item d-block text-white">遊戲軟體</a></div>
                <div class="col-md-2 border-right"><a href="" class="main-item d-block text-white">遊戲配件</a></div>
                <div class="col-md-2"><a href="" class="main-item d-block text-white">優惠活動</a></div>
            </div>
            <div class="mx-auto">
                <ul class="row switcherStore-body list-unstyled flex-wrap pt-5 pb-4">
                    <ShopItem v-for="item in filterSellerData" :key="item"/>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import ShopItem from '../components/shared/ShopItem'

export default {
  data () {
    return {
      sellerData: {}
    }
  },
  components: { ShopItem },
  computed: {
    filterSellerData () {
      const copyData = JSON.parse(JSON.stringify(this.$root.productsData))
      // const seller = this.$route.params.id
      return copyData.filter(item => {
        console.log(item)
        // if (item.sellerid === seller) {
        //   return console.log(item)
        // } else {
        //   return copyData
        // }
      })
    }
  }
}
</script>
