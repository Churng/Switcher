<template>
  <div class="login bg-light">
    <div class="container">
      <div class="row d-flex flex-column">
        <div class="login-content">
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
                <div class="form-group">
                  <label class="loglabel" for="inputEmail">帳號</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="name@example.com"
                    v-model="user.Email"
                    required
                  />
                </div>
                <div class="form-group">
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
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="1234567890"
                    v-model="user.Password"
                    required
                  />
                </div>
                <button class="btn btn-warning login-submit login-btn" type="submit">登入</button>
              </form>
              <div class="tab-content-thirdlogin">
                <p>以下帳號快速登入</p>
                <div class="social-login">
                  <button type="button" class="btn btn-social login-facebook" @click.prevent="fbSignIn">Facebook</button>
                  <button type="button" class="btn btn-danger login-google">Google</button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-registered"
              role="tabpanel"
              aria-labelledby="nav-registered-tab"
            >
              <form class="registered @click.prevent" @submit.prevent="signup">
                <div class="form-group">
                  <label for="Login-Name">名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-Name"
                    placeholder="Name"
                    v-model="user.Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-Email">帳號</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Login-Email"
                    placeholder="請輸入Email"
                    v-model="user.Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-Phone">手機號碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-Phone"
                    placeholder="請輸入手機號碼"
                    v-model="user.Phone"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-Idnumber">身分證號碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-Idnumber"
                    placeholder="請輸入身分證號碼"
                    v-model="user.Identity"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-Address">地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-Address"
                    placeholder="請輸入地址"
                    v-model="user.Address"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-Password">密碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-Password"
                    placeholder="請輸入密碼"
                    v-model="user.Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="Login-rePassword">確認密碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Login-rePassword"
                    placeholder="請再一次輸入密碼"
                    v-model="user.rePassword"
                    required
                  />
                </div>
                <button class="btn btn-warning registered-submit" type="submit">註冊</button>
              </form>
              <div class="tab-content-thirdlogin">
                <p>以下帳號快速登入</p>
                <div class="social-login">
                  <button type="button" class="btn btn-social login-facebook" @click.prevent="fbSignIn">Facebook</button>
                  <button type="button" class="btn btn-danger login-google">Google</button>
                </div>
              </div>
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
        Email: '', // 帳號
        Password: '',
        rePassword: '',
        Address: '',
        Identity: '',
        Phone: '',
        Name: '',
        error: false
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
        // console.log(response)
        if (response.data.result) {
          // console.log(response.data)
          localStorage.setItem('token', response.data.token)
          vm.$router.push('/home')
          this.$root.$emit('changeToHome')
        }
      })
    },
    signup () {
      const api = 'http://switcher.rocket-coding.com/register'
      const vm = this
      this.$http.post(api, vm.user).then(response => {
        if (response.data.result) {
          vm.$router.push('/home')
        } else {
          alert('註冊失敗！')
        }
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
    }
  }
}
</script>
