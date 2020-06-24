<template>
    <div class="row home-useInstructions">
        <div class="col-md-12">
            <h2 class="mb-5">如何使用 ?</h2>
            <ul class="nav nav-tabs justify-content-around list-unstyled" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="buyer-tab" data-toggle="tab" href="#buyer" role="tab" aria-controls="buyer" aria-selected="true">我是買家</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="seller-tab" data-toggle="tab" href="#seller" role="tab" aria-controls="seller" aria-selected="false">我是賣家</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="buyer" role="tabpanel" aria-labelledby="buyer-tab">
                    <ul class="tab-pane-area d-flex justify-content-around align-items-center">
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="search"/></div>
                            <div class="tab-pane-text">
                                <h3>第一步</h3>
                                <p>尋找商品項目</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="map-marked-alt"/></div>
                            <div class="tab-pane-text">
                                <h3>第二步</h3>
                                <p>尋找附近賣家</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="list-alt"/></div>
                            <div class="tab-pane-text">
                                <h3>第三步</h3>
                                <p>送出預約訂單</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="check-circle"/></div>
                            <div class="tab-pane-text">
                                <h3>第四步</h3>
                                <p>完成交易</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane fade bg-danger" id="seller" role="tabpanel" aria-labelledby="seller-tab">
                    <ul class="tab-pane-area d-flex justify-content-around align-items-center">
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="shopping-bag"/></div>
                            <div class="tab-pane-text">
                                <h3>第一步</h3>
                                <p>上架商品項目</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="comments"/></div>
                            <div class="tab-pane-text">
                                <h3>第二步</h3>
                                <p>等待買家來訊</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="list-alt"/></div>
                            <div class="tab-pane-text">
                                <h3>第三步</h3>
                                <p>等待預約訂單</p>
                            </div>
                        </li>
                        <li>
                            <div class="tab-pane-icon"><font-awesome-icon icon="check-circle"/></div>
                            <div class="tab-pane-text">
                                <h3>第四步</h3>
                                <p>完成交易</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
