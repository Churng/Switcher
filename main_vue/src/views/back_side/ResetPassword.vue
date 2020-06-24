<template>
  <div class="ResetPassword bg-light">
    <div class="container loginHeight phoneLoginForget">
        <div class="col-10 col-md-6 col-lg-5 shadow bg-white rounded pt-3 pb-5 forgetpw">
            <div class="resetpassword">
                <i class="fas fa-search"></i>
                <p class="font-weight-bold mt-3">重設密碼</p>
            </div>

            <div class="form-group pl-md-3 pr-md-3">
                <label for="inputEmail4">帳號</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="請輸入申請時的 Email">
            </div>
            <div class="reset-button mt-4">
                <button type="button" class="btn btn-danger mr-2" @click="$router.go(-1)">返回</button>
                <button type="button" class="btn btn-warning">送出</button>
            </div>
        </div>
    </div>
</div>
</template>
