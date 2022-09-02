<template>
  <!-- slider container -->
  <div class="w-[250px] overflow-hidden">
    <!-- the slide items will collapse horizontally -->
    <div class="flex items-center">
      <!-- img container -->
      <div
        v-for="number in 5"
        :key="'pic-' + number"
        class="w-[250px] min-w-[250px] max-w-[250px]"
        :style="{ transform: `translateX(${-250 * (currentSlide - 1)}px)` }"
      >
        <img :src="`/slider1/${number}.jpg`" :alt="'Slider 1 Pic ' + number" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderOne',
  data() {
    return {
      theInterval: null,
      currentSlide: 1,
    }
  },
  mounted() {
    this.theInterval = setInterval(this.nextSlide, 3000)
  },
  beforeDestroy() {
    clearInterval(this.theInterval)
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === 5) {
        this.currentSlide = 1
      } else {
        this.currentSlide++
      }
    },
  },
}
</script>
