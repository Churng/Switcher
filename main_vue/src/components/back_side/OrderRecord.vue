<template>
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
    <tbody class="text-center buyer-order" v-for="item in rentalData" :key="item.Id">
      <tr class>
        <td class="vertical-align:middle;">阿真</td>
        <td>Switch手把</td>
        <td>2020/05/11</td>
        <td>2020/05/21</td>
        <td>已完成</td>
        <td>
          <button class="btn btn-primary openDetailBtn" type="submit">詳請</button>
        </td>
        <td>
          <button class="btn btn-social openDetailBtn" type="submit">去評論</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['rentalData']
}
</script>
