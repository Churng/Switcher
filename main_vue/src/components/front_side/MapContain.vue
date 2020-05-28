<template>
    <div class="col-md-6 col-lg-5 col-xl-4 pt-4 seller-information">
        <h3 v-if="firstVeiw">請輸入附近區域尋找</h3>
        <h3 v-if="loading">Loading...</h3>
        <h3 v-if="errorMsg">{{ errorMsg }}</h3>
        <div v-if="!firstVeiw">
          <div class="seller-header d-flex justify-content-between align-items-center mb-3">
            <p class="textHeader mb-0">目前區域共有: <span class="font-weight-bold">4</span>個賣家</p>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle bg-light text-dark" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    評價(高到低)
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item disabled" type="button">評價(高到低)</button>
                    <button class="dropdown-item" type="button">評價(低到高)</button>
                </div>
            </div>
          </div>
          <ul class="cardsArea list-unstyled mb-0" v-for="(store, index) in stores" :key="index">
              <li class="card mb-3 mr-3">
                  <div class="card-body pb-3 d-flex justify-content-around align-items-center">
                      <div class="card-seller">
                          <div class="card-img">
                              <img src="/img/users/iconfinder_11_avatar_2754576.png" alt="user01">
                          </div>
                          <h5 class="mb-0 text-center">阿瑄</h5>
                      </div>
                      <div class="card-info">
                          <div class="card-txtArea mb-3">
                              <p class="mb-0">面交地點 : 7-11<span>{{ store.POIName }}</span>門市</p>
                              <p class="mb-0">地址 : <span>{{ store.Address }}</span></p>
                              <p class="card-text mb-0">主要商品: <span>遊戲片</span></p>
                                  <div class="evaluation d-flex align-items-baseline">
                                      <p class="mr-2 mb-0"><span class="fas fa-star">評價:</span></p>
                                      <p class="evaluation-content mb-0">5.0 <span>(1,000評價)</span></p>
                                  </div>
                          </div>
                          <div class="card-buttons d-flex justify-content-between">
                              <button type="button" class="btn btn-secondary">進入賣場</button>
                              <button type="button" class="btn btn-outline-secondary">我要聊聊</button>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      firstVeiw: true,
      loading: false,
      stores: null,
      errorMsg: ''
    }
  }
}
</script>
