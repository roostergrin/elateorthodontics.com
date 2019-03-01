<template lang="pug" src="./block-scroll-overlap.pug"></template>

<script>
export default {
  props: ['content', 'alt'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0]
      },
      active: 0,
      showing: false,
      transformed: false,
      offset: 0
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
      // Finds Ratio of Component to Scroll
      let scrollRatio = (this.content.scroll.length - 1) / this.content.scroll.length

      // Height of whole container
      let containerHeight = this.$refs.component.clientHeight

      // Finds point on page where the container is
      let scrollDistance = window.scrollY - this.$refs.component.offsetTop

      // Toggles the start of the component
      let isInside = window.scrollY > this.$refs.component.offsetTop

      if ((containerHeight * scrollRatio) >= scrollDistance && isInside) {
        this.offset = window.scrollY - this.$refs.component.offsetTop
      }
    },
    onWaypointIn ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
        setTimeout(() => {
          this.transformed = true
        }, 1250)
      }
    },
    onWaypoint ({going, direction, _entry}) {
      if (going === 'out' && direction === 'bottom') {
        this.active -= 1
      }
      if (going === 'in' && direction === 'top') {
        this.active += 1
      }
    }
  }
}
</script>
