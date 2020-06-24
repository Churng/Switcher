<template>
  <div class="login bg-light">
    <div class="container loginHeight">
      <div class="row d-flex flex-column">
        <div class="login-content mt-5 mb-5">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-login-tab"
                data-toggle="tab"
                href="#nav-login"
                role="tab"
                aria-controls="nav-login"
                aria-selected="true"
              >登入</a>
              <a
                class="nav-item nav-link"
                id="nav-registered-tab"
                data-toggle="tab"
                href="#nav-registered"
                role="tab"
                aria-controls="nav-registered"
                aria-selected="false"
              >註冊</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-login"
              role="tabpanel"
              aria-labelledby="nav-login-tab"
            >
              <form class="signin" @submit.prevent="login">
                  <label class="loglabel" for="inputEmail">帳號</label>
                  <el-form :model="user" :rules="rules" ref="user"  class="demo-ruleForm">
                    <el-form-item  prop="Email">
                      <el-input v-model="user.Email" required></el-input>
                    </el-form-item>
                  <label
                    class="d-flex justify-content-between LogininputPassword"
                    for="inputPassword"
                  >
                    <p class="password">密碼</p>
                    <router-link to="/ResetPassword">
                      <p class="forgetpassword">
                        <a href="#">忘記密碼？</a>
                      </p>
                    </router-link>
                  </label>
                    <el-form-item  prop="Password">
                      <el-input type="password" v-model="user.Password" autocomplete="new-password" required ></el-input>
                    </el-form-item>
                  </el-form>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-warning login-submit login-btn" type="submit">登入</button>
                  </div>
              </form>
              <!-- <div class="tab-content-thirdlogin">
                <p>以下帳號快速登入</p>
                <div class="social-login">
                  <button type="button" class="btn btn-social login-facebook" @click.prevent="fbSignIn">Facebook</button>
                </div>
              </div> -->
            </div>
            <div
              class="tab-pane fade"
              id="nav-registered"
              role="tabpanel"
              aria-labelledby="nav-registered-tab"
            >
              <form class="registered @click.prevent" @submit.prevent="signup">
                <div class="form-group">
                  <el-form :model="user" :rules="rules" ref="user"  class="demo-ruleForm">
                    <label for="Login-Name">名稱</label>
                    <el-form-item  prop="Name">
                      <el-input v-model="user.Name"></el-input>
                    </el-form-item>
                    <label for="Login-Email">帳號</label>
                    <el-form-item  prop="Email">
                      <el-input v-model="user.Email"></el-input>
                    </el-form-item>
                    <label for="Login-Phone">手機號碼</label>
                    <el-form-item  prop="Phone">
                      <el-input v-model="user.Phone"></el-input>
                    </el-form-item>
                    <label for="Login-Idnumber">身分證號碼</label>
                     <el-form-item  prop="Identity">
                      <el-input v-model="user.Identity"></el-input>
                    </el-form-item>
                    <label for="Login-Address" required>地址</label>
                     <el-form-item  prop="Address">
                      <el-input v-model="user.Address" required></el-input>
                    </el-form-item>
                    <label for="Login-Password">密碼</label>
                      <el-form-item  prop="Password">
                      <el-input v-model="user.Password"  autocomplete="off" required></el-input>
                    </el-form-item>
                    <label for="Login-rePassword">確認密碼</label>
                    <el-form-item  prop="repassword">
                      <el-input v-model="user.rePassword"  autocomplete="off" required></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-warning registered-submit" type="submit">註冊</button>
                </div>
              </form>
              <!-- <div class="tab-content-thirdlogin">
                <p>以下帳號快速登入</p>
                <div class="social-login">
                  <button type="button" class="btn btn-social login-facebook" @click.prevent="fbSignIn">Facebook</button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      // 登入驗證資料結構 - 物件
      user: {
        Email: null, // 帳號
        Password: null,
        rePassword: null,
        Address: null,
        Identity: null,
        Phone: null,
        Name: null,
        error: false
      },
      rules: {
        Email: [
          { required: true, message: '請輸入帳號', trigger: 'blur' },
          { type: 'email', message: 'example@mail.com', trigger: ['blur', 'change'] }
        ],
        Password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '請再次輸入密碼', trigger: 'blur' }
        ],
        Name: [
          { required: true, message: '請輸入用戶名稱', trigger: 'blur' }
        ],
        Phone: [
          { required: true, message: '請輸入正確電話號碼', trigger: 'blur' },
          { type: 'number', message: '電話號碼必須為數字' }
        ],
        Identity: [
          { required: true, message: '請輸入身分證號碼', trigger: 'blur' },
          { max: 10, message: '請輸入正確身分證號碼：A123456789', trigger: 'blur' }
        ],
        Address: [
          { required: true, message: '請輸入地址', trigger: 'blur' }
        ]
      },
      connected: false
    }
  },
  mounted () {
    window.fbAsyncInit = function init () {
      window.FB.init({
        appId: '582425672683465',
        cookie: true,
        xfbml: true,
        version: 'v7.0'
      })
      window.FB.AppEvents.logPageView()
    }
    this.fbInit(document, 'script', 'facebook-jssdk')
  },
  methods: {
    login () {
      const vm = this
      const api = 'http://switcher.rocket-coding.com/login'
      // 內層是使用箭頭函式，沒有自己的 this 所以外層先宣告 this
      this.$http.post(api, {
        Email: this.user.Email,
        Password: this.user.Password
      }).then((response) => {
        localStorage.setItem('menberId', response.data.id)
        if (response.data.result) {
          localStorage.setItem('token', response.data.token)
          this.getCartData()
          this.loginSuccess()
          this.getUserData()
          vm.$router.push('/home')
          this.$root.$emit('changeToHome')
          this.$root.changeBannerBtn = true
          this.$root.ChangeMember = true
          this.$root.cartQuantity = true
        }
      })
        .catch(error => {
          const errObj = error.response
          if (errObj.status === 400 && errObj.data.message === '登入失敗!') {
            this.$message({
              message: errObj.data.message,
              type: 'warning'
            })
          } else if (errObj.status === 404 && errObj.data.message === '登入失敗!') {
            this.$message({
              message: errObj.data.message,
              type: 'warning'
            })
          }
        })
    },
    loginSuccess () {
      this.$notify({
        title: '登入成功',
        type: 'success'
      })
    },
    signup () {
      const api = 'http://switcher.rocket-coding.com/register'
      const vm = this
      this.$http.post(api, vm.user).then(response => {
        if (response.data.result) {
          this.signupSuccess()
          vm.$router.push('/home')
        } else {
          this.signupSuccessfully()
        }
      }).catch(err => {
        this.$message(err)
      })
    },
    signupSuccess () {
      this.$notify({
        title: '註冊成功',
        type: 'success'
      })
    },
    signupSuccessfully () {
      this.$notify.error({
        title: '此 Email 已經註冊!',
        type: 'success'
      })
    },
    fbInit (d, s, id) {
      let js = null
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    },
    fbSignIn () {
      window.FB.login(({ status, authResponse }) => {
        if (status === 'connected') {
          this.$router.push('/home')
          this.$root.$emit('changeToHome')
        }
      },
      {
        scope: 'public_profile,email'
      })
    },
    getCartData () {
      const api = 'http://switcher.rocket-coding.com/api/cart'
      const token = localStorage.getItem('token')
      this.$http.get(api, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.$root.getCarts = res.data.carts
        this.$root.getCartLen = res.data.carts.length
        localStorage.setItem('cartLen', res.data.carts.length)
      }).catch(err => {
        this.$message(err)
      })
    },
    getUserData () {
      const menberId = localStorage.getItem('menberId')
      const api = `http://switcher.rocket-coding.com/api/member/${menberId}`
      this.$http.get(api).then(res => {
        this.$root.userName = res.data.member.Name
        localStorage.setItem('userName', res.data.member.Name)
      }).catch(err => {
        this.$message(err)
      })
    }
  }
}
</script>
