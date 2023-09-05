<template>
  <div class="wrapper-page">
    <div class="card overflow-hidden account-card mx-3">
      <div class="bg-primary p-4 text-white text-center position-relative">
        <h4 class="font-20 m-b-5">Welcome Back !</h4>
        <p class="text-white-50 mb-4">Sign in to continue to Market Exchange.</p>
        <nuxt-link to="auth/login" class="logo logo-admin"><img src="assets/images/small-logo.png" height="24" alt="logo"></nuxt-link>
      </div>
      <div class="account-card-content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form-horizontal m-t-30" @submit.prevent="handleSubmit(userLogin)">
            <ValidationProvider v-slot="{ errors }" name="Staff ID" mode="eager" rules="required">
              <div class="form-group">
                <label for="email">Staff ID</label>
                <input id="email" v-model="login.staffId" type="text" class="form-control" :class="{'error-border': errors[0]}" placeholder="Enter Staff ID">
                <span class="error-message"> {{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="Password" mode="eager" rules="required|min:6">
              <div class="form-group">
                <label for="password">Password</label>
                <input id="password" v-model="login.password" type="password" class="form-control" :class="{'error-border': errors[0]}" placeholder="Enter password">
                <span class="error-message"> {{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="form-group row m-t-20">
              <div class="col-sm-12 text-right">
                <Submit name="Log In" />
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { Helper } from '~/mixins/helper'

export default {
  name: 'LoginPage',
  mixins: [Helper],
  auth: 'guest',
  data: () => ({
    login: {
      staffId: '',
      password: ''
    }
  }),
  mounted() {
    document.title = 'Admin Login | Market Exchange';
  },
  methods: {
    async userLogin () {
      this.$store.commit('submitButtonLoadingStatus', true)
      try {
        await this.$auth.loginWith('local', { data: this.login })
        this.successNotification('Successfully logged in.')
        this.$store.commit('submitButtonLoadingStatus', false)
      } catch (err) {
        this.$store.commit('submitButtonLoadingStatus', false)
        this.errorNotification(err)
      }
    }
  }
}
</script>
