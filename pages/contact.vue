<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Contact Us</h2>
          </div>
          <div class="col-12">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Contact Start -->
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <p>Get In Touch</p>
          <h2>For Any Query</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="contact-info">
<!--              <div class="contact-item">-->
<!--                <i class="flaticon-address"></i>-->
<!--                <div class="contact-text">-->
<!--                  <h2>Location</h2>-->
<!--                  <p>123 Street, Demo, CA</p>-->
<!--                </div>-->
<!--              </div>-->
              <div class="contact-item">
                <i class="flaticon-call"></i>
                <div class="contact-text">
                  <h2>Phone</h2>
                  <p>780 297 5057</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="flaticon-send-mail"></i>
                <div class="contact-text">
                  <h2>Email</h2>
                  <p>faisela@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate" @submit.prevent="store" @keydown="form.onKeydown($event)">
                <div class="control-group">
                  <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea class="form-control" id="message" v-model="form.message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
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
import {base_url} from "~/plugins/base_url";

export default {
  name: "contact.vue",
  auth:false,
  head() {
    return {
      title: "Contact | DadHQ"
    };
  },
  data(){
    return {
      form: new Form({
        id:'',
        name:'',
        email:'',
        subject:'',
        message:'',
      }),
    }
  },
  methods: {
    store(){
      this.form.post( base_url + 'api/contact-store').then((response)=>{
        this.$toaster.success("Successfully Registered")
      }).catch((error)=>{
        //
      })
    },
  }
}
</script>

<style scoped>

</style>
