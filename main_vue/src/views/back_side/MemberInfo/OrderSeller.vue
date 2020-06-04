<template>
  <div class="OrderManagement">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item">
            <a href="/">首頁</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">訂單管理</li>
        </ol>
      </nav>
    </div>

    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-rented-tab"
            data-toggle="tab"
            href="#nav-rented"
            role="tab"
            aria-controls="nav-rented"
            aria-selected="true"
          >已出租紀錄</a>
          <a
            class="nav-item nav-link"
            id="nav-ordered-tab"
            data-toggle="tab"
            href="#nav-ordered"
            role="tab"
            aria-controls="nav-ordered"
            aria-selected="false"
          >已訂購紀錄</a>
        </div>
      </nav>
      <div class="tab-content order-record" id="nav-tabContent-order">
        <div
          class="tab-pane fade show active"
          id="nav-rented"
          role="tabpanel"
          aria-labelledby="nav-rented-tab"
        >
          <table class="table mt-3 bg-light">
            <thead class="text-center">
              <tr>
                <th scope="col">購買者</th>
                <th scope="col">項目</th>
                <th scope="col">開始日期</th>
                <th scope="col">結束日期</th>
                <th scope="col">訂單狀態</th>
                <th scope="col">詳請</th>
              </tr>
            </thead>

            <tbody class="text-center seller-order" sytle>
              <tr class>
                <td class="vertical-align:middle;">阿真</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>已完成</td>
                <td>
                  <button class="btn btn-primary" type="submit">詳請</button>
                </td>
              </tr>
              <tr class>
                <td>10</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>已完成</td>
                <td>
                  <button class="btn btn-primary" type="submit">詳請</button>
                </td>
              </tr>
              <tr class>
                <td>欸曲</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>已完成</td>
                <td>
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                  >詳請</button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-backdrop="static"
                    data-keyboard="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">訂單內容</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">返回上一頁</button>
                          <button type="button" class="btn btn-primary">確認訂單</button>
                          <button type="button" class="btn btn-primary">取消訂單</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="nav-ordered"
          role="tabpanel"
          aria-labelledby="nav-ordered-tab"
        >
          <table class="table mt-3 bg-light buyer">
            <thead class="text-center">
              <tr>
                <th scope="col">出租者</th>
                <th scope="col">項目</th>
                <th scope="col">開始日期</th>
                <th scope="col">結束日期</th>
                <th scope="col">訂單狀態</th>
                <th scope="col">詳請</th>
                <th scope="col">評論</th>
              </tr>
            </thead>
            <tbody class="text-center buyer-order">
              <tr class>
                <td class="vertical-align:middle;">阿真</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>已完成</td>
                <td>
                  <button class="btn btn-primary" type="submit">詳請</button>
                </td>
                <td>
                  <button class="btn btn-social" type="submit">去評論</button>
                </td>
              </tr>
              <tr class>
                <td>10</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>等待確認</td>
                <td>
                  <button class="btn btn-primary" type="submit">詳請</button>
                </td>
                <td>
                  <button class="btn btn-social" type="submit">去評論</button>
                </td>
              </tr>
              <tr class>
                <td>欸曲</td>
                <td>Switch手把</td>
                <td>2020/05/11</td>
                <td>2020/05/21</td>
                <td>等待確認</td>
                <td>
                  <button class="btn btn-primary" type="submit">詳請</button>
                </td>
                <td>
                  <button class="btn btn-social" type="submit">去評論</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
