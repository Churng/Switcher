<template>
  <div class="Editproduct">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">首頁</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">編輯商品</li>
        </ol>
      </nav>

      <!-- <div class="row border-bottom">
        <div class="col-6 bg-light px-5 py-5 d-flex align-items-end">
          <img src="https://fakeimg.pl/250x250/" />
          <input type="file" accept="image/*" @change="previewImage" name="upload" class="ml-3" />
        </div>
        <div class="col-6 bg-light">
          <div class="d-flex flex-wrap justify-content-around upload-goods-photo">
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
            <img class="goods-photo" src="https://fakeimg.pl/145x145/" />
          </div>
        </div>
      </div> -->

      <!-- <form runat="server">
        <input type='file' id="imgInp" />
        <img id="blah" src="#" alt="your image" />
      </form> -->
    </div>

    <section @submit.prevent="updateProduct">
      <div class="container bg-light">
        <form class="w-75 m-auto pt-5">
          <div class="name mb-4">
            <label for>商品名稱</label>
            <input
              type="text"
              placeholder="請輸入商品名稱"
              class="ml-3 w-75"
              v-model.trim="Productdata.Name"
            />
          </div>
          <div class="place d-flex flex-row mb-4">
            <label for class>交易地點</label>
            <div class="ChooseCity ml-md-3">
              <label for="City" class="d-none"></label>
              <input
                type="text"
                v-model.trim="Productdata.City"
                id="City"
                placeholder="請填寫城市名稱ex:台南市"
              />
            </div>
            <div class="ChooseCity ml-md-3">
              <label for="Zone" class="d-none"></label>
              <input
                type="text"
                v-model.trim="Productdata.Zone"
                id="Zone"
                placeholder="請填寫區域名稱ex:永康區"
              />
            </div>
            <div class="ChooseCity ml-md-3">
              <label for="Store" class="d-none"></label>
              <input
                type="text"
                v-model.trim="Productdata.Store"
                id="Store"
                placeholder="請填寫門市名稱ex:佳鼎門市"
              />
            </div>
            <!-- <div class="col-md-3 mb-3 ml-3">
            <select class="custom-select d-block w-100" id="country" required>
              <option value>--請選擇地區--</option>
              <option>高雄市</option>
            </select>
            <div class="invalid-feedback">請選擇地區</div>
          </div>
          <div class="col-md-3 mb-3 w-50">
            <select class="custom-select d-block w-100" id="state" required>
              <option value>--請選擇區域/鄉鎮--</option>
              <option>三民區</option>
            </select>
            <div class="invalid-feedback">請選擇區域/鄉鎮</div>
          </div>
          <div class="col-md-3 mb-3">
            <select class="custom-select d-block w-100" id="state" required>
              <option value>--請選擇門市--</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">請選擇門市</div>
            </div>-->
          </div>
          <div class="time">
            <label for="change-time">交易時間</label>
            <input type="datetime-local" name id="change-time" class="mb-4 ml-3" />
          </div>
          <div class="price">
            <div class="row pl-3 mb-4">
              <div class="clol">
                <label class for>交易價格</label>
              </div>
              <div class="col-2 d-flex flex-column w-md-50">
                <div class>
                  <label for="original-price" class="O-price text-primary">原價</label>
                  <input type="text" v-model="Productdata.OriginPrice" class="original-price" />
                </div>
                <div class>
                  <label for="deposit" class="d-price">押金</label>
                  <input type="text" class="deposit" v-model="Productdata.Deposit" />
                </div>
              </div>
              <div class="col-8 w-50 ml-5">
                <label for="special-offer" class="text-primary">特價</label>
                <input type="text" class="special-offer" v-model="Productdata.Price" />＊當有特價請填此欄
              </div>
            </div>
          </div>
          <div class="Product-category d-flex flex-row mb-4">
            <div class>
              <label class="cat-lable" for>商品類別</label>
            </div>

            <select class="custom-select w-25 ml-md-3" v-model="Productdata.Category" required>
              <option selected>請選擇類別</option>
              <option :value="0">遊戲主機</option>
              <option :value="1">遊戲配件</option>
              <option :value="2">遊戲片</option>
            </select>
          </div>
          <div class="Quantity d-flex mb-4">
            <div class>
              <label class="cat-lable" for>商品數量</label>
            </div>
            <div class="ml-3">
              <select
                class="custom-select d-block w-100"
                id="country"
                v-model.number="Productdata.Quantity"
                required
              >
                <option value>--請選擇數量--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div class="invalid-feedback">請輸入正確數量！</div>
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
                  v-model.number="Productdata.Status"
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
                  v-model.number="Productdata.Status"
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
          <div class="Rental-days d-flex mb-4">
            <div class>
              <label class="cat-lable" for>租借天數</label>
            </div>
            <div class="ml-3">
              <div class>
                <label for="deposit" class="rental"></label>
                <input type="text" class="days" v-model.number="Productdata.Period" />／天
              </div>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
          </div>

          <div class="goods-intro ml-3">
            <div class="row">
              <div class>
                <label class="cat-lable" for>商品介紹</label>
              </div>
              <div class="form-group col">
                <!-- <label for="inputgoods-intro">輸入商品特色或描述商品外觀~</label> -->
                <textarea
                  class="form-control w-75"
                  v-model="Productdata.Description"
                  id="inputgoods-intro"
                  rows="3"
                  placeholder="請輸入商品資訊..."
                ></textarea>
              </div>
            </div>
          </div>
          <div class="PublicTime d-none" >{{PublishDate}}</div>
          <div class="row bg-light d-flex justify-content-center">
            <div class="mt-3 mb-3">
              <button type="button" class="btn btn-danger mr-4" @click="Editcancel">取消</button>
              <button type="submit" class="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop">確定更改</button>
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
  },
  methods: {
    updateProduct () {
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
        PublishDate: this.commodity.PublishDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      }
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      this.$http
        .post(api, newproduct, headers)
        .then(response => {
          // console.log(response)
          if (response.data.result) {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
          }
        })
    },
    getPerProduct (Id) {
      const api = `http://switcher.rocket-coding.com/api/product/${Id}`
      this.$http
        .get(api)
        .then(response => {
          this.Productdata = response.data.product
          console.log(this.Productdata)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    Editcancel () {
      this.$route.go(-1)
    }
  },
  created () {
    const Id = this.$route.query.id
    this.getPerProduct(Id)
  }
}
</script>
