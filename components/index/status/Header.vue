<template>
  <div class="box-between">
    <!-- profile info -->
    <div class="box-equal gap-x-[10px]">
      <!-- img -->
      <NuxtLink to="#" class="rounded-full">
        <div
          class="w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full bg-center bg-cover"
          :style="{ backgroundImage: 'url(https://picsum.photos/40)' }"
        />
      </NuxtLink>

      <!-- name & post time -->
      <div>
        <p>Angga</p>
        <p class="text-xs text-gray-300">4 jam lalu</p>
      </div>
    </div>

    <!-- more btn -->
    <button class="w-[40px] h-[40px] rounded-full box-center">
      <client-only>
        <unicon name="ellipsis-h" fill="white" width="30px" />
      </client-only>
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexStatusHeader',
}
</script>
