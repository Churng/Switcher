<template>
    <div class="header">
        <div class="header-logo text-center">
            <router-link to="/home" class="homeLogo"><img src="img/Swicher_Logo.png" alt="logo"></router-link>
            <!-- <a href="#" ><img src="img/Swicher_Logo.png" alt="logo"></a> -->
            <a class="btn mr-3 text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><font-awesome-icon icon="bars"/></a>
        </div>
        <div class="collapse" id="collapseExample">
            <ul class="header-navBar w-100 mb-0 pl-0 d-flex list-unstyled">
                <li class="sm-findChevron pc-findGame"  @click="pcShow.findGame=!pcShow.findGame">
                    <div class="d-flex justify-content-center w-100">
                        <a href="#" class="header-navBar-pro">
                          <span class="header-navBar-icon mr-2"><font-awesome-icon icon="gamepad"/></span>
                          <span class="header-navBar-label">尋找周邊商品</span>
                        </a>
                        <span class="header-navBar-icon findChevron" @click="phoneShow.findGame=!phoneShow.findGame"><font-awesome-icon :icon="phoneShow.findGame ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="w-100 sm-openItem" v-if="phoneShow.findGame">
                        <p class="mb-0">遊戲主機</p>
                        <p class="mb-0">遊戲軟體</p>
                        <p class="mb-2">遊戲配件</p>
                    </div>
                </li>
                <li class="d-flex justify-content-center sm-findChevron pc-map">
                    <router-link to="/findSeller" class="w-100">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="user"/></span>
                        <span class="header-navBar-label">尋找附近賣家</span>
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
                    <a href="" class="d-none">
                        <span class="header-navBar-icon mr-2"><font-awesome-icon icon="sign-in-alt"/></span>
                        <span class="header-navBar-label">登入/註冊</span>
                    </a>
                    <div class="d-flex justify-content-center w-100 pc-user" @click="pcShow.user=!pcShow.user">
                        <a href="">
                          <span class="header-navBar-icon mr-2"><font-awesome-icon icon="user-circle"/></span>
                          <span class="header-navBar-label">會員管理</span>
                        </a>
                        <span class="header-navBar-icon findChevron" @click="phoneShow.user=!phoneShow.user"><font-awesome-icon :icon="phoneShow.user ? 'angle-up' :'chevron-down'"/></span>
                    </div>
                    <div class="w-100 sm-openItem" v-show="phoneShow.user">
                        <p class="mb-0">會員資料</p>
                        <p class="mb-0">訂單管理</p>
                        <p class="mb-0">我的賣場</p>
                        <p class="mb-0">商品上架</p>
                        <p class="mb-0">聊天室</p>
                        <p class="mb-2">會員登出</p>
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
                <div class="col-md-12 h-navBar h-navBar-p pt-4 pb-4" v-show="pcShow.findGame" :class="pcShow.findGame ? 'd-flex justify-content-center' : 'd-none'">
                    <div class="col-md-2 h-dropItem-content text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_icon-game-controller-b_211668.png" alt="gameHost">
                            <p>遊戲主機</p>
                        </a>
                    </div>
                    <div class="col-md-2 h-dropItem-content text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_videogame_icons-20.png" alt="game">
                            <p>遊戲軟體</p>
                        </a>
                    </div>
                    <div class="col-md-2 h-dropItem-content text-center">
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_icon-game-controller-a_211667.png" alt="gameStick">
                            <p>遊戲配件</p>
                        </a>
                    </div>
                </div>
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
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_READY_user-circle_2703062.png" alt="user">
                            <p>會員資料</p>
                        </a>
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
                        <a href="" class="d-block">
                            <img src="/img/icon/iconfinder_bag_5925586.png" alt="userBag">
                            <p>商品上架</p>
                        </a>
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
                        <ul class="pt-3 pb-3 list-unstyled mb-0">
                            <li class="d-flex justify-content-around align-items-center border-bottom border-light">
                                <div class="choosedImg"><img src="/img/game/game03.jpg"></div>
                                <div class="choosedTxt">
                                    <a href="" class="choosedName mb-1">異度神劍 終極版</a>
                                    <p class="choosedPrice mb-1">NT 300</p>
                                </div>
                                <i class="fas fa-trash-alt"></i>
                            </li>
                            <li class="d-flex justify-content-around align-items-center border-bottom border-light">
                                <div class="choosedImg"><img src="/img/game/game03.jpg"></div>
                                <div class="choosedTxt">
                                    <a href="" class="choosedName mb-1">異度神劍 終極版</a>
                                    <p class="choosedPrice mb-1">NT 300</p>
                                </div>
                                <i class="fas fa-trash-alt"></i>
                            </li>
                        </ul>
                        <div class="cart-footer d-flex justify-content-between">
                            <p>購物車中的項目 : <span>2</span></p>
                            <div class="priceTotal">
                                <p class="mb-1">購物總額 :</p>
                                <h3>NT 600  </h3>
                            </div>
                        </div>
                        <div class="cart-btns text-center">
                            <button type="button" class="btn btn-warning w-100 mb-3">我要租借</button>
                            <button type="button" class="btn btn-link w-100">繼續選購</button>
                        </div>
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
        findGame: false,
        eShop: false,
        user: false
      },
      pcShow: {
        findGame: false,
        eShop: false,
        user: false,
        shoppingCart: false
      }
    }
  }
}
</script>

<style lang="scss">

</style>
