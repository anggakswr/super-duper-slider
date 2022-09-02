<template>
  <a href="#" class="box-equal gap-x-[10px] mb-4 p-[10px] rounded-lg">
    <!-- img -->
    <div
      class="w-[100px] h-[100px] bg-center bg-cover rounded-lg"
      :style="{ backgroundImage: 'url(https://picsum.photos/100)' }"
    />

    <!-- texts -->
    <div>
      <p>MANDI BOLA</p>
      <p class="text-gray-300 text-sm">mandibola.com</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'RightNavSponsor',
}
</script>
