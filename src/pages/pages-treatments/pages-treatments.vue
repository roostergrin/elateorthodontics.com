<template lang="pug" src="./pages-treatments.pug"></template>

<script>

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  }
}
</script>
