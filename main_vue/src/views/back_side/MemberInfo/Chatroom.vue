<template>
  <div class>
    <section>
      <div class="container chat-cont">
        <div class="row">
          <div class="sender-photo col-md-3">
            <div class="sender-pic">
              <img src="/img/undraw_female_avatar_w3jk.svg" alt />
              <div class="sender-name">路人</div>
            </div>
          </div>

          <div class="dialogue col-md-9">
            <div class="chat-user remote">
              <!-- <div class="avatar">
                            <div class="pic">
                                <img src="/img/undraw_female_avatar_w3jk.svg" alt="">
                                <div class="name">Lion</div>
                            </div>
              </div>-->
              <div class="txt">你好啊～～～～</div>
            </div>
            <div class="chat-user local">
              <div class="avatar">
                <div class="pic">
                  <img src="/img/undraw_male_avatar_323b.svg" alt />
                  <div class="name">Lee</div>
                </div>
              </div>
              <div class="txt">你好啊～～～～ 你好啊～～～～ 你好啊～～～～ 你好啊～～～～ 你好啊～～～～ 你好啊～～～～ 你好啊～～～～ 你好啊～～～～</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="msg-bottom">
      <div class="container">
        <div class="row">
          <button type="button" class="btn btn-primary btn-sm bl-page">返回上一頁</button>
          <div class="user-msg-textarea">
            <textarea class="user-msg-text" placeholder="請輸入訊息..."></textarea>
            <button type="button" class="btn btn-primary btn-lg">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
