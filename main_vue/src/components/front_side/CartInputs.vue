<template>
  <div class="row flex-column justify-content-center align-items-center">
      <div class="col-md-8">
        <keep-alive>
          <ul class="w-100 list-unstyled pb-3" @submit.prevent="createOrder">
              <li class="mb-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">中文姓名 *</span>
                  </div>
                  <input type="text" class="form-control" name="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                  v-model="name"
                  >
                </div>
                <p class="text-primary">姓名不得留空</p>
              </li>
              <li class="mb-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">行動電話 *</span>
                    </div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="phone">
                </div>
                <p class="text-primary">行動電話不得留空</p>
              </li>
              <li class="mb-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">E-mail *</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="mail">
                </div>
                <p class="text-primary">E-mail不得留空</p>
              </li>
          </ul>
        </keep-alive>
      </div>
      <div class="content-btn d-block justify-content-center text-center pb-5">
          <button type="button" class="btn btn-warning mr-2" @click.prevent="$router.push('/findGames/allGame')">取消</button>
          <button type="button" class="btn btn-warning ml-2" @click.prevent="goToContract">下一步</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      mail: ''
    }
  },
  props: ['totalPrice', 'totalDeposit'],
  methods: {
    goToContract () {
      if ((this.name === '') || (this.phone === '') || (this.mail === '')) {
        console.log(this.$root.getCarts)
      } else {
        const today = new Date()
        this.$root.orderInfo.buyerName = this.name
        this.$root.orderInfo.totalProducts = this.$root.getCartLen
        this.$root.orderInfo.totalPrice = this.totalPrice
        this.$root.orderInfo.totalDeposit = this.totalDeposit
        this.$root.orderInfo.phone = this.phone
        this.$root.orderInfo.mail = this.mail
        this.$root.orderInfo.seller = this.$root.getCarts[0].Seller
        this.$root.orderInfo.orderDate = '西元' + today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日'
        this.$router.push('/orderContract')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-primary{
  font-size: 12px;
}
</style>
