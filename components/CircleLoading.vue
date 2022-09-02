<template>
  <svg
    class="duration-500 transform -rotate-90 scale-50"
    :height="radius * 2"
    :width="radius * 2"
  >
    <circle
      stroke="white"
      fill="none"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      required: false,
      default: () => 96,
    },
    stroke: {
      type: Number,
      required: false,
      default: () => 10,
    },
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI

    return {
      interval: null,
      progress: 0,
      normalizedRadius,
      circumference,
    }
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.progress !== 100) {
        this.progress += 1
      }
    }, 10)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>
