<template>
  <!-- slider container container (to add nav btns) -->
  <div class="flex items-center gap-x-8">
    <button class="text-white">&larr;</button>

    <!-- slider container -->
    <div class="w-[500px] overflow-hidden">
      <!-- the slide items will collapse horizontally -->
      <div class="flex items-center">
        <!-- img container -->
        <div
          v-for="number in 5"
          :key="'pic-' + number"
          class="w-[500px] min-w-[500px] max-w-[500px]"
          :style="{ transform: `translateX(${-500 * counter}px)` }"
        >
          <img
            :src="'https://picsum.photos/500/35' + number"
            :alt="'Pic ' + number"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderTwo',
  data() {
    return {
      theInterval: null,
      counter: 0,
    }
  },
  methods: {
    prev() {
      if (this.counter > 0) {
        this.counter--
      }
    },
    next() {
      if (this.counter === 4) {
        this.counter = 0
      } else {
        this.counter++
      }
    },
  },
}
</script>
