<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Login</h2>
          </div>
          <div class="col-12">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Contact Start -->
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <h2>For Member Login</h2>
        </div>
        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate" @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="control-group">
                  <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Your Email" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Enter password" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <br>
                <div>
                  <button class="btn" type="submit" id="sendMessageButton">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact End -->
  </div>
</template>

<script>
import Form from "vform";

export default {
  name: "login",
  auth: "guest",
  head() {
    return {
      title: "Login | DadHQ"
    };
  },
  data(){
    return {
      form: new Form({
        email:'',
        password:'',
      }),
    }
  },
  methods:{
   login(){
     this.$auth.loginWith('local',{data:this.form}).then((response)=>{
       if (response.data.status === 401){
         this.$toaster.error("UserId or Password Not Match")
       }else {
         this.$router.push('/customer/profile');
         this.$toaster.success('Successfully LoggedIn')
       }
     })
   },
 }
}
</script>

<style scoped>
.agile_ab_w3ls_info {
  /*background: #f9f9f9;*/
}
label {
  font-weight: normal;
}
.form-control {
  height: 40px;
}
</style>
