<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>About Us</h2>
          </div>
          <div class="col-12">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/event">Events</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->


    <!-- Team Start -->
    <div class="team">
      <div class="container">
        <div class="section-header text-center">
          <h2>Event</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
              <div class="team-img">
                <img src="/assets/img/event/1.png" style="border-style: dotted;padding: 14px;color: #dfdbd5" alt="Team Image">
              </div>
              <div class="pera" style="margin-top: 20px">
                <h5 style="text-align: center;font-weight: bold">Lorem ipsum</h5>
                <p style="text-align: center">Lorem ipsum Lorem ipsum</p>
              </div>
              <div class="team-text">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px"><img src="/assets/img/icon/calendar.png" alt="">
                      <span style="margin-left: 5px">8/21/2023</span>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px">View Details
                      <img src="/assets/img/icon/right-arrow.png" style="margin-left: 5px;" alt="">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
              <div class="team-img">
                <img src="/assets/img/event/2.png" style="border-style: dotted;padding: 14px;color: #dfdbd5" alt="Team Image">
              </div>
              <div class="pera" style="margin-top: 20px">
                <h5 style="text-align: center;font-weight: bold">Lorem ipsum</h5>
                <p style="text-align: center">Lorem ipsum Lorem ipsum</p>
              </div>
              <div class="team-text">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px"><img src="/assets/img/icon/calendar.png" alt="">
                      <span style="margin-left: 5px">8/21/2023</span>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px">View Details
                      <img src="/assets/img/icon/right-arrow.png" style="margin-left: 5px;" alt="">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
              <div class="team-img">
                <img src="/assets/img/event/3.png" style="border-style: dotted;padding: 14px;color: #dfdbd5" alt="Team Image">
              </div>
              <div class="pera" style="margin-top: 20px">
                <h5 style="text-align: center;font-weight: bold">Lorem ipsum</h5>
                <p style="text-align: center">Lorem ipsum Lorem ipsum</p>
              </div>
              <div class="team-text">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px"><img src="/assets/img/icon/calendar.png" alt="">
                      <span style="margin-left: 5px">8/21/2023</span>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px">View Details
                      <img src="/assets/img/icon/right-arrow.png" style="margin-left: 5px;" alt="">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
              <div class="team-img">
                <img src="/assets/img/event/4.png" style="border-style: dotted;padding: 14px;color: #dfdbd5" alt="Team Image">
              </div>
              <div class="pera" style="margin-top: 20px">
                <h5 style="text-align: center;font-weight: bold">Lorem ipsum</h5>
                <p style="text-align: center">Lorem ipsum Lorem ipsum</p>
              </div>
              <div class="team-text">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px"><img src="/assets/img/icon/calendar.png" alt="">
                      <span style="margin-left: 5px">8/21/2023</span>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <p style="text-align: left;margin-left: 10px">View Details
                      <img src="/assets/img/icon/right-arrow.png" style="margin-left: 5px;" alt="">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->
  </div>
</template>

<script>
export default {
  name: "event.vue",
  auth:false,
  head() {
    return {
      title: "Event | DadHQ"
    };
  },
}
</script>

<style scoped>

</style>
