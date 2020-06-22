<template>
  <div class="Editproduct">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/sellerstore/sellerallGame">我的賣場</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">上架商品</li>
        </ol>
      </nav>
    </div>
    <section>
      <div class="container bg-light">
        <form class="w-50 m-auto py-5">
          <span>＊字為必填選項</span>
          <el-form :model="commodity" :rules="rules" ref="commodity" :label-position="labelPosition">
            <el-form-item label="商品名稱" prop="Name">
              <el-input v-model="commodity.Name" required></el-input>
            </el-form-item>
            <AddArea/>
            <div class="Category-Quantity">
              <el-form-item label="商品類別" prop="Category">
                <el-select v-model="commodity.Category" placeholder="請選擇商品類別" >
                  <el-option
                  v-for="(item, idx) in CategoryData"
                  :key="idx"
                  :label="item.label"
                  :value="item.value"
                  required
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品數量" prop="Quantity">
                <el-select v-model="commodity.Quantity" placeholder="請選擇商品數量">
                  <el-option
                  v-for="item in QuantityData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  required>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="可租借天數" prop="Period"  required>
                <el-input v-model="commodity.Period" placeholder="請輸入租借天數" required></el-input>
              </el-form-item>
            </div>
            <div class="setPrice">
              <el-form-item label="原價" prop="OriginPrice"  required>
                <el-input v-model.number="commodity.OriginPrice"></el-input>
              </el-form-item>

              <el-form-item label="押金" prop="Deposit"  required>
                <el-input v-model.number="commodity.Deposit"></el-input>
              </el-form-item>

              <el-form-item label="特價" prop="Price">
                <el-input v-model.number="commodity.Price" placeholder="當有特價時填寫!"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="商品狀態" prop="Status">
              <el-radio-group v-model="commodity.Status" required>
                <el-radio label="可出租" :value="0"></el-radio>
                <el-radio label="已出租" :value="1"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="商品介紹" prop="Description">
              <el-input type="textarea" v-model="commodity.Description" required></el-input>
            </el-form-item>
          </el-form>
          <div class="PublicTime d-none">${PublishDate}</div>
          <div class="row bg-light d-flex justify-content-center">
            <div class="mt-3 mb-3">
              <button type="button" class="btn btn-primary ml-3" @click="BacktoStore">取消</button>
              <button type="button" class="btn btn-warning ml-3" @click="submitForm('commodity')">儲存</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AddArea from '../../../components/back_side/AddArea'
export default {
  components: { AddArea },
  data () {
    return {
      commodity: {
        Name: '',
        OriginPrice: null,
        Price: null,
        Deposit: null,
        City: '',
        Zone: '',
        Store: '',
        Quantity: '',
        Category: '',
        Status: 0,
        Period: null,
        Description: '',
        PublishDate: new Date()
      },
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
      rules: {
        Name: [
          { required: true, message: '請輸入商品名稱', trigger: 'blur' },
          { min: 5, max: 15, message: '長度介於5到15之間', trigger: 'blur' }
        ],
        Quantity: [
          { required: true, message: '請選擇商品數量', trigger: 'change' }
        ],
        Category: [
          { required: true, message: '請選擇商品類別', trigger: 'change' }
        ],
        Period: [
          { required: true, message: '請填寫可租借天數', trigger: 'change' }
        ],
        City: [
          { required: true, message: '請選擇地區', trigger: 'change' }
        ],
        Zone: [
          { required: true, message: '請選擇區域/鄉鎮', trigger: 'change' }
        ],
        Store: [
          { required: true, message: '請選擇門市', trigger: 'change' }
        ],
        OriginPrice: [
          { required: true, message: '請輸入商品金額', trigger: 'blur' },
          { type: 'number', message: '金額必須為數字' }
        ],
        Deposit: [
          { required: true, message: '請輸入押金金額', trigger: 'blur' },
          { type: 'number', message: '金額必須為數字' }
        ],
        Price: [
          { required: false, message: '請輸入特價金額', trigger: 'blur' },
          { type: 'number', message: '金額必須為數字' }
        ],
        Description: [
          { required: true, message: '請填寫商品簡介', trigger: 'blur' }
        ],
        Status: [
          { required: true, message: '請選擇商品狀態', trigger: 'change' }
        ]
      },
      labelPosition: 'top'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const api = 'http://switcher.rocket-coding.com/api/product/add'
          const token = localStorage.getItem('token')
          const today = new Date()
          const newproduct = {
            Name: this.commodity.Name,
            OriginPrice: this.commodity.OriginPrice,
            Price: this.commodity.Price,
            Deposit: this.commodity.Deposit,
            Quantity: this.commodity.Quantity,
            City: this.City,
            Zone: this.Zone,
            Store: this.Store,
            Status: this.commodity.Status,
            Category: this.Category,
            Period: this.commodity.Period,
            Description: this.commodity.Description,
            PublishDate: (this.commodity.PublishDate =
            today.getFullYear() +
            '/' +
            (today.getMonth() + 1) +
            '/' +
            today.getDate())
          }
          const headers = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          this.$http
            .post(api, newproduct, headers)
            .then(response => {
              if (response.data.result) {
                this.addSuccess()
                this.$router.push({
                  name: 'AddProductphoto',
                  params: {
                    id: response.data.product.Id
                  }
                })
              }
            })
            .catch(err => {
              this.$message(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addSuccess () {
      this.$notify({
        title: '商品新增成功',
        type: 'success'
      })
    },
    BacktoStore () {
      this.$router.push({
        path: '/sellerstore'
      })
    }
  }
}
</script>
<style lang="scss">
.product-photo-upload {
  width: 100%;
  height: 300px;
  border: 1px solid #dee2e6;
}
@media(min-width:768px ) {
  .Category-Quantity, .Transaction, .setPrice{
    display: flex;
    margin-bottom: 22px;
    .el-form-item{
      margin: 0px 1px;
    }
  }
}
</style>
