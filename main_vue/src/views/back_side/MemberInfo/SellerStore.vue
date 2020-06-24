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
                <div class="col-12 col-md-6 col-lg-5">
                    <div class="switcherStore-sellerCard bg-dark d-flex justify-content-around align-items-center shadow-sm pt-3 mb-4 rounded">
                        <div class="sellerImg">
                        </div>
                          <el-image v-if="sellerData.member.Photo === null">
                              <div slot="error" class="image-slot">
                                <i class="el-icon-user"></i>
                              </div>
                          </el-image>
                          <img :src="sellerData.member.Photo" :alt="sellerData.member.Name" v-else>
                        <div class="sellerTxt text-white w-50">
                            <h5 class="mb-2">{{sellerData.member.Name}}</h5>
                            <h6>主要商品 :</h6>
                            <ul class="list-unstyled card-text d-flex">
                              <li class="pr-2" v-for="(game, index) in sellerData.member.Category" :key="index">{{game}}</li>
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
                            </div>
                            <div class="sellerInfo-chat">
                                <font-awesome-icon icon="comment-dots"/>
                                <span class="pl-2">主要回應時間</span>
                                <span class="orange-txt pl-2">{{sellerData.member.Reply}}</span>
                                <span class="orange-txt pl-2" v-if="sellerData.member.Reply === null">無</span>
                                <span class="orange-txt pl-2" v-else>{{sellerData.member.Reply}}</span>
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
                    <h3 class="text-center h-50 noneTxt" v-if="sellerData.member.StoreDescription === null">尚未填寫</h3>
                    <p>{{sellerData.member.StoreDescription}}</p>
                </div>
                <div class="col-sm-6 about-storeImg h-100">
                 <div class="storeImg">
                      <el-image v-if="sellerData.member.StoreImage === null">
                          <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                          </div>
                      </el-image>
                      <img :src="sellerData.member.StoreImage" :alt="sellerData.member.StoreImage" v-else>
                    </div>
                </div>
            </div>
            <div class="row switcherStore-main bg-danger justify-content-center text-center pt-2 pb-2">
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item active d-block text-white" @click="getProduct()">所有商品</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item d-block text-white" @click="isGameHost()">遊戲主機</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item d-block text-white" @click="isGame()">遊戲軟體</span></div>
                <div class="col-md-2 border-right btnFous" tabindex="1"><span class="main-item d-block text-white" @click="isGameStick()">遊戲配件</span></div>
            </div>
            <div class="mx-auto">
              <ul class="row switcherStore-body list-unstyled flex-wrap bg-white pt-5 pb-4">
                <PerProduct v-for="(item, index) in filterSellerData" :key="index" :item="item" :index="index"/>
                <li class="w-100" v-if="filterSellerData.length === 0 "><h3 class="text-center noneTxt">尚無資料</h3></li>
              </ul>
            </div>
            <router-link to="/addnewproduct" class="d-block">
              <div class="float-button" title="新增商品"><span class="addProduct">新增商品</span></div>
            </router-link>
             <el-backtop :bottom="60"></el-backtop>
        </div>
    </section>
</template>

<script>
import PerProduct from '../../../components/back_side/PerProduct'

export default {
  data () {
    return {
      sellerData: {
        member: {
          Name: '',
          Reply: '',
          StoreDescription: '',
          StoreImage: ''
        }
      },
      SellerproductData: [],
      productSearchData: false,
      SellerFilterData: []
    }
  },
  components: { PerProduct },
  created () {
    this.getSeller()
    this.getProduct()
  },
  computed: {
    filterSellerData () {
      if (this.productSearchData) {
        return this.productSearchData
      } else {
        return this.SellerproductData
      }
    },
    filterMemberData () {
      const vm = this
      const arr = vm.SellerproductData.filter(item => {
        if (item.MemberName === this.sellerData.Member) {
        }
      })
      arr.sort(function (a, b) {
        return a.PublishDate < b.PublishDate ? 1 : -1
      })
      return arr
    }
  },
  methods: {
    getSeller (id) {
      const Id = localStorage.getItem('menberId')
      const api = `http://switcher.rocket-coding.com/api/member/${Id}`
      this.$http
        .get(api, {
        })
        .then(response => {
          this.sellerData = response.data
        })
        .catch(err => {
          this.$message(err)
        })
    },
    getProduct () {
      const api = 'http://switcher.rocket-coding.com/api/product/admin/all'
      const token = localStorage.getItem('token')
      this.$http
        .get(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          const filterData = response.data.products
          const arr = filterData.filter(item => {
            if (item.MemberName === this.sellerData.Member) {
              return true
            }
          })
          arr.sort(function (a, b) {
            return a.PublishDate < b.PublishDate ? 1 : -1
          })
          this.SellerproductData = arr
          this.SellerproductDataLen = arr.length
          this.productSearchData = arr
        })
        .catch(err => {
          this.$message(err)
        })
    },
    isGameHost () {
      const gameHost = this.SellerproductData.filter(item => {
        return item.Category.search('遊戲主機') !== -1
      })
      this.productSearchData = gameHost
    },
    isGame () {
      const game = this.SellerproductData.filter(item => {
        return item.Category.search('遊戲片') !== -1
      })
      this.productSearchData = game
    },
    isGameStick () {
      const gameStick = this.SellerproductData.filter(item => {
        return item.Category.search('遊戲配件') !== -1
      })
      this.productSearchData = gameStick
    }
  }
}

</script>

<style lang="scss" scoped>
.float-button {
  position: fixed;
  height: 100px;
  width: 49px;
  bottom: 260px;
  right: 0px;
  background: #FF7D01;
  border-radius: 10px 0 0 10px;
  box-shadow: 2px 1px 4px 0px #6c757d;
  cursor: pointer;
  z-index: 9999;
}

.addProduct{
  writing-mode:vertical-rl;
  color:white;
  letter-spacing:5px;
  padding: 8px;
}

.btnFous{
  color: white;
  opacity: .5;
  &:focus{
  opacity: 1;
  outline: none;
  }
}

.noneTxt {
  line-height: 250px;
}
</style>
