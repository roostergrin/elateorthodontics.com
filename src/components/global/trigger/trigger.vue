<template lang='pug' src='./trigger.pug'></template>

<script>
import { toggleActive } from '@/mixins.js'

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
  mixins: [toggleActive],
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        this.toggleActive(this.props)
      }
    }
  }
}
</script>
