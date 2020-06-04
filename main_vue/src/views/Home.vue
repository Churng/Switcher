<template>
    <div id="home">
        <div class="container-fluid">
          <Banner />
          <UseInstructions />
        </div>
        <div class="container mb-5">
            <NewItems-area/>
            <Sellers-area />
        </div>
        <div class="container-fluid">
            <Features />
            <Footer-logo />
        </div>
    </div>
</template>

<script>
import Banner from './front_side/Banner'
import UseInstructions from './front_side/UseInstructions'
import NewItemsArea from '../components/front_side/NewItemsArea'
import SellersArea from '../components/front_side/SellersArea'
import Features from './front_side/Features'
import FooterLogo from './front_side/FooterLogo'

export default {
  data () {
    return {
      loading: false
    }
  },
  components: { Banner, UseInstructions, NewItemsArea, SellersArea, Features, FooterLogo }
}
</script>
