<template>
    <li class="col-10 col-sm-6 col-md-6 col-xl-3 col-lg-4" @click.prevent="$router.push({name: 'Product', params: { id: item.Id }})">
        <div class="card mb-4">
            <img :src="item.Images[0]" class="card-img-top" alt="gameHost">
            <div class="card-body">
                <div class="card-text">
                    <div class="d-flex justify-content-between align-items-baseline itemTitle">
                        <h6 class="font-weight-bold">{{ item.Name }}</h6>
                        <span class="category-games bg-danger text-white rounded">{{ item.Category }}</span>
                    </div>
                    <div class="card-text-top d-flex justify-content-between">
                        <div class="card-mainTxt">
                            <span class="location mr-2">{{item.City }}</span>
                            <span><font-awesome-icon icon="user-circle"/></span>
                            <span class="ml-1 mr-2">{{ item.MemberName }}</span>
                            <span :class="item.Status=='可出租' ? 'isLease-icon':'notLease'"><font-awesome-icon icon="circle"/></span>
                            <span class="isLease ml-1">{{ item.Status }}</span>
                        </div>
                    </div>
                    <div class="card-text-bottom d-flex justify-content-between align-items-end mb-2">
                        <div class="onDate">
                            <span>上架日期</span>
                            <span>{{ item.PublishDate }}</span>
                        </div>
                        <div class="priceArea text-right" v-if="item.OriginPrice - item.Price > 0">
                            <p class="mb-0 originalPrice text-muted">租金<span>{{ item.OriginPrice }}</span>元 /日</p>
                            <p class="mb-0">租金<span>{{ item.Price }}</span>元 /日</p>
                        </div>
                        <div class="priceArea" v-else>
                            <p class="mb-0">租金<span>{{ item.Price }}</span>元 /日</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  }
}
</script>

<style lang="scss">
.category-games{
  font-size: 12px;
}
.itemTitle{
  height: 45px;
  h6{
    width: 180px;
  }
  .category-games{
    height: 30px;
    text-align: center;
    width: 75px;
  }
}
</style>
