<template lang='pug' src='./custom-home-testimonials.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0]
      },
      activeSlide: 0,
      showing: null
    }
  },
  methods: {
    onWaypoint ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
      }
    },
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
