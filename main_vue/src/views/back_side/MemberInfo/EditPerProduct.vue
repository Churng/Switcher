<template>
  <div class="Editproduct">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" @click.prevent="$router.push({name: 'SellerStore', params: '/sellerstore'})">我的賣場</li>
          <li class="breadcrumb-item active text-primary" aria-current="page">編輯商品</li>
        </ol>
      </nav>
    </div>
    <section>
      <div class="container bg-light">
        <form class="w-50 m-auto py-5">
          <el-form :model="Productdata.product"  ref="Productdata.product" >
            <el-form-item label="商品名稱" >
              <el-input v-model="Productdata.product.Name" required></el-input>
            </el-form-item>
            <div class="Category-Quantity">
              <el-form-item label="商品類別" >
                <el-select v-model="Productdata.product.Category" placeholder="請選擇商品類別" >
                  <el-option
                  v-for="(item, idx) in CategoryData"
                  :key="idx"
                  :label="item.label"
                  :value="item.value"
                  required
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品數量" >
                <el-select v-model="Productdata.product.Quantity" placeholder="請選擇商品數量">
                  <el-option
                  v-for="item in QuantityData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  required>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="可租借天數"   required>
                <el-input v-model="Productdata.product.Period" placeholder="請輸入租借天數" required></el-input>
              </el-form-item>
            </div>
              <p class="localTxt"><span class="text-primary">*</span> 請選擇面交地點</p>
              <div class="Transaction">
                <el-select v-model="Productdata.product.City" placeholder="請選擇城市" label="城市" @change="selectAll()">
                  <el-option
                    v-for="(item, city) in CityData"
                    :key="city"
                    :label="city"
                    :value="city"
                    >
                  </el-option>
                </el-select>
                <el-select v-model="Productdata.product.Zone" placeholder="請選擇區域" @change="selectZone()">
                  <el-option
                    v-for="(item, idx) in zoneArr"
                    :key="idx"
                    :label="item.zone"
                    :value="item.zone">
                  </el-option>
                </el-select>
                <el-select v-model="Productdata.product.Store" placeholder="請選擇門市">
                  <el-option
                    v-for="(item, idx) in storeArr"
                    :key="idx"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
            <div class="setPrice">
              <el-form-item label="原價"   required>
                <el-input v-model.number="Productdata.product.OriginPrice"></el-input>
              </el-form-item>

              <el-form-item label="押金"   required>
                <el-input v-model.number="Productdata.product.Deposit"></el-input>
              </el-form-item>

              <el-form-item label="特價" >
                <el-input v-model.number="Productdata.product.Price" placeholder="當有特價時填寫!"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="商品狀態" >
              <el-radio-group v-model="Productdata.product.Status" required class="pl-3">
                <el-radio label="可出租" :value="0"></el-radio>
                <el-radio label="已出租" :value="1"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="商品介紹" >
              <el-input type="textarea" v-model="Productdata.product.Description" required></el-input>
            </el-form-item>
          </el-form>
          <div class="PublicTime d-none">${PublishDate}</div>
          <div class="row bg-light d-flex justify-content-center">
            <div class="mt-3 mb-3">
              <button type="button" class="btn btn-danger mr-4" @click="backStore">返回商店</button>
              <button type="submit" class="btn btn-warning mr-4" data-toggle="modal" data-target="#staticBackdrop" @click="updateProduct">儲存</button>
              <button type="submit" class="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop" @click="toEditPhoto">修改照片</button>
            </div>
          </div>
          <p class="text-center text-primary specialTxt">＊字為必填選項</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Productdata: {
        product: {
          Name: '',
          OriginPrice: 0,
          Price: 0,
          Deposit: null,
          Quantity: null,
          City: '',
          Zone: '',
          Store: '',
          Status: 0,
          Category: 0,
          Period: null,
          Description: '',
          PublishDate: '',
          Id: ''
        }
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
      CityData: {
        高雄市: [
          {
            zone: '三民區',
            store: ['太華門市', '大阪門市', '中都門市', '文藻門市']
          },
          {
            zone: '前金區',
            store: ['文東門市', '中央公園門市', '太華門市', '自強門市', '青盛門市']
          },
          {
            zone: '鳳山區',
            store: ['大洋門市', '中東門市', '天虹門市', '文建門市', '文衡門市', '光泰門市']
          },
          {
            zone: '鹽埕區',
            store: ['仁勇門市', '重義門市', '駁藝門市', '鹽埕門市', '鑫漢王門市', '客宭門市']
          },
          {
            zone: '小港區',
            store: ['市賢門市', '大坪頂門市', '孔鳳門市', '永益門市', '田金門市', '松旅門市']
          }
        ],
        台南市: [
          {
            zone: '北區',
            store: ['文五門市', '小北門市', '公平門市', '丹比門市', '西門門市', '育德門市']
          },
          {
            zone: '東區',
            store: ['文東門市', '一心門市', '仁文門市', '北門門市', '自由門市']
          },
          {
            zone: '安平區',
            store: ['文五門市', '安平門市', '安運門市', '怡平門市']
          }
        ],
        台中市: [
          {
            zone: '中區',
            store: ['市鑫門市', '成興門市', '第一廣場門市', '新繼光門市', '鼎站門市', '錦花門市']
          },
          {
            zone: '大里區',
            store: ['大明門市', '大金門市', '永隆門市', '玉豐門市', '東里門市']
          },
          {
            zone: '東區',
            store: ['世界門市', '光園門市', '東英門市', '富仁門市']
          }
        ]
      },
      zoneArr: [],
      storeArr: []
    }
  },
  methods: {
    updateProduct () {
      const token = localStorage.getItem('token')
      const today = new Date()
      const product = {
        Name: this.Productdata.product.Name,
        OriginPrice: this.Productdata.product.OriginPrice,
        Price: this.Productdata.product.Price,
        Deposit: this.Productdata.product.Deposit,
        Quantity: this.Productdata.product.Quantity,
        City: this.Productdata.product.City,
        Zone: this.Productdata.product.Zone,
        Store: this.Productdata.product.Store,
        Status: this.Productdata.product.Status,
        Category: this.Productdata.product.Category,
        Period: this.Productdata.product.Period,
        Description: this.Productdata.product.Description,
        PublishDate: this.Productdata.product.PublishDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()
      }
      const newproduct = JSON.stringify(product)
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
      const Id = this.$route.query.id
      const api = `http://switcher.rocket-coding.com/api/product/${Id}`
      this.$http
        .patch(api, newproduct, headers)
        .then(response => {
          if (response.data.result) {
            this.updateSuccess()
          }
        })
        .catch(err => {
          this.$message(err)
        })
    },
    toEditPhoto () {
      this.$router.push({
        name: 'AddProductphoto',
        params: {
          id: this.$route.query.id
        }
      })
    },
    updateSuccess () {
      this.$notify({
        title: '修改成功',
        type: 'success'
      })
    },
    getPerProduct (Id) {
      const api = `http://switcher.rocket-coding.com/api/product/${Id}`
      this.$http
        .get(api)
        .then(response => {
          this.Productdata = response.data
        })
        .catch(err => {
          this.$message(err)
        })
    },
    backStore () {
      this.$router.push('SellerStore')
    }
  },
  created () {
    const Id = this.$route.query.id
    this.getPerProduct(Id)
  }
}
</script>

<style lang="scss" scope>
.el-form-item__content{
  line-height: 50px;
}
</style>
