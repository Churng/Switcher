<template>
    <section id="switcherOrder-one" class="bg-light">
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
                    <span @click="$router.go(-1)">返回上一頁</span>
                </div>
            </div>
            <div class="row">
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
        <div class="container mb-5">
            <div class="switcherOrder-orderArea border border-secondary pt-3 pb-3 pl-3 pr-3">
                <h6><i class="mr-2"><font-awesome-icon icon="store"/></i>賣家帳號 : <span>{{getCarts[0].Seller}}</span></h6>
                <div class="row switcherOrder-content d-flex align-items-center pb-3 border-bottom border-light mb-3"  v-for="(item, index) in getCarts" :key="index">
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
                            <p class="mb-1 mr-2">租金 : <span >{{item.Product.Price}}</span>元</p>
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
                </div>
            </div>
        </div>
        <div class="container">
            <h4 class="text-center mb-5">請輸入資料</h4>
            <CartInputs />
        </div>
    </section>
</template>

<script>
import CartInputs from '../components/front_side/CartInputs'

export default {
  data () {
    return {
      isError: false,
      getCarts: []
    }
  },
  components: { CartInputs },
  created () {
    this.getCartData()
  },
  methods: {
    getCartData () {
      const api = 'http://switcher.rocket-coding.com/api/cart'
      const token = localStorage.getItem('token')
      this.$http.get(api, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.getCarts = res.data.carts
        console.log(this.getCarts)
      })
    },
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
          })
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
</style>
