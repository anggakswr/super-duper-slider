<template>
  <div
    class="box-equal gap-x-[10px] pb-[10px] border-b border-gray-600 mb-[10px]"
  >
    <NuxtLink to="/profile" class="rounded-full hover:brightness-125">
      <!-- img -->
      <div
        class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full bg-center bg-cover"
        :style="{ backgroundImage: 'url(https://picsum.photos/40)' }"
      />
    </NuxtLink>

    <!-- popup btn -->
    <button
      class="box-equal text-left text-gray-300 bg-gray-600 hover:brightness-125 rounded-full h-[40px] p-[10px] w-full"
      @click="popupOn = true"
    >
      Apa yang Anda pikirkan, Angga?
    </button>

    <Popup v-model="popupOn" />
  </div>
</template>

<script>
import Popup from './input-box/Popup.vue'

export default {
  components: { Popup },
  data() {
    return {
      popupOn: false,
    }
  },
}
</script>
