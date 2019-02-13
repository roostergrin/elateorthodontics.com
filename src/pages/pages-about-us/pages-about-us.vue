<template lang="pug" src="./pages-about-us.pug"></template>

<script>

export default {
  name: 'About Us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  }
}
</script>
