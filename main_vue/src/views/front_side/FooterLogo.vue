<template>
    <div class="row footer-logo justify-content-between align-items-center text-white bg-danger">
        <div class="col-4 col-md-4 col-lg-3 pt-3 pb-3">
            <div class="logoImg w-50">
                <router-link to="/home" class="d-block"><img src="/img/Swicher_Logo.png" alt="logo"></router-link>
            </div>
        </div>
        <div class="col-3 col-md-3 h-upKey d-flex justify-content-around text-center">
            <p class="text-white mb-0" @click="backTop"><font-awesome-icon icon="angle-up"/></p>
        </div>
    </div>
</template>

<script>
export default {
  // window对象，所有瀏覽器都支持window對象。它表示瀏覽器窗口，監聽滚動事件
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 點擊圖片回到頂部方法，加計時器是為了過度順滑
    backTop () {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 為了計算距離頂部的高度，當高度大於60顯示回頂部圖標，小於60則隐藏
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>
