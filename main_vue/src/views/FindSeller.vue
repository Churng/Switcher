<template>
    <section id="switcherMap" class="bg-light">
        <div class="container">
          <div class="row switcherMap-contain">
              <div class="col-md-4">
                <div class="row switcherMap-searchArea pt-5 pb-5 justify-content-start">
                    <div class="col-md-2 dropdown city">
                        <button class="btn btn-outline-secondary dropdown-toggle pl-3 pr-3 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            全台灣
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a class="dropdown-item" href="#">台北市</a>
                        </div>
                    </div>
                    <div class="col-md-2 dropdown county">
                        <button class="btn btn-outline-secondary dropdown-toggle pl-4 pr-4 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            鄉鎮
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">競相區</a>
                        </div>
                    </div>
                </div>
              </div>
              <FindSellerContain />
            </div>
        </div>
    </section>
</template>

<script>
import FindSellerContain from '../components/front_side/FindSellerContain'

export default {
  components: { FindSellerContain }
}
</script>

<style lang="scss" scoped>
.dropdown-menu{
  height: 200px;
  overflow-y: scroll;
}
</style>
