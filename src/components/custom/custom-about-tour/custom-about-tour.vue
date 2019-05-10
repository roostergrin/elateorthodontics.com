<template lang='pug' src='./custom-about-tour.pug'></template>

<script>

export default {
  props: ['content'],
  data () {
    return {
      percentage: 1,
      modalOpen: false,
      showing: null,
      active: null,
      currentPage: null,
      hoveredPage: 0
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
      this.modalOpen = !this.modalOpen
      this.modalOpen ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
      if (this.modalOpen) {
        this.toggleSlider()
      }
    },
    setHovered (i) {
      this.hoveredPage = i
    },
    toggleSlider () {
      setInterval(() => {
        this.hoveredPage === this.content.office_photos.length - 1 ? this.hoveredPage = 0 : this.hoveredPage++
      }, 4000)
    }
  }
}
</script>
