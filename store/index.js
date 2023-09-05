export const state = () => ({
  isSubmitButtonLoading: false,
})

export const mutations = {
  submitButtonLoadingStatus (state, payload) {
    state.isSubmitButtonLoading = payload
  }
}
