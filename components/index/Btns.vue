<template>
  <div class="grid grid-cols-2">
    <button class="py-[10px] box-center text-gray-300 rounded-lg gap-x-[10px]">
      <!-- icon -->
      <client-only>
        <unicon name="video" fill="red" />
      </client-only>

      Video siaran langsung
    </button>

    <button class="py-[10px] box-center text-gray-300 rounded-lg gap-x-[10px]">
      <!-- icon -->
      <client-only>
        <unicon name="image" fill="green" />
      </client-only>

      Foto/video
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexBtns',
}
</script>
