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
    <tbody class="text-center seller-order" v-if="noneData">
      <tr>
        <td colspan="6"><h2>尚無出租紀錄</h2></td>
      </tr>
    </tbody>
    <tbody class="text-center seller-order orderContents" v-for="(item, index) in filterIdArr" :key="index" v-else>
      <tr>
        <td>{{item.User.Name}}</td>
        <td>{{item.Product.ProductName}}</td>
        <td>{{item.Product.StartDate}}</td>
        <td>{{item.Product.EndDate}}</td>
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
      noneData: false
    }
  },
  props: ['orderData', 'userData'],
  components: { RentalDetails },
  computed: {
    filterIdArr () {
      const vm = this
      return vm.orderData.filter(item => {
        console.log(item.Product.Seller, vm.userData.Name)
        if (item.Product.Seller === vm.userData.Name) {
          console.log(item)
          return item
        } else {
          vm.noneData = true
          return vm.noneData
        }
      })
    }
  }
}
</script>
