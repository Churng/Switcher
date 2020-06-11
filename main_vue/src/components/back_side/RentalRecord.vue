<template>
  <table class="table mt-3 bg-light">
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
    <tbody class="text-center seller-order" v-for="item in orderData" :key="item.Id">
      <tr class>
        <td class="vertical-align:middle;">{{item.User.Name}}</td>
        <td>{{item.Product[0].ProductName}}</td>
        <td>{{item.Product[0].StartDate}}</td>
        <td>{{item.Product[0].EndDate}}</td>
        <td>{{item.Status}}</td>
        <td>
          <OrderDetails />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import OrderDetails from '../back_side/OrderDetails'

export default {
  props: ['orderData'],
  components: { OrderDetails }
}
</script>
