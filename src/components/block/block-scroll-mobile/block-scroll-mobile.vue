<template lang="pug" src="./block-scroll-mobile.pug"></template>

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
      active: 0,
      showing: false,
      transformed: false,
      fixed: false,
      positionBottom: false
    }
  },
  methods: {
    onWaypointIn ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
        setTimeout(() => {
          this.transformed = true
        }, 1250)
      }
    },
    cleanStr (i) {
      return i.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '')
    },
    onWaypoint ({going, direction, _entry}, i) {
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
