<template lang='pug' src='./custom-contact-page.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      active: 0
    }
  },
  methods: {
    setActive (i) {
      this.active = i
    }
  }
}
</script>
