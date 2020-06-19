<template>
    <div class="container bg-light">
        <div class="NewProductImg px-5 py-5" >
            <p>上傳圖片</p>
            <!-- <div class="product-photo-upload" v-for="item in Editproductphoto" :key="item">
              <img class="img" alt="商品圖片" :src="item" width="200" />
            </div> -->
            <div class="file-loading mt-5 mx-100">
              <input ref="ProductImage"  id="upload-prophoto" name="Upload-prophoto" type="file" accept="image/*" @change="uploadPhoto"  required />
            </div>
            <!-- <hr> -->
            <div class="Button mx-auto d-flex justify-content-center pt-3">
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
      showImage: {
        imageUrl: ''
      }
    }
  },
  methods: {
    uploadPhoto () {
      const id = this.$route.params.id
      const photo = this.$refs.ProductImage.files[0]
      const form = new FormData()
      form.append('ProductImage', photo)
      const token = localStorage.getItem('token')
      const api = `http://switcher.rocket-coding.com/api/product/upload/${id}`
      this.$http
        .post(api, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.photoSuccess()
          this.reload()
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
  },
  inject: ['reload'],
  // eslint-disable-next-line vue/no-dupe-keys
  props: ['ProductImages']
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
