<template lang="pug" src="./pages-treatments.pug"></template>

<script>
import BlockOverlap from 'components/block/block-overlap/block-overlap'
import BlockOverlapRetainer from 'components/block/block-overlap-retainer/block-overlap-retainer'
import BlockOverlapRetainerTablet from 'components/block/block-overlap-retainer-tablet/block-overlap-retainer-tablet'
import BlockOverlapRetainerMobile from 'components/block/block-overlap-retainer-mobile/block-overlap-retainer-mobile'
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
    BlockOverlapRetainer,
    BlockOverlapRetainerTablet,
    BlockOverlapRetainerMobile,
    BlockOverlapMobile,
    BlockOverlapTablet,
    BlockTextImage
  }
}
</script>
