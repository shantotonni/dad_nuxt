<template>
  <div>
    <div class="banner_bottom_agile_info">
      <div class="container">
        <div class="agile_ab_w3ls_info">
          <div class="row">
            <div class="col-md-7 ab_pic_w3ls_text_info">
              <div class="modal-body modal-body-sub_agile" style="background: #f1f1f1;padding: 30px;">
                <div class="col-md-8 modal_body_left modal_body_left1">
                  <h3 class="agileinfo_sign">{{ $t('sign_in_now') }}</h3>
                  <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                    <div class="form-group">
                      <label for="Mobile">{{ $t('mobile') }}</label>
                      <input type="text" class="form-control" id="Mobile" placeholder="" v-model="form.Mobile">
                      <div class="error" v-if="form.errors.has('Mobile')" v-html="form.errors.get('Mobile')" />
                    </div>
                    <div class="form-group">
                      <label for="Password">{{ $t('password') }}</label>
                      <input type="password" class="form-control" id="Password" placeholder="" v-model="form.Password">
                      <div class="error" v-if="form.errors.has('Password')" v-html="form.errors.get('Password')" />
                    </div>
                    <input type="submit" value="Sign In">
                  </form>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="col-md-5 ab_pic_w3ls_text_info">
              <div class="modal-body modal-body-sub_agile" style="background: #f1f1f1;padding: 30px;">
                <div class="col-md-12 modal_body_left modal_body_left1">
                  <h3 class="agileinfo_sign" style="text-align: center;margin-bottom: 0">{{ $t('customer_seller') }}</h3>
                  <p style="text-align: center">{{ $t('have_account') }}</p>
                  <div class="row" style="text-align: center">
                    <button type="button" @click="customer()" class="btn btn-success">{{ $t('become_a_customer') }}</button>
                    <button type="button" @click="seller()" class="btn btn-success">{{ $t('become_a_seller') }}</button>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";

export default {
  name: "login",
  auth: "guest",
  head() {
    return {
      title: "Login | Market Exchange"
    };
  },
  data(){
    return {
      brand: this.$route.params.brand,
      form: new Form({
        Mobile:'',
        Password:'',
      }),
    }
  },
  methods:{
   login(){
     let instance = this;
     let code = this.$route.fullPath;
     let finalCode = code.slice(0,6)
     this.$auth.loginWith('local',{data:this.form}).then((response)=>{
       if (response.data.status === 401){
         this.$toaster.error("UserId or Password Not Match")
       }else {
         if (finalCode === '/en-US'){
           this.$router.push(finalCode + '/customer/profile');
         }else {
           this.$router.push('/customer/profile');
         }
         this.$toaster.success('Successfully LoggedIn')
       }
     })
   },
    customer(){
      let code = this.$route.fullPath;
      let finalCode = code.slice(0,6)

      if (finalCode === '/en-US'){
        localStorage.setItem('Type','customer')
        this.$router.push(finalCode + '/registration');
      }else {
        localStorage.setItem('Type','customer')
        this.$router.push('/registration');
      }
    },
    seller(){
      let code = this.$route.fullPath;
      let finalCode = code.slice(0,6)

      if (finalCode === '/en-US'){
        localStorage.setItem('Type','exchanger')
        this.$router.push(finalCode + '/registration');
      }else {
        localStorage.setItem('Type','exchanger')
        this.$router.push('/registration');
      }
    }
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
