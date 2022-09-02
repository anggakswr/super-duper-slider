<template>
  <main class="bg-gray-900 min-h-screen text-white">
    <Header />

    <LeftNav />

    <!-- page -->
    <section class="grid grid-cols-4 pt-[70px]">
      <div class="col-span-1" />
      <Nuxt class="col-span-2 px-[40px]" />
      <div class="col-span-1" />
    </section>

    <RightNav />

    <!-- snackbar in left bottom -->
    <Snackbar />
  </main>
</template>

<script>
import pathToTitle from '@/helpers/pathToTitle'

export default {
  name: 'DefaultLayout',
  head() {
    return {
      title: this.pathFormatted,
    }
  },
  computed: {
    pathFormatted() {
      return pathToTitle(this.$route.path.substring(1)) + ' | Mabook'
    },
  },
}
</script>
