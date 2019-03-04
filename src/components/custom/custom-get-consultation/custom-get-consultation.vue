<template lang="pug" src="./custom-get-consultation.pug"></template>

<script>
export default {
  props: ['content', 'alt'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      },
      showing: false,
      transform: null,
      percentage: null
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
    onWaypoint ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
      }
    },
    onScroll () {
      // Checks for location of top of page
      let windowTopOffest = window.pageYOffset - this.$refs.component.offsetTop

      // Finds height of container
      let halfContainerHeight = this.$refs.component.clientHeight / 2

      // Checks if scrolling out of image
      let bottomHalf = (window.pageYOffset + window.innerHeight) > (this.$refs.component.offsetTop + this.$refs.component.clientHeight)

      // Checks if scrolling into the image
      let topHalf = (window.pageYOffset + window.innerHeight) < (this.$refs.component.offsetTop + this.$refs.component.clientHeight)

      // Finds offset distance from half
      let halfOffset = (this.$refs.component.offsetTop - window.pageYOffset) / 100
      let negHalfOffset = -1 * halfOffset

      if (halfContainerHeight >= windowTopOffest && topHalf) {
        this.percentage = 1 + ((halfOffset + 0.37) / 50)
        this.transform = -1 * (negHalfOffset - 0.37)
      }

      if (halfContainerHeight >= windowTopOffest && bottomHalf) {
        this.percentage = 1 + ((negHalfOffset - 0.39) / 50)
        this.transform = -1 * (halfOffset + 0.39)
      }
    }
  }
}
</script>
