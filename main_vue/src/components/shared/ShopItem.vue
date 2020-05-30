<template>
    <li class="col-10 col-sm-6 col-md-6 col-xl-3 col-lg-4">
            <div class="card mb-4">
                <img :src="item.Images[0]" class="card-img-top" alt="gameHost">
                <div class="card-body">
                    <div class="card-text">
                        <h3>{{ item.Name }}</h3>
                        <div class="card-text-top d-flex justify-content-between">
                            <div class="card-mainTxt">
                                <span class="location mr-2">{{item.City }}</span>
                                <span class="isLease-icon"><font-awesome-icon icon="circle"/></span>
                                <span class="isLease">{{ item.Status }}</span>
                            </div>
                        </div>
                        <div class="card-text-bottom d-flex justify-content-between align-items-baseline mb-2">
                            <div class="onDate">
                                <span>上架日期</span>
                                <span>{{ item.PublishDate }}</span>
                            </div>
                            <div class="priceArea">
                                <p class="mb-0">租金<span>{{ item.OriginPrice }}</span>元/日</p>
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
