<template>
    <div class="use-instructionCard">
        <button class="btn btn-primary openDetailBtn" type="submit" @click="dialogVisible = true">詳請</button>
        <div class="container" v-if="dialogVisible">
            <div class="row instructionCard justify-content-center align-items-center visible">
                <div class="col-6 pl-0 pr-0">
                    <div class="card-main border border-muted rounded bg-white overflow-auto">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <p class="mb-0">操作方法</p>
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click="dialogVisible = false">&times;</span>
                            </button>
                        </div>
                        <div class="card-body">
                            <p class="card-title mb-4">享受租借Switch遊戲周邊商品的方便。</p>
                            <ul class="card-steps list-unstyled d-flex justify-content-around align-items-start text-center mb-0">
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

<style lang="scss">
.openDetailBtn{
  font-size: 14px;
}
</style>
