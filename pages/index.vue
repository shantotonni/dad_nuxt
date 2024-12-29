<template>
    <div>
      <!-- Carousel Start -->
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item" :class="i === 0 ? 'active' : ''" v-for="(slider, i) in sliders" :key="slider.id" v-if="sliders.length">
            <img :src="sliderImage(slider.image)" alt="Carousel Image">
            <div class="carousel-caption">
<!--              <h1 class="animated fadeInLeft">Your Are A <span style="color: #00ACFF">Great Dad</span></h1>-->
              <h1 class="animated fadeInLeft">{{ slider.title }}</h1>
              <p class="animated fadeInRight" style="font-size: 18px;" v-html="slider.paragraph"></p>
              <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>
            </div>
          </div>

<!--          <div class="carousel-item">-->
<!--              <img src="/assets/img/slider/1.png" alt="Carousel Image">-->
<!--              <div class="carousel-caption">-->
<!--                <h1 class="animated fadeInLeft">Together, We Make a Home</h1>-->
<!--                <p class="animated fadeInRight" style="font-size: 20px;">Build a strong family foundation with our community and take courses that strengthen your bonds.</p>-->
<!--                <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>-->
<!--              </div>-->
<!--          </div>-->

<!--          <div class="carousel-item">-->
<!--              <img src="/assets/img/slider/1.png" alt="Carousel Image">-->
<!--              <div class="carousel-caption">-->
<!--                <h1 class="animated fadeInLeft">Guiding Every Step of the Way</h1>-->
<!--                <p class="animated fadeInRight" style="font-size: 20px;">Discover how our community can support you in guiding your child's journey. Explore our events and courses today</p>-->
<!--                <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>-->
<!--              </div>-->
<!--          </div>-->
        </div>

        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- Carousel End -->

      <!-- Feature Start-->
      <div class="feature wow fadeInUp" data-wow-delay="0.1s">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="flaticon-worker"></i>
                </div>
                <div class="feature-text">
                  <h3>Our total registered member 900+</h3>
                  <p>Join our thriving community of over 900 registered members today and be a part of something special.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="flaticon-building"></i>
                </div>
                <div class="feature-text">
                  <h3>Expand Your Knowledge</h3>
                  <p>Discover endless opportunities to expand your knowledge, opening new doors to personal growth.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="flaticon-call"></i>
                </div>
                <div class="feature-text">
                  <h3>Embrace the Freedom of Lifelong Learning</h3>
                  <p>Knowledge knows no bounds, and curiosity fuels your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Feature End-->

      <!-- Service Start -->
      <!--
      <div class="service">
        <div class="container">
          <div class="section-header text-center">
            <h2>Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="margin-bottom: 45px">
              <div class="service-item" style="background: white;border-radius: 35px;box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="service-img">
                  <img src="/assets/img/1.png" alt="Image">
                </div>
                <div class="service-text">
                  <h4 style="font-size: 18px;font-weight: bold;">Lorem Ipsum</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a class="btn" href="#" data-lightbox="service" style="box-shadow: rgb(231, 230, 224) 0px 0px 12px 12px"><img src="/assets/img/service/1.png" alt=""></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="margin-bottom: 45px">
              <div class="service-item" style="background: white;border-radius: 35px;box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="service-img">
                  <img src="/assets/img/1.png" alt="Image">
                </div>
                <div class="service-text">
                  <h4 style="font-size: 18px;font-weight: bold;">Lorem Ipsum</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a class="btn" href="#" data-lightbox="service" style="box-shadow: rgb(231, 230, 224) 0px 0px 12px 12px"><img src="/assets/img/service/1.png" alt=""></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="margin-bottom: 45px">
              <div class="service-item" style="background: white;border-radius: 35px;box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="service-img">
                  <img src="/assets/img/1.png" alt="Image">
                </div>
                <div class="service-text">
                  <h4 style="font-size: 18px;font-weight: bold;">Lorem Ipsum</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a class="btn" href="#" data-lightbox="service" style="box-shadow: rgb(231, 230, 224) 0px 0px 12px 12px"><img src="/assets/img/service/1.png" alt=""></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      -->
      <!-- Service End -->

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
<!--                <p style="margin-bottom: 6px"><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px"> <span style="font-size: 14px;margin-left: 5px;color: black">•	Engaging Learning: Immerse yourself in a dynamic learning environment that encourages active participation and exploration.</span></p>-->
<!--                <p><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px"> <span style="font-size: 14px;margin-left: 5px;color: black">•	Customized Learning Paths: Tailor your educational journey to your preferences and pace, shaping your learning experience.</span></p>-->

                 <!--<div style="display: flex;background: #F5F4EF;padding: 17px;">
                  <img src="/assets/img/icon/2.png" style="height: 40px" alt="">
                  <p style="margin-left: 10px;font-size: 13px;margin-bottom: 0px">Learn at your own pace, with lifetime
                    access on mobile and desktop.</p>
                </div> -->
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

      <!-- program Start -->
      <div class="fact">
        <div class="container-fluid">
          <div class="row counters">
            <div class="col-md-6 fact-left wow slideInLeft" v-for="(program, i) in programs" :key="program.id" v-if="programs.length" style="padding-bottom: 0px!important;">
              <div class="row" style="background: #F6F0E0;padding: 20px;margin: 0 auto;box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="col-6 col-sm-6">
                  <div class="fact-text" style="margin-top: 60px;">
                    <h2 style="color: #00A8FF;font-size: 25px">{{ program.title }}</h2>
