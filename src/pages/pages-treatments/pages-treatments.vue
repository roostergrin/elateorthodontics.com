<template lang="pug" src="./pages-treatments.pug"></template>

<script>
import BlockScrollOverlap from 'components/block/block-scroll-overlap/block-scroll-overlap'
import BlockTextImage from 'components/block/block-text-image/block-text-image'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockScrollOverlap,
    BlockTextImage
  }
}
</script>
