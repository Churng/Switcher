<template>
    <div class="header">
        <div class="header-logo text-center">
            <router-link to="/home" class="homeLogo"><img src="/img/Swicher_Logo.png" alt="logo"></router-link>
            <a class="btn mr-3 text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><font-awesome-icon icon="bars"/></a>
        </div>
        <div class="collapse" id="collapseExample">
            <ul class="header-navBar w-100 mb-0 pl-0 d-flex list-unstyled">
                <li class="sm-findChevron pc-findGame d-flex justify-content-center">
                    <router-link to="/findGames" class="w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="gamepad"/></span>
                        <span class="header-navBar-label">尋找周邊商品</span>
                    </router-link>
                </li>
                <li class="d-flex justify-content-center sm-findChevron pc-map">
                    <router-link to="/group" class="w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="users"/></span>
                        <span class="header-navBar-label">團隊介紹</span>
                    </router-link>
                </li>
                <li class="sm-findChevron pc-eShop" @click="pcShow.eShop=!pcShow.eShop">
                    <div class="d-flex justify-content-center w-100">
                        <a href="">
                          <span class="header-navBar-icon mr-2"><font-awesome-icon icon="shopping-bag"/></span>
                          <span class="header-navBar-label">Nintendo eShop</span>
                        </a>
                        <span class="header-navBar-icon findChevron" @click="phoneShow.eShop=!phoneShow.eShop"><font-awesome-icon :icon="phoneShow.eShop ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="w-100 sm-openItem" v-show="phoneShow.eShop">
                        <p class="mb-0">Nintendo eShop (官方網頁)</p>
                        <p class="mb-2">Nintendo eShop (服務由第三方提供)</p>
                    </div>
                </li>
                <li class="sm-findChevron">
                   <router-link to="/login" v-show="!ChangeMemberinfo">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="sign-in-alt"/></span>
                        <span class="header-navBar-label">登入/註冊</span>
                    </router-link>
                    <div class=" d-flex justify-content-center w-100 pc-user"  @click="pcShow.user=!pcShow.user">
                          <span class="header-navBar-icon mr-2"><font-awesome-icon icon="user-circle"/></span>
                          <span class="header-navBar-label ">會員管理</span>
                        <span class="header-navBar-icon findChevron" @click="phoneShow.user=!phoneShow.user"><font-awesome-icon :icon="phoneShow.user ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="w-100 sm-openItem" v-show="phoneShow.user" >
                        <router-link to="/editmemberinfo">會員資料</router-link>
                        <p class="mb-0">訂單管理</p>
                        <p class="mb-0">我的賣場</p>
                        <p class="mb-0">商品上架</p>
                        <p class="mb-0">聊天室</p>
                        <p class="mb-2"  @click.prevent="signout">會員登出</p>
                    </div>
                </li>
                <li class="d-flex justify-content-center sm-findChevron pc-shoppingCart"  @click="pcShow.shoppingCart=!pcShow.shoppingCart">
                    <a href="">
                        <span class="header-navBar-icon"><font-awesome-icon icon="shopping-cart"/></span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="container-fluid h-navBar-areaBg">
            <div class="row h-navBar-area">
                <div class="col-md-12 pt-4 pb-4 h-navBar h-navBar-N" v-show="pcShow.eShop" :class="pcShow.eShop ? 'd-flex justify-content-center' : 'd-none'">
                    <div class="col-md-6 col-lg-4 h-dropItem-content">
                        <a href="https://store.nintendo.com.hk/" target="_blank" class="d-block">
                            <div class="h-dropItem-linkHead d-flex justify-content-between align-items-baseline">
                                <p><span class="fas"><font-awesome-icon icon="chevron-circle-right"/></span> Nintendo eShop (官方網頁)</p>
                                <div class="h-dropItem-linkHead-icon"><font-awesome-icon icon="shopping-bag"/></div>
                            </div>
                            <div class="h-dropItem-linkText ">
                                <span>連接到提供Nintendo eShop下載軟體購買服務的網頁。</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-5 h-dropItem-content">
                        <a href="https://www.whatsmall.com/eshops/nintendohk" target="_blank" class="d-block">
                            <div class="h-dropItem-linkHead d-flex justify-content-between align-items-baseline">
                                <p><span class="fas"><font-awesome-icon icon="chevron-circle-right"/></span> Nintendo eShop (服務由第三方提供)</p>
                                <div class="h-dropItem-linkHead-icon"><font-awesome-icon icon="shopping-bag"/></div>
                            </div>
                            <div class="h-dropItem-linkText mb-3">
                                <span>連接到提供Nintendo eShop下載軟體購買服務的外部網頁。</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-12 h-navBar h-navBar-user" v-show="pcShow.user" :class="pcShow.user ? 'd-flex justify-content-center' : 'd-none'">

                        <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                            <router-link to="/editmemberinfo">
                            <a href="" class="d-block">
                                <img src="/img/icon/iconfinder_READY_user-circle_2703062.png" alt="user">
                                <p>會員資料</p>
                            </a>
                            </router-link>
                        </div>

                    <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_list-alt_1608448.png" alt="userList">
                            <p>訂單管理</p>
                        </a>
                    </div>
                    <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_thefreeforty_shop_1243706.png" alt="userStore">
                            <p>我的賣場</p>
                        </a>
                    </div>
                    <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                         <router-link to="/editnewproduct">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_bag_5925586.png" alt="userBag">
                            <p>商品上架</p>
                        </a>
                         </router-link>
                    </div>
                    <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_66-wechat_1181189.png" alt="userChat">
                            <p>聊天室</p>
                        </a>
                    </div>
                    <div class="col-xl-1 h-dropItem-content mt-4 mb-4 text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_icon-zoom-out_2867960.png" alt="loginout">
                            <p>會員登出</p>
                        </a>
                    </div>
                </div>
                <div class="row h-navBar-cart" v-show="pcShow.shoppingCart" :class="pcShow.shoppingCart ? 'd-flex justify-content-end' : 'd-none'">
                    <div class="col-md-4 cartItems shadow p-3 mb-5 bg-white rounded">
                       <div class="text-center"><span class="font-weight-bold text-center">沒有商品在購物車內</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      phoneShow: {
        eShop: false,
        user: false
      },
      pcShow: {
        eShop: false,
        user: false,
        shoppingCart: false
      },
      token: localStorage.getItem('token')
    }
  },
  methods: {
    signout () {
      localStorage.removeItem('token')
    }
  },
  computed: {
    ChangeMemberinfo () {
      return this.$root.ChangeMemberinfo
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  .header-navBar-icon,.header-navBar-label{
    color: #E60012 !important;
  }
  &::after{
      content: '';
      position: absolute;
      height: 3px;
      background-color: #E60012;
      right: 2px;
      left: 2px;
      bottom: 2px;
  }
}
.router-link-exact-active[data-v-d87d4f92]::after{
    display: none;
    opacity: 0;
}
</style>
