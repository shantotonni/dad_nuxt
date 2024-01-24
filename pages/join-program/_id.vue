<template>
  <div>
    <!-- Contact Start -->
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <h2>For Program Join</h2>
        </div>
        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate" @submit.prevent="joinProgram" @keydown="form.onKeydown($event)">
                <div class="control-group">
                  <input type="text" class="form-control" id="first_name" v-model="form.first_name" :class="{ 'is-invalid': form.errors.has('first_name') }" placeholder="Enter First Name" required/>
                  <div class="error" v-if="form.errors.has('first_name')" v-html="form.errors.get('first_name')" />
                </div>
                <div class="control-group">
                  <input type="text" class="form-control" id="last_name" v-model="form.last_name" :class="{ 'is-invalid': form.errors.has('last_name') }" placeholder="Enter Last Name" required />
                  <div class="error" v-if="form.errors.has('last_name')" v-html="form.errors.get('last_name')" />
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Your Email" required="required" />
                  <div class="error" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="phone" v-model="form.phone" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter Your Phone" required="required" />
                  <div class="error" v-if="form.errors.has('phone')" v-html="form.errors.get('phone')" />
                </div>
                <div class="control-group">
                  <input type="number" class="form-control" id="ages_of_children" v-model="form.ages_of_children" :class="{ 'is-invalid': form.errors.has('ages_of_children') }" placeholder="Enter Ages Of Children" required="required" />
                  <div class="error" v-if="form.errors.has('ages_of_children')" v-html="form.errors.get('ages_of_children')" />
                </div>
                <div class="control-group">
                  <input type="number" class="form-control" id="ages_of_father" v-model="form.ages_of_father" :class="{ 'is-invalid': form.errors.has('ages_of_father') }" placeholder="Enter Ages Of Father" required="required" />
                  <div class="error" v-if="form.errors.has('ages_of_father')" v-html="form.errors.get('ages_of_father')" />
                </div>
<!--                <div class="input-group input-group-sm">-->
<!--                  <input type="checkbox" id="want_to_receive_email" v-model="form.want_to_receive_email" value="0" />-->
<!--                  <label class="checkbox-inline" for="want_to_receive_email" style="margin-left: 11px;margin-top: 8px;color: white">Want to receive email</label>-->
<!--                </div>-->
                <br>
                <div>
                  <button class="btn" type="submit" id="sendMessageButton">JOIN</button>
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
        ages_of_children:'',
        ages_of_father:'',
       // want_to_receive_email:'',
        program_id : this.$route.params.id
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
    joinProgram(){
      this.form.post( base_url + 'api/join-program').then((response)=>{
        if (response.data.status === 'success'){
          this.$toaster.success("Successfully Applied")
          setTimeout(()=>{
            this.$router.go();
          },1000)
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
.error{
  color: red;
}
</style>
