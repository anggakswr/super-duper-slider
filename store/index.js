export const state = () => ({
  // snackbar: { msg: this.$t("Data added"), type: "success" }
  // snackbar: { msg: "An error occurred", type: "error" }
  snackbar: null,
})

export const mutations = {
  setSnackbar(state, payload) {
    state.snackbar = payload
  },
}
