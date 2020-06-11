<template>
  <div class="OrderManagement vh-100">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item">
            <a href="/">首頁</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">訂單管理</li>
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
      <div class="tab-content order-record vh-100 bg-light" id="nav-tabContent-order">
        <div
          class="tab-pane fade show active"
          id="nav-rented"
          role="tabpanel"
          aria-labelledby="nav-rented-tab"
        >
          <RentalRecord :orderData="orderData" :userData="userData"/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-ordered"
          role="tabpanel"
          aria-labelledby="nav-ordered-tab"
        >
          <OrderRecord :rentalData="rentalData" :userData="userData"/>
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
      userData: []
    }
  },
  components: { RentalRecord, OrderRecord },
  created () {
    this.getUserData()
    this.getOrderData()
    this.getRentalData()
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
        console.log('出租紀錄', res.data.orders)
        this.orderData = res.data.orders
      }).catch(err => {
        console.log(err)
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
        console.log('訂購紀錄', res.data.orders)
        this.rentalData = res.data.orders
      }).catch(err => {
        console.log(err)
      })
    },
    getUserData () {
      const api = 'http://switcher.rocket-coding.com/api/member'
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        console.log('我是誰', res.data.member)
        this.userData = res.data.member
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.table td{
  vertical-align: inherit;
}
</style>
