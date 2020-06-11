<template>
<div class="EditpersonInfo">
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
        <form>
          <div class="head_img">
            <img  class="rounded-circle personal-photo" :src="userData.Photo" />
          </div>
          <div class="setting_right" @click.stop="uploadHeadImg">
            <div class="caption">更改頭像</div>
          </div>
          <div class="file-loading mt-5 mx-100">
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
          </div>
        </form>
      </div>

      <div class="col-md-8 bg-light mt-5 px-4 py-5 col-sm-12 mem-info-sm">
        <div class="form-group form-inline">
          <label for="info-name" class="col-sm-2 col-form-label">姓名</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="userData[0].Name"
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
              v-model="userData[0].Email"
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
              v-model="userData[0].Phone"
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
              class="form-control w-100"
              id="info-identity"
              placeholder="請輸入身分證字號..."
              v-model="userData[0].Identity"
            />
          </div>
          <button type="button" class="btn btn-outline-social active w-md-25 change-ver-sm">驗證身份</button>
        </div>

        <div class="form-group form-inline">
          <label for="inputPassword" class="col-md-2 col-sm-2 col-form-label">密碼</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              class="form-control w-100"
              id="info-password"
              placeholder="更改密碼..."
              v-model="userData[0].Password"
            />
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
              v-model="userData[0].Address"
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
          <textarea
            class="form-control"
            id="inputgoods-intro"
            rows="3"
            placeholder="請輸入商品資訊..."
            v-model="userData[0].StoreDescription"
          ></textarea>
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
          <button type="button" class="btn btn-warning" @click="updateinfo">儲存變更</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: [
        {
          Id: "",
          Name: "",
          Password: "",
          Phone: "",
          Email: "",
          Identity: "",
          Address: "",
          StoreDescription: "",
          Reply: "",
          imageUrl: "",
          Photo:""
        }
      ]
    };
  },
  methods: {
    getMember() {
      const api = "http://switcher.rocket-coding.com/api/member";
      const token = localStorage.getItem("token");
      this.$http
        .get(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.userData = response.data;
          console.log(this.userData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateinfo() {
      const api = "http://switcher.rocket-coding.com/api/member/update";
      const token = localStorage.getItem("token");
      const updateInfo = {
          Id: this.userData[0].Id,
          Name: this.userData[0].Name,
          Password: this.userData[0].Password,
          Phone: this.userData[0].Phone,
          Email: this.userData[0].Email,
          Identity: this.userData[0].Identity,
          Address: this.userData[0].Address,
          StoreDescription: this.userData[0].StoreDescription,
          Reply: '早上'
        }
      this.$http
        .put(api, updateInfo, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    uploadHeadImg(){
      console.log(this)
      const formData = new FormData();
      formData.append("memberphoto", uploadHeadImg);
      const api = `http://switcher.rocket-coding.com/api/member/upload/user`;
      this.$http
        .post(api, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
           console.log(this)
          if (response.data.result) {
            vm.$set(vm.userData, "Photo", response.data.imageUrl);
          }
        });
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    // uploadFile() {
    //   const uploadedFile = this.$refs.files.files[0];
    //   const vm = this;
    //   const formData = new FormData();
    //   formData.append("memberphoto", uploadedFile);
    //   const api = `http://switcher.rocket-coding.com/api/member/upload/user`;
    //   this.$http
    //     .post(api, formData, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "multipart/form-data"
    //       }
    //     })
    //     .then(response => {
    //       if (response.data.result) {
    //         vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
    //       }
    //     });
    // }
  },
  created() {
    this.getMember();
  }
};
</script>
<style>
  /* .item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:94px;
  width: 300px;
  padding:0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  height: 90px;
}
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #8F8F8F;
  font-size: 26px;
  height: 37px;
} */
</style>
