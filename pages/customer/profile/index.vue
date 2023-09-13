<template>
  <div class="banner_bottom_agile_info">
    <div class="container">
      <div class="grid_3 grid_5">
        <div class="row">
          <div class="col-md-6">
            <h1>Welcome</h1>
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
  created() {
   // this.form.fill(this.user);
  },
  methods: {
    //
    // updateProfile(){
    //   this.form.post(base_url + "api/auth/profile-update",{headers:{Authorization : this.$auth.strategy.token.get() }}).then(response => {
    //     //console.log(response)
    //     this.$toaster.success("Successfully Updated");
    //   }).catch(e => {
    //     this.isLoading = false;
    //   });
    // },
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
