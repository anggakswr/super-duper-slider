<template>
  <button class="h-[200px] rounded-lg relative overflow-hidden">
    <!-- gray box -->
    <client-only>
      <div class="absolute z-10 inset-x-0 bottom-0 h-[50px] bg-gray-700">
        <!-- plus icon -->
        <div class="absolute -top-[15px] inset-x-0 flex justify-center">
          <button
            class="bg-blue-500 rounded-full box-center w-[30px] h-[30px] text-2xl"
          >
            +
          </button>
        </div>

        <!-- text -->
        <p class="absolute bottom-[10px] inset-x-[10px] text-xs font-bold">
          Buat Cerita
        </p>
      </div>
    </client-only>

    <!-- bg img -->
    <div
      class="absolute inset-0 bg-cover bg-center hover:scale-110"
      :style="{ backgroundImage: 'url(https://picsum.photos/100/200)' }"
    >
      <!-- gray overlay -->
      <div class="absolute z-10 inset-0 bg-black opacity-0 hover:opacity-10" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'CreateStory',
}
</script>
