<template lang="pug" src="./pages-home.pug"></template>

<script>
import BlockOverlap from 'components/block/block-overlap/block-overlap'
import BlockOverlapMobile from 'components/block/block-overlap-mobile/block-overlap-mobile'
import BlockOverlapTablet from 'components/block/block-overlap-tablet/block-overlap-tablet'
import BlockScroll from 'components/block/block-scroll/block-scroll'
import BlockScrollMobile from 'components/block/block-scroll-mobile/block-scroll-mobile'
import BlockScrollTablet from 'components/block/block-scroll-tablet/block-scroll-tablet'
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomHomeTestimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import CustomHomeTreatments from 'components/custom/custom-home-treatments/custom-home-treatments'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockOverlap,
    BlockOverlapMobile,
    BlockOverlapTablet,
    BlockScroll,
    BlockScrollMobile,
    BlockScrollTablet,
    BlockTextImage,
    CustomHomeTestimonials,
    CustomHomeTreatments,
    CustomHomeWelcome
  }
}
</script>
