<template>
  <nav class="grid grid-cols-5 gap-x-[5px]">
    <NuxtLink
      v-for="link in links"
      :key="link.icon"
      :to="link.url"
      class="box-center hover:rounded-lg"
    >
      <client-only>
        <unicon
          :name="link.icon"
          :fill="$route.path === link.url ? '#0a84ff' : 'white'"
        />
      </client-only>
    </NuxtLink>
  </nav>
</template>

<script>
const links = [
  { url: '/', icon: 'estate' },
  { url: '/groups', icon: 'users-alt' },
  { url: '#', icon: 'video' },
  { url: '#', icon: 'store' },
  { url: '#', icon: 'basketball' },
]

export default {
  data() {
    return {
      links,
    }
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  @apply border-b-2 border-blue-500 hover:bg-gray-700 rounded-none;
}
</style>
