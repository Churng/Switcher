<template>
    <div class="use-instructionCard">
      <!-- 訂購紀錄詳情 -->
        <div class="container">
            <div class="row instructionCard justify-content-center align-items-center visible orderDetailCard">
                <div class="col-10 col-md-6 pl-0 pr-0 h-50">
                    <div class="card-main border border-muted rounded bg-white overflow-auto orderBody h-100">
                        <div class="d-flex justify-content-start align-items-center">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click.prevent="changeDialogVisible"><i class="el-icon-circle-close"></i></span>
                            </button>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <div class="cardImgArea w-100 d-flex flex-column flex-sm-row align-items-center pb-2 mb-2">
                              <div class="w-50 d-flex flex-column justify-content-center align-items-center">
                                <div class="cardImgInfo"><img :src="getSingleData[0].ImageUrl" class="userImg w-100 h-100 rounded-circle" alt="game"></div>
                                <p class="pt-2 mb-0">{{getSingleData[0].Seller}}</p>
                              </div>
                              <div class="w-50 imgTxt">
                                <p>交易門市：<span>{{getSingleData[0].Store}}</span></p>
                              </div>
                            </div>
                            <div class="w-100 cardContent d-flex align-items-center pt-2 pb-2" v-for="(item, index) in getSingleData" :key="item.ProductId">
                              <h3 class="w-25 text-center font-weight-bold text-muted">{{index+1}}</h3>
                              <div class="w-75 d-flex justify-content-between align-items-center">
                                <div>
                                  <p>商品名稱：<span>{{item.ProductName}}</span></p>
                                  <p>租借價格：<span>{{item.Price}}/天</span></p>
                                  <p>開始日期：<span>{{item.StartDate}}</span></p>
                                  <p>歸還日期：<span>{{item.EndDate}}</span></p>
                                </div>
                                <el-button
                                v-if="getAllData.Status === '已完成'"
                                @click="isComment(item)"
                                class="commentBtn"
                                type="primary"
                                icon="el-icon-edit"
                                :disabled = "isdisabled"
                                circle
                                ></el-button>
                                <OrderComment
                                  v-if="openComment"
                                  @changeDialogVisible ="openComment = false"
                                  :commentItem ="commentItem"/>
                              </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <el-button type="success" plain @click.prevent="postOrderData(getAllData.Id, 1)" v-if="getAllData.Status === '等待確認'">取消訂單</el-button>
                            <h5 class="font-weight-bold text-center" v-else>{{getAllData.Status}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderComment from './OrderComment'

export default {
  data () {
    return {
      openComment: false,
      isdisabled: false,
      commentItem: {}
    }
  },
  components: { OrderComment },
  props: ['getAllData', 'getSingleData'],
  methods: {
    changeDialogVisible () {
      this.$emit('changeDialogVisible')
    },
    changeEditBtn (msg) {
      if (msg === '已新增評論') {
        this.isdisabled = true
      } else {
        this.isdisabled = false
      }
    },
    postOrderData (Id, statusNum) {
      const api = 'http://switcher.rocket-coding.com/api/order-status'
      const token = localStorage.getItem('token')
      this.$http.post(api, {
        OrderId: Id,
        Status: 1
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
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
    refreshData (Id) {
      const api = `http://switcher.rocket-coding.com/api/order/${Id}`
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        this.$emit('changeStatus', res.data.order[0].Status, Id)
      }).catch(err => {
        this.errInfo(err)
      })
    },
    isComment (item) {
      this.commentItem = item
      this.openComment = true
    }
  }
}
</script>

<style lang="scss">
.orderDetailCard{
  background: rgba(0, 0, 0, 0.05) !important;
  .card-main{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05) !important;
  }
}
.orderBody{
  padding: 10px;
  .cardImgArea{
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
}
.cardContent{
  text-align: start !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  h3{
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  }
  p{
    margin-bottom: 0.5rem;
  }
}
button:focus{
  outline: none !important;
}
.cardImgInfo{
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  .userImg{
    object-fit: cover;
  }
}
.commentBtn{
  width: 40px;
  height: 40px;
}
</style>
