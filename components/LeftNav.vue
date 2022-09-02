<template>
  <!-- <div class="relative"> -->
  <nav
    class="fixed w-1/4 left-0 top-[70px] bottom-0 overflow-y-scroll px-[10px]"
  >
    <NuxtLink
      to="/profile"
      class="box-equal p-[10px] gap-x-[10px] w-full rounded-lg"
    >
      <!-- img -->
      <div
        class="w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-full bg-center bg-cover"
        :style="{ backgroundImage: 'url(https://picsum.photos/40)' }"
      />

      <!-- text -->
      Angga
    </NuxtLink>

    <NuxtLink
      v-for="link1 in links1"
      :key="'left-sidenav-link-' + link1.icon"
      :to="link1.url"
      class="box-equal p-[10px] gap-x-[10px] w-full rounded-lg"
    >
      <!-- icon -->
      <client-only>
        <unicon :name="link1.icon" fill="#0a84ff" />
      </client-only>

      <!-- text -->
      {{ link1.text }}
    </NuxtLink>

    <hr class="border-t border-gray-500 mb-[10px]" />

    <!-- footer text -->
    <div class="text-sm text-gray-300">
      <NuxtLink to="#">Privasi</NuxtLink>
      &middot;
      <NuxtLink to="#">Ketentuan</NuxtLink>
      &middot;
      <NuxtLink to="#">Lainnya</NuxtLink>
      &middot;
      <p>Mabook &copy; {{ currentYear }}</p>
    </div>
  </nav>
  <!-- </div> -->
</template>

<script>
const links1 = [
  { url: '#', icon: 'user', text: 'Teman' },
  { url: '#', icon: 'users-alt', text: 'Grup' },
  { url: '#', icon: 'store', text: 'Marketplace' },
  { url: '#', icon: 'video', text: 'Watch' },
]

export default {
  data() {
    return {
      links1,
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
