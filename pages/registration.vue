<template>
  <div>
    <div class="banner_bottom_agile_info">
      <div class="container">
        <div class="agile_ab_w3ls_info">
          <div class="col-md-12 ab_pic_w3ls_text_info">
            <div class="modal-body modal-body-sub_agile">
              <div class="col-md-2 modal_body_left">
              </div>
              <div class="col-md-6 modal_body_left modal_body_left1">
                <h3 class="agileinfo_sign">Sign Up <span>Now</span></h3>

                <form @submit.prevent="sendOtp" @keydown="form.onKeydown($event)" v-if="visible===1">
                  <div class="form-group">
                    <label for="Mobile">Mobile</label>
                    <input type="text" class="form-control" id="Mobile" placeholder="Enter Mobile" v-model="form.Mobile">
                    <div class="error" v-if="form.errors.has('Mobile')" v-html="form.errors.get('Mobile')" />
                  </div>
                  <input type="submit" value="Send Otp">
                </form>

                <form @submit.prevent="checkOtp" @keydown="form.onKeydown($event)" v-if="visible===2">
                  <div class="form-group">
                    <label for="OtpCode">Otp Code (Please Enter 6 Digit Otp code)</label>
                    <input type="text" class="form-control" id="OtpCode" placeholder="Enter OtpCode" v-model="form.OtpCode">
                    <div class="error" v-if="form.errors.has('OtpCode')" v-html="form.errors.get('OtpCode')" />
                  </div>
                  <input type="submit" value="Verify Otp">
                </form>

                <form @submit.prevent="registration" @keydown="form.onKeydown($event)" v-if="visible===3">
                  <div class="form-group">
                    <label for="Name">Name</label>
                    <input type="text" class="form-control" id="Name" placeholder="Enter Name" v-model="form.Name">
                    <div class="error" v-if="form.errors.has('Name')" v-html="form.errors.get('Name')" />
                  </div>
                  <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="text" class="form-control" id="Email" placeholder="Enter Email" v-model="form.Email">
                    <div class="error" v-if="form.errors.has('Email')" v-html="form.errors.get('Email')" />
                  </div>
                  <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="Enter Password" v-model="form.Password">
                    <div class="error" v-if="form.errors.has('Password')" v-html="form.errors.get('Password')" />
                  </div>

                  <div class="form-group">
                    <label for="NID">NID</label>
                    <input type="text" class="form-control" id="NID" placeholder="Enter NID" v-model="form.NID">
                    <div class="error" v-if="form.errors.has('NID')" v-html="form.errors.get('NID')" />
                  </div>
                  <div class="form-group">
                    <label for="Address">Address</label>
                    <input type="text" class="form-control" id="Address" placeholder="Enter Address" v-model="form.Address">
                    <div class="error" v-if="form.errors.has('Address')" v-html="form.errors.get('Address')" />
                  </div>
                  <div class="form-group">
                    <label>Division</label>
                    <select name="Division" id="Division" class="form-control" v-model="form.Division" @change="getDistrictByDivision()">
                      <option value="">Select Division</option>
                      <option :value="division.DivisionCode" v-for="(division , index) in divisions" :key="index">{{ division.DivisionName }}</option>
                    </select>
                    <div class="error" v-if="form.errors.has('Division')" v-html="form.errors.get('Division')" />
                  </div>
                  <div class="form-group">
                    <label>District</label>
                    <select name="District" id="District" class="form-control" v-model="form.District" @change="getUpazillaByDistrict()">
                      <option value="">Select District</option>
                      <option :value="district.DistrictCode" v-for="(district , index) in districts" :key="index">{{ district.DistrctName }}</option>
                    </select>
                    <div class="error" v-if="form.errors.has('District')" v-html="form.errors.get('District')" />
                  </div>

                  <div class="form-group">
                    <label>Upazilla</label>
                    <select name="Upazilla" id="Upazilla" class="form-control" v-model="form.Upazilla">
                      <option value="">Select Upazilla</option>
                      <option :value="upazilla.UpazillaCode" v-for="(upazilla , index) in upazillas" :key="index">{{ upazilla.UpazillaName }}</option>
                    </select>
                    <div class="error" v-if="form.errors.has('Upazilla')" v-html="form.errors.get('Upazilla')" />
                  </div>

                  <input type="submit" value="Sign Up">
                </form>
                <div class="clearfix"></div>
                <p><nuxt-link to="/login">Have an Account? Please Login</nuxt-link></p>

              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
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
      title: "Registration | Market Exchange"
    };
  },
  data(){
    return {
      brand: this.$route.params.brand,
      divisions:[],
      districts:[],
      upazillas:[],
      form: new Form({
        Name:'',
        Email:'',
        Mobile:'',
        Password:'',
        OtpCode:'',
        NID:'',
        Address:'',
        Division:'',
        District:'',
        Upazilla:'',
        Type: '',
      }),
      visible:1
    }
  },
  mounted() {
    this.form.Type =localStorage.getItem('Type')
  },
  created() {
    this.getAllDivision();
  },
  methods: {
    sendOtp(){
      this.form.post( base_url + 'api/send-otp').then((response)=>{
        console.log(response);
        if (response.data.message === 'success'){
          this.visible = 2;
        }else {
          this.$toaster.error("Mobile Number Already Exist")
        }
      }).catch((error)=>{
        //
      })
    },
    checkOtp(){
      this.form.post( base_url + 'api/check-otp').then((response)=>{
        console.log(response);
        if (response.data.message === 'success'){
          this.visible = 3;
          this.$toaster.success("Successfully Match Otp")
        }
      }).catch((error)=>{
        //
      })
    },
    registration(){
      this.form.post( base_url + 'api/registration').then((response)=>{
        if (response.data.message === 'success'){
          this.$router.push('/login')
          this.$toaster.success("Successfully Registered")
        }
      }).catch((error)=>{
        //
      })
    },
    getAllDivision(){
      this.$axios.get( base_url + 'api/get-all-division').then((response)=>{
        this.divisions = response.data.divisions;
        console.log(response);
      }).catch((error)=>{
      })
    },
    getDistrictByDivision(){
      this.$axios.get( base_url + 'api/get-all-district-by-division?division=' + this.form.Division).then((response)=>{
        this.districts = response.data.districts;
        console.log(response);
      }).catch((error)=>{
      })
    },
    getUpazillaByDistrict(){
      this.$axios.get( base_url + 'api/get-all-upazilla-by-district?district=' + this.form.District).then((response)=>{
        this.upazillas = response.data.upazillas;
        console.log(response);
      }).catch((error)=>{
      })
    }
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
