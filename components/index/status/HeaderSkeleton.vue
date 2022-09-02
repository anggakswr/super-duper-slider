<template>
  <div class="box-between">
    <!-- profile info -->
    <div class="box-equal gap-x-[10px]">
      <!-- img -->
      <div
        class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full bg-gray-600 animate-pulse"
      />

      <!-- name & post time -->
      <div>
        <!-- name -->
        <div
          class="h-[20px] w-[100px] rounded-lg bg-gray-600 animate-pulse mb-[5px]"
        />

        <!-- time -->
        <div class="h-[10px] w-[50px] rounded-lg bg-gray-600 animate-pulse" />
      </div>
    </div>

    <!-- more btn -->
    <div class="w-[40px] h-[40px] rounded-full bg-gray-600 animate-pulse" />
  </div>
</template>

<script>
export default {
  name: 'IndexStatusHeaderSkeleton',
}
</script>
