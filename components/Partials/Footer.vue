<template>
  <div>
    <!-- Footer Start -->
    <div class="footer wow fadeIn" data-wow-delay="0.3s">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
             <div class="footer-link">
              <h2>Contact Us</h2>
              <p>Send an Email at dadhq@example.com</p>
              <p>Call us: 123-4456-789</p>
<!--              <p>Address: </p>-->
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-3">
            <div class="footer-link">
              <h2>Contact Us</h2>
              <p>Send an Email at dadhq@example.com</p>
              <p>Call us: 123-4456-789</p>
            </div>
          </div> -->
          <div class="col-md-6 col-lg-3">
            <div class="footer-link">
              <h2>Information</h2>
              <nuxt-link to="/about">About</nuxt-link>
              <nuxt-link to="/event">Event</nuxt-link>
              <nuxt-link to="/program">Program</nuxt-link>
              <nuxt-link to="/contact">Contact Us</nuxt-link>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="newsletter">
              <h2>About</h2>
              <p>
                Welcome to a personalized learning experience designed to cater to your unique educational needs. Our commitment to fostering your growth sets us apart.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style="color: white">
      <div class="container copyright">
        <div class="row">
          <div class="col-md-6">
            <p>&copy; <a href="#">DadHQ</a>, All Right Reserved.</p>
          </div>
          <div class="col-md-6">
              <p>Designed By <a href="https://apexstrive.ca/">Apex Strive Solutions Inc</a></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
     //
    }
  },
}
</script>

<style scoped>

</style>
