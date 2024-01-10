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
          <div class="carousel-item active">
            <img src="/assets/img/slider/1.png" alt="Carousel Image">
            <div class="carousel-caption">
<!--              <h1 class="animated fadeInLeft">Your Are A <span style="color: #00ACFF">Great Dad</span></h1>-->
              <h1 class="animated fadeInLeft">Fathers: The Heart of the Family</h1>
              <p class="animated fadeInRight" style="font-size: 20px;">Our community celebrates fathers as the heart of the family. Join us and grow with our enriching courses.</p>
              <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>
            </div>
          </div>

          <div class="carousel-item">
              <img src="/assets/img/slider/1.png" alt="Carousel Image">
              <div class="carousel-caption">
                <h1 class="animated fadeInLeft">Together, We Make a Home</h1>
                <p class="animated fadeInRight" style="font-size: 20px;">Build a strong family foundation with our community and take courses that strengthen your bonds.</p>
                <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>
              </div>
          </div>

          <div class="carousel-item">
              <img src="/assets/img/slider/1.png" alt="Carousel Image">
              <div class="carousel-caption">
                <h1 class="animated fadeInLeft">Guiding Every Step of the Way</h1>
                <p class="animated fadeInRight" style="font-size: 20px;">Discover how our community can support you in guiding your child's journey. Explore our events and courses today</p>
                <nuxt-link class="btn animated fadeInUp" to="program">Program</nuxt-link>
              </div>
          </div>
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
                  Welcome to a community of beloved fathers, where our shared commitment to nurturing and supporting each other sets us apart. Here, we embrace the journey of fatherhood and all its joys and challenges. Join us as we explore what defines us as fathers and how we can collectively grow in this beautiful journey of parenthood.
                </p>
                <p style="margin-bottom: 6px"><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px;"> <span style="font-size: 14px;margin-left: 5px;color: black">•	Expertise and Quality: Dive into expertly crafted courses that prioritize depth and excellence in content.</span></p>
                <p style="margin-bottom: 6px"><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px"> <span style="font-size: 14px;margin-left: 5px;color: black">•	Engaging Learning: Immerse yourself in a dynamic learning environment that encourages active participation and exploration.</span></p>
                <p><img src="/assets/img/icon/1.png" alt="" style="height: 18px;width: 17px"> <span style="font-size: 14px;margin-left: 5px;color: black">•	Customized Learning Paths: Tailor your educational journey to your preferences and pace, shaping your learning experience.</span></p>

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
            <div class="col-md-6 fact-left wow slideInLeft" v-for="(program, i) in programs" :key="program.id" v-if="programs.length">
              <div class="row" style="background: #F6F0E0;padding: 20px;margin: 0 auto;box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="col-6 col-sm-6">
                  <div class="fact-text" style="margin-top: 60px;">
                    <h2 style="color: #00A8FF;font-size: 25px">{{ program.title }}</h2>
                    <p style="color: black;font-size: 12px">{{ program.short }}</p>
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
      <h2 style="text-align: center;margin-top: 100px">Lorem ipsum dolor sit amet</h2>

      <div class="col-md-6 offset-md-3">
        <div class="video wow fadeIn" data-wow-delay="0.1s">
          <div class="container">
            <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
              <span></span>
            </button>
          </div>
        </div>
      </div>

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
            <h2>Event</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="(event, i) in events" :key="event.id" v-if="events.length">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #e7e6e0;">
                <div class="team-img">
                  <img :src="eventImage(event.image)"  style="border-style: dotted;padding: 14px;color: #dfdbd5;height: 260px" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px">
                  <h5 style="text-align: center;font-weight: bold">{{ event.title }}</h5>
                  <p style="text-align: center">Lorem ipsum Lorem ipsum</p>
                </div>
                <div class="team-text">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <p style="text-align: left;margin-left: 10px">
                        <img src="/assets/img/icon/calendar.png" alt="">
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

      <!-- Team Start -->
      <div class="team" style="background: white">
        <div class="container">
          <div class="section-header text-center">
            <h2>Meet Our Expert Instructors</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="team-img">
                  <img src="/assets/img/meet/1.png" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px;margin-left: 15px">
                  <h5 style="font-weight: bold">Faisal Ahmed<img src="/assets/img/icon/star.png" alt=""></h5>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="team-img">
                  <img src="/assets/img/meet/2.png" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px;margin-left: 15px">
                  <h5 style="font-weight: bold">Lorem ipsum <img src="/assets/img/icon/star.png" alt=""></h5>
                  <p>Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="team-img">
                  <img src="/assets/img/meet/3.png" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px;margin-left: 15px">
                  <h5 style="font-weight: bold">Lorem ipsum <img src="/assets/img/icon/star.png" alt=""></h5>
                  <p>Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;">
                <div class="team-img">
                  <img src="/assets/img/meet/4.png" alt="Team Image">
                </div>
                <div class="pera" style="margin-top: 20px;margin-left: 15px">
                  <h5 style="font-weight: bold">Lorem ipsum <img src="/assets/img/icon/star.png" alt=""></h5>
                  <p>Lorem ipsum Lorem ipsum</p>
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
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseOne" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInLeft" data-wow-delay="0.2s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseTwo" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInLeft" data-wow-delay="0.3s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseThree" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInLeft" data-wow-delay="0.4s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseFour" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInLeft" data-wow-delay="0.5s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseFive" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div id="accordion-2">
                <div class="card wow fadeInRight" data-wow-delay="0.1s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseSix" class="collapse" data-parent="#accordion-2">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInRight" data-wow-delay="0.2s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseSeven" class="collapse" data-parent="#accordion-2">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInRight" data-wow-delay="0.3s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseEight" class="collapse" data-parent="#accordion-2">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInRight" data-wow-delay="0.4s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseNine" class="collapse" data-parent="#accordion-2">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div class="card wow fadeInRight" data-wow-delay="0.5s">
                  <div class="card-header">
                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseTen" class="collapse" data-parent="#accordion-2">
                    <div class="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
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
                <div class="slider-nav"><img src="/assets/img/testimonial-1.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-2.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-3.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-4.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-1.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-2.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-3.jpg" alt="Testimonial"></div>
                <div class="slider-nav"><img src="/assets/img/testimonial-4.jpg" alt="Testimonial"></div>
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
            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. </p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item" style="box-shadow: 0px 0px 12px 12px #f1eeee;background: white;padding: 15px 0;text-align: center;border-radius: 15px">
                <div class="team-img" style="border-style: dashed;margin: 0px 10px;padding: 15px;border-radius: 15px;color: #F6F4EF">
                  <img src="/assets/img/partner/1.png" alt="Team Image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Blog End -->
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
      events : [],
      brands: [],
    };
  },
  mounted() {
        document.title = 'Home | DadHQ';
        this.loadSlickSlider()
        this.getAllProgram()
        this.getAllEvents()
    },
    methods: {
      getAllProgram(){
        this.$axios.get( base_url + 'api/get-all-program').then((response)=>{
          this.programs = response.data.data;
        }).catch((error)=>{
        })
      },
      getAllEvents(){
        this.$axios.get( base_url + 'api/get-all-events').then((response)=>{
          console.log(response)
          this.events = response.data.data;
        }).catch((error)=>{
        })
      },
      programImage(image){
        return base_url + "images/program/"+ image;
      },
      eventImage(image){
        return base_url + "images/event/"+ image;
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
      }
    },
}
</script>

<style scoped>

</style>

