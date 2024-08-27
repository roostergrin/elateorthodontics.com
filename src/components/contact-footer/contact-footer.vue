<template lang='pug' src='./contact-footer.pug'></template>

<script>
export default {
  computed: {
    content () {
      return this.$store.state.app.footer
    }
  }
}
</script>
