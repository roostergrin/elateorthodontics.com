<template lang='pug' src='./nav-trigger.pug'></template>

<script>
import { toggleNavActive } from '@/mixins.js'

export default {
  props: ['props'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      }
    }
  },
  mixins: [toggleNavActive],
  methods: {
    onWaypoint ({ going, direction }) {
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.toggleNavActive(this.props)
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        this.toggleNavActive(this.props)
      }
    }
  }
}
</script>
