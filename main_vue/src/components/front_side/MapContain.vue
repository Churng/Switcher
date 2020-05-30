<template>
    <div class="col-md-6 col-lg-5 col-xl-4 pt-4 seller-information">
        <!-- <h4 v-if="firstVeiw">請輸入附近區域尋找</h4>
        <h4 v-if="loading">Loading...</h4>
        <h4 v-if="errorMsg">{{ errorMsg }}</h4> -->
        <div>
            <div class="seller-header d-flex justify-content-between align-items-center mb-3">
                <p class="textHeader mb-0">目前區域共有: <span class="font-weight-bold">4</span>個賣家</p>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle bg-light text-dark" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        評價(高到低)
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item disabled" type="button">評價(高到低)</button>
                        <button class="dropdown-item" type="button">評價(低到高)</button>
                    </div>
                </div>
            </div>
            <MapSellers />
        </div>
    </div>
</template>

<script>
import MapSellers from './MapSellers'

export default {
  data () {
    return {
      firstVeiw: true,
      loading: false,
      stores: null,
      errorMsg: ''
    }
  },
  components: { MapSellers }
}
</script>
