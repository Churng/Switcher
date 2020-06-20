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
              v-model.trim="commodity.Name"
            />
          </div>
          <div class="Product-category mb-3">
            <div class="Category-product">
              <label class="cat-lable" for>商品類別</label>
            </div>
            <select class="custom-select" v-model="commodity.Category" required>
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
                v-model.number="commodity.Quantity"
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
              <select class="custom-select d-block w-100 mb-2" id="country" v-model="commodity.City" required>
                <option value="City">--請選擇地區--</option>
                <option>高雄市</option>
              </select>
                <div class="invalid-feedback">請選擇地區</div>
              <select class="custom-select d-block w-100 mb-2" id="state" v-model="commodity.Zone" required>
                <option value="Zone">--請選擇區域/鄉鎮--</option>
                <option>前金區</option>
              </select>
                <div class="invalid-feedback">請選擇區域/鄉鎮</div>
              <select class="custom-select d-block w-100" id="state" v-model="commodity.Store" required>
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
                    <input type="text" v-model="commodity.OriginPrice" class="form-control" id="original-price" placeholder="請輸入金額"/>
                </div>
                <div class="">
                    <label for="deposit" class="d-price">押金</label>
                    <input type="text" class="form-control" id="deposit" v-model="commodity.Deposit" placeholder="請輸入金額" />
                </div>
              </div>
              <div class="">
                <label for="special-offer" class="text-primary">特價</label>
                <input type="text" class="form-control" id="special-offer" v-model="commodity.Price" placeholder="請輸入金額" />＊當有特價請填此欄
              </div>
          </div>
          <div class="Rental-days mb-3">
            <div class>
              <label class="cat-lable" for>租借天數</label>
            </div>
              <div class="">
                <input type="text" class="form-control days" maxlength="30" v-model.number="commodity.Period" placeholder="請輸入租借天數" />
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
                  v-model.number="commodity.Status"
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
                  v-model.number="commodity.Status"
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
                  v-model="commodity.Description"
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
              <button type="button" class="btn btn-danger mr-4" @click="$router.go(-1)">取消</button>
              <button type="button" class="btn btn-warning ml-3"  @click="addProduct">儲存</button>
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
      commodity: {
        Name: '',
        OriginPrice: '',
        Price: '',
        Deposit: '',
        Quantity: '',
        City: '',
        Zone: '',
        Store: '',
        Status: 0,
        Category: '',
        Period: null,
        Description: '',
        PublishDate: new Date()
      }
    }
  },
  methods: {
    addProduct () {
      const api = 'http://switcher.rocket-coding.com/api/product/add'
      const token = localStorage.getItem('token')
      const today = new Date()
      const newproduct = {
        Name: this.commodity.Name,
        OriginPrice: this.commodity.OriginPrice,
        Price: this.commodity.Price,
        Deposit: this.commodity.Deposit,
        Quantity: this.commodity.Quantity,
        City: this.commodity.City,
        Zone: this.commodity.Zone,
        Store: this.commodity.Store,
        Status: this.commodity.Status,
        Category: this.commodity.Category,
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
    },
    addSuccess () {
      this.$notify({
        title: '商品新增成功',
        type: 'success'
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
