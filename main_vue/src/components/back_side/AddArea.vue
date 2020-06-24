<template>
  <div class="Transaction">
     <el-select v-model="City" placeholder="請選擇城市" label="城市" @change="selectAll()">
      <el-option
        v-for="(item, city) in CityData"
        :key="city"
        :label="city"
        :value="city"
        >
      </el-option>
    </el-select>
    <el-select v-model="Zone" placeholder="請選擇區域" @change="selectZone()">
      <el-option
        v-for="(item, idx) in zoneArr"
        :key="idx"
        :label="item.zone"
        :value="item.zone">
      </el-option>
    </el-select>
    <el-select v-model="Store" placeholder="請選擇門市">
      <el-option
        v-for="(item, idx) in storeArr"
        :key="idx"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      CityData: {
        高雄市: [
          {
            zone: '三民區',
            store: ['太華門市', '大阪門市', '中都門市', '文藻門市']
          },
          {
            zone: '前金區',
            store: ['文東門市', '中央公園門市', '太華門市', '自強門市', '青盛門市']
          },
          {
            zone: '鳳山區',
            store: ['大洋門市', '中東門市', '天虹門市', '文建門市', '文衡門市', '光泰門市']
          },
          {
            zone: '鹽埕區',
            store: ['仁勇門市', '重義門市', '駁藝門市', '鹽埕門市', '鑫漢王門市', '客宭門市']
          },
          {
            zone: '小港區',
            store: ['市賢門市', '大坪頂門市', '孔鳳門市', '永益門市', '田金門市', '松旅門市']
          }
        ],
        台南市: [
          {
            zone: '北區',
            store: ['文五門市', '小北門市', '公平門市', '丹比門市', '西門門市', '育德門市']
          },
          {
            zone: '東區',
            store: ['文東門市', '一心門市', '仁文門市', '北門門市', '自由門市']
          },
          {
            zone: '安平區',
            store: ['文五門市', '安平門市', '安運門市', '怡平門市']
          }
        ],
        台中市: [
          {
            zone: '中區',
            store: ['市鑫門市', '成興門市', '第一廣場門市', '新繼光門市', '鼎站門市', '錦花門市']
          },
          {
            zone: '大里區',
            store: ['大明門市', '大金門市', '永隆門市', '玉豐門市', '東里門市']
          },
          {
            zone: '東區',
            store: ['世界門市', '光園門市', '東英門市', '富仁門市']
          }
        ]
      },
      City: '',
      Zone: '',
      Store: '',
      zoneArr: [],
      storeArr: []
    }
  },
  methods: {
    selectAll () {
      this.zoneArr = this.CityData[this.City]
    },
    selectZone () {
      const arr = this.zoneArr.filter(item => {
        if (item.zone === this.Zone) {
          return true
        }
      })
      this.storeArr = arr[0].store
    }
  }
}
</script>
<style lang="scss">
.product-photo-upload {
  width: 100%;
  height: 300px;
  border: 1px solid #dee2e6;
}
@media(min-width:768px ) {
  .Category-Quantity, .Transaction, .setPrice{
    display: flex;
    margin-bottom: 22px;
    .el-form-item{
      margin: 0px 1px;
    }
  }
}
</style>
