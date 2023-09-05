<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '~/components/Partials/Footer'
import Header from "~/components/Partials/Header";
export default {
  name: 'default',
  components: { Footer, Header }
}
</script>

<style scoped>

</style>
