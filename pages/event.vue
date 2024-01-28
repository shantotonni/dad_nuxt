<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Events</h2>
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
  name: "event.vue",
  auth:false,
  head() {
    return {
      title: "Event | DadHQ"
    };
  },
  data(){
    return{
      events: [],
      blog_details: {}
    }
  },
  mounted() {
    this.getAllEvents();
  },
  methods:{
    getAllEvents(){
      this.$axios.get( base_url + 'api/get-all-events').then((response)=>{
        console.log(response)
        this.events = response.data.data;
      }).catch((error)=>{
      })
    },
    eventImage(image){
      return base_url + "images/event/"+ image;
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
