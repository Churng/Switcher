<template>
  <table class="table mt-3">
    <thead class="text-center">
      <tr>
        <th scope="col">購買者</th>
        <th scope="col">項目</th>
        <th scope="col">開始日期</th>
        <th scope="col">結束日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">詳請</th>
      </tr>
    </thead>
    <RentalDetails />
    <tbody class="text-center seller-order" v-if="filterRental">
      <tr>
        <td colspan="6"><h2>尚無紀錄</h2></td>
      </tr>
    </tbody>
    <tbody class="text-center seller-order orderContents" v-for="item in orderData" :key="item.Id" v-else>
      <tr>
        <td>{{item.User.Name}}</td>
        <td>{{item.Product[0].ProductName}}</td>
        <td>{{item.Product[0].StartDate}}</td>
        <td>{{item.Product[0].EndDate}}</td>
        <td>{{item.Status}}</td>
          <RentalDetails />
      </tr>
    </tbody>
  </table>
</template>

<script>
import RentalDetails from '../back_side/RentalDetails'

export default {
  data () {
    return {
      filterRental: []
    }
  },
  props: ['orderData'],
  components: { RentalDetails },
  methods: {
    filterData () {
      const filter = this.orderData.filter(data => {
        return (data.Product.length === 0)
      })
      this.filterRental = filter
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
