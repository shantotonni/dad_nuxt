<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Registration</h2>
          </div>
          <div class="col-12">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/registration">Registration</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Contact Start -->
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <h2>For Registration</h2>
        </div>
        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate" @submit.prevent="registration" @keydown="form.onKeydown($event)">
                <div class="control-group">
                  <input type="text" class="form-control" id="first_name" v-model="form.first_name" placeholder="Enter First Name" required/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="text" class="form-control" id="last_name" v-model="form.last_name" placeholder="Enter Last Name" required />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Your Email" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="phone" v-model="form.phone" placeholder="Enter Your Phone" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="number" class="form-control" id="ages_of_children" v-model="form.ages_of_children" placeholder="Enter Ages Of Children" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="number" class="form-control" id="ages_of_father" v-model="form.ages_of_father" placeholder="Enter Ages Of Father" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Enter password" required="required" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="input-group input-group-sm">
                  <input type="checkbox" id="want_to_receive_email" v-model="form.want_to_receive_email" value="0" />
                  <label class="checkbox-inline" for="want_to_receive_email" style="margin-left: 11px;margin-top: 8px;color: white">Want to receive email</label>
                </div>
                <br>
                <div>
                  <button class="btn" type="submit" id="sendMessageButton">Registration</button>
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
import Form from 'vform'
import {base_url} from "~/plugins/base_url";
export default {
  name: "registration",
  auth:false,
  head() {
    return {
      title: "Registration | DadHQ"
    };
  },
  data(){
    return {
      form: new Form({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        password:'',
        ages_of_children:'',
        ages_of_father:'',
        want_to_receive_email:'',
      }),
    }
  },
  mounted() {
    //
  },
  created() {
    //
  },
  methods: {
    registration(){
      this.form.post( base_url + 'api/auth/registration').then((response)=>{
        console.log(response)
        if (response.data.message === 'success'){
          this.$router.push('/login')
          this.$toaster.success("Successfully Registered")
        }
      }).catch((error)=>{
        //
      })
    },
  }
}
</script>

<style scoped>
.agile_ab_w3ls_info {
  background: #f9f9f9;
}
label {
  font-weight: normal;
}
.form-control {
  height: 40px;
}
</style>
