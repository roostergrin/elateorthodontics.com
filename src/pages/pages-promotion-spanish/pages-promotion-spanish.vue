<template lang="pug" src="./pages-promotion-spanish.pug"></template>

<script>
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomSpecialPageSpanish from 'components/custom/custom-special-page-spanish/custom-special-page-spanish'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import CustomSpecialCta from 'components/custom/custom-special-cta/custom-special-cta'

export default {
  name: 'Special',
  computed: {
    props () {
      return this.$store.state.pages['special-es']
    }
  },
  components: {
    BlockTextImage,
    CustomSpecialPageSpanish,
    CustomHomeWelcome,
    CustomSpecialCta
  }
}
</script>
