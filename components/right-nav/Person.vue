<template>
  <button class="rounded-lg p-[10px] box-equal gap-x-[10px] w-full">
    <!-- img -->
    <div
      class="w-[30px] h-[30px] bg-center bg-cover rounded-full relative"
      :style="{ backgroundImage: 'url(https://picsum.photos/30)' }"
    >
      <!-- green dot -->
      <div
        class="absolute bg-green-500 bottom-0 right-0 rounded-full w-[10px] h-[10px] border-[2px] border-black"
      />
    </div>

    <!-- name -->
    <p>{{ person.name }}</p>
  </button>
</template>

<script>
export default {
  name: 'RightNavPerson',
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
}
</script>
