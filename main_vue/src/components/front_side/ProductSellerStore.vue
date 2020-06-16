<template>
    <div class="switcherProduct-seller d-flex align-items-center pt-3 pb-3 mb-4">
        <div class="col-md-5 col-lg-5 d-flex align-items-center">
            <div class="sellerImg mr-3">
                <img :src="menberData.Photo" alt="user">
            </div>
            <div class="sellerTxt">
                <h6 class="mb-2">{{menberData.Name}}</h6>
                <div class="sellerBtns d-flex">
                    <button type="button" class="btn btn-outline-secondary w-50 mr-1" @click="$router.push({name: 'Seller', params: { id: menberData.Id }})">進入賣場</button>
                    <button type="button" class="btn btn-outline-secondary w-50 ml-1" @click.prevent="openChatroom(menberData.Id)">我要聊聊</button>
                </div>
            </div>
        </div>
        <div class="col-md-7 col-lg-7">
            <div class="switcherStore-sellerInfo">
                <div class="sellerInfo-header d-flex justify-content-around">
                    <div class="sellerInfo-comment">
                        <font-awesome-icon icon="star" class="mr-2"/>
                        <span>評價</span>
                        <span class="orange-txt ml-2">700 則</span>
                    </div>
                    <div class="sellerInfo-joinTime">
                        <font-awesome-icon icon="user-plus" class="mr-2"/>
                        <span>加入時間</span>
                        <span class="orange-txt ml-2">3個月 前</span>
                    </div>
                </div>
                <div class="sellerInfo-footer d-flex justify-content-around">
                    <div class="sellerInfo-products">
                        <font-awesome-icon icon="shopping-bag" class="mr-2"/>
                        <span>商品</span>
                        <span class="orange-txt ml-2">52</span>
                    </div>
                    <div class="sellerInfo-chat">
                        <font-awesome-icon icon="comment-dots" class="mr-2"/>
                        <span>主要回應時間</span>
                        <span class="orange-txt ml-2">上午/ 晚上</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['menberData'],
  methods: {
    openChatroom (id) {
      this.$message('此功能尚未開發')
    }
  }
}
</script>
