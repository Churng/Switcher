<template>
    <section id="switcherOrder-one" class="bg-light pb-5">
      <el-backtop :bottom="60"></el-backtop>
      <div class="loading vh-100" v-if="loading"><img src="/img/Spinner-1.1s-200px.gif" alt="loading"></div>
      <div>
        <div class="container" v-if="$root.getCarts.length === 0 || this.$root.getCartLen === 0">
          <div class="text-center vh-100 d-flex flex-column justify-content-center align-items-center">
            <h2 class="font-weight-bold pt-5 pb-5">沒有商品在購物車內</h2>
            <span class="shopping"><font-awesome-icon icon="cart-arrow-down"/></span>
          </div>
      </div>
      <div class="container mb-5" v-if="$root.getCarts.length">
          <div class="row pt-5">
              <div class="col-md-6 col-10 mx-auto mt-5 mb-5">
                  <h4 class="text-center mb-3 font-weight-bold">您的購物車</h4>
                  <div class="endLine mb-4"></div>
              </div>
          </div>
          <div>
            <div class="switcherOrder-orderArea border border-secondary pt-3 pb-3 pl-3 pr-3 mb-4" v-for="(index, item) in cartData" :key="index[0].Id">
              <h6><i class="mr-2"><font-awesome-icon icon="store"/></i>賣家帳號 : <span>{{item}}</span></h6>
              <div class="row switcherOrder-content d-flex align-items-center pb-3 border-bottom border-light mb-3" v-for="info in index" :key="info.Id">
                  <div class="col-md-4 switcherOrder-img">
                      <img :src="info.Product.ImageUrl" alt="game">
                  </div>
                  <div class="col-md-7">
                      <div class="d-flex align-items-baseline">
                          <h6>{{info.Product.Name}}</h6>
                          <span class="category-games bg-danger text-white ml-3 rounded">{{info.Product.Category}}</span>
                      </div>
                      <div class="d-flex">
                          <div class="d-flex align-items-baseline mr-3">
                              <font-awesome-icon icon="user-circle"/>
                              <p class="ml-1 mb-1">{{info.Seller}}</p>
                          </div>
                          <div class="d-flex align-items-baseline">
                              <span class="isLease-icon"><font-awesome-icon icon="circle"/></span>
                              <span class="isLease">{{info.Product.Status}}</span>
                          </div>
                      </div>
                      <div class="content-prices d-flex align-items-baseline">
                          <p class="mb-1 mr-2">租金 : <span >{{info.Product.Total}}</span>元</p>
                          <p class="mb-1">押金 : <span>{{info.Product.Deposit}}</span>元</p>
                      </div>
                      <div class="d-flex align-items-baseline">
                          <p class="mb-1 mr-2">商品數量 : <span>{{info.Product.Quantity}}</span></p>
                          <p class="mb-1">面交地點 : <span>7-11 {{info.Product.Store}} 門市</span></p>
                      </div>
                      <div class="d-flex align-items-baseline sm-date">
                          <p class="mb-1">選擇日期 : <span class="choosed-date">{{info.Product.StartDate}} ~ {{info.Product.EndDate}}</span></p>
                          <p class="mb-1 ml-2">共<span>{{info.Product.Period}}</span>日</p>
                      </div>
                  </div>
                  <div class="col-md-1 switcherOrder-delete" @click.prevent="open(index[0].Id)"><font-awesome-icon icon="trash-alt"/></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-end pr-3">
                    <p class="totalTxt mr-3">總租金 : <span class="totalNum">{{totalPrice(index)}}</span> 元</p>
                    <p class="totalTxt ml-3">總押金 : <span class="totalNum">{{totalDeposit(index)}}</span> 元</p>
                  </div>
                  <el-button type="warning" class="submitBtn" @click.prevent="goToSubmit(item, index, totalPrice(index), totalDeposit(index))">送出預約<i class="el-icon-sold-out ml-2"></i></el-button>
              </div>
            </div>
          </div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-12 d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary btn-lg" @click.prevent="$router.push('/findGames/allGame')"><font-awesome-icon icon="shopping-cart" class="mr-2"/>繼續選購</button>
          </div>
        </div>
      </div>
      </div>
    </section>
</template>

<script>

export default {
  data () {
    return {
      cartData: {},
      loading: false
    }
  },
  created () {
    this.getCartData()
  },
  methods: {
    open (idx) {
      this.$confirm('此操作將永遠刪除該商品, 是否繼續 ?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const api = `http://switcher.rocket-coding.com/api/cart/${idx}`
        const token = localStorage.getItem('token')
        this.$http.delete(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(
          this.getCartData(),
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    async getCartData () {
      this.cartData = {}
      this.$root.getCarts = []
      this.$root.getCartLen = 0
      const api = 'http://switcher.rocket-coding.com/api/cart'
      const token = localStorage.getItem('token')
      this.loading = true
      await this.$http.get(api, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        // 整理成賣家:{Product}
        const data = res.data.carts
        data.forEach(data => {
          const seller = data.Seller
          if (!this.cartData[seller]) {
            this.$set(this.cartData, seller, [data])
          } else {
            this.cartData[seller].push(data)
          }
        })
        // 原生資料
        this.$root.getCarts = res.data.carts
        this.$root.getCartLen = res.data.carts.length
        localStorage.setItem('cartLen', res.data.carts.length)
        this.loading = false
        return this.$root.getCarts
      })
    },
    totalPrice (val) {
      var countTotal = 0
      for (var i = 0; i < val.length; i++) {
        var item = val[i].Product
        countTotal += item.Total
      }
      return countTotal.toLocaleString()
    },
    totalDeposit (val) {
      var countTotal = 0
      for (var i = 0; i < val.length; i++) {
        var item = val[i].Product
        countTotal += item.Deposit
      }
      return countTotal.toLocaleString()
    },
    goToSubmit (seller, index, Price, Deposit) {
      var sellerId = 0
      for (var i = 0; i < index.length; i++) {
        sellerId = index[i].SellerId
      }
      this.$root.orderInfo.seller = seller
      this.$root.orderProducts = index
      this.$root.orderInfo.totalPrice = Price
      this.$root.orderInfo.totalDeposit = Deposit
      this.$root.orderInfo.totalProducts = index.length
      this.$router.push({ name: 'CartInputs', params: { id: sellerId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-muted{
  cursor: pointer;
}
.switcherOrder-content .fa-trash-alt:hover{
  color: #FF7D01;
}
.endLine{
  width: 100px;
  height: 5px;
  background: #ededed;
  margin: 0 auto;
}
.totalTxt{
  font-size: 20px;
}
.totalNum{
  font-size: 30px;
  color: #FF7D01;
  font-weight: 700;
}
.shopping{
  font-size: 80px;
}
.submitBtn{
  height: fit-content;
}
</style>
