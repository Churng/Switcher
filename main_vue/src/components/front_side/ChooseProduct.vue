<template>
    <div class="columns-choose">
        <div class="choosed">
            <div class="rentDate">
                <div>請選擇日期 : </div>
                <div class="d-flex align-items-baseline mt-3">
                    <el-date-picker
                      v-model="value1"
                      type="daterange"
                      value-format="yyyy-MM-dd"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                  </el-date-picker>
                  <p class="total-rentDate ml-2">共<span>{{totalDays}}</span>日</p>
                </div>
            </div>
            <div class="quantity d-flex align-items-baseline mt-3 mb-3">
                <p class="mr-4">商品數量</p>
                <el-select v-model="quantity" placeholder="请選擇數量">
                   <el-option
                    v-for="(item, index) in product[0].Quantity"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
            </div>
            <div class="columns-btnArea mb-4">
                <button type="button" class="btn btn-outline-warning w-100 mb-3">賣家聊聊</button>
                <button type="button" class="btn btn-warning w-100" @click="isLogin" v-if="product[0].Status==='可出租'">我要租借</button>
                <button type="button" class="btn btn-secondary w-100" disabled v-else>我要租借</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '0',
      quantity: 0,
      totalDay: 0
    }
  },
  props: ['product', 'loginCart'],
  computed: {
    totalDays () {
      const sDate1 = this.value1[0]
      const sDate2 = this.value1[1]
      var aDate, oDate1, oDate2, iDays
      if (this.value1 === '0') {
        return '0'
      } else {
        aDate = sDate1.split('-')
        // 轉換為12-18-2002格式
        oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
        aDate = sDate2.split('-')
        oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
        // 把相差的毫秒數轉換為天數
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)
        return iDays
      }
    }
  },
  methods: {
    isLogin () {
      const token = localStorage.getItem('token')
      if (!token) {
        this.openLoginInfo()
      } else {
        if ((this.value1 === '' && this.quantity === 0) || (this.value1 === '') || (this.quantity === 0)) {
          this.openAlert()
        } else {
          this.postData()
        }
      }
    },
    postData () {
      const api = 'http://switcher.rocket-coding.com/api/cart'
      const token = localStorage.getItem('token')
      this.$http.post(api, {
        ProductId: this.product[0].Id,
        Quantity: this.quantity,
        StartDate: this.value1[0],
        EndDate: this.value1[1],
        Period: this.totalDays
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.$root.getCarts = res.data.carts
        this.$root.getCartLen = res.data.carts.length
        localStorage.setItem('cartLen', res.data.carts.length)
        this.correctPost()
      }).catch(err => {
        console.log(err)
      })
    },
    openAlert () {
      this.$emit('openFater', this.loginCart === true)
    },
    openLoginInfo () {
      this.$notify.info({
        title: '消息',
        message: '尚未登入會員! 請先登入後再下單喔！'
      })
    },
    correctPost () {
      this.$notify({
        title: '已加入購物車',
        // message: '这是一条成功的提示消息',
        type: 'success'
      })
    }
  }
}
</script>
