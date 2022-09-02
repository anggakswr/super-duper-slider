<template>
  <!-- slider container container container (to add dot nav btns below) -->
  <div>
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

    <!-- dots -->
    <div class="flex items-center justify-center gap-x-4 py-4">
      <button
        v-for="number in 5"
        :key="'slider2-dot-' + number"
        class="h-4 rounded-full"
        :class="{
          'bg-white w-4': currentSlide !== number,
          'bg-blue-500 w-12': currentSlide === number,
        }"
        @click="currentSlide = number"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderTwo',
  data() {
    return {
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
