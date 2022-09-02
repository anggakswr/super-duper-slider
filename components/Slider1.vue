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
        :style="{ transform: `translateX(${-250 * counter}px)` }"
      >
        <img
          :src="'https://picsum.photos/250/10' + number"
          :alt="'Pic ' + number"
        />
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
      counter: 0,
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
      if (this.counter === 4) {
        this.counter = 0
      } else {
        this.counter++
      }
    },
  },
}
</script>
