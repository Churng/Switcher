<template>
  <section id="switcherOrder-end" class="w-100">
    <div class="container-fluid">
      <div class="switcherOrder-box isCorrect" v-if="this.$root.orderResult=='已新增訂單'">
        <div class="endItem rounded">
            <i class="far mb-2"><font-awesome-icon icon="check-circle"/></i>
            <h6>預約成功</h6>
            <p>請等待賣家聯絡您~</p>
            <button type="button" class="btn btn-warning" @click.prevent="goToHome">回頁面</button>
        </div>
      </div>
      <div class="switcherOrder-box isError" v-else>
        <div class="endItem rounded">
            <i class="far mb-2"><font-awesome-icon icon="times-circle"/></i>
            <h6>預約失敗</h6>
            <p>預約天數不符賣家規定</p>
            <button type="button" class="btn btn-secondary" @click.prevent="$router.push('/cartList')">返回</button>
        </div>
      </div>
      <div class="switcherOrder-bg"></div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToHome () {
      this.$root.getCartLen = 0
      this.$router.push('/findGames/allGame')
    }
  }
}
</script>
