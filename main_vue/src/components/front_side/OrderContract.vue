<template>
  <section id="switcherOrder-two" class="bg-light">
     <div class="container">
        <div class="row">
            <div class="col-md-6 col-10 mx-auto mt-5 mb-5">
                <div class="progress-txt d-flex justify-content-around">
                    <p>Step1.確認購物車</p>
                    <p class="active">Step2.同意租賃</p>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 100%; background-color: #E60012;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
        <div class="row switcherOrder-contract">
            <div class="col-md-12 border border-secondary pt-4 pb-4">
                <h5 class="text-center">Switcher租賃契約</h5>
                <div class="users mb-3">
                    <h6>立契約書人：</h6>
                    <p>承租人：<span>{{$root.orderInfo.buyerName}}</span>(以下簡稱甲方)</p>
                    <p>出租人：<span>{{$root.orderInfo.seller}}</span>(以下簡稱乙方)</p>
                </div>
                <div class="contract-info mb-3">
                    <h6>承租品明細：</h6>
                    <p>出租總品項：<span class="gameTotal">{{$root.orderInfo.totalProducts}}</span>項</p>
                    <p>總租金：<span>{{$root.orderInfo.totalPrice}}</span>元</p>
                    <p>總押金：<span>{{$root.orderInfo.totalDeposit}}</span>元</p>
                    <div class="size-sm">面交時乙方收取租金及押金</div>
                    <div class="size-sm">歸還時確認無誤後，乙方現場退還押金</div>
                </div>
                <h6 class="mb-3">茲因甲乙雙方進行商品租賃乙事，雙方特立本契約書，其協議範圍為本契約書指定品項之承租事宜，雙方同意按下列之約定進行各項事宜：</h6>
                <div class="contract-protocol mb-3">
                    <h6>第一條 租賃協議：</h6>
                    <p>一、甲方如需延長承租時間，應提前確認產品後續無人承租，方可續租，並需提前於歸還日前12小時提出延長承租之要求，至多以延長兩次為限。(若有不可抗力之因素致無法如期歸還者除外)</p>
                    <p>二、本協議書乙式貳份，甲乙雙方各執正本乙份。</p>
                    <p>三、甲方於租賃前,應主動告知乙方所清潔區域是否有人感染法定傳染病,以便乙方後續清潔事宜。</p>
                    <p class="mb-3">四、如有本協議未盡之事宜，得經由雙方共同合議解決。</p>
                    <h6>第二條 損壞賠償：</h6>
                    <p class="mb-3">甲方承租前，需確實檢查品項功能正常，乙方亦須主動告知產品現狀，如非正常使用以致損壞，甲方需依實際維修費用照價賠償於乙方。</p>
                    <h6>第三條 產品點交表：(請務必確認產品功能正常)</h6>
                    <p class="ganeName">動物森友會遊戲片乙片。</p>
                    <P class="mb-3">※若產品含有電子晶片，切勿碰水，如造成損壞依賠償之規定進行。</P>
                    <h6>第四條 違約處理：</h6>
                    <p>甲方租借如逾期，若未提前12小時提出延長承租之要求，則需支付產品租金兩倍罰金於乙方。(若有不可抗力之因素致無法如期歸還者除外)</p>
                    <p class="mb-3">乙方如未如期交貨，甲方有權提出申告。(若有不可抗力之因素致無法如期交貨者除外)</p>
                    <h6>第五條 歸還流程:</h6>
                    <p>甲方於指定到期日歸還產品後，乙方確認無誤即完成歸還流程。</p>
                </div>
                <p class="text-center">{{$root.orderInfo.orderDate}}</p>
            </div>
        </div>
        <div class="content-btn d-block justify-content-center text-center mt-5 mb-2">
            <button type="button" class="btn btn-warning mr-2" @click.prevent="$router.go(-1)">上一步</button>
            <button type="button" class="btn btn-warning ml-2" @click.prevent="createOrder">送出預約</button>
        </div>
        <div class="btn-footer text-center pb-5">點選「送出預約」，即表示同意以上租賃契約。</div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    createOrder () {
      const api = 'http://switcher.rocket-coding.com/api/order'
      const token = localStorage.getItem('token')
      this.$http.post(api, {
        Name: this.$root.orderInfo.buyerName,
        Phone: this.$root.orderInfo.phone,
        Email: this.$root.orderInfo.mail,
        Seller: this.$root.orderInfo.seller,
        OrderDate: this.$root.orderInfo.orderDate
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        console.log(res)
        this.$root.getCartLen = 0
        this.$root.orderResult = res.data.message
        this.$router.push('/finishOrder')
      }).catch(err => {
        console.log(err)
        this.$root.orderResult = err
        this.$router.push('/finishOrder')
      })
    }
  }
}
</script>
