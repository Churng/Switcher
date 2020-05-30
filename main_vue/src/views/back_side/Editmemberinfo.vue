<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/home">首頁</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">會員資料</li>
      </ol>
    </nav>

    <div class="row border-bottom row-info">
      <div class="mem-upload-photo-sm">
        <img class="rounded-circle personal-photo" src="https://fakeimg.pl/200/" />
        <div class="file-loading mt-5 mx-100">
          <input id="upload-memphoto" name="Upload-memphoto" type="file" required />
        </div>
      </div>

      <div class="col-md-8 bg-light mt-5 px-4 py-5 col-sm-12 mem-info-sm">
        <div class="form-group form-inline">
          <label for="info-name" class="col-sm-2 col-form-label">姓名</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="Name"
              class="form-control w-100"
              id="info-name"
              placeholder="請輸入名字..."
            />
          </div>
        </div>

        <div class="form-group form-inline">
          <label for="inputPassword" class="col-md-2 col-sm-2 col-form-label">信箱</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="Email"
              class="form-control w-100"
              id="info-email"
              placeholder="請輸入信箱..."
            />
          </div>
          <button type="button" class="btn btn-outline-social w-md-25 ver-sm">未驗證</button>
          <!-- <button type="button" class="btn btn-outline-social  active  col-md-3 w-md-50 ">已驗證</button> -->
        </div>

        <div class="form-group form-inline">
          <label for="info-phone" class="col-sm-2 col-form-label">手機號碼</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="Phone"
              class="form-control w-100"
              id="info-phone"
              placeholder="請輸入手機號碼..."
            />
          </div>
        </div>

        <div class="form-group form-inline">
          <label for="inputPassword" class="col-md-2 col-sm-2 col-form-label">身分證號碼</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="Identity"
              class="form-control w-100"
              id="info-identity"
              placeholder="請輸入身分證字號..."
            />
          </div>
          <button type="button" class="btn btn-outline-social active w-md-25 change-ver-sm">驗證身份</button>
        </div>

        <div class="form-group form-inline">
          <label for="inputPassword" class="col-md-2 col-sm-2 col-form-label">密碼</label>
          <div class="col-md-7 col-sm-10">
            <input type="text" class="form-control w-100" id="info-password" placeholder="更改密碼..." />
          </div>
          <button type="button" class="btn btn-outline-social active w-md-25 change-ver-sm">更改密碼</button>
        </div>

        <div class="form-group form-inline">
          <label for="info-phone" class="col-sm-2 col-form-label">地址</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              class="form-control w-100"
              id="info-address"
              placeholder="請輸入地址..."
            />
          </div>
        </div>
      </div>

      <div class="col-4 bg-light mt-5 pt-5 mem-upload-photo">
        <img class="rounded-circle personal-photo" src="https://fakeimg.pl/200/" />
        <div class="file-loading mt-5 mx-100">
          <input id="upload-memphoto" name="Upload-memphoto" type="file" required />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 bg-light pt-5 pl-5">
          <p>賣場圖片</p>
          <img class="shop-photo" src="https://fakeimg.pl/250x200/" />
        </div>
        <div class="col-md-8 bg-light px-5 pt-5 pb-5 pl-4">
          <p>關於賣場</p>
          <textarea class="form-control" id="inputgoods-intro" rows="3" placeholder="請輸入商品資訊..."></textarea>
          <div class="d-flex align-items-baseline mt-3">
            <p>主要回應時間:</p>
            <button type="button" class="btn btn-light">早上</button>
            <button type="button" class="btn btn-light active">下午</button>
            <button type="button" class="btn btn-light">晚上</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row bg-light d-flex justify-content-center">
        <div class="mt-5 mb-3">
          <button type="button" class="btn btn-danger">取消</button>
          <button type="button" class="btn btn-primary">儲存變更</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      Name: '',
      Email: '',
      Phone: '',
      Identity: '',
      Address: '',
      data: 'info'
    }
  },
   methods:{
     getuserinfo(){
     const api = 'http://switcher.rocket-coding.com/api/member'
     const token = localStorage.getItem('token')
     this.axios
      .get(api,{
         headers: {
            Authorization: `Bearer ${token}`}
      })
      .then(response => {this.data = response;
      console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

     }

  },
  created(){
    this.getuserinfo()
  }
}
</script>
