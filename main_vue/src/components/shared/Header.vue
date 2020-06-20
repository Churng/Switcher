<template>
    <div class="header">
        <div class="header-logo text-center">
            <router-link to="/home" class="homeLogo"><img src="/img/Swicher_Logo.png" alt="logo"></router-link>
            <a class="btn mr-3 text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><font-awesome-icon icon="bars"/></a>
        </div>
        <div class="collapse" ref='closeShow' id="collapseExample">
            <ul class="header-navBar w-100 mb-0 pl-0 d-flex list-unstyled">
                <li class="sm-findChevron pc-findGame d-flex justify-content-center" @click.prevent="closeToggle">
                    <router-link to="/findGames" class="w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="gamepad"/></span>
                        <span class="header-navBar-label">尋找周邊商品</span>
                    </router-link>
                </li>
                <li class="d-flex justify-content-center sm-findChevron pc-map" @click.prevent="closeToggle">
                    <router-link to="/group" class="w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="users"/></span>
                        <span class="header-navBar-label">團隊介紹</span>
                    </router-link>
                </li>
                <li class="sm-findChevron pc-eShop">
                    <div class="d-flex justify-content-center w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="shopping-bag"/></span>
                        <span class="header-navBar-label">Nintendo eShop</span>
                        <span class="header-navBar-icon findChevron" @click.prevent="phoneShow.eShop=!phoneShow.eShop"><font-awesome-icon :icon="phoneShow.eShop ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="w-100 sm-openItem" v-show="phoneShow.eShop">
                        <a href="https://store.nintendo.com.hk/" class="mb-0 txtBtn">Nintendo eShop (官方網頁)</a>
                        <a href="https://store.nintendo.com.hk/" class="mb-2 txtBtn">Nintendo eShop (服務由第三方提供)</a>
                    </div>
                    <div class="h-navBar-areaBg pt-4 pb-4">
                        <div>
                          <a href="https://store.nintendo.com.hk/" target="_blank" class="d-block mr-5">
                            <div class="h-dropItem-linkHead d-flex align-items-baseline">
                                <p class="mb-2"><span class="fas"><font-awesome-icon icon="chevron-circle-right"/></span> Nintendo eShop (官方網頁)</p>
                                <div class="h-dropItem-linkHead-icon ml-4"><font-awesome-icon icon="shopping-bag"/></div>
                            </div>
                            <div class="h-dropItem-linkText">
                                <span>連接到提供Nintendo eShop下載軟體購買服務的網頁。</span>
                            </div>
                        </a>
                        </div>
                        <div>
                          <a href="https://www.whatsmall.com/eshops/nintendohk" target="_blank" class="d-block">
                            <div class="h-dropItem-linkHead d-flex align-items-baseline">
                                <p class="mb-2"><span class="fas"><font-awesome-icon icon="chevron-circle-right"/></span> Nintendo eShop (服務由第三方提供)</p>
                                <div class="h-dropItem-linkHead-icon ml-4"><font-awesome-icon icon="shopping-bag"/></div>
                            </div>
                            <div class="h-dropItem-linkText mb-3">
                                <span>連接到提供Nintendo eShop下載軟體購買服務的外部網頁。</span>
                            </div>
                          </a>
                        </div>
                    </div>
                </li>
                <li :class="!$root.ChangeMember? 'sm-findChevron':'sm-findChevron pc-menber'" @click.prevent="closeToggle">
                    <router-link to="/login" v-if="!$root.ChangeMember">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="sign-in-alt"/></span>
                        <span class="header-navBar-label">登入/註冊</span>
                    </router-link>
                    <div class=" d-flex justify-content-center w-100 pc-user" v-else @click="pcShow.user=!pcShow.user">
                          <span class="header-navBar-icon mr-2"><font-awesome-icon icon="user-circle"/></span>
                          <span class="header-navBar-label ">會員管理</span>
                        <span class="header-navBar-icon findChevron" @click.prevent="phoneShow.user=!phoneShow.user"><font-awesome-icon :icon="phoneShow.user ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="h-navBar-menberBg pt-4 pb-4">
                        <div class="col-md-2 h-dropItem-content text-center">
                        <router-link to="/editmemberinfo" class="d-block">
                            <img src="/img/icon/iconfinder_READY_user-circle_2703062.png" alt="user">
                            <p class="mb-0">會員資料</p>
                        </router-link>
                        </div>
                        <div class="col-md-2 h-dropItem-content text-center">
                            <router-link to="/orderseller" class="d-block">
                                <img src="/img/icon/iconfinder_list-alt_1608448.png" alt="userList">
                                <p class="mb-0">訂單管理</p>
                            </router-link>
                        </div>
                        <div class="col-md-2 h-dropItem-content text-center">
                            <router-link to="/sellerstore" class="d-block">
                                <img src="/img/icon/iconfinder_thefreeforty_shop_1243706.png" alt="userStore">
                                <p class="mb-0">我的賣場</p>
                            </router-link>
                        </div>
                        <div class="col-md-2 h-dropItem-content text-center" @click.prevent="signout">
                            <img src="/img/icon/iconfinder_icon-zoom-out_2867960.png" alt="loginout">
                            <p class="mb-0">會員登出</p>
                        </div>
                    </div>
                    <div class="w-100 sm-openItem" v-show="phoneShow.user" @click.prevent="closeToggle">
                        <router-link to="/editmemberinfo"><p class="mb-0">會員資料</p></router-link>
                        <router-link to="/orderseller"><p class="mb-0">訂單管理</p></router-link>
                        <router-link to="/sellerstore"><p class="mb-0">我的賣場</p></router-link>
                        <p class="mb-2" @click.prevent="signout">會員登出</p>
                    </div>
                </li>
                <li class="d-flex justify-content-center sm-findChevron pc-shoppingCart" @click.prevent="userCart">
                    <span class="header-navBar-icon"><font-awesome-icon icon="shopping-cart"/></span>
                    <span class="ml-2" v-if="$root.cartQuantity">( {{$root.getCartLen}} )</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
