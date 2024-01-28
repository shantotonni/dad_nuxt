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
          <nuxt-link to="/about">About Us</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Header End -->


  <!-- About Start -->
  <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
          <div class="section-header text-left">
            <h2>Your Learning Journey,Your Way</h2>
          </div>
          <div class="about-text">
            <p>
              A Great Dad Academy was founded by Faisel Ahmed in September 2023. After 10 years of providing programs catered for fathers,
              Faisel understood and saw the importance of parenting programs for fathers and launched A Great Dad Academy.  Previously, Mr. Ahmed spent over 10 years presenting,
              researching content that would empower fathers to understand the impact of their roles in the lives of their children and family.
            </p>
            <p style="margin-bottom: 6px"><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px;">
              <span style="font-size: 14px;margin-left: 5px;color: black">
                    GOAL: A Great Dad Academy aims to provide programs that empower fathers, relationship building and developing connections with peers.
                  </span>
            </p>
<!--            <div style="display: flex;background: #F5F4EF;padding: 17px;">-->
<!--              <img src="/assets/img/icon/2.png" style="height: 40px" alt="">-->
<!--              <p style="margin-left: 10px;font-size: 13px;margin-bottom: 0px">Learn at your own pace, with lifetime-->
<!--                access on mobile and desktop.</p>-->
<!--            </div>-->
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="about-img">
            <img src="/assets/img/3rd/1.jpg" alt="Image">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->



  <!-- FAQs Start -->
  <div class="faqs">
    <div class="container">
      <div class="section-header text-center">
        <p>Frequently Asked Question</p>
        <h2>You May Ask</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div id="accordion-1">
            <div class="card wow fadeInLeft" data-wow-delay="0.1s">
              <div class="card-header">
                <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                  Who is this Program for?
                </a>
              </div>
              <div id="collapseOne" class="collapse" data-parent="#accordion-1">
                <div class="card-body">
                  For fathers who want to build strong meaningful connections with their children.
                </div>
              </div>
            </div>
            <div class="card wow fadeInLeft" data-wow-delay="0.3s">
              <div class="card-header">
                <a class="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                  Where is this program held?
                </a>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordion-1">
                <div class="card-body">
                  You’re A Great Dad and The Shepherd can be offered virtually or on site
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div id="accordion-2">
            <div class="card wow fadeInLeft" data-wow-delay="0.2s">
              <div class="card-header">
                <a class="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                  What does this program offer?
                </a>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordion-1">
                <div class="card-body">
                  - Highlighting the importance of engaging fathers in the lives of their children

                  - Developing effective communication strategies

                  - Understanding your child’s emotional and social development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FAQs End -->
</div>
</template>

<script>
export default {
  name: "about.vue",
  auth:false,
  head() {
    return {
      title: "About | DadHQ"
    };
  },
}
</script>

<style scoped>

</style>
