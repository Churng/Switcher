<template>
<div class="container errorpage">
    <div class="errormes mt-5">
      <h1>404</h1>
      <h4>This Page is NotFound!</h4>
      <button type="button" class="btn btn-primary btn-lg" @click="goBackHome">回首頁</button>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    goBackHome: function () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .errorpage{
    margin: 0 auto;
    height: 100vh;
    .errormes{
      text-align: center;
      margin: 0 auto;

    }
  }

</style>
