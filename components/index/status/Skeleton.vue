<template>
  <div class="mb-[20px] rounded-lg bg-gray-700 p-[10px]">
    <IndexStatusHeaderSkeleton />

    <div
      class="rounded-lg bg-gray-600 h-[30px] w-1/2 animate-pulse my-[10px]"
    />

    <hr class="my-[10px] border-t border-gray-600" />

    <div class="grid grid-cols-3 gap-x-[5px]">
      <div class="rounded-lg bg-gray-600 h-[40px] animate-pulse" />
      <div class="rounded-lg bg-gray-600 h-[40px] animate-pulse" />
      <div class="rounded-lg bg-gray-600 h-[40px] animate-pulse" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexStatusSkeleton',
}
</script>
