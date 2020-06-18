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
                <div class="col-12 col-md-7 col-lg-6">
                    <div class="switcherStore-sellerCard bg-dark d-flex justify-content-around align-items-center shadow-sm pt-3 mb-4 rounded">
                        <div class="sellerImg">
                            <img :src="sellerData.member.Photo" :alt="sellerData.member.Name">
                        </div>
                        <div class="sellerTxt text-white w-50">
                            <h5 class="mb-0">{{sellerData.member.Name}}</h5>
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
                                <span class="orange-txt pl-2">52</span>
                            </div>
                            <div class="sellerInfo-chat">
                                <font-awesome-icon icon="comment-dots"/>
                                <span class="pl-2">主要回應時間</span>
                                <span class="orange-txt pl-2">{{sellerData.member.Reply}}</span>
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
                    <p>{{sellerData.member.StoreDescription}}</p>
                </div>
                <div class="col-md-6 about-storeImg">
                    <div class="storeImg" >
                      <img :src="sellerData.member.StoreImage" :alt="sellerData.member.StoreImage" width="450">
                    </div>
                </div>
            </div>
            <div class="row switcherStore-main bg-danger justify-content-center text-center pt-2 pb-2">
                <div class="col-md-2 border-right"><router-link to="/sellerstore/sellerallGame" class="main-item active d-block text-white" @click.native="isAllItem">所有商品</router-link></div>
                <div class="col-md-2 border-right"><router-link to="/sellerstore/sellergamehost" class="main-item d-block text-white" @click="isAllItem">遊戲主機</router-link></div>
                <div class="col-md-2 border-right"><router-link to="/sellerstore/sellergame" class="main-item d-block text-white" @click="isAllItem">遊戲軟體</router-link></div>
                <div class="col-md-2 border-right"><router-link to="/sellerstore/sellergamestick" class="main-item d-block text-white" @click="isAllItem">遊戲配件</router-link></div>
                <!-- <div class="col-md-2"><a href="" class="main-item d-block text-white" @click="isAllItem">優惠活動</router-link></div> -->
            </div>
            <router-view></router-view>
            <!-- <PerProduct /> -->
            <router-link to="/addnewproduct" class="d-block">
              <div class="float-button" title="新增商品"><p class="floatplus">＋</p></div>
            </router-link>
             <el-backtop :bottom="60"></el-backtop>
        </div>
    </section>
</template>

<script>
// import PerProduct from '../../../components/back_side/PerProduct'

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
      }
    }
  },
  methods: {
    getSeller (id) {
      const Id = localStorage.getItem('menberId') === 'undefined' ? 1 : localStorage.getItem('menberId')
      const api = `http://switcher.rocket-coding.com/api/member/${Id}`
      this.$http
        .get(api, {
        })
        .then(response => {
          this.sellerData = response.data
          // console.log(this.sellerData)
        })
        .catch(function (error) {
          console.log(error)
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
          this.$root.SellerproductData = response.data.products
          console.log(this.$root.SellerproductData)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    isAllItem () {
      this.$root.SellerSearchData = false
    }
  },
  created () {
    this.getSeller()
    this.getProduct()
  }
  // components: { PerProduct }
}

</script>

<style lang="scss" scoped>
  .float-button {
    position: fixed;
    height: 50px;
    width: 50px;
    bottom: 110px;
    right: 35px;
    background: #FF7D01;
    border-radius: 50%;
    box-shadow: 2px 1px 4px 0px #6c757d;
    cursor: pointer;
    z-index: 99999;
}

    .floatplus{
    font-size: 45px;
    margin: -10px 0px 10px 2px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    }
</style>
