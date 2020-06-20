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
        <div class="NewProductImg bg-light px-4 py-4 " >
            <p>上傳圖片</p>
            <div class="product-photo-upload">
              <img class="img" alt="商品圖片" :src="userImg" width="200" />
            </div>
            <div class="file-loading mt-5 mx-100">
              <input ref="ProductImage"  id="upload-prophoto" name="Upload-prophoto" type="file" accept="image/*" multiple="multiple"   @change="uploadPhoto" required />
            </div>
            <div class="Button mx-auto d-flex justify-content-center ">
              <button type="button" class="btn btn-primary " @click="$router.go(-1)">上一頁</button>
              <button type="button" class="btn btn-warning ml-3" @click="BackStore">回到商店</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ProductImage: []
    }
  },
  methods: {
    uploadPhoto () {
      const id = this.$route.params.id
      const ProductImage = this.$refs.ProductImage.files[0]
      const ProductData = new FormData()
      ProductData.append('uploadProductImg', ProductImage)
      const token = localStorage.getItem('token')
      const api = `http://switcher.rocket-coding.com/api/product/upload/${id}`
      this.$http
        .post(api, ProductData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.photoSuccess()
        })
        .catch(err => {
          this.$message(err)
        })
    },
    photoSuccess () {
      this.$notify({
        title: '上傳圖片成功',
        type: 'success'
      })
    },
    BackStore () {
      this.$router.push({
        path: '/sellerstore'
      })
    }
  }
}
</script>
<style scoped>
.NewProductImg{
    height: 100vh;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

</style>
