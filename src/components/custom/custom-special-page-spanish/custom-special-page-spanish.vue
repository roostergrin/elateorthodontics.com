<template lang='pug' src='./custom-special-page-spanish.pug'></template>

<script>
import SpecialFormSpanish from 'components/form/special-form-spanish/special-form-spanish'

export default {
  props: ['content'],
  data () {
    return {
      active: 0,
      showing: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.showing = true
    }, 450)
    if (this.$route.hash === '#refer') {
      this.active = 1
    }
  },
  methods: {
    setActive (i) {
      this.active = i
    }
  },
  components: {
    SpecialFormSpanish
  }
}
</script>
