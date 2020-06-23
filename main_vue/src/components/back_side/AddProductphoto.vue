<template>
    <div class="container bg-light">
        <div class="NewProductImg px-5 py-5" >
            <h3 class="text-center mt-5 mb-5">上傳商品圖片</h3>
            <el-upload
              class="avatar-uploader"
              action = "upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              ref="upload"
              :on-change="imgSaveToUrl"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="Button mx-auto d-flex justify-content-center mt-5 pt-3">
              <button type="button" class="btn btn-warning" @click.prevent="$router.go(-1)">上一頁</button>
              <button type="button" class="btn btn-primary ml-3"  @click.prevent="uploadFile()">確定</button>
              <button type="button" class="btn btn-warning ml-3"  @click.prevent="$router.push('/sellerstore')">返回賣場</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imageUrl: '',
      file: ''
    }
  },
  inject: ['reload'],
  props: ['ProductImages'],
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 3072 / 3072 < 2
      if (!isJPG) {
        this.$message.error('上傳圖片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上傳頭像圖片大小不能超过 2MB!')
      }
      // 校验成功上传文件
      if (isJPG && isLt2M === true) {
        console.log(file)
        this.file = file
      }
      return isJPG && isLt2M
    },
    // 选取图片后自动回调，里面可以获取到文件
    imgSaveToUrl (file) {
      /* 本地预览方法 */
      const URL = window.URL || window.webkitURL
      this.imageUrl = URL.createObjectURL(file.raw)
      // 转换后的地址为 blob:http://xxx/7bf54338-74bb-47b9-9a7f-7a7093c716b5
    },
    uploadFile () {
      const id = this.$route.params.id
      const token = localStorage.getItem('token')
      const form = new FormData()
      form.append('upload', this.file)
      const api = `http://switcher.rocket-coding.com/api/product/upload/${id}`
      this.$http.post(api, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.photoSuccess(res.data.message)
      }).catch(err => {
        this.$message(err)
      })
    },
    photoSuccess (msg) {
      this.$notify({
        title: msg,
        type: 'success'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.NewProductImg{
    height: 100vh
}
.avatar-uploader{
  display: flex;
  justify-content: center;
}
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon:hover  {
  border: 5px dotted red;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  line-height: 250px;
  text-align: center;
  border: 5px dotted black;
}
.avatar-uploader{
  display: flex;
  justify-content: center;
}
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  line-height: 250px;
  text-align: center;
}
.avatar {
  width: 250px;
  height: 250px;
  display: block;
}
</style>
