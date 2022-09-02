<template>
  <div
    class="fixed z-30 left-4 bottom-4 box-equal duration-300 transform"
    :class="
      snackbar ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'
    "
  >
    <div
      class="py-2 px-4 box-between rounded-lg w-[300px]"
      :class="{
        'bg-red-500': snackbar && snackbar.type === 'error',
        'bg-green-600': snackbar && snackbar.type === 'success',
      }"
    >
      <p class="text-sm">{{ snackbar && snackbar.msg }}</p>

      <button
        class="text-xl ml-4 w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full box-center"
        :class="{
          'bg-red-400 hover:bg-red-300': snackbar && snackbar.type === 'error',
          'bg-green-500 hover:bg-green-400':
            snackbar && snackbar.type === 'success',
        }"
        @click="$store.commit('setSnackbar', null)"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultSnackbar',
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    },
  },
  watch: {
    snackbar(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$store.commit('setSnackbar', null)
        }, 5000)
      }
    },
  },
}
</script>
