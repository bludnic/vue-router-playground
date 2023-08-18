<template>
  <div>Counter: {{ count }}</div>

  <button @click="start">Start</button>
  <button @click="pause">Pause</button>
  <button @click="resume">Resume</button>
  <button @click="reset">Reset</button>
</template>

<script>
export default {
  mounted() {},
  beforeUnmount() {
    clearInterval(this.timerId)
  },
  data: () => ({
    count: 0,
    timerId: 0
  }),
  methods: {
    start() {
      this.timerId = setInterval(() => {
        this.count += 1
      }, 1000)
    },
    pause() {
      console.log('pause')
      clearInterval(this.timerId)
    },
    resume() {
      this.timerId = setInterval(() => {
        this.count += 1
      }, 1000)
    },
    reset() {
      clearInterval(this.timerId)
      this.count = 0
    }
  }
}
</script>
