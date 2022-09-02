<template>
  <div class="mb-[20px] rounded-lg bg-gray-700 p-[10px]">
    <IndexStatusHeader />

    <p class="text-xl my-[10px]">{{ post.title }}</p>

    <hr class="my-[10px] border-t border-gray-600" />

    <div class="grid grid-cols-3 gap-x-[5px]">
      <button class="py-[5px] box-center text-gray-300 rounded-lg gap-x-[10px]">
        <!-- icon -->
        <client-only>
          <unicon name="thumbs-up" fill="white" />
        </client-only>

        Suka
      </button>

      <button class="py-[5px] box-center text-gray-300 rounded-lg gap-x-[10px]">
        <!-- icon -->
        <client-only>
          <unicon name="chat" fill="white" />
        </client-only>

        Komentari
      </button>

      <button class="py-[5px] box-center text-gray-300 rounded-lg gap-x-[10px]">
        <!-- icon -->
        <client-only>
          <unicon name="share" fill="white" />
        </client-only>

        Bagikan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexStatus',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
