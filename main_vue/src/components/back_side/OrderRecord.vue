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
    <button @click="filterData()">11</button>
    <OrderDetails />
    <!-- <tbody class="text-center seller-order" v-if="filterOrder">
      <tr>
        <td colspan="7"><h2>尚無紀錄</h2></td>
      </tr>
    </tbody> -->
    <tbody class="text-center buyer-order orderContents" v-for="item in filterData" :key="item.Id">
      <tr>
        <td>{{item.Product[0].Seller}}</td>
        <td>{{item.Product[0].ProductName}}</td>
        <td>{{item.Product[0].StartDate}}</td>
        <td>{{item.Product[0].EndDate}}</td>
        <td>{{item.Status}}</td>
        <td>
          <button class="btn btn-primary openDetailBtn" type="submit">詳請</button>
        </td>
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
      filterOrder: []
    }
  },
  props: ['rentalData'],
  components: { OrderDetails },
  methods: {
    filterData () {
      this.rentalData.forEach(e => {
        if (e.Product.length > 0) {
          console.log(1515)
          return this.rentalData
        } else {
          return this.filterOrder
        }
      })
    }
  }
}
</script>

<style lang="scss">
.table td{
  vertical-align: inherit;
}
.orderContents{
  overflow-y: scroll;
}
</style>
