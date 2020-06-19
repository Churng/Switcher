<template>
  <table class="table mt-3 buyer">
    <thead class="text-center">
      <tr>
        <th scope="col">項目</th>
        <th scope="col">出租者</th>
        <th scope="col">預約日期</th>
        <th scope="col">總租金</th>
        <th scope="col">總押金</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">詳請</th>
      </tr>
    </thead>
    <tbody class="text-center seller-order" v-if="noneData">
      <tr>
        <td colspan="7"><h2>尚無訂購紀錄</h2></td>
      </tr>
    </tbody>
    <tbody class="text-center buyer-order orderContents" v-else >
      <tr v-for="(item, index) in filterIdArr" :key="index" @changeStatus = "changeFaStatus">
        <td>{{index+1}}</td>
        <td>{{item.Product[0].Seller}}</td>
        <td>{{item.OrderDate}}</td>
        <td>{{item.FinalTotal}}</td>
        <td>{{item.FinalDeposit}}</td>
        <td>{{item.Status}}</td>
        <td><button class="btn btn-primary openDetailBtn" type="submit" @click.prevent="filterProductData(item.Id)">詳請</button></td>
        <OrderDetails
        :getAllData="getAllData"
        :getSingleData="getSingleData"
        v-if="dialogVisible"
        @changeDialogVisible ="dialogVisible = false"
        @changeStatus = "changeFaStatus"/>
      </tr>
    </tbody>
  </table>
</template>

<script>
import OrderDetails from '../back_side/OrderDetails'

export default {
  data () {
    return {
      noneData: false,
      dialogVisible: false,
      getAllData: [],
      getSingleData: []
    }
  },
  props: ['rentalData', 'userData'],
  components: { OrderDetails },
  computed: {
    filterIdArr () {
      const vm = this
      const arr = vm.rentalData.filter(item => {
        if (item.User.MemberId === vm.userData.Id) {
          return item
        } else {
          vm.noneData = true
          return vm.noneData
        }
      })
      arr.sort(function (a, b) {
        return a.OrderDate < b.OrderDate ? 1 : -1
      })
      return arr
    }
  },
  methods: {
    filterProductData (val) {
      const api = `http://switcher.rocket-coding.com/api/order/${val}`
      const token = localStorage.getItem('token')
      this.$http.get(api,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
        this.getAllData = res.data.order[0]
        this.getSingleData = res.data.order[0].Product
        this.dialogVisible = true
      }).catch(err => {
        this.errInfo(err)
      })
    },
    changeFaStatus (status, Id) {
      this.getAllData.Status = status
      this.filterIdArr.filter(data => {
        if (data.Id === Id) {
          data.Status = status
          return data.Status
        }
      })
    }
  }
}
</script>

<style lang="scss">
.table td{
  vertical-align: inherit !important;
}
.orderContents{
  height: 100%;
  overflow-y: scroll;
}
</style>
