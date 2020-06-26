<template lang="pug" src="./pages-elate-aligner.pug"></template>

<script>
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import CustomElateAligner from 'components/custom/custom-elate-aligner/custom-elate-aligner'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages['elate-aligner']
    }
  },
  components: {
    CustomHomeWelcome,
    CustomElateAligner
  }
}
</script>
