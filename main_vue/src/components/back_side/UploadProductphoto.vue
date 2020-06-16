<template>
  <div class="container">
        <div class="NewProductImg px-4 py-4 " >
            <p>上傳圖片</p>
            <div class="product-photo-upload">
              <img class="img-fluid" alt="商品圖片" :src="userImg" width="200" />
            </div>
            <div class="file-loading mt-5 mx-100">
              <input ref="ProductImage"  id="upload-prophoto" name="Upload-prophoto" type="file" accept="image/*" @change="uploadPhoto"  required />
            </div>
            <div class="Button mx-auto d-flex justify-content-center ">
              <button type="button" class="btn btn-primary " @click="$router.go(-1)">上一頁</button>
              <button type="button" class="btn btn-warning ml-3" @click="BackStore">確定</button>
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
          console.log(response)
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
