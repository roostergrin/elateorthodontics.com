<template lang="pug" src="./pages-promotion-spanish.pug"></template>

<script>
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomSpecialPage from 'components/custom/custom-special-page/custom-special-page'

export default {
  name: 'Special',
  computed: {
    props () {
      return this.$store.state.pages['special-es']
    }
  },
  components: {
    BlockTextImage,
    CustomSpecialPage
  }
}
</script>
