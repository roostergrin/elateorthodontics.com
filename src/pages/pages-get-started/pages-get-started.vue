<template lang="pug" src="./pages-get-started.pug"></template>

<script>

export default {
  name: 'Get-Started',
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  }
}
</script>
