<template>
    <div class="use-instructionCard d-flex justify-content-end align-items-center mt-3">
        <i class="text-warning"><font-awesome-icon icon="exclamation-circle"/></i>
        <span class="text-muted ml-2" @click="dialogVisible = true">使用說明</span>
        <div class="container" v-if="dialogVisible">
            <div class="row instructionCard justify-content-center align-items-center visible">
                <div class="col-8 col-md-6 pl-0 pr-0">
                    <div class="card-main border border-muted rounded bg-white">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <p class="mb-0">操作方法</p>
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click="dialogVisible = false">&times;</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="cardInfo">
                              <p class="card-title mb-4">享受租借Switch遊戲周邊商品的方便。</p>
                                <ul class="card-steps list-unstyled mb-0">
                                    <li>
                                        <i><font-awesome-icon icon="user-plus"/></i>
                                        <p>登入/建立Sitcher Account。</p>
                                    </li>
                                    <li>
                                        <i><font-awesome-icon icon="shopping-cart"/></i>
                                        <p>搜尋喜愛的遊戲並點選「我要租借」。</p>
                                    </li>
                                    <li>
                                        <i><font-awesome-icon icon="list-alt"/></i>
                                        <p>依畫面指示完成交易步驟。</p>
                                    </li>
                                    <li>
                                        <i><font-awesome-icon icon="check-circle"/></i>
                                        <p>享受遊戲</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <a href="#" class="btn btn-outline-secondary pt-1 pb-1" @click="dialogVisible = false">確認</a>
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
