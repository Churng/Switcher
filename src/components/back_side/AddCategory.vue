<template>
    <div class="Category-Quantity">
        <el-form-item label="商品類別" prop="Category">
          <el-select v-model="Category" placeholder="請選擇商品類別" >
              <el-option
              v-for="item in CategoryData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              required
              ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品數量" prop="Quantity">
          <el-select v-model="Quantity" placeholder="請選擇商品數量">
              <el-option
              v-for="item in QuantityData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              required>
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="可租借天數" prop="Period">
        <el-input v-model="Period" placeholder="請輸入租借天數" required></el-input>
        </el-form-item>
    </div>
</template>

<script>
export default {
  CategoryData: [{
    value: '0',
    label: '遊戲主機'
  }, {
    value: '1',
    label: '遊戲配件'
  }, {
    value: '2',
    label: '遊戲片'
  }],
  QuantityData: [{
    value: '1',
    label: '1'
  }, {
    value: '2',
    label: '2'
  }, {
    value: '3',
    label: '3'
  }, {
    value: '4',
    label: '4'
  }, {
    value: '5',
    label: '5'
  }],
  Quantity: '',
  Period: null,
  Category: '',
  rules: {
    Quantity: [
      { required: true, message: '請選擇商品數量', trigger: 'change' },
      { type: 'number', message: '數量必須為數字' }
    ],
    Category: [
      { required: true, message: '請選擇商品類別', trigger: 'change' }
    ],
    Period: [
      { required: true, message: '請填寫可租借天數', trigger: 'change' }
    ]
  }
}
</script>
