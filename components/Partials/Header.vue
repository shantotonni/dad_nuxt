<template>
  <div>
    <!-- Nav Bar Start -->
    <div class="nav-bar">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="#" class="navbar-brand">MENU</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="mr-auto">
              <nuxt-link to="/" style="font-size: 27px;color: white;font-weight: bold">
                <img src="/assets/img/logo/logo.png" alt="">
              </nuxt-link>
            </div>
            <div class="navbar-nav ml-auto">
              <nuxt-link to="/" class="nav-item nav-link active">Home</nuxt-link>
              <nuxt-link to="/about" class="nav-item nav-link">About Us</nuxt-link>
              <nuxt-link to="event" class="nav-item nav-link">Event</nuxt-link>
              <nuxt-link to="/program" class="nav-item nav-link">Program</nuxt-link>
              <a href="#" class="nav-item nav-link">Gallery</a>
              <nuxt-link to="contact" class="nav-item nav-link">Contact Us</nuxt-link>
            </div>
            <div class="ml-auto">
              <a class="btn" href="#" style="background: #00ACFF;color: white;margin-right:10px">Registration</a>
              <a class="btn" href="#" style="background: #456878;color: white">Member Login</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Nav Bar End -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      //
    }
  },
  methods: {
   //
  }
}
</script>

<style scoped>

</style>
