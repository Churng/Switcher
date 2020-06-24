<template>
  <div class="OrderManagement">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item" @click.prevent="$router.push({name: 'SellerStore', params: '/sellerstore'})">我的賣場</li>
          <li class="breadcrumb-item active text-primary" aria-current="page">訂單管理</li>
        </ol>
      </nav>
    </div>
    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-rented-tab"
            data-toggle="tab"
            href="#nav-rented"
            role="tab"
            aria-controls="nav-rented"
            aria-selected="true"
          >出租紀錄</a>
          <a
            class="nav-item nav-link"
            id="nav-ordered-tab"
            data-toggle="tab"
            href="#nav-ordered"
            role="tab"
            aria-controls="nav-ordered"
            aria-selected="false"
          >訂購紀錄</a>
        </div>
      </nav>
      <div class="tab-content order-record bg-light" id="nav-tabContent-order">
        <div
          class="tab-pane fade show active orderTab-pane"
          id="nav-rented"
          role="tabpanel"
          aria-labelledby="nav-rented-tab"
        >
          <div class="pt-5 d-flex justify-content-center" v-if="OrderError"><h2>尚無出租紀錄</h2></div>
          <RentalRecord :orderData="orderData" :userData="userData" v-else/>
        </div>
        <div
          class="tab-pane fade orderTab-pane"
          id="nav-ordered"
          role="tabpanel"
          aria-labelledby="nav-ordered-tab"
        >
          <div class="pt-5 d-flex justify-content-center" v-if="RentalError"><h2>尚無訂購紀錄</h2></div>
          <OrderRecord :rentalData="rentalData" :userData="userData" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RentalRecord from '@/components/back_side/RentalRecord'
import OrderRecord from '@/components/back_side/OrderRecord'

export default {
  data () {
    return {
      orderData: [],
      rentalData: [],
      userData: [],
      OrderError: false,
      RentalError: false
    }
  },
  components: { RentalRecord, OrderRecord },
  created () {
    this.getUserData()
  },
  methods: {
    getOrderData () {
      const api = 'http://switcher.rocket-coding.com/api/orders/seller'
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        this.orderData = res.data.orders
      }).catch(err => {
        const errObj = err.response
        if (errObj.status === 404 && errObj.data.message === '無訂單記錄') {
          this.OrderError = true
          return this.OrderError
        }
      })
    },
    getRentalData () {
      const api = 'http://switcher.rocket-coding.com/api/orders/buyer'
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        this.rentalData = res.data.orders
      }).catch(err => {
        const errObj = err.response
        if (errObj.status === 404 && errObj.data.message === '無訂單記錄') {
          this.RentalError = true
          return this.RentalError
        }
      })
    },
    getUserData () {
      const menberId = localStorage.getItem('menberId')
      const api = `http://switcher.rocket-coding.com/api/member/${menberId}`
      this.$http.get(api).then(res => {
        this.userData = res.data.member
        this.getRentalData()
        this.getOrderData()
      }).catch(err => {
        this.$message(err)
      })
    }
  }
}
</script>

<style lang="scss">
.table td{
  vertical-align: inherit;
}
.orderTab-pane{
  height: 100vh;
  overflow-y: scroll;
}
</style>
