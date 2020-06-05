<template>
    <div class="col-md-4 cartItems shadow p-3 mb-5 bg-white rounded">
        <div class="text-center"><span class="font-weight-bold text-center">沒有商品在購物車內</span></div>
        <div>
            <ul class="pt-3 pb-3 list-unstyled mb-0">
                <li class="d-flex justify-content-around align-items-center border-bottom border-light">
                    <div class="choosedImg"><img src="/img/game/game03.jpg"></div>
                    <div class="choosedTxt">
                        <a href="" class="choosedName mb-1">異度神劍 終極版</a>
                        <p class="choosedPrice mb-1">NT 300</p>
                    </div>
                    <font-awesome-icon icon="trash-alt"/>
                </li>
            </ul>
            <div class="cart-footer d-flex justify-content-between">
                <p>購物車中的項目 : <span>2</span></p>
                <div class="priceTotal">
                    <p class="mb-1">購物總額 :</p>
                    <h3>NT 600 </h3>
                </div>
            </div>
            <div class="cart-btns text-center">
                <button type="button" class="btn btn-warning w-100 mb-3">我要租借</button>
                <button type="button" class="btn btn-link w-100">繼續選購</button>
            </div>
        </div>
    </div>
</template>
