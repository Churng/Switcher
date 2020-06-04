<template>
    <div class="columns-choose">
        <div class="choosed">
            <div class="rentDate">
                <div>選擇日期 : </div>
                <div class="d-flex align-items-baseline mt-3">
                    <el-date-picker
                      v-model="value1"
                      type="daterange"
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
                <button type="button" class="btn btn-warning w-100">我要租借</button>
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
      value2: '',
      quantity: ''
    }
  },
  props: ['product']
  // computed: {
  //   totalDays (value1, value2) {
  //     return console.log(value1, value2)
  //   }
  // }
}
</script>
