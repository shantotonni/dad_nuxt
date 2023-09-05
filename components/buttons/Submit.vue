<template>
  <div class="form-group row mb-0">
    <div class="col-sm-12 text-right">
      <button class="submit-button btn btn-primary w-md waves-effect waves-light" :disabled="$store.state.isSubmitButtonLoading">
        <span v-if="!$store.state.isSubmitButtonLoading">{{ name }}</span>
        <span v-else> <img :src="`assets/images/loaders/mini.svg`" alt="min loader"> Waiting</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubmitButton',
  props: {
    name: {
      type: String,
      default: 'No name set'
    }
  }
}
</script>
