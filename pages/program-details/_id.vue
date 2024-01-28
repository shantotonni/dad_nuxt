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
          <div class="col-md-2 fact-right wow slideInRight"></div>
          <div class="col-md-8 fact-left wow slideInLeft">
            <div class="row" style="background: #F6F0E0;padding: 20px;margin: 0 auto;box-shadow: 0px 0px 12px 12px #e7e6e0;min-height: 470px">
              <div class="col-6 col-sm-6">
                <div class="fact-text" style="margin-top: 60px;">
                  <h2 style="color: #00A8FF;font-size: 25px">{{ program.title }}</h2>
                  <p style="color: black;font-size: 15px">{{ program.short }}</p>
                </div>
              </div>
              <div class="col-6 col-sm-6">
                <div>
                  <img :src="programImage(program.image)" style="height: 240px" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <p v-html="program.description" style="margin-top: 10px;color: black"> </p>
<!--                <a class="btn btn-primary px-3" style="color: white" @click="programJoin(program.id)" v-if="$auth.loggedIn !== false">Join Now</a>-->
<!--                <nuxt-link to="/login" class="btn btn-primary px-3" v-else>Join Now</nuxt-link>-->
                <nuxt-link :to="`/join-program/${program.id}`" class="btn" style="background: #00A8FF;padding: 11px 14px;color: white;margin-top: 15px;font-size: 13px">Join Now</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-md-2 fact-right wow slideInRight"></div>
        </div>
      </div>
    </div>
    <!-- Fact End -->
  </div>
</template>

<script>
import {base_url} from "~/plugins/base_url";
export default {
  name: "program.vue",
  auth:false,
  head() {
    return {
      title: "Program | DadHQ"
    };
  },
  data() {
    return {
      program : [],
    };
  },
  created() {
    //
  },
  mounted() {
    document.title = 'Program Details | DadHQ';
    this.programDetails();
  },
  methods: {
    programDetails() {
      this.$axios.get( base_url + 'api/get-program-details?id=' + this.$route.params.id).then((response)=>{
        this.program = response.data.details;
      }).catch((error)=>{
        console.log(error);
      })
    },
    programImage(image){
      return base_url + "images/program/"+ image;
    },
    programJoin(id){
      this.$axios.get( base_url + 'api/join-event?ProgramId=' + id, {headers:{Authorization : this.$auth.strategy.token.get() }}).then((response)=>{
        this.$toaster.success("Successfully Submitted! Please Go to Your Profile");
      }).catch((error)=>{
      })
    }
  }
}
</script>

<style scoped>

</style>
