<template>
  <li class="col-10 col-sm-6 col-md-6 col-xl-3 col-lg-4">
      <div class="card mb-4">
          <el-image v-if="item.Images.length === 0">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
          </el-image>
          <img :src="item.Images[0]" class="card-img-top" alt="gameHost" v-else>
          <div class="card-body">
              <div class="card-text">
                  <div class="d-flex justify-content-between align-items-baseline itemTitle mb-2">
                        <h6 class="font-weight-bold">{{ item.Name }}</h6>
                        <span class="category-games bg-danger text-white rounded">{{ item.Category }}</span>
                    </div>
                  <div class="card-text-top d-flex justify-content-between">
                      <div class="card-mainTxt">
                          <span class="location mr-2">{{item.City}}</span>
                          <span :class="item.Status=='可出租' ? 'isLease-icon':'notLease'"><font-awesome-icon icon="circle"/></span>
                          <span class="isLease">{{item.Status}}</span>
                      </div>
                  </div>
                  <div class="card-text-bottom d-flex justify-content-between align-items-end mb-2">
                      <div class="onDate">
                          <span>上架日期</span>
                          <span>{{item.PublishDate}}</span>
                      </div>
                      <div class="priceArea">
                          <p class="mb-0">租金<span>{{ item.OriginPrice }}</span>元 /日</p>
                      </div>
                  </div>
                  <div class="Edit-Deletebutton">
                      <el-button type="info" icon="el-icon-edit" class="editbutton" @click="editPerProduct(item.Id)" plain ></el-button>
                      <el-popover
                        placement="top"
                        width="160"
                        v-model="visible">
                        <p>確定要刪除商品嗎？</p>
                        <div style="text-align: right; margin: 0">
                          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                          <el-button type="primary" size="mini"  @click="deleteProduct(item.Id)">刪除</el-button>
                        </div>
                        <el-button type="info" slot="reference" icon="el-icon-delete" ></el-button>
                      </el-popover>
                  </div>
              </div>
          </div>
      </div>
  </li>
</template>
<script>

export default {
  data () {
    return {
      visible: false
      // dialogVisible: false
    }
  },
  props: {
    item: Object,
    index: Number
  },
  methods: {
    deleteProduct (Id) { // 讀取 key 資料，去刪除產品
      const token = localStorage.getItem('token')
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const api = `http://switcher.rocket-coding.com/api/product/delete/${Id}`
      this.$http.delete(api, headers)
        .then(response => {
          this.reload()
          this.deleteSuccess()
        })
        .catch(err => {
          this.$message(err)
        })
    },
    deleteSuccess () {
      this.$notify({
        title: '刪除商品成功',
        type: 'success'
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
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
  inject: ['reload']
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
  @media (min-width: 1200px) {
    width: 150px;
  }
}
.itemTitle{
  height: 45px;
  h6{
    width: 180px;
  }
  .category-games{
    height: 30px;
    font-size: 12px;
    text-align: center;
    width: 75px;
  }
}
</style>