<!--                    <p style="font-size: 11px"><span>Date : {{ program.program_date }}</span> <span style="margin-left: 11px">Time: {{ program.program_time }}</span></p>-->
                    <p style="color: black;font-size: 14px">{{ program.short }}</p>
                    <nuxt-link :to="`/program-details/${program.id}`" class="btn" style="background: #00A8FF;padding: 11px 14px;color: white;margin-top: 15px;font-size: 13px">View Details</nuxt-link>
                  </div>
                </div>
                <div class="col-6 col-sm-6">
                  <div>
                    <img :src="programImage(program.image)" style="height: 240px" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fact End -->

      <!-- Video Start -->
<!--      <h2 style="text-align: center;margin-top: 100px">Lorem ipsum dolor sit amet</h2>-->

<!--      <div class="col-md-6 offset-md-3">-->
<!--        <div class="video wow fadeIn" data-wow-delay="0.1s">-->
<!--          <div class="container">-->
<!--            <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">-->
<!--              <span></span>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <!-- 16:9 aspect ratio -->
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Video End -->

      <!-- Team Start -->
      <div class="team">
        <div class="container">
          <div class="section-header text-center">
            <h2>Events</h2>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>-->
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="(event, i) in events" :key="event.id" v-if="events.length">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="team-img">
                  <img :src="eventImage(event.image)"  style="border-style: dotted;padding: 14px;color: #dfdbd5;height: 330px" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px">
                  <h5 style="text-align: center;font-weight: bold">{{ event.title }}</h5>
                  <p style="text-align: center;font-size: 12px">
                    <span>Community Partner:</span>
                    <span v-html="event.description"></span>
                  </p>
                </div>
                <div class="team-text">
                  <div class="row">
                    <div class="col-lg-8 col-md-8">
                      <p style="text-align: left;margin-left: 10px">
                        <img src="/assets/img/icon/calendar.png" alt="">
                        <span style="margin-left: 5px">{{ event.event_date }}</span>
                      </p>
                    </div>
                    <div class="col-lg-4 col-md-4">
                      <nuxt-link :to="`/join-event/${event.id}`" style="background: #00A8FF;color: white;font-size: 13px">Join Now</nuxt-link>
<!--                      <p data-toggle="modal" style="text-align: right" data-target=".bd-example-modal-lg" @click="blogDetails(event)">-->
<!--                        <nuxt-link :to="`/join-event/${event.id}`" class="btn" style="background: #00A8FF;padding: 11px 14px;color: white;margin-top: 15px;font-size: 13px">Join Now</nuxt-link>-->
<!--&lt;!&ndash;                        <img src="/assets/img/icon/right-arrow.png" style="margin-left: 5px;" alt="">&ndash;&gt;-->
<!--                      </p>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Team End -->

      <!-- Team Start -->
      <div class="team" style="background: white">
        <div class="container">
          <div class="section-header text-center">
            <h2>Meet Our Expert Instructor</h2>
          </div>
          <div class="row">
            <div class="col-lg-5 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="team-img">
                  <img :src="instructorImage(instructor.image)" alt="Team Image" style="width: 100%;height: 400px">
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="pera" style="margin-top: 20px;margin-left: 15px">
                  <h5 style="font-weight: bold">{{ instructor.name }}</h5>
                  <p v-html="instructor.description"></p>
