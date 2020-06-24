<template>
  <div class="use-instructionCard">
      <!-- 訂購紀錄評論 -->
        <div class="container">
            <div class="row instructionCard justify-content-center align-items-center visible orderDetailCard">
                <div class="col-10 col-md-6 col-lg-5">
                    <div class="card-main border border-muted rounded bg-white orderBody h-100">
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true" @click.prevent="changeDialogVisible"><i class="el-icon-circle-close"></i></span>
                            </button>
                        </div>
                        <div class="card-body d-flex flex-column align-items-center">
                          <h5 class="pb-4">請為此賣家 / 商品評論</h5>
                          <div class="starsArea d-flex flex-column flex-sm-row justify-content-start align-items-baseline">
                            <h5 class="mr-3"><span class="text-primary">*</span> 滿意度 :</h5>
                            <el-rate v-model="value1"></el-rate>
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
                            <el-button type="info" plain>取消</el-button>
                            <el-button type="success" @click="postComment (item.id)">送出</el-button>
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
      ruleForm: {
        commentVal: '',
        value1: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      },
      rules: {
        comment: [
          { required: true, message: '此欄不能留白', trigger: 'blur' }
        ]
      }
    }
  },
  props: ['item'],
  methods: {
    changeDialogVisible () {
      this.$emit('changeDialogVisible')
    },
    postComment (id) {
      console.log(id)
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
.el-form-item__label{
    width: 100% !important;
    float: none;
    text-align: left;
    font-size: 18px;
    font-weight: 700;
  }
.el-form-item__content{
  margin-left: 0px !important;
  line-height: 50px;
}
</style>
