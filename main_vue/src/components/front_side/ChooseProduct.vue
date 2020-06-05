<template>
    <div class="columns-choose">
        <div class="choosed">
            <div class="rentDate">
                <div>選擇日期 : </div>
                <div class="d-flex align-items-baseline mt-3">
                    <el-date-picker
                      v-model="value1"
                      type="daterange"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                  </el-date-picker>
                  <!-- <p class="total-rentDate ml-2">共<span>30</span>日</p> -->
                </div>
            </div>
            <div class="quantity d-flex align-items-baseline mt-3 mb-3">
                <p class="mr-4">商品數量</p>
                <el-select v-model="quantity" placeholder="请選擇數量">
                  <el-option
                    v-for="(item, index) in product[0].Quantity"
                    :key="index"
                    :label="item"
                    :value="index">
                  </el-option>
                </el-select>
            </div>
            <div class="columns-btnArea">
                <button type="button" class="btn btn-outline-warning w-100 mb-3">賣家聊聊</button>
                <button type="button" class="btn btn-warning w-100" @click="isLogin">我要租借</button>
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
      value1: '',
      quantity: 0
    }
  },
  props: ['product', 'loginCart'],
  methods: {
    isLogin () {
      const token = localStorage.getItem('token')
      if (!token) {
        this.$router.push('/login')
      } else {
        if ((this.value1 === '' && this.quantity === 0) || (this.value1 === '') || (this.quantity === 0)) {
          this.openAlert()
        } else {
          this.postData()
          return this.$router.push('/cartList')
        }
      }
    },
    postData () {
      const api = 'http://switcher.rocket-coding.com/api/cart'
      this.$http.post(api, {
        ProductId: this.product[0].Id,
        Quantity: this.quantity,
        StartDate: this.value1[0],
        EndDate: this.value1[1]
      }).then(res => {
        console.log('post', res)
      })
    },
    openAlert () {
      this.$emit('openFater', this.loginCart === true)
    }
  }
}
</script>
