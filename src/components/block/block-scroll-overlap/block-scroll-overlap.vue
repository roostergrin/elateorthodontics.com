<template lang="pug" src="./block-scroll-overlap.pug"></template>

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
      upActive: true,
      downActive: true,
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
      if ((this.$refs.component.clientHeight / (this.content.scroll.length / 2)) >= window.scrollY - this.$refs.component.offsetTop && window.scrollY > this.$refs.component.offsetTop) {
        this.offset = window.scrollY - this.$refs.component.offsetTop
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
