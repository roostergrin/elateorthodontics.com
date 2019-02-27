<template lang="pug" src="./pages-get-started.pug"></template>

<script>
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomGetConsultation from 'components/custom/custom-get-consultation/custom-get-consultation'
import CustomGetForms from 'components/custom/custom-get-forms/custom-get-forms'

export default {
  name: 'Get-Started',
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  },
  components: {
    BlockTextImage,
    CustomGetConsultation,
    CustomGetForms
  }
}
</script>
