<template lang="pug" src="./pages-promotion.pug"></template>

<script>
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomSpecialPage from 'components/custom/custom-special-page/custom-special-page'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import CustomSpecialCta from 'components/custom/custom-special-cta/custom-special-cta'

export default {
  name: 'Special',
  computed: {
    props () {
      return this.$store.state.pages['special']
    }
  },
  components: {
    BlockTextImage,
    CustomSpecialPage,
    CustomHomeWelcome,
    CustomSpecialCta
  }
}
</script>
