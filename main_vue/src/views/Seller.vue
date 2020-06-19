<template>
    <section id="switcherStore" class="bg-light pt-5" v-if="memberData">
      <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
        <div class="container mb-5">
            <div class="row returnMap mb-5">
                <div class="col-12 d-flex text-muted align-items-center">
                    <i class="mr-2"><font-awesome-icon icon="chevron-left"/></i>
                    <span @click="$router.go(-1)">返回上一頁</span>
                </div>
            </div>
            <div class="row switcherStore-header justify-content-center align-items-center pb-4 border-bottom">
                <div class="col-12 col-md-7 col-lg-6">
                    <div class="switcherStore-sellerCard bg-dark d-flex justify-content-around align-items-center shadow-sm pt-3 mb-4 rounded">
                        <div class="sellerImg">
                            <img :src="memberData.Photo" :alt="memberData.Name">
                        </div>
                        <div class="sellerTxt text-white w-50">
                            <h5 class="mb-0">{{memberData.Name}}</h5>
                            <h6>主要商品 :</h6>
                            <ul class="list-unstyled card-text d-flex">
                              <li class="pr-2" v-for="(game, index) in memberData.Category" :key="index">{{game}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="switcherStore-sellerInfo">
                        <div class="sellerInfo d-flex flex-wrap justify-content-center">
                            <div class="sellerInfo-comment pr-3">
                                <font-awesome-icon icon="star"/>
                                <span class="pl-2">評價</span>
                                <span class="orange-txt pl-2">20 則</span>
                            </div>
                            <div class="sellerInfo-products pr-3">
                                <font-awesome-icon icon="shopping-bag"/>
                                <span class="pl-2">商品</span>
                                <span class="orange-txt pl-2">{{ownDataLen}}</span>
                            </div>
                            <div class="sellerInfo-chat">
                                <font-awesome-icon icon="comment-dots"/>
                                <span class="pl-2">主要回應時間</span>
                                <span class="orange-txt pl-2">{{memberData.Reply}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container switcherStore-about pt-1 pb-1">
            <h5 class="mt-4"><i class="mr-2"><font-awesome-icon icon="store"/></i>關於賣場</h5>
            <div class="row switcherStore-aboutInfo justify-content-between mb-5">
                <div class="col-sm-6 about-text pt-3 pr-3 pl-3 pb-3">
                    <h3 class="text-center h-50 noneTxt" v-if="memberData.StoreDescription === null">尚無資訊</h3>
                    <p>{{memberData.StoreDescription}}</p>
                </div>
                <div class="col-sm-6 about-storeImg h-100">
                    <div class="demo-image__error" v-if="memberData.StoreImage === ''">
                      <div class="block sellerImg">
                        <el-image>
                          <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                          </div>
                        </el-image>
                      </div>
                    </div>
                    <div class="storeImg" v-else>
                      <img :src="memberData.StoreImage" alt="StoreImage">
                    </div>
                </div>
            </div>
            <div class="row switcherStore-main bg-danger justify-content-center text-center pt-2 pb-2">
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item" @click.prevent="isAllGame()">所有商品</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item" @click.prevent="isGameHost()">遊戲主機</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item" @click.prevent="isGame()">遊戲軟體</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item" @click.prevent="isGameStick()">遊戲配件</span></div>
                <div class="col-md-2 btnFous" tabindex="1"><span class="main-item" @click.prevent="isDiscount()">優惠活動</span></div>
            </div>
            <div class="mx-auto">
                <ul class="row switcherStore-body list-unstyled flex-wrap pt-5 pb-4">
                    <ShopItem v-for="(item, index) in filterSellerData" :key="index" :item="item" :index="index"/>
                    <li class="w-100" v-if="filterSellerData.length === 0 "><h3 class="text-center noneTxt">尚無資料</h3></li>
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
      memberData: {},
      loading: false,
      ownData: [],
      productSearchData: false,
      ownDataLen: null
    }
  },
  components: { ShopItem },
  created () {
    this.getMemberData()
  },
  computed: {
    filterSellerData () {
      if (this.productSearchData) {
        return this.productSearchData
      } else {
        return this.ownData
      }
    }
  },
  methods: {
    getMemberData () {
      const api = `http://switcher.rocket-coding.com/api/member/${this.$route.params.id}`
      this.loading = true
      this.$http.get(api).then(res => {
        this.memberData = res.data.member
        // 強制刷新
        setTimeout(_ => {
          this.isAllGame()
        }, 100)
        this.loading = false
      })
    },
    isAllGame () {
      const copyData = JSON.parse(JSON.stringify(this.$root.productsData))
      const arr = copyData.filter(item => {
        if (item.MemberName === this.memberData.Name) {
          return true
        }
      })
      this.ownData = arr
      this.ownDataLen = arr.length
      this.productSearchData = arr
    },
    isGameHost () {
      const gameHost = this.ownData.filter(item => {
        return item.Category.search('遊戲主機') !== -1
      })
      this.productSearchData = gameHost
    },
    isGame () {
      const game = this.ownData.filter(item => {
        return item.Category.search('遊戲片') !== -1
      })
      this.productSearchData = game
    },
    isGameStick () {
      const gameStick = this.ownData.filter(item => {
        return item.Category.search('遊戲配件') !== -1
      })
      this.productSearchData = gameStick
    },
    isDiscount () {
      const discount = this.ownData.filter(data => {
        return data.OriginPrice - data.Price > 0
      })
      this.productSearchData = discount
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text li{
  font-size: 14px;
}
.noneTxt {
  line-height: 250px;
}
.btnFous{
  color: white;
  opacity: .5;
  &:focus{
  opacity: 1;
  outline: none;
  }
}
.about-storeImg{
  height: 100% !important;
}
</style>
