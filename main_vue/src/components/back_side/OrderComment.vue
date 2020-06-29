<template>
  <div class="use-instructionCard">
      <!-- 訂購紀錄評論 -->
        <div class="container">
            <div class="row instructionCard justify-content-center align-items-center visible orderDetailCard">
                <div class="col-10 col-md-6 col-lg-5">
                    <div class="card-main border border-muted rounded bg-white orderBody h-100">
                        <div class="card-body d-flex flex-column align-items-center">
                          <h5 class="pb-4 font-weight-bold">請為此賣家 / 商品評論</h5>
                          <div class="starsArea d-flex flex-column flex-sm-row justify-content-start align-items-baseline">
                            <h5 class="mr-3"><span class="text-primary">*</span> 滿意度 :</h5>
                            <div class="block">
                              <el-rate v-model="starValue"></el-rate>
                            </div>
                          </div>
                          <div class="commentTxtArea w-100 pt-3 pb-2">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
                               <el-form-item label="請輸入評論 :" prop="comment">
                                <el-input type="textarea" v-model="ruleForm.commentVal"></el-input>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                        <div class="card-footer text-center">
                            <el-button type="info" plain @click.prevent="changeDialogVisible">取消</el-button>
                            <el-button type="success" @click="postComment()">送出</el-button>
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
      starValue: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      ruleForm: {
        commentVal: ''
      },
      rules: {
        comment: [
          { required: true, message: '此欄不能留白', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    item: Object
  },
  methods: {
    changeDialogVisible () {
      this.$emit('changeDialogVisible')
    },
    postComment () {
      const orderId = this.item.ProductId
      console.log(orderId)
      // const api = 'http://switcher.rocket-coding.com/api/evaluation'
      // const token = localStorage.getItem('token')
      // this.$http.post(api, {
      //   OrderId: orderId,
      //   Star: this.starValue,
      //   Content: this.ruleForm.commentVal
      // },
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // }).then(res => {
      //   console.log(res)
      //   if (res.status === 200 && res.statusText === 'OK') {
      //     this.changeDialogVisible()
      //     this.$notify.info({
      //       title: '評論成功',
      //       message: res.data.message
      //     })
      //   }
      // }).catch(err => {
      //   this.errInfo(err)
      // })
    }
  }
}
</script>

<style lang="scss" scope>
.starsArea{
  width: 100%;
  h5{
    font-size: 18px;
    font-weight: 700;
  }
  i{
    font-size: 25px;
  }
}
.commentTxtArea .el-form-item{
  display: flex;
  flex-direction: column;
}
.commentTxtArea{
  .el-form-item__label{
    width: 100% ;
    float: none;
    text-align: left;
    font-size: 18px;
    font-weight: 700;
  }
  .el-form-item__content{
    margin-left: 0px;
    line-height: 50px;
  }
}
</style>
