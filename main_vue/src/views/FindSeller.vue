<template>
    <section id="switcherMap" class="bg-light">
        <div class="container">
            <div class="row switcherMap-searchArea pt-5 pb-5 justify-content-start">
                <div class="col-md-2 dropdown city">
                    <button class="btn btn-outline-secondary dropdown-toggle pl-3 pr-3 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        全台灣
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">台北市</a>
                        <a class="dropdown-item" href="#">台中市</a>
                        <a class="dropdown-item" href="#">高雄市</a>
                      </div>
                </div>
                <div class="col-md-2 dropdown county">
                    <button class="btn btn-outline-secondary dropdown-toggle pl-4 pr-4 w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        鄉鎮
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">前鎮區</a>
                        <a class="dropdown-item" href="#">左營區</a>
                        <a class="dropdown-item" href="#">小港區</a>
                      </div>
                </div>
                <div class="col-md-4 input-group flex-nowrap">
                    <input type="text" class="form-control rounded-left" placeholder="請輸入街道或店名" aria-label="UserRoad" aria-describedby="addon-wrapping">
                    <div class="input-group-prepend border-none">
                        <span class="input-group-text bg-danger text-white rounded-right" id="addon-wrapping">搜尋</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row switcherMap-contain">
                <div class="col-md-6 col-lg-7 col-xl-8 switcherMap-map border">map</div>
                <div class="col-md-6 col-lg-5 col-xl-4 seller-information pt-4">
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
                    <ul class="cardsArea list-unstyled mb-0">
                        <li class="card mb-3 mr-3">
                            <div class="card-body pb-3 d-flex justify-content-around align-items-center">
                                <div class="card-seller">
                                    <div class="card-img">
                                        <img src="/img/users/iconfinder_11_avatar_2754576.png" alt="user01">
                                    </div>
                                    <h5 class="mb-0 text-center">阿瑄</h5>
                                </div>
                                <div class="card-info">
                                    <div class="card-txtArea mb-3">
                                        <p class="mb-0">面交地點 : <span>7-11 鳳文門市</span></p>
                                        <p class="mb-0">地址 : <span>高雄市鳳山區文英里文衡路50號1樓</span></p>
                                        <p class="card-text mb-0">主要商品: <span>遊戲片</span></p>
                                            <div class="evaluation d-flex align-items-baseline">
                                                <p class="mr-2 mb-0"><span class="fas fa-star">評價:</span></p>
                                                <p class="evaluation-content mb-0">5.0 <span>(1,000評價)</span></p>
                                            </div>
                                    </div>
                                    <div class="card-buttons d-flex justify-content-between">
                                        <button type="button" class="btn btn-secondary">進入賣場</button>
                                        <button type="button" class="btn btn-outline-secondary">我要聊聊</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="card mb-3 mr-3">
                            <div class="card-body pb-3 d-flex justify-content-around align-items-center">
                                <div class="card-seller">
                                    <div class="card-img">
                                        <img src="/img/users/iconfinder_11_avatar_2754576.png" alt="user01">
                                    </div>
                                    <h5 class="mb-0 text-center">阿瑄</h5>
                                </div>
                                <div class="card-info">
                                    <div class="card-txtArea mb-3">
                                        <p class="mb-0">面交地點 : <span>7-11 鳳文門市</span></p>
                                        <p class="mb-0">地址 : <span>高雄市鳳山區文英里文衡路50號1樓</span></p>
                                        <p class="card-text mb-0">主要商品: <span>遊戲片</span></p>
                                            <div class="evaluation d-flex align-items-baseline">
                                                <p class="mr-2 mb-0"><span class="fas fa-star">評價:</span></p>
                                                <p class="evaluation-content mb-0">5.0 <span>(1,000評價)</span></p>
                                            </div>
                                    </div>
                                    <div class="card-buttons d-flex justify-content-between">
                                        <button type="button" class="btn btn-secondary">進入賣場</button>
                                        <button type="button" class="btn btn-outline-secondary">我要聊聊</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
