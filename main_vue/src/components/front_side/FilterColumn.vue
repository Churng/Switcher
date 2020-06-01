<template>
    <div class="row shop-navSelects bg-danger text-white flex-nowrap">
            <nav class="col-md-8 navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand text-white" href="#">篩選 :</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">所有可租借商品<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">最新推出</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">優惠活動</a>
                    </li>
                  </ul>
                </div>
            </nav>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
                <div class="sortNav">排序 :</div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle bg-light text-dark ml-2 pr-4 pl-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        價格(低到高)
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item disabled" type="button">價格(低到高)</button>
                        <button class="dropdown-item" type="button">價格(高到低)</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.activeColor{
  color: #e9ecef !important;
}
</style>
