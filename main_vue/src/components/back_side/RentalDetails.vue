<template>
    <div class="use-instructionCard">
      <!-- 出租紀錄詳情 -->
        <div class="container">
            <div class="row instructionCard justify-content-center align-items-center visible rentalDetailCard">
                <div class="col-6 pl-0 pr-0 h-50">
                    <div class="card-main border border-muted rounded bg-white overflow-auto orderBody h-100">
                        <div class="d-flex justify-content-start align-items-center">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click.prevent="changeDialogVisible"><i class="el-icon-circle-close"></i></span>
                            </button>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <div class="cardImgArea w-100 d-flex align-items-center pb-2 mb-2">
                              <div class="w-50 d-flex flex-column justify-content-center align-items-center">
                                <div class="cardImgInfo"><img :src="getSingleData[0].ImageUrl" class="userImg w-100 h-100 rounded-circle" alt="game"></div>
                                <p class="pt-2 mb-0">{{getSingleData[0].Seller}}</p>
                              </div>
                              <div class="w-50 imgTxt text-center">
                                <p class="mb-0">總租金：<span>{{getSingleData[0].Total}}</span></p>
                                <p class="mb-0">總押金：<span>{{getSingleData[0].Deposit}}</span></p>
                                <p>交易門市：<span>{{getSingleData[0].Store}}門市</span></p>
                                <el-button type="success" round @click.prevent="openChatroom">去聊聊</el-button>
                              </div>
                            </div>
                            <div class="w-100 cardContent d-flex align-items-center pt-2 pb-2" v-for="(item, index) in getSingleData" :key="item.ProductId">
                              <h3 class="w-25 text-center font-weight-bold text-muted">{{index+1}}</h3>
                              <div class="w-75">
                                <p>商品名稱：<span>{{item.ProductName}}</span></p>
                                <p>租借價格：<span>{{item.Price}}/天</span></p>
                                <p>開始日期：<span>{{item.StartDate}}</span></p>
                                <p>歸還日期：<span>{{item.EndDate}}</span></p>
                              </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="sellerBtns d-flex justify-content-around" v-if="getAllData.Status === '等待確認'">
                                <el-button type="info" plain @click.prevent="postOrderData(getAllData.Id, 1)">取消訂單</el-button>
                                <el-button type="success" plain @click.prevent="postOrderData(getAllData.Id, 2)">接受訂單</el-button>
                            </div>
                            <h5 class="font-weight-bold text-center" v-else>{{getAllData.Status}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['getAllData', 'getSingleData'],
  methods: {
    changeDialogVisible () {
      this.$emit('changeDialogVisible')
    },
    postOrderData (Id, statusNum) {
      const api = 'http://switcher.rocket-coding.com/api/order-status'
      const token = localStorage.getItem('token')
      this.$http.post(api, {
        OrderId: Id,
        Status: statusNum
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        // console.log('狀態', res)
        this.refreshData(Id)
      }).catch(err => {
        this.errInfo(err)
      })
    },
    errInfo (err) {
      this.$notify.error({
        title: '操作錯誤,請再試一次！',
        message: `${err}`
      })
    },
    openChatroom () {
      this.$message('此功能尚未開發')
    },
    refreshData (Id) {
      const api = `http://switcher.rocket-coding.com/api/order/${Id}`
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        // console.log('單一訂單', res.data.order[0].Status)
        this.$emit('changeStatus', res.data.order[0].Status, Id)
      })
    }
  }
}
</script>

<style lang="scss">
.rentalDetailCard{
  background: rgba(0, 0, 0, 0.1) !important;
  .card-main{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
  }
}
</style>
