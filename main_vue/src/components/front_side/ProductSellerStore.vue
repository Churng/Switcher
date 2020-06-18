<template>
    <div class="switcherProduct-seller d-flex align-items-center pt-3 pb-3 mb-4" v-if="allData.member">
        <div class="col-md-5 col-lg-5 d-flex align-items-center">
            <div class="sellerImg mr-3">
                <img :src="allData.member.Photo" alt="user">
            </div>
            <div class="sellerTxt w-75">
                <h6 class="mb-2">{{allData.member.Name}}</h6>
                <div class="sellerBtns d-flex">
                    <button type="button" class="btn btn-outline-secondary w-50 mr-1" @click="$router.push({name: 'Seller', params: { id: allData.member.Id }})">進入賣場</button>
                </div>
            </div>
        </div>
        <div class="col-md-7 col-lg-7">
            <div class="switcherStore-sellerInfo">
                <div class="sellerInfo-header d-flex justify-content-around">
                    <div class="sellerInfo-comment">
                        <font-awesome-icon icon="star" class="mr-2"/>
                        <span>評價</span>
                        <span class="orange-txt ml-2">20 則</span>
                    </div>
                    <div class="sellerInfo-chat">
                        <font-awesome-icon icon="comment-dots" class="mr-2"/>
                        <span>主要回應時間</span>
                        <span class="orange-txt ml-2">{{allData.member.Reply}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['allData']
}
</script>
