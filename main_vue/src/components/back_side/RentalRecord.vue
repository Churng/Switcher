<template>
  <table class="table mt-3">
    <thead class="text-center">
      <tr>
        <th scope="col">項目</th>
        <th scope="col">購買者</th>
        <th scope="col">E-mail</th>
        <th scope="col">聯絡電話</th>
        <th scope="col">訂單日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">詳請</th>
      </tr>
    </thead>
    <tbody class="text-center seller-order" v-if="noneData">
      <tr>
        <td colspan="6"><h2>尚無出租紀錄</h2></td>
      </tr>
    </tbody>
    <tbody class="text-center seller-order orderContents" v-else>
      <tr v-for="(item, index) in filterIdArr" :key="index" @changeStatus = "changeFaStatus">
        <td>{{index+1}}</td>
        <td>{{item.User.Name}}</td>
        <td>{{item.User.Email}}</td>
        <td>{{item.User.Phone}}</td>
        <td>{{item.OrderDate}}</td>
        <td>{{item.Status}}</td>
        <td><button class="btn btn-primary openDetailBtn" type="submit" @click.prevent="filterProductData(item.Id)">詳請</button></td>
        <RentalDetails
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
import RentalDetails from '../back_side/RentalDetails'

export default {
  data () {
    return {
      noneData: false,
      dialogVisible: false,
      getAllData: [],
      getSingleData: []
    }
  },
  props: ['orderData', 'userData'],
  components: { RentalDetails },
  computed: {
    filterIdArr () {
      const vm = this
      const arr = vm.orderData.filter(item => {
        if (item.Product.SellerId === vm.userData.Id) {
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
        // console.log('出租', res.data.order[0])
        this.getAllData = res.data.order[0]
        this.getSingleData = res.data.order[0].Product
        this.dialogVisible = true
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
