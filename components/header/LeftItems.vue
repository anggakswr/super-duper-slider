<template>
  <nav class="box-equal gap-x-[10px] relative">
    <div
      v-if="isFocused"
      class="absolute top-[40px] w-full bg-gray-700 p-[10px] rounded-b-lg"
    >
      <div class="box-between mt-[20px]">
        <p class="font-bold">Pencarian Terbaru</p>

        <NuxtLink to="#" class="text-blue-500">Edit</NuxtLink>
      </div>

      <!-- search histories -->
      <SearchHistory />
      <SearchHistory />
      <SearchHistory />
    </div>

    <button
      v-if="isFocused"
      class="w-[40px] h-[40px] min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] rounded-full bg-gray-600 hover:brightness-125 box-center"
    >
      <!-- icon -->
      <client-only>
        <unicon name="arrow-left" fill="white" />
      </client-only>
    </button>

    <NuxtLink
      v-else
      to="/"
      class="h-[40px] w-[40px] min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] rounded-full text-[20px] bg-gradient-to-b from-indigo-500 to-blue-500 font-bold relative overflow-hidden"
    >
      <span
        class="absolute -bottom-[5px] inset-x-0 flex justify-center text-3xl"
      >
        M
      </span>
    </NuxtLink>

    <div class="relative">
      <div v-if="!isFocused" class="absolute left-[10px] inset-y-0 box-center">
        <client-only>
          <unicon name="search" fill="white" width="20px" />
        </client-only>
      </div>

      <input
        type="text"
        class="bg-gray-600 rounded-full h-[40px] p-[10px] focus:outline-none w-full"
        :class="{ 'pl-[40px]': !isFocused }"
        placeholder="Cari di Mabook"
        @focusin="isFocused = true"
        @focusout="isFocused = false"
      />
    </div>
  </nav>
</template>

<script>
import SearchHistory from './left-items/SearchHistory.vue'

export default {
  components: {
    SearchHistory,
  },
  data() {
    return {
      isFocused: false,
    }
  },
}
</script>
