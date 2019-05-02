<template lang='pug' src='./custom-about-tour.pug'></template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['content'],
  data () {
    return {
      percentage: 1,
      menuOpen: false,
      showing: null,
      active: null,
      currentPage: null
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
      let windowTopOffest = window.pageYOffset - this.$refs.tour.offsetTop

      // Finds height of container
      let halfContainerHeight = this.$refs.tour.clientHeight / 2

      // Checks if scrolling out of image
      let bottomHalf = (window.pageYOffset + window.innerHeight) > (this.$refs.tour.offsetTop + this.$refs.tour.clientHeight)

      // Checks if scrolling into the image
      let topHalf = (window.pageYOffset + window.innerHeight) < (this.$refs.tour.offsetTop + this.$refs.tour.clientHeight)

      // Finds offset distance from half
      let halfOffset = (this.$refs.tour.offsetTop - window.pageYOffset) / 10000

      if (halfContainerHeight >= windowTopOffest && topHalf) {
        this.percentage = 1 + ((0.1 - halfOffset) * 2)
      }

      if (halfContainerHeight >= windowTopOffest && bottomHalf) {
        this.percentage = 1 + ((0.1 - halfOffset) * 2)
      }
    },
    toggleMenu () {
      console.log(this.active)
      // this.active = true
      // VueScrollTo.scrollTo('#tour', { offset: 0, easing: 'ease-in', duration: 500 })
      this.menuOpen = !this.menuOpen
      // if (this.menuOpen) {
      //   document.body.classList.add('body-stop')
      // } else {
      //   this.hoveredPage = this.currentPage
      //   document.body.classList.remove('body-stop')
      // }
    }
  }
}
</script>
