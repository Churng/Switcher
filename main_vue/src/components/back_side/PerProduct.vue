<template>
    <div class="mx-auto">
      <el-backtop :bottom="60"></el-backtop>
        <ul class="row switcherStore-body list-unstyled flex-wrap pt-5 pb-4" >
            <li class="col-10 col-sm-6 col-md-6 col-xl-3 col-lg-4" v-for="data in productData" :key="data.Id">
                <div class="card mb-4">
                    <img :src="data.Images[0]" class="card-img-top" alt="gameHost">
                    <div class="card-body">
                        <div class="card-text">
                            <h3>{{data.Name}}</h3>
                            <div class="card-text-top d-flex justify-content-between">
                                <div class="card-mainTxt">
                                    <span class="location mr-2">{{data.City}}</span>
                                    <span :class="data.Status=='可出租' ? 'isLease-icon':'notLease'"><font-awesome-icon icon="circle"/></span>
                                    <span class="isLease">{{data.Status}}</span>
                                </div>
                            </div>
                            <div class="card-text-bottom d-flex justify-content-between align-items-baseline mb-2">
                                <div class="onDate">
                                    <span>上架日期</span>
                                    <span>{{data.PublishDate}}</span>
                                </div>
                                <div class="priceArea">
                                    <p class="mb-0">租金<span>{{data.Price}}</span>元/日</p>
                                </div>
                            </div>
                            <div class="Edit-Deletebutton">
                                <el-button type="info" icon="el-icon-edit" class="editbutton" @click="editPerProduct(data.Id)" plain ></el-button>
                                <el-button type="info" icon="el-icon-delete" @click="deleteProduct(data.Id)" plain ></el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
  data () {
    return {
      productData: []
    }
  },
  methods: {
    getAllProduct () {
      const api = 'http://switcher.rocket-coding.com/api/product/admin/all'
      const token = localStorage.getItem('token')
      this.$http
        .get(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          this.productData = response.data.products
          console.log(this.productData)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteProduct (Id) { // 讀取 key 資料，去刪除產品
      const vm = this
      console.log(this)
      const token = localStorage.getItem('token')
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const api = `http://switcher.rocket-coding.com/api/product/delete/${Id}`
      this.$http.delete(api, headers).then(response => {
        vm.getAllProduct()// 更新產品列表
      })
    },
    editPerProduct (id) {
      this.$router.push({
        path: '/editperproduct',
        query: {
          id
        }
      })
    }
  },
  created () {
    this.getAllProduct()
  }

}
</script>

<style lang="scss" scoped>
/*商品卡*/
.card img{
    transition: all .25s ease-in-out;
    height: 190px;
}
.card:hover img{
    transform: scale(0.95);
}

.card-body{
    padding: 1rem 1rem 0rem;
   .card-text{
        text-align: start;
        h3{
        position: relative;
        font-size: 22px;
      @media (max-width: 767px){
                 font-size: 20px;
            }
        &::before{
            content: '';
            width: 3px;
            height: 100%;
            background-color: red;
            position: absolute;
            top:0;
            left: -10px;
            }
        }
        .card-text-top{
            font-size: 14px;
        }
        .onDate{
            font-size: 12px;
        }
        .priceArea{
            color: orange;
            font-size: 18px;
            @media (max-width: 767px){
                 font-size: 12px;
            }
        }
    }
}
.isLease-icon{
    color: orange;
}
.notLease{
    color: blue; //已出租時icon顏色
}
.card{
    cursor: pointer;
    &:hover{
        box-shadow: 0 1px 0 rgba(4,0,0,0.2);
    }
    img{
        width: 100%;
    }
}

/*特價時 card-text-top 加上*/
.originalPrice{
    font-size: 12px;
    text-decoration: line-through
}

/*編輯與刪除按鈕*/
.Edit-Deletebutton{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .product-edit, .product-deleted{
        width: 150px;
    }
}

.editbutton{
  width: 180px;
  background:#e9ecef;
  border: #EBEEF5;
}
</style>
