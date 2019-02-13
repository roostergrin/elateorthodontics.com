<template lang="pug" src="./pages-home.pug"></template>

<script>

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  }
}
</script>
