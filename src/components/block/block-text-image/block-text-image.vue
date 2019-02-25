<template lang="pug" src="./block-text-image.pug"></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: []
      },
      percentage: null
    }
  },
  created () {
    for (let i = 0; i <= 1.01; i += 0.05) {
      this.intersectionOptions.threshold.push(i.toFixed(2))
    }
  },
  methods: {
    onWaypoint ({going, direction, _entry}) {
      this.percentage = 1 + (_entry.intersectionRatio.toFixed(2) * 0.1)
    }
  }
}
</script>
