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
<div class="MemberContent" v-if="userData">
    <div class="row border-bottom row-info">
      <!-- <div class="mem-upload-photo-sm">
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
      </div> -->
      <!-- 手機版本上傳個人照 -->
      <div class="col-md-8 bg-light mt-5 px-4 py-5 col-sm-12 mem-info-sm">
        <div class="form-group form-inline">
          <h2>基本資料</h2>
        </div>
        <div class="form-group form-inline">
          <label for="info-name" class="col-sm-2 col-form-label">姓名</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="userData.member.Name"
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
              v-model="userData.member.Email"
              class="form-control w-100"
              id="info-email"
              placeholder="請輸入信箱..."
            />
          </div>
        </div>

        <div class="form-group form-inline">
          <label for="info-phone" class="col-sm-2 col-form-label">手機號碼</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              v-model="userData.member.Phone"
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
              v-model="userData.member.Identity"
            />
          </div>
        </div>

        <div class="form-group form-inline">
          <label for="inputPassword" class="col-md-2 col-sm-2 col-form-label">密碼</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              class="form-control w-100"
              id="info-password"
              placeholder="更改密碼..."
              v-model="userData.member.Password"
            />
          </div>
        </div>

        <div class="form-group form-inline">
          <label for="info-phone" class="col-sm-2 col-form-label">地址</label>
          <div class="col-md-7 col-sm-10">
            <input
              type="text"
              class="form-control w-100"
              id="info-address"
              placeholder="請輸入地址..."
              v-model="userData.member.Address"
            />
          </div>
        </div>
      </div>

      <div class="col-4 bg-light mt-5 pt-5 mem-upload-photo" >
        <!-- <div class="member-photo-upload">
        <img class="rounded-circle personal-photo" :src="userData.member.Photo" />
        </div> -->
        <el-image class="rounded-circle personal-photo" :src="userData.member.Photo">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="file-loading mt-5 mx-100">
          <input ref="uploadfile"  id="upload-memphoto" name="Upload-memphoto" type="file" accept="image/*" @change="userImage" required />
        </div>
      </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 bg-light px-4">
          <h2>賣場資料</h2>
          <p class="ml-4">賣場圖片</p>
          <!-- <div class="Shop-Photo">
            <img class="shop-photo ml-4" :src="userData.member.StoreImage"  width="200"  onerror="nofind()"  />
          </div> -->
          <el-image class="shop-photo ml-4" :src="userData.member.StoreImage"  width="200"  onerror="nofind()">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="file-loading mt-5 mx-100 ml-4">
          <input ref="storeImg" id="upload-memphoto"  name="Upload-memphoto" type="file" accept="image/*" @change="storeImage"  required />
        </div>
        </div>
        <div class="col-md-8 bg-light px-5 pt-5 pb-5 pl-4">
          <p>關於賣場</p>
          <textarea
            class="form-control"
            id="inputgoods-intro"
            rows="3"
            placeholder="請輸入商品資訊..."
            v-model="userData.member.StoreDescription"
          ></textarea>
          <div class="d-flex align-items-baseline mt-3">
            <p>主要回應時間:</p>
            <div class="ml-3">
              <el-checkbox-group v-model="GetReply" text-color="fff" fill="#FF7D01">
                <el-checkbox-button v-for="choosetime in time" :label="choosetime" :key="choosetime">{{choosetime}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    <div class="container">
      <div class="row bg-light d-flex justify-content-center">
        <div class="mt-5 mb-5">
          <button type="button" class="btn btn-danger" @click="$router.go(-1)">取消</button>
          <button type="button" class="btn btn-warning ml-3" @click="updateinfo">儲存變更</button>
        </div>
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

const TimeOption = ['早上', '中午', '晚上'];
export default {
  data() {
    return {
      userData: {
        member:{
          Id: '',
          Name: '',
          Password: '',
          Phone: '',
          Email: '',
          Identity: '',
          Address: '',
          Photo: '',
          StoreImage: '',
          StoreDescription: '',
          Reply: ''
        }
      },
      preview: '',
      image: null,
      GetReply: [],
      time: TimeOption
    };
  },
  methods: {
    getMember() {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("menberId")
      console.log(id)
      const api = `http://switcher.rocket-coding.com/api/member/${id}`
      this.$http
        .get(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.userData = response.data
          console.log(this.userData)

        })
        .catch(function(error) {
          console.log(error)
        });
    },
    updateinfo() {
      console.log(this.GetReply)
      const api = "http://switcher.rocket-coding.com/api/member"
      const token = localStorage.getItem("token");
      let reply = ''
      this.GetReply.forEach(item => {
        reply += `${item} `
      });
      const Info = {
          Id: this.userData.member.Id,
          Name: this.userData.member.Name,
          Password: this.userData.member.Password,
          Phone: this.userData.member.Phone,
          Email: this.userData.member.Email,
          Identity: this.userData.member.Identity,
          Address: this.userData.member.Address,
          Photo: this.userData.member.Photo,
          StoreImage: this.userData.member.StoreImage,
          StoreDescription: this.userData.member.StoreDescription,
          Reply: reply
        }
      console.log(reply)
      const updateInfo = JSON.stringify(Info)
      this.$http
        .patch(api, updateInfo, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.updateSuccess()
          this.$router.push({
          path: '/sellerstore'
          })
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateSuccess() {
      this.$notify({
        title: '修改成功',
        type: 'success'
      })
    },
    userImage() {
      const vm = this
      const userImg = this.$refs.uploadfile.files[0]
      const formData = new FormData()
      formData.append('uploadImg',userImg)
      const token = localStorage.getItem("token");
      const api = 'http://switcher.rocket-coding.com/api/member/upload/user'
      console.log(userImg)
      this.$http
      .post(api,formData,{
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response)
        this.reload()
        this.photoSuccess()
        // vm.$set(vm.userData, 'imgUrl' , response.data.member.Photo)
      })
      .catch(function (error) {
        this.photoError()
      });
    },
    photoSuccess() {
        this.$notify({
        title: '上傳個人圖片成功',
        type: 'success'
      })
    },
    photoError() {
       this.$notify.error({
          title: '無法上傳照片！',
          message: '無法上傳照片！'
        })
    },
    storeImage() {
      const storeImg = this.$refs.storeImg.files[0]
      const formData = new FormData()
      formData.append('uploadImg',storeImg)
      const token = localStorage.getItem("token");
      const api = 'http://switcher.rocket-coding.com/api/member/upload/store'
      this.$http
      .post(api,formData,{
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        this.reload()
        this.storeSuccess()
      })
    },
    storeSuccess() {
       this.$notify({
        title: '上傳商店圖片成功',
        type: 'success'
      })
    },
    storeError() {
       this.$notify.error({
          title: '無法上傳照片！',
          message: '無法上傳照片！'
        })
    },
    nofind() {
      let img=event.srcElement;
      img.src="/Users/yuhsuanlee/Switcher/main_vue/public/img/game/game01.jpg"; //替換的圖片
      img.onerror=null;
    }
  },
  created() {
    this.getMember();
  },
  inject: ['reload']
};
</script>

<style lang="scss" scode>
.member-photo-upload{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.el-checkbox-button.is-focus .el-checkbox-button__inner{
  border-color:#FF7D01;
}
.el-checkbox-button__inner:hover{
  color:#FF7D01;
}
.el-image {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 200px;
    height: 200px;
}
</style>
