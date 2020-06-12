<template>
  <table class="table mt-3 buyer">
    <thead class="text-center">
      <tr>
        <th scope="col">出租者</th>
        <th scope="col">項目</th>
        <th scope="col">開始日期</th>
        <th scope="col">結束日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">詳請</th>
        <th scope="col">評論</th>
      </tr>
    </thead>
    <tbody class="text-center seller-order" v-if="noneData">
      <tr>
        <td colspan="7"><h2>尚無訂購紀錄</h2></td>
      </tr>
    </tbody>
    <tbody class="text-center buyer-order orderContents" v-else v-for="(item, index) in filterIdArr" :key="index">
      <tr v-for="product in item.Product" :key="product.ProductId">
        <td>{{product.Seller}}</td>
        <td>{{product.ProductName}}</td>
        <td>{{product.StartDate}}</td>
        <td>{{product.EndDate}}</td>
        <td>{{item.Status}}</td>
        <OrderDetails />
        <td>
          <button class="btn btn-social openDetailBtn" type="submit">去評論</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import OrderDetails from '../back_side/OrderDetails'

export default {
  data () {
    return {
      noneData: false
    }
  },
  props: ['rentalData', 'userData'],
  components: { OrderDetails },
  computed: {
    filterIdArr () {
      const vm = this
      return vm.rentalData.filter(item => {
        if (item.User.Name === vm.userData.Name) {
          return item.Product
        } else {
          vm.noneData = true
          return vm.noneData
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
