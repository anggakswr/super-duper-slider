<template>
  <div class="grid grid-cols-5 gap-x-[10px] relative mb-[20px]">
    <!-- story -->
    <IndexCreateStory />
    <IndexStory />
    <IndexStory />
    <IndexStory />
    <IndexStory />

    <!-- right arrow -->
    <div class="absolute inset-y-0 -right-[20px] box-equal">
      <button class="w-[40px] h-[40px] rounded-full bg-gray-700 box-center">
        <!-- icon -->
        <client-only>
          <unicon name="arrow-right" fill="white" />
        </client-only>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexStories',
}
</script>
