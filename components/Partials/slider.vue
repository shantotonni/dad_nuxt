<template>
  <div>
    <div class="coupons" style="background: #f3f3f3">
      <div class="coupons-grids text-center">
        <div class="container">
          <div class="w3layouts_mail_grid">
<!--            <VueSlickCarousel :arrows="true" :dots="true">-->
<!--              <div><img src="../../static/assets/images/testimonial.jpg" alt=""></div>-->
<!--              <div>2</div>-->
<!--              <div>3</div>-->
<!--              <div>4</div>-->
<!--            </VueSlickCarousel>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "slider",
  components: { VueSlickCarousel },
}
</script>

<style scoped>

</style>
