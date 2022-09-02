<template>
  <div class="p-[5px] box-between mt-[10px] rounded-lg relative">
    <!-- click the bg -->
    <div class="box-equal gap-x-[10px] relative z-10 pointer-events-none">
      <!-- img -->
      <div
        class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full bg-center bg-cover"
        :style="{ backgroundImage: 'url(https://picsum.photos/40)' }"
      />

      <!-- text -->
      <p>JavaScript Indonesia</p>
    </div>

    <!-- close btn -->
    <button
      class="w-[30px] h-[30px] min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] box-center rounded-full text-xl hover:brightness-125 relative z-10"
    >
      <span>&times;</span>
    </button>

    <NuxtLink to="#" class="absolute inset-0 w-full h-full rounded-lg" />
  </div>
</template>

<script>
export default {}
</script>
