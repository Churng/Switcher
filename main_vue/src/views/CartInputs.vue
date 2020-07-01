<template>
  <section id="switcherOrder-Two" class="bg-light vh-100 d-flex align-items-center">
    <div class="container pt-5" v-if="$root.getCartLen > 0">
      <div class="row">
          <div class="col-md-6 col-10 mx-auto mb-5">
              <div class="progress-txt d-flex justify-content-around">
                  <p class="active">Step1.輸入資料</p>
                  <p>Step2.同意租賃</p>
              </div>
              <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%; background-color: #E60012;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>
      </div>
      <h4 class="text-center mt-5 mb-3">請輸入資料</h4>
      <div class="endLine mb-4"></div>
      <div class="row flex-column justify-content-center align-items-center">
          <div class="col-md-8">
            <i class="simpleTitle text-warning text-right d-block" @click.prevent="openAlert()"><font-awesome-icon icon="exclamation-circle"/> 會員小提示</i>
            <keep-alive>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm pt-3 pb-5">
                <el-form-item label="會員姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="行動電話" prop="phone">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="會員E-mail" prop="mail">
                  <el-input v-model="ruleForm.mail"></el-input>
                </el-form-item>
              </el-form>
            </keep-alive>
          </div>
          <div class="content-btn d-block justify-content-center text-center pb-5">
              <button type="button" class="btn btn-warning mr-2" @click.prevent="resetForm ('ruleForm')">上一步</button>
              <button type="button" class="btn btn-warning ml-2" @click.prevent="submitForm('ruleForm')">下一步</button>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        phone: null,
        mail: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入正確會員姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '請輸入行動電話', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '請輸入正確會員E-mail', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.openAlert()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const today = new Date()
          this.$root.orderInfo.buyerName = this.ruleForm.name
          this.$root.orderInfo.phone = this.ruleForm.phone
          this.$root.orderInfo.mail = this.ruleForm.mail
          this.$root.orderInfo.orderDate = '西元' + today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日'
          this.$router.push('/orderContract')
        } else {
          this.isError()
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.$router.go(-1)
    },
    isError () {
      this.$message.error('送出錯誤,請在試一次！')
    },
    openAlert () {
      const h = this.$createElement
      this.$notify({
        title: '會員小提示',
        message: h('p', { style: 'color: teal' }, '輸入資料請填寫當初註冊的會員姓名 / E-mail, 以利後續合約之生成 !')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-primary{
  font-size: 12px;
}
.simpleTitle{
  cursor: pointer;
}
</style>
