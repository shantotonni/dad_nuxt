<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Program</h2>
          </div>
          <div class="col-12">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/program">Program</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->


    <!-- program Start -->
    <div class="fact">
      <div class="container-fluid">
        <div class="row counters">
          <div class="col-md-6 fact-left wow slideInLeft">
            <div class="row" style="background: #F6F0E0;padding: 20px;margin: 0 auto;box-shadow: 0px 0px 12px 12px #e7e6e0;min-height: 470px">
              <div class="col-6 col-sm-6">
                <div class="fact-text" style="margin-top: 60px;">
                  <h2 style="color: #00A8FF;font-size: 25px">You are a Great Dad</h2>
                  <p style="color: black;font-size: 15px">Empower your fatherhood journey with while fostering stronger bonds and cherished memories.</p>
                </div>
              </div>
              <div class="col-6 col-sm-6">
                <div>
                  <img src="/assets/img/service/2.png" style="height: 240px" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <p style="margin-top: 25px;color: black">
                  At 'You Are a Great Dad,' we celebrate the essence of fatherhood. Our program is designed to empower fathers like you to build stronger bonds with their children and create lasting memories. We provide valuable insights, practical tips, and a supportive community to help you navigate the rewarding journey of parenthood.
                  Join us to unlock your full potential as a great dad and make a positive impact on your family's life.
                </p>

                <p style="color: black">Course duration: 4 weeks</p> 
                <p style="color: black">Cost: Free </p> 
                <p style="color: black">Course Objectives:</p>
                <p style="margin-top: 25px;color: black"> 
                <ul>
                <li>Highlighting the importance of engaging fathers in the lives of their children</li>
                <li>Building strong vibrant father engagement</li>
                <li>Assessing and promoting strengths within fathers</li>
                <li>Encouraging and respecting men in their roles as fathers</li>
                <li>Inspiring a father’s participation in all aspects of their children’s lives</li>
                </ul>
                </p> 
                <a href="login" class="btn" style="background: #00A8FF;padding: 11px 14px;color: white;margin-top: 15px;font-size: 13px">Join Program</a>

              </div>
            </div>
          </div>
          <div class="col-md-6 fact-right wow slideInRight">
            <div class="row" style="background: #F6F0E0;padding: 20px;margin: 0 auto;box-shadow: 0px 0px 12px 12px #e7e6e0;min-height: 470px">
              <div class="col-6">
                <div class="fact-text" style="margin-top: 60px;">
                  <h2 style="color: #00A8FF;font-size: 25px">The Shepherd</h2>
                  <p style="color: black;font-size: 15px">Guiding fathers with Muslim values to lead their families with love, faith, and compassion.</p>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <img src="/assets/img/service/3.png" style="height: 240px" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <p style="margin-top: 25px;color: black">
                  Introducing 'The Shepherd' program, where we draw inspiration from Islamic values to guide fathers in their roles as shepherds of their families.
                  Just as a shepherd tends to and protects their flock, this program encourages fathers to provide spiritual guidance, love, and support within their homes.
                  We offer resources, discussions, and a nurturing community rooted in Islamic principles to help you strengthen your faith and be the best shepherd to your family.
                  Join us on this spiritual journey as we shepherd our families with wisdom, compassion, and devotion."
                </p>

                <p> Course duration: 6 weeks</p> 
                <p>Cost: Free </p> 
                <p>Course Objectives:</p>
                <p> 
                <ul>
                <li>Highlighting the importance of engaging fathers in the lives of their children</li>
                <li>Building strong vibrant father engagement using Islamic values</li>
                <li>Assessing and promoting strengths within fathers</li>
                <li>Encouraging and respecting men in their roles as fathers</li>
                <li>Inspiring a father’s participation in all aspects of their children’s lives</li>
                </ul>
                </p> 
                <a href="login" class="btn" style="background: #00A8FF;padding: 11px 14px;color: white;margin-top: 15px;font-size: 13px">Join Program</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fact End -->
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