<!--                  <div class="row">-->
<!--                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">-->
<!--                      <h5 style="font-weight: bold">Educational Qualification</h5>-->
<!--                      <p v-html="instructor.educational_qualification"></p>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">-->
<!--                      <h5 style="font-weight: bold">Experience</h5>-->
<!--                      <p v-html="instructor.experience"></p>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Team End -->

      <!-- FAQs Start -->
      <div class="faqs">
        <div class="container">
          <div class="section-header text-center">
            <h2>You May Ask</h2>
            <p>Frequently Asked Questions</p>
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

      <!-- Testimonial Start -->
      <div class="testimonial wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="testimonial-slider-nav">

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="testimonial-slider">
                <div class="slider-item">
                  <h3>Yusuf</h3>
                  <h4>Attendee March 2022</h4>
                  <p>“Mr. Faisel was more of a friend rather than an instructor of this course. From one father to another he was caring, up lifting, and most importantly understanding of day to day father struggles.”</p>
                </div>
                <div class="slider-item">
                  <h3></h3>
                  <h4>Attendee March 2022</h4>
                  <p>“This program made me realize so many little things such as how important it is to spend time with your children, and the impact it has on their development. ”</p>
                </div>
                <div class="slider-item">
                  <h3></h3>
                  <h4>Attendee</h4>
                  <p>“This course has highlighted many core areas that I want to practice in my day to day life. ”</p>
                </div>
                <div class="slider-item">
                  <h3></h3>
                  <h4>Attendee</h4>
                  <p>“The importance of listening to your children needs in a neutral way, and encouraging them to open up about their feelings. ”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Testimonial End -->

      <!-- Blog Start -->
      <div class="blog">
        <div class="container">
          <div class="section-header text-center">
            <h2>Partner</h2>
<!--            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. </p>-->
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s" v-for="(partner, i) in partners" :key="partner.id" v-if="partners.length">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img :src="partnerImage(partner.image)" alt="Team Image" style="height: 40px!important;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Blog End -->

      <!-- Modal -->
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ blog_details.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p v-html="blog_details.description"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
export default {
  auth:false,
  name: "IndexPage",
  layout: "home",
  head() {
    return {
      //
    };
  },
  data() {
    return {
      programs : [],
      partners : [],
      instructor : [],
      events : [],
      sliders : [],
      brands: [],
      blog_details: {}
    };
  },
  mounted() {
        document.title = 'Home | DadHQ';
        this.loadSlickSlider()
        this.getAllProgram()
        this.getAllEvents()
        this.getAllSlider()
        this.getInstructor()
        this.getAllPartner()
    },
    methods: {
      getAllProgram(){
        this.$axios.get( base_url + 'api/get-all-program').then((response)=>{
          this.programs = response.data.data;
        }).catch((error)=>{
        })
      },
      getAllSlider(){
        this.$axios.get( base_url + 'api/get-all-slider').then((response)=>{
          console.log(response)
          this.sliders = response.data.data;
        }).catch((error)=>{
        })
      },
      getAllEvents(){
        this.$axios.get( base_url + 'api/get-all-events').then((response)=>{
          this.events = response.data.data;
        }).catch((error)=>{
        })
      },
      getInstructor(){
        this.$axios.get( base_url + 'api/get-instructor').then((response)=>{
          console.log(response.data.data[0])
          this.instructor = response.data.data[0];
        }).catch((error)=>{
        })
      },
      getAllPartner(){
        this.$axios.get( base_url + 'api/get-all-partner').then((response)=>{
          this.partners = response.data.data;
        }).catch((error)=>{
        })
      },
      programImage(image){
        return base_url + "images/program/"+ image;
      },
      eventImage(image){
        return base_url + "images/event/"+ image;
      },
      sliderImage(image){
        return base_url + "images/slider/"+ image;
      },
      instructorImage(image){
        return base_url + "images/instructor/"+ image;
      },
      partnerImage(image){
        return base_url + "images/partner/"+ image;
      },
      loadSlickSlider(){
        // Testimonial Slider
        $('.testimonial-slider').slick({
          infinite: true,
          autoplay: true,
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.testimonial-slider-nav'
        });
        $('.testimonial-slider-nav').slick({
          arrows: false,
          dots: false,
          focusOnSelect: true,
          centerMode: true,
          centerPadding: '22px',
          slidesToShow: 3,
          asNavFor: '.testimonial-slider'
        });
        $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
      },
      blogDetails(event){
        this.blog_details = event
        $("#blogModal").modal("show");
      }
    },
}
</script>

<style scoped>

</style>

