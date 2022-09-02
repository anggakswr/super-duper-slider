<template>
  <div v-if="value" class="fixed z-20 inset-0 box-center">
    <!-- content -->
    <div class="relative z-10 bg-gray-700 w-[500px] rounded-lg">
      <!-- title -->
      <h2
        class="text-2xl text-center font-semibold p-[10px] border-b border-gray-600"
      >
        Buat Postingan
      </h2>

      <!-- close btn -->
      <button
        class="absolute bg-gray-600 hover:brightness-125 rounded-full w-[30px] h-[30px] top-[10px] right-[10px] box-center text-2xl"
        @click="$emit('input', false)"
      >
        &times;
      </button>

      <div class="p-[16px]">
        <div class="box-equal gap-x-[10px] mb-[10px]">
          <!-- img -->
          <div
            class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full bg-center bg-cover"
            :style="{ backgroundImage: 'url(https://picsum.photos/40)' }"
          />

          <!-- user name -->
          <p>Angga</p>
        </div>

        <!-- textarea -->
        <textarea
          v-model="title"
          rows="5"
          placeholder="Apa yang anda pikirkan?"
          class="w-full bg-gray-700 text-xl focus:outline-none rounded-lg"
        />

        <!-- blue btn -->
        <button
          class="bg-blue-500 font-semibold rounded-lg py-[10px] w-full"
          :disabled="!title || loading"
          @click="submit"
        >
          Kirim
        </button>
      </div>
    </div>

    <!-- bg -->
    <div class="absolute inset-0 bg-black/50" @click="$emit('input', false)" />

    <!-- loading indicator -->
    <div
      v-if="loading"
      class="absolute inset-0 bg-black/50 z-30 box-center flex-col"
    >
      <CircleLoading />

      <p class="text-xl">Memposting ...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBoxPopup',
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      title: '',
      loading: false,
    }
  },
  methods: {
    async submit() {
      this.loading = true

      try {
        const payload = { title: this.title }
        const res = await this.$axios.post('/api/posts', payload)

        // console.log('submit res', res.data)

        // this.users = res.data

        this.$store.commit('home/setNewPost', res.data)
      } catch {
        // show err popup
        this.$store.commit('setSnackbar', {
          msg: 'Maaf terjadi kesalahan saat posting',
          type: 'error',
        })
      }

      this.loading = false
      this.$emit('input', false)
    },
  },
}
</script>
