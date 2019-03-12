<template lang="pug" src="./block-overlap-tablet.pug"></template>

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
      scrolling: null,
      active: 0,
      showing: false,
      transformed: false
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
    setActive (i) {
      this.active = i
    },
    onWaypointIn ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
        setTimeout(() => {
          this.transformed = true
        }, 1250)
      }
    }
  }
}
</script>
