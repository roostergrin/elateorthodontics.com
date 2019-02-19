<template lang='pug' src='./lazy-image.pug'></template>

<script>
import ErrorPng from '@/assets/error.png'

export default {
  props: {
    src: {
      type: String,
      default () {
        return ErrorPng
      }
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    position: {
      type: Array,
      default () {
        return []
      }
    },
    alt: {
      type: String,
      default: 'I am an image'
    }
  },
  data () {
    return {
      loaded: false,
      compSrc: null,
      componentLoaded: false,
      width: null,
      height: null,
      naturalWidth: null,
      naturalHeight: null,
      intersectionOptions: {
        root: null,
        rootMargin: '0px',
        threshold: [0]
      }
    }
  },
  mounted () {
    this.setCompressed()
    this.componentLoaded = true
    let intervalTime = setInterval(() => {
      if (this.$refs.image.naturalWidth > 0 && this.$refs.image.naturalHeight > 0 && this.$refs.image.naturalWidth !== undefined && this.$refs.image.naturalHeight !== undefined) {
        this.setSizing()
        clearInterval(intervalTime)
      }
    }, 100)
  },
  methods: {
    setCompressed () {
      this.compSrc = this.src.split(/\.(?=[^.]+$)/).join('-compressed.')
    },
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        this.loaded = true
      }
    },
    setSizing () {
      this.width = this.$refs.container.clientWidth
      this.height = this.$refs.container.clientHeight
      this.naturalWidth = this.$refs.image.naturalWidth
      this.naturalHeight = this.$refs.image.naturalHeight
    }
  }
}
</script>
<style scoped lang='sass' src='./lazy-image.sass'></style>
