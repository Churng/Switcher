<template>
  <section id="questionIntroduction">
    <div class="container pb-5 headerTxt">
      <el-backtop :bottom="60"></el-backtop>
        <div class="row groupInfo pt-5 pb-5 d-flex flex-column">
            <div class="text-center pt-5 pb-md-5">
              <h2 class="font-weight-bold">常見問題</h2>
            </div>
        </div>
          <ul class="row list-unstyled justify-content-center justify-content-md-around qusetionList">
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：什麼是 Switcher？</h4>
              <p>A：Switcher 是台灣第一家專門媒合任天堂 Switch 商品出租的平台 (1)租客在平台上找到需要租賃的商品後，詳閱合約內容後送出租借申請 (2)由Switcher 平台媒合雙方，成立訂單給賣家 (3)賣家與租客互相聯繫當面點交商品，以完成訂單。 (4)商品返還後可上平台給予對方評價，作為鼓勵回饋</p>
              <p class="text-primary">[備註] Switcher 為媒合平台，實際租金與押金由賣家直接向租客收取，並於商品歸還時返還押金。</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：我要如何租借商品？</h4>
              <h6>商品租借為雙方保障契約關係，請先成為Switcher 身份吧！</h6>
              <p class="mb-1">步驟如下：</p>
              <ol class="listTxt pb-3">
                <li>加入會員</li>
                <li>搜尋商品、選定要租的商品、送出租借申請</li>
                <li>等待賣家聯絡回應</li>
                <li>約定面交 (租金與押金直接給賣家)</li>
                <li>用完歸還無缺，賣家返還押金給租客</li>
                <li>請租客可以給賣家評價鼓勵</li>
              </ol>
              <p class="mb-1 linkTxt" @click.prevent="$router.push({name: 'FindGames', params: '/findGames'})">>> 馬上看哪些商品可租</p>
              <p class="mb-1 linkTxt" @click.prevent="$router.push({name: 'Login', params: '/login'})">>> 登記成為 Switcher</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：為何我不能在平台上付租金，而是直接付給賣家？</h4>
              <p class="mb-1">A：Switcher 初衷是促進共享交流，鼓勵玩家把閒置遊戲分享出來出租，為了「收租有感」，因此我們平台不作代收代付金錢，而決定採業界首創：「讓租金直接進入賣家口袋」，賣家需直接對租客負責。</p>
              <p class="mb-1">對租客來說，也是直接面對賣家給予租金，表達感謝，促進人與人之間的交流分享。（通常面交時賣家會叮嚀使用注意事項以及使用心得，是我們認為共享經濟最美妙的地方，因為「以租代買」，或「先租確定何用再買以免浪費」才是我們的初衷）</p>
              <p class="text-primary">＊所有的金流都是賣家與租客直接交易。</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：商品租金如何計算？</h4>
              <p class="mb-1">A：租金價格是以天數計算 ：</p>
              <p>賣家會提供租借天數 / 次的上限來讓租客參考</p>
              <p class="text-primary">[備註] 除了租金外，賣家會另自訂押金於面交時收取作為保障，押金將於商品安全歸還時一併返還。（租金是固定額，但押金金額由賣家依據電器價格與新舊程度自訂）</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：賣家出租商品後要如何收取租金？</h4>
              <p class="mb-1">A：由賣家和租客自行面交時，賣家直接向租客收取租金和押金。</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：租借商品如果損壞，賣家有什麼保障？有押金制？</h4>
              <p class="mb-1">A：面交時，除了租金，也可收取押金。商品歸還確認無誤後，則可當面退還押金給租客。 （押金部分是作為保障雙方使用商品完整歸還的權益）</p>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：我可以上架多少商品在 Switcher 平台出租呢？</h4>
              <p class="mb-1">A：目前沒有限制上架數量，歡迎賣家們多多上架，以供租客有更多的選擇。</p>
              <span>（提醒：一定是要「任天堂switch」周邊商品喔）</span>
            </li>
            <li class="col-10 col-md-5 bg-white border border-primary rounded pt-4 pb-4 mb-5">
              <h4 class="text-center font-weight-bold mb-4">Q：出租家電需要注意什麼？</h4>
              <p class="mb-1">A：無論任何商品，請於出租前「確保」商品 可以正常使用，以及確實清潔，才能交到租客手中。</p>
            </li>
          </ul>
    </div>
  </section>
</template>
