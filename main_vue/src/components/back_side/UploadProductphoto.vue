<template>
  <div class="container">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/Home">首頁</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">編輯商品</li>
              <li class="breadcrumb-item active" aria-current="page">編輯圖片</li>
            </ol>
          </nav>
        </div>
        <div class="NewProductImg bg-light px-4 py-4" >
            <h3 class="text-center mt-5 mb-5">上傳商品圖片<span class="limitNum">(最多1張)</span></h3>
            <el-form class="form-wrapper padding" ref="showImage" :model="showImage" :rules="addRules">
            <el-form-item prop="photo">
            <el-upload
              action="upload"
              list-type="picture-card"
              :multiple="multiple"
              :limit="1"
              accept="image/jpeg, image/png"
              :before-upload="beforeAvatarUpload"
              ref="upload"
              :auto-upload="false"
              :on-exceed="handleExceed"
              :on-success="uploadSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
             >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl">
            </el-dialog>
            </el-form-item >
            </el-form>
            <div class="Button mx-auto d-flex justify-content-center pt-5">
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
      showImage: {
        imageUrl: '',
        id: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      addRules: { // 表单验证规则
        photo: [{ required: true, message: '請上傳商品照', trigger: 'blur' }]
      },
      multiple: true,
      formData: '',
      file: ''
    }
  },
  methods: {
    uploadSuccess (file) {
      this.formData.append('file', file)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt3M = file.size / 3072 / 3072 < 2
      if (!isJPG) {
        this.$message.error('上傳頭像圖片只能是 JPG / PNG 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上傳頭像圖片大小不能超过 3MB!')
      }
      // 校验成功上传文件
      if (isJPG && isLt3M === true) {
        this.file = file
      }
      return isJPG && isLt3M
    },
    uploadFile () {
      const id = this.$route.params.id
      const token = localStorage.getItem('token')
      this.$refs.upload.submit(id)
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
    },
    handleRemove (file) {
      this.$notify({
        title: `已移除 ${file.name}`,
        type: 'success'
      })
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleExceed (files, fileList) {
      this.$message.warning(`目前共有 ${files.length} 張圖片，共選擇了 ${files.length + fileList.length} 張圖片`)
    },
    initInfo () {
      this.editForm = {
        id: 1,
        photo: ''
      }
    }
  },
  inject: ['reload'],
  props: ['ProductImages']
}
</script>
<style lang="scss" scoped>
.NewProductImg{
  min-height: calc(100vh - 15rem);
}
.limitNum{
  font-size: 16px;
}
</style>
