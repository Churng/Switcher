<template>
<div class="ResetPassword vh-100">
    <div class="container">
        <div class=" bg-light mt-md-5 mb-md-5  px-md-4 py-md-4 w-md-50  forgetpw">
            <div class="resetpassword">
                <i class="fas fa-search "></i>
                <p class="font-weight-bold mt-3 ">重設密碼</p>
            </div>

            <div class="form-group">
                <label for="inputEmail4">新密碼</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="請輸入申請時Email">
            </div>
            <div class="reset-button mt-md-5">
            <button type="button" class="btn btn-danger" @click="$router.go(-1)">返回</button>
            <button type="button" class="btn btn-warning">送出</button>
            </div>
        </div>
    </div>
    </div>
</template>
