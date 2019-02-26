<template lang='pug' src='./custom-about-tour.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      percentage: 1
    }
  },
  mounted () {
    this.$nextTick(
      window.addEventListener('scroll', this.onScroll)
    )
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Checks for location of top of page
      let windowTopOffest = window.scrollY - this.$refs.tour.offsetTop

      // Finds height of container
      let halfContainerHeight = this.$refs.tour.clientHeight / 2

      // Checks if scrolling out of image
      let bottomHalf = (window.scrollY + window.innerHeight) > (this.$refs.tour.offsetTop + this.$refs.tour.clientHeight)

      // Checks if scrolling into the image
      let topHalf = (window.scrollY + window.innerHeight) < (this.$refs.tour.offsetTop + this.$refs.tour.clientHeight)

      // Finds offset distance from half
      let halfOffset = (this.$refs.tour.offsetTop - window.scrollY) / 10000

      if (halfContainerHeight >= windowTopOffest && topHalf) {
        this.percentage = 0.95 + ((0.1 - halfOffset) * 2)
      }

      if (halfContainerHeight >= windowTopOffest && bottomHalf) {
        this.percentage = 0.95 + ((0.1 - halfOffset) * 2)
      }
    }
  }
}
</script>
