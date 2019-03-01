<template lang='pug' src='./custom-get-forms.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      },
      showing: null
    }
  },
  methods: {
    onWaypoint ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
      }
    }
  }
}
</script>
