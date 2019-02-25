<template lang="pug" src="./pages-home.pug"></template>

<script>
import BlockScroll from 'components/block/block-scroll/block-scroll'
import BlockScrollOverlap from 'components/block/block-scroll-overlap/block-scroll-overlap'
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockScroll,
    BlockScrollOverlap,
    BlockTextImage,
    CustomHomeWelcome
  }
}
</script>