let token = localStorage.getItem('token')

export default {
  name: 'App',
  data () {
    return {
      phoneShow: {
        eShop: false,
        user: false
      },
      pcShow: {
        user: false
      },
      cartLen: 0
    }
  },
  created () {
    token = localStorage.getItem('token')
    if (token) {
      this.$root.cartQuantity = true
      this.$root.ChangeMember = true
      this.$root.changeBannerBtn = true
      this.$root.userName = localStorage.getItem('userName')
      this.$root.getCartLen = localStorage.getItem('cartLen')
    } else {
      this.$root.cartQuantity = false
      this.$root.ChangeMember = false
    }
  },
  methods: {
    signout () {
      localStorage.removeItem('token')
      localStorage.removeItem('cartLen')
      localStorage.removeItem('menberId')
      localStorage.removeItem('userName')
      this.$root.changeBannerBtn = false
      this.$root.ChangeMember = false
      this.pcShow.user = false
      this.$root.cartQuantity = false
      this.logoutSuccess()
      this.closeToggle()
      this.$router.push('/home')
    },
    userCart () {
      token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/cartList')
        this.closeToggle()
      } else {
        this.$router.push('/login')
        this.closeToggle()
      }
    },
    logoutSuccess () {
      this.$notify({
        title: '登出成功',
        type: 'success'
      })
    },
    closeToggle () {
      if (document.documentElement.clientWidth < 768) {
        this.$refs.closeShow.className = 'collapse'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.router-link-exact-active[data-v-d87d4f92]::after{
    display: none;
    opacity: 0;
}
.h-navBar-N-DN{
    display: flex;
    justify-content: center;
}
.el-menu{
  background-color: #E60012;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.el-submenu__title:hover,.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background-color: #E60012;
  // &::after{
  //   content: '';
  //   position: absolute;
  //   height: 3px;
  //   background-color: #E60012;
  //   right: 2px;
  //   left: 2px;
  //   bottom: 2px;
  // }
}
.txtBtn{
  line-height: 50px;
}
</style>
