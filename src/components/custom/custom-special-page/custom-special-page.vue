<template lang='pug' src='./custom-special-page.pug'></template>

<script>
import SpecialForm from 'components/form/special-form/special-form'

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
    SpecialForm
  }
}
</script>
