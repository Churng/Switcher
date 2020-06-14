<template>
    <section id="switcherProduct" class="bg-light">
        <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
        <div class="container-fluid">
            <div class="row returnShop mb-2">
                <div class="col-12 d-flex text-muted align-items-center mt-5">
                    <i class="mr-2"><font-awesome-icon icon="chevron-left"/></i>
                    <span @click="$router.go(-1)">返回上一頁</span>
                </div>
            </div>
            <div class="row switcherProduct-columns" v-if="product">
                <div class="col-12 col-lg-8 pb-sm-4 pb-md-0">
                    <div class="switcherProduct-header">
                        <h2>{{product.Name}}</h2>
                        <p>Nintendo</p>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide switcherProduct-img mb-4" data-ride="carousel">
                        <ol class="carousel-indicators" v-for="(img, index) in product.Images" :key="index">
                            <li data-target="#carouselExampleIndicators" :data-slide-to="index" :class="index === 0 ? 'active':''"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div :class="index === 0 ? 'carousel-item active':'carousel-item'" v-for="(img, index) in product.Images" :key="index">
                            <img :src="img" class="d-block w-100" alt="...">
                          </div>
                        </div>
                          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                    </div>
                    <ProductSellerStore :product="product"/>
                    <div class="switcherProduct-proInfo mb-3">
                        <h5 class="mb-4">商品資訊</h5>
                        <div class="proInfo-content d-flex justify-content-between align-items-end">
                            <div class="contentBox">
                                {{product.Description}}
                            </div>
                            <div class="contentDate">
                                <p class="mb-0">上架起始日：<span>{{product.PublishDate}}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 columns-right mb-3">
                    <InstructionCard />
                    <div class="columns-category d-flex align-items-center mb-3">
                        <span class="category-games bg-danger text-white mr-3 rounded">{{product.Category}}</span>
                        <span class="font-weight-bold mr-3">{{product.City}} {{product.Zone}}</span>
                        <span :class="product.Status=='可出租' ? 'isLease-icon':'notLease'"><font-awesome-icon icon="circle"/></span>
                        <span class="isLease ml-1">{{product.Status}}</span>
                    </div>
                    <div class="columns-priceArea">
                        <p class="price mr-1 font-weight-bold">NT <span>{{product.Price}}</span> 元 / 日</p>
                        <p class="mr-1">押金 : NT <span>{{product.Deposit}}</span></p>
                    </div>
                    <div class="columns-details d-flex justify-content-between">
                        <div class="location d-flex align-items-baseline">
                            <i class="mr-2"><font-awesome-icon icon="map-marker-alt"/></i>
                            <p>面交地點 : <span>7-11 {{product.Store}} 門市</span></p>
                        </div>
                        <div class="day d-flex align-items-baseline">
                            <i class="mr-2"><font-awesome-icon icon="clock"/></i>
                            <p>可租借天數 : <span>{{product.Period}}天</span></p>
                        </div>
                        <div class="means d-flex align-items-baseline">
                            <i class="mr-2"><font-awesome-icon icon="shield-alt"/></i>
                            <p>交易方式 : 面交</p>
                        </div>
                        <div class="products-quantity d-flex align-items-baseline">
                            <i class="mr-2"><font-awesome-icon icon="shopping-bag"/></i>
                            <p>剩餘商品數量 : <span>{{product.Quantity}}</span></p>
                        </div>
                    </div>
                    <ChooseProduct :product="product"/>
                </div>
            </div>
            <div class="row switcherProduct-review pb-3">
                <div class="col-md-12">
                    <h5>商品評價</h5>
                    <div class="review-navBar bg-danger text-white d-flex justify-content-around align-items-center pt-2 pb-2">
                        <div class="review-star text-center">
                            <p class="text-white font-weight-bold mb-1"><span class="num-large">5</span>/5</p>
                            <div class="stars d-flex text-warning">
                                <font-awesome-icon icon="star"/>
                                <font-awesome-icon icon="star"/>
                                <font-awesome-icon icon="star"/>
                                <font-awesome-icon icon="star"/>
                                <font-awesome-icon icon="star"/>
                            </div>
                        </div>
                        <div class="row review-chooseBtn d-flex">
                            <button type="button" class="btn btn-outline-light">全部</button>
                            <button type="button" class="btn btn-outline-light">5星(<span>2</span>)</button>
                            <button type="button" class="btn btn-outline-light">4星(<span>0</span>)</button>
                            <button type="button" class="btn btn-outline-light">3星(<span>0</span>)</button>
                            <button type="button" class="btn btn-outline-light">2星(<span>0</span>)</button>
                            <button type="button" class="btn btn-outline-light">1星(<span>0</span>)</button>
                        </div>
                    </div>
                    <ul class="review-list list-unstyled">
                        <li class="pt-3 pl-4 pr-4">
                            <div class="review-item d-flex border-bottom border-light pb-3">
                                <div class="userImag">
                                    <img src="/img/users/iconfinder_7_avatar_2754582.png" alt="user02">
                                </div>
                                <div class="userReview ml-2">
                                    <p class="user mb-1">k****x</p>
                                    <div class="stars d-flex text-warning">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <p class="user-comments mb-1">賣家親切，商品優質，推薦！</p>
                                    <p class="comments-date mb-1">2020-05-20 14:25</p>
                                </div>
                            </div>
                        </li>
                        <li class="pt-3 pl-4 pr-4">
                            <div class="review-item d-flex border-bottom border-light pb-3">
                                <div class="userImag">
                                    <img src="/img/users/iconfinder_9_avatar_2754584.png" alt="user02">
                                </div>
                                <div class="userReview ml-2">
                                    <p class="user mb-1">s****l</p>
                                    <div class="stars d-flex text-warning">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <p class="user-comments mb-1">賣家親切，推薦！</p>
                                    <p class="comments-date mb-1">2020-05-22 11:05</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductSellerStore from '../components/front_side/ProductSellerStore'
import ChooseProduct from '../components/front_side/ChooseProduct'
import InstructionCard from '../components/front_side/InstructionCard'

export default {
  data () {
    return {
      product: {},
      loading: false
    }
  },
  components: { ProductSellerStore, ChooseProduct, InstructionCard },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      const api = `http://switcher.rocket-coding.com/api/product/${this.$route.params.id}`
      this.loading = true
      this.$http.get(api).then(res => {
        this.product = res.data.product
        // console.log(this.product)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-muted{
  cursor: pointer;
}
.contentBox{
  padding: 10px;
}
</style>
