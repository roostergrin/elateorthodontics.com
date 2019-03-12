<template lang="pug" src="./block-overlap.pug"></template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['content', 'alt'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0]
      },
      scrolling: null,
      active: 0,
      showing: false,
      transformed: false,
      fixed: false,
      positionBottom: false
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
    cleanStr (i) {
      return i.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '')
    },
    moveTo (i) {
      let destination = this.cleanStr(i)
      VueScrollTo.scrollTo('#' + destination, { offset: 0, easing: 'linear', duration: 500 })
    },
    onScroll () {
      // Finds Ratio of Component to Scroll
      let scrollRatio = (this.content.scroll.length - 1) / this.content.scroll.length

      // Height of whole container
      let containerHeight = this.$refs.component.clientHeight

      // Finds point on page where the container is
      let scrollDistance = window.pageYOffset - this.$refs.component.offsetTop

      // Toggles the start of the component
      let isInside = window.pageYOffset > this.$refs.component.offsetTop

      if ((containerHeight * scrollRatio) >= scrollDistance && isInside) {
        this.fixed = true
      } else {
        this.fixed = false
      }

      if ((containerHeight * scrollRatio) <= scrollDistance && isInside) {
        this.positionBottom = true
      } else {
        this.positionBottom = false
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
