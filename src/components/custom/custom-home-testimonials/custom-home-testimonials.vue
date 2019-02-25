<template lang='pug' src='./custom-home-testimonials.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      activeSlide: 0
    }
  },
  methods: {
    setSlide () {
      if (this.activeSlide === this.content.length - 1) {
        this.activeSlide = 0
      } else {
        this.activeSlide += 1
      }
    }
  }
}
</script>
