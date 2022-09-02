<template>
  <nav class="fixed w-1/4 right-0 top-[70px] bottom-0 overflow-y-scroll">
    <h2 class="font-bold mb-4 text-xl">Bersponsor</h2>

    <RightNavSponsor />
    <RightNavSponsor />

    <hr class="border-t border-gray-700 mb-4" />

    <RightNavKontakHeader />

    <!-- chats skeleton -->
    <template v-if="loading">
      <RightNavPersonSkeleton />
      <RightNavPersonSkeleton />
      <RightNavPersonSkeleton />
    </template>

    <template v-else>
      <!-- chats -->
      <RightNavPerson
        v-for="(user, index) in users"
        :key="'person-' + user.id + index"
        :person="user"
      />
    </template>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      users: [],
    }
  },
  async fetch() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      this.loading = true

      try {
        const res = await this.$axios.get('/api/users')

        // console.log('getUsers res', res.data)

        this.users = res.data
      } catch {
        // show err popup
        this.$store.commit('setSnackbar', {
          msg: 'Maaf terjadi kesalahan saat menampilkan daftar user',
          type: 'error',
        })
      }

      this.loading = false
    },
  },
}
</script>
