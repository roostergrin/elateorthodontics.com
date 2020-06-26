<template lang="pug" src="./pages-test-home.pug"></template>

<script>
import BlockTextImage from 'components/block/block-text-image/block-text-image'
import CustomHomeTestimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import CustomHomeTreatmentIcons from 'components/custom/custom-home-treatment-icons/custom-home-treatment-icons'
import CustomHomeSmileAssessment from 'components/custom/custom-home-smile-assessment/custom-home-smile-assessment'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import BlockDoctors from 'components/block/block-doctors/block-doctors'
export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockTextImage,
    CustomHomeTestimonials,
    CustomHomeTreatmentIcons,
    CustomHomeWelcome,
    CustomHomeSmileAssessment,
    BlockDoctors
  }
}
</script>
