<template>
    <section id="switcherOrder-one" class="bg-light pb-5">
        <div class="container">
            <el-alert
              title="請正確輸入資料"
              type="error"
              show-icon
              v-if="isError"
              >
            </el-alert>
            <div class="row returnShop">
                <div class="col-12 d-flex text-muted align-items-center mt-5">
                    <i class="mr-2"><font-awesome-icon icon="chevron-left"/></i>
                    <span @click.prevent="$router.go(-1)">返回上一頁</span>
                </div>
            </div>
            <div class="text-center vh-100 d-flex flex-column justify-content-center align-items-center" v-if="$root.getCarts.length === 0 || this.$root.getCartLen === 0">
              <h2 class="font-weight-bold pt-5 pb-5">沒有商品在購物車內</h2>
              <span class="shopping"><font-awesome-icon icon="cart-arrow-down"/></span>
            </div>
            <div class="row" v-if="$root.getCarts.length">
                <div class="col-md-6 col-10 mx-auto mt-5 mb-5">
                    <div class="progress-txt d-flex justify-content-around">
                        <p class="active">Step1.確認購物車</p>
                        <p>Step2.同意租賃</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%; background-color: #E60012;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-5" v-if="$root.getCarts.length">
            <div>
              <div class="switcherOrder-orderArea border border-secondary pt-3 pb-3 pl-3 pr-3" v-for="(index, item) in cartData" :key="item.Id">
                <h6><i class="mr-2"><font-awesome-icon icon="store"/></i>賣家帳號 : <span>{{item}}</span></h6>{{index}}
                <!-- <div class="row switcherOrder-content d-flex align-items-center pb-3 border-bottom border-light mb-3">
                    <div class="col-md-4 switcherOrder-img">
                        <img :src="item.Product.ImageUrl" alt="game">
                    </div>
                    <div class="col-md-7">
                        <div class="d-flex align-items-baseline">
                            <h6>{{item.Product.Name}}</h6>
                            <span class="category-games bg-danger text-white ml-3 rounded">{{item.Product.Category}}</span>
                        </div>
                        <div class="d-flex">
                            <div class="d-flex align-items-baseline mr-3">
                                <font-awesome-icon icon="user-circle"/>
                                <p class="ml-1 mb-1">{{item.Seller}}</p>
                            </div>
                            <div class="d-flex align-items-baseline">
                                <span class="isLease-icon"><font-awesome-icon icon="circle"/></span>
                                <span class="isLease">{{item.Product.Status}}</span>
                            </div>
                        </div>
                        <div class="content-prices d-flex align-items-baseline">
                            <p class="mb-1 mr-2">租金 : <span >{{item.Product.Total}}</span>元</p>
                            <p class="mb-1">押金 : <span>{{item.Product.Deposit}}</span>元</p>
                        </div>
                        <div class="d-flex align-items-baseline">
                            <p class="mb-1 mr-2">商品數量 : <span>{{item.Product.Quantity}}</span></p>
                            <p class="mb-1">面交地點 : <span>7-11 {{item.Product.Store}} 門市</span></p>
                        </div>
                        <div class="d-flex align-items-baseline sm-date">
                            <p class="mb-1">選擇日期 : <span class="choosed-date">{{item.Product.StartDate}} ~ {{item.Product.EndDate}}</span></p>
                            <p class="mb-1 ml-2">共<span>{{item.Product.Period}}</span>日</p>
                        </div>
                    </div>
                    <div class="col-md-1 switcherOrder-delete" @click="open(item.Id)"><font-awesome-icon icon="trash-alt"/></div>
                </div> -->
                <div class="d-flex justify-content-end pr-3">
                  <p class="totalTxt mr-3">總租金 : <span class="totalNum">{{totalPrice}}</span> 元</p>
                  <p class="totalTxt ml-3">總押金 : <span class="totalNum">{{totalDeposit}}</span> 元</p>
                </div>
              </div>
            </div>
        </div>
        <div class="container" v-if="$root.getCartLen > 0">
            <h4 class="text-center mb-3">請輸入資料</h4>
            <div class="endLine mb-4"></div>
            <CartInputs :totalPrice="totalPrice" :totalDeposit="totalDeposit"/>
        </div>
    </section>
</template>

<script>
import CartInputs from '../components/front_side/CartInputs'

export default {
  data () {
    return {
      isError: false,
      cartData: []
    }
  },
  components: { CartInputs },
  created () {
    this.getCartData()
  },
  methods: {
    open (idx) {
      this.$confirm('此操作將永遠刪除該文件, 是否继续 ?', '提示', {
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
          this.$message({
            type: 'success',
            message: '删除成功!'
          }),
          this.getCartData()
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    async getCartData () {
      const api = 'http://switcher.rocket-coding.com/api/cart'
      const token = localStorage.getItem('token')
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
        console.log(this.cartData)
        this.isError = false
        return this.cartData
      })
    }
  },
  computed: {
    totalPrice () {
      var countTotal = 0
      if (this.$root.getCarts.length) {
        for (var i = 0; i < this.$root.getCartLen; i++) {
          var item = this.$root.getCarts[i].Product
          countTotal += item.Total
        }
      }
      return countTotal.toLocaleString()
    },
    totalDeposit () {
      var depositTotal = 0
      if (this.$root.getCarts.length) {
        for (var i = 0; i < this.$root.getCartLen; i++) {
          var item = this.$root.getCarts[i].Product
          depositTotal += item.Deposit
        }
      }
      return depositTotal.toLocaleString()
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
</style>
