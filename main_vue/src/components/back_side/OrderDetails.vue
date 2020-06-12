<template>
    <div class="use-instructionCard orderDetails">
      <!-- 訂購紀錄詳情 -->
        <button class="btn btn-primary openDetailBtn" type="submit" @click="dialogVisible = true">詳請</button>
        <div class="container" v-if="dialogVisible">
            <div class="row instructionCard justify-content-center align-items-center visible">
                <div class="col-6 pl-0 pr-0">
                    <div class="card-main border border-muted rounded bg-white overflow-auto orderBody">
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click="dialogVisible = false">&times;</span>
                            </button>
                        </div>
                        <div class="card-body d-flex justify-content-around align-items-center">
                            <div class="cardContent w-50">
                              <p>商品名稱：<span>Switch手把</span></p>
                              <p>租借價格：<span>10/天</span></p>
                              <p>總租金：<span>400</span></p>
                              <p>總押金：<span>200</span></p>
                              <p>交易門市：<span>欣欣鼎門市</span></p>
                              <p>E-mail：<span>user02@mail.com</span></p>
                              <p>訂單成立時間：<span>2020/05/16</span></p>
                            </div>
                            <div class="cardImgArea w-25 d-flex flex-column justify-content-center">
                              <img src="/img/users/menber03.png" class="userImg w-100" alt="game">
                              <p class="text-center">user02</p>
                              <el-button type="success" round>去聊聊</el-button>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <el-button type="success" plain>取消訂單</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss">
.orderDetails{
  line-height: 55px;
}
.orderBody{
  padding: 10px;
}
.cardContent p{
  margin-bottom: 0.5rem;
}
</style>
