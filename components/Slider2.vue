<template>
  <!-- slider container container (to add nav btns) -->
  <div class="flex items-center gap-x-8">
    <!-- prev btn -->
    <button class="text-white text-2xl" @click="prev">&larr;</button>

    <!-- slider container -->
    <div class="w-[500px] overflow-hidden">
      <!-- the slide items will collapse horizontally -->
      <div class="flex items-center">
        <!-- img container -->
        <div
          v-for="number in 5"
          :key="'pic-' + number"
          class="w-[500px] min-w-[500px] max-w-[500px]"
          :style="{ transform: `translateX(${-500 * (currentSlide - 1)}px)` }"
        >
          <img
            :src="`/slider2/${number}.jpg`"
            :alt="'Slider 2 Pic ' + number"
          />
        </div>
      </div>
    </div>

    <!-- next btn -->
    <button class="text-white text-2xl" @click="next">&rarr;</button>
  </div>
</template>

<script>
export default {
  name: 'SliderTwo',
  data() {
    return {
      theInterval: null,
      currentSlide: 1,
    }
  },
  methods: {
    prev() {
      if (this.currentSlide > 1) {
        this.currentSlide--
      } else {
        this.currentSlide = 5
      }
    },
    next() {
      if (this.currentSlide === 5) {
        this.currentSlide = 1
      } else {
        this.currentSlide++
      }
    },
  },
}
</script>
