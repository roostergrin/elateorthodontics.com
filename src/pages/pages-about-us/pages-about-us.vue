<template lang="pug" src="./pages-about-us.pug"></template>

<script>
import BlockScroll from 'components/block/block-scroll/block-scroll'
import CustomAboutTour from 'components/custom/custom-about-tour/custom-about-tour'

export default {
  name: 'About-Us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    BlockScroll,
    CustomAboutTour
  }
}
</script>
