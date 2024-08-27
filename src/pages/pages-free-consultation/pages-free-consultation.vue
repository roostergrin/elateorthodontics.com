<template lang="pug" src="./pages-free-consultation.pug"></template>

<script>
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import FreeConsultationMainForm from 'components/form/free-consultation-main-form/free-consultation-main-form'

export default {
  name: 'free-consultation',
  computed: {
    props () {
      return this.$store.state.pages['free-consultation']
    }
  },
  components: {
    CustomContactPage,
    CustomHomeWelcome,
    FreeConsultationMainForm
  }
}
</script>
