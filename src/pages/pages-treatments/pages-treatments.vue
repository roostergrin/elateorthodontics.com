<template lang="pug" src="./pages-treatments.pug"></template>

<script>
import BlockOverlap from 'components/block/block-overlap/block-overlap'
import BlockOverlapMobile from 'components/block/block-overlap-mobile/block-overlap-mobile'
import BlockOverlapTablet from 'components/block/block-overlap-tablet/block-overlap-tablet'
import BlockTextImage from 'components/block/block-text-image/block-text-image'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockOverlap,
    BlockOverlapMobile,
    BlockOverlapTablet,
    BlockTextImage
  }
}
</script>
