<template>
  <div>
    <div class="banner-bootom-w3-agileits">
      <div class="container">
       <div class="success">
         <img src="/assets/images/success.png" alt="">
         <br>
         <br>
         <h1>Thank You</h1>
         <p>We have received your appointment soon <br> we will back to you.</p>
         <br>
         <nuxt-link to="/" class="btn btn-primary">Back to home</nuxt-link>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
  auth:true,
  data(){
    return {
      brandSlug: this.$route.params.brand,
    }
  },
}
</script>

<style scoped>
.success{
  text-align: center;
}
</style>
