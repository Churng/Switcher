<template>
  <div class="vh-100">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item">
            <a href="/HTML/Login.html">首頁</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">收件匣</li>
        </ol>
      </nav>
      <div class="inbox-title d-flex">
        <i class="far fa-envelope"></i>
        <p>收件匣</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <table class="table mt-3 bg-light col-md-12 inbox-table-mail">
          <thead class="text-center">
            <tr>
              <th scope="col">標記</th>
              <th scope="col">寄件人</th>
              <th scope="col">名稱</th>
              <th scope="col">時間</th>
              <th scope="col">主旨</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>

          <tbody class="text-center">
            <tr class="inbox-mail">
              <th scope="row">
                <i class="fas fa-star"></i>
              </th>
              <td>
                <a href="/HTML/chatroom.html">
                  <img src="https://fakeimg.pl/100/" />
                </a>
              </td>
              <td>阿真</td>
              <td>2020/05/16 07:34</td>
              <td>[二手] 薩爾達遊戲片無損-歡迎洽詢</td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr class="inbox-mail">
              <th scope="row">
                <i class="fas fa-star"></i>
              </th>
              <td>
                <a href="/HTML/chatroom.html">
                  <img src="https://fakeimg.pl/100/" />
                </a>
              </td>
              <td>10</td>
              <td>2020/05/17 09:34</td>
              <td>[二手]紅藍手把-歡迎洽詢</td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr class="inbox-mail">
              <th scope="row">
                <i class="fas fa-star"></i>
              </th>
              <td>
                <a href="/HTML/chatroom.html">
                  <img src="https://fakeimg.pl/100/" />
                </a>
              </td>
              <td>欸曲</td>
              <td>2020/05/18 10:34</td>
              <td>[二手] 動物之森限定版主機-歡迎洽詢</td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
