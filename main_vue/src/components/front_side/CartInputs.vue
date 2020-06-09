<template>
  <div class="row flex-column justify-content-center align-items-center">
      <div class="col-md-8">
        <keep-alive>
          <ul class="w-100 list-unstyled pb-3">
              <li class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">中文姓名 *</span>
                    </div>
                  <input type="text" class="form-control" name="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                  v-model="name"
                  v-validate = "'required'"
                  >
                  <p class="text-primary" v-if="errors.has('name')">姓名必須輸入</p>
              </li>
              <li class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">行動電話 *</span>
                    </div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="phone">
              </li>
              <li class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-default">E-mail *</span>
                    </div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="mail">
              </li>
          </ul>
        </keep-alive>
      </div>
      <div class="content-btn d-block justify-content-center text-center pb-5">
          <button type="button" class="btn btn-warning mr-2" @click="$router.push('/findGames/allGame')">取消</button>
          <button type="button" class="btn btn-warning ml-2" @click="goToContract">下一步</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      mail: ''
    }
  },
  methods: {
    goToContract () {
      if ((this.name === '') || (this.phone === '') || (this.mail === '')) {
        console.log(11)
      } else {
        return this.$router.push('/cartList/cartContract')
      }
    }
  }
}
</script>
