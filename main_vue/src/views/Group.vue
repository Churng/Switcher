<template>
    <section id="groupIntroduction">
        <div class="container">
            <div class="row groupInfo pt-5 pb-5 d-flex flex-column">
                <div class="text-center pt-5 pb-3">
                    <h2 class="text-primary font-weight-bold">Meet Switcher</h2>
                    <p class="headerTxt font-weight-bold">SWITCH GAMES AND BE THE FAM</p>
                    <div class="endLine"></div>
                </div>
                <div class="row groupBody d-flex justify-content-center pt-3">
                    <div class="col-md-5 d-flex justify-content-center flex-column"><img src="/img/users/https___hk-removebg-preview.png" alt="mario" class="w-100"></div>
                    <div class="col-md-6">
                        <div class="pt-5 pb-5">
                            <p>Swicther定位在提供給消費社會一個新生活提案：先用小錢體驗高單價娛樂，以免買錯浪費。更進一步的，想要達到資源共享，傳達物資需被充分愛惜與利用的價值，重建人們愛物惜物的簡單生活。</p>
                            <p>Swicther平台共享經濟的靈感，是來自兩位玩家，因為2020宅經濟爆發，在家無聊想娛樂自己娛樂家人，但礙於荷包不太充裕，害怕高價位的遊戲片可能不適合自己。或是透過家中現成的Switch遊戲，增加額外的收入補貼家用，兩人於是在火箭隊合作開發此平台。</p>
                            <p>「Swicther」取名是「一起成為 Switch 人」的意思，鼓勵大家出租家中的閒置遊戲，在賺點小錢的同時，也讓遊戲得到更多利用 -- 進而達到共享經濟的原則，也形成另一種被動收入的新創模式。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container-fluid groupBg w-100"></div> -->
        <div class="container-fluid mt-5 pt-5 pb-5 groupTeam">
            <div class="row d-flex flex-column">
                <div class="text-center mb-5">
                    <h2 class="font-weight-bold">Development Team</h2>
                    <div class="endLine"></div>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div class="circle rounded-circle">
                        <img src="/img/users/menber01.png" alt="menber1">
                    </div>
                    <h5 class="mt-4">後端組 : Charles</h5>
                </div>
                <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div class="circle rounded-circle">
                        <img src="/img/users/menber02.png" alt="menber2">
                    </div>
                    <h5 class="mt-4">前端組 : 蟲蟲</h5>
                </div>
                <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div class="circle rounded-circle">
                        <img src="/img/users/menber03.png" alt="menber3">
                    </div>
                    <h5 class="mt-4">前端組 : Arisa</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.headerTxt{
    color: #737373;
}
.endLine{
    width: 100px;
    height: 5px;
    background: #ededed;
    margin: 0 auto;
}
.groupTeam{
    background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
    background-blend-mode: normal,color-burn;
}
.circle{
    width: 200px;
    height: 200px;
    background-color: rgba(211,204,227,.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: white;
    }
    img{
        width: 60%;
        height: 60%;
        overflow: hidden;
    }
}
</style>
