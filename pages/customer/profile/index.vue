<template>
  <div class="banner_bottom_agile_info">
    <div class="container">
      <div class="grid_3 grid_5">
        <div class="row">
          <div class="col-md-6">
            <br>
            <br>
            <p style="background: #030F27;padding: 8px;color: white">Welcome To Customer Panel</p>

            <form @submit.prevent="UpdateProfile" @keydown="form.onKeydown($event)">
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
                <input type="text" class="form-control" id="phone" v-model="form.phone" placeholder="Enter Your Phone" />
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
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

          <div class="col-md-6">
            <br>
            <br>
<!--            <p style="background: #030F27;padding: 8px;color: white">Welcome To Customer Panel</p>-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import {base_url} from "~/plugins/base_url";
export default {
  name: "dashboard",
  middleware : 'auth',
  head() {
    return {
      title: "Customer Profile | DadHQ"
    };
  },
  data(){
    return {
      user: this.$auth.user,
      form: new Form({
        id:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        ages_of_children:'',
        ages_of_father:'',
      }),
    }
  },
  created() {
    this.form.fill(this.user);
    console.log(this.user)
  },
  methods: {
    UpdateProfile(){
      this.form.post(base_url + "api/auth/profile-update",{headers:{Authorization : this.$auth.strategy.token.get() }}).then(response => {
        console.log(response)
        this.$toaster.success("Successfully Updated");
      }).catch(e => {
        this.isLoading = false;
      });
    },
  }
}
</script>

<style scoped>
.table > thead > tr > th {
  color: white;
}
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
label {
  font-weight: normal;
  font-size: 13px;
}
.form-control {
  height: 35px;
}
</style>
