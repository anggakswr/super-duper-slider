<template>
  <button class="h-[200px] rounded-lg relative overflow-hidden">
    <!-- profile pic -->
    <div
      class="absolute z-10 top-[10px] left-[10px] w-[40px] h-[40px] rounded-full border-[5px] border-blue-500"
      :style="{ backgroundImage: 'url(https://picsum.photos/50)' }"
    />

    <p
      class="absolute z-10 bottom-[10px] inset-x-[10px] text-xs text-left font-bold"
    >
      Angga Wijaya
    </p>

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
  name: 'IndexStory',
}
</script>
