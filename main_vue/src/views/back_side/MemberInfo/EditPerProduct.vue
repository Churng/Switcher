<template>
  <div class="Editproduct">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Home">首頁</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">編輯商品</li>
        </ol>
      </nav>
    </div>
    <section >
      <div class="container bg-light">
        <form class="w-75 m-auto pt-5">
          <div class="name mb-3">
            <label>商品名稱</label>
            <input
              type="text"
              aria-label="商品名稱"
              aria-describedby="商品名稱"
              placeholder="請輸入商品名稱"
              class="form-control"
              v-model.trim="Productdata.product.Name"
            />
          </div>
          <div class="Product-category mb-3">
            <div class="Category-product">
              <label class="cat-lable" for>商品類別</label>
            </div>
            <select class="custom-select" v-model="Productdata.product.Category" required>
              <option selected>請選擇類別</option>
              <option :value="0">遊戲主機</option>
              <option :value="1">遊戲配件</option>
              <option :value="2">遊戲片</option>
            </select>
          </div>
          <div class="Quantity mb-3">
            <div>
              <label class="cat-lable" for>商品數量</label>
            </div>
              <select
                class="custom-select"
                v-model.number="Productdata.product.Quantity"
                required
              >
                <option selected>--請選擇數量--</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
                <option :value="5">5</option>
              </select>
              <div class="invalid-feedback">請輸入正確數量！</div>
          </div>
          <div class="Place mb-3">
            <label>交易地點</label>
              <select class="custom-select d-block w-100 mb-2" id="country" v-model="Productdata.product.City" required>
                <option value="City">--請選擇地區--</option>
                <option>高雄市</option>
              </select>
                <div class="invalid-feedback">請選擇地區</div>
              <select class="custom-select d-block w-100 mb-2" id="state" v-model="Productdata.product.Zone" required>
                <option value="Zone">--請選擇區域/鄉鎮--</option>
                <option>前金區</option>
                <option>左營區</option>
                <option>苓雅區</option>
                <option>前鎮區</option>
                <option>小港區</option>
                <option>楠梓區</option>
              </select>
                <div class="invalid-feedback">請選擇區域/鄉鎮</div>
              <select class="custom-select d-block w-100" id="state" v-model="Productdata.product.Store" required>
                <option value="Store">--請選擇門市--</option>
                <option>太華門市</option>
                <option>文東門市</option>
                <option>市賢門市</option>
                <option>自強門市</option>
                <option>長生門市</option>
                <option>長青門市</option>
                <option>青盛門市</option>
                <option>前金門市</option>
                <option>愛河門市</option>
                <option>新生門市</option>
                <option>新盛門市</option>
                <option>新華都門市</option>
                <option>龍客門市</option>
              </select>
              <div class="invalid-feedback">請選擇門市</div>
          </div>
          <div class="price mb-3">
                <label class for>交易價格</label>
              <div class="">
                <div class="">
                    <label for="original-price" class="O-price text-primary">原價</label>
                    <input type="text" v-model="Productdata.product.OriginPrice" class="form-control" id="original-price" placeholder="請輸入金額"/>
                </div>
                <div class="">
                    <label for="deposit" class="d-price">押金</label>
                    <input type="text" class="form-control" id="deposit" v-model="Productdata.product.Deposit" placeholder="請輸入金額" />
                </div>
              </div>
              <div class="">
                <label for="special-offer" class="text-primary">特價</label>
                <input type="text" class="form-control" id="special-offer" v-model="Productdata.product.Price" placeholder="請輸入金額" />＊當有特價請填此欄
              </div>
          </div>
          <div class="Rental-days mb-3">
            <div class>
              <label class="cat-lable" for>租借天數</label>
            </div>
              <div class="">
                <input type="text" class="form-control days" maxlength="30" v-model.number="Productdata.product.Period" placeholder="請輸入租借天數" />
                <div class="invalid-feedback">Please select a valid country.</div>
              </div>
          </div>

       <div class="goods-status d-flex mb-4">
            <div class>
              <label class="cat-lable" for>商品狀態</label>
            </div>
            <div class="form-check ml-3">
              <div class="mb-3">
                <input
                  class="form-check-input"
                  v-model.number="Productdata.product.Status"
                  type="radio"
                  name="exampleRadios"
                  id="normal"
                  :value="0"
                  checked
                />
                <label class="form-check-label" for="normal">可出租</label>
              </div>
              <div class>
                <input
                  class="form-check-input"
                  v-model.number="Productdata.product.Status"
                  type="radio"
                  name="exampleRadios"
                  id="Notforrent"
                  :value="1"
                  checked
                />
                <label class="form-check-label" for="Notforrent">已出租/請擇一選取</label>
              </div>
            </div>
          </div>
          <div class="goods-intro">
              <div class>
                <label class="cat-lable" for>商品介紹</label>
              </div>
                <textarea
                  class="form-control col"
                  v-model="Productdata.product.Description"
                  id="inputgoods-intro"
                  rows="3"
                  placeholder="請輸入商品資訊..."
                ></textarea>
          </div>
          <div class="PublicTime d-none">
            ${PublishDate}
          </div>
          <div class="row bg-light d-flex justify-content-center">
            <div class="mt-3 mb-3">
              <button type="button" class="btn btn-danger mr-4" @click="$router.go(-1)">返回賣場</button>
              <button type="submit" class="btn btn-warning mr-4" data-toggle="modal" data-target="#staticBackdrop" @click="updateProduct">儲存</button>
              <button type="submit" class="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop" @click="toEditPhoto">新增照片</button>
            </div>
          </div>
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
          OriginPrice: null,
          Price: null,
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

      }
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
        name: 'UploadProductphoto',
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
    }
  },
  created () {
    const Id = this.$route.query.id
    this.getPerProduct(Id)
  }
}
</script>
