<template lang='pug' src='./custom-contact-page.pug'></template>

<script>
import MainForm from 'components/form/main-form/main-form'
import ReferralForm from 'components/form/referral-form/referral-form'

export default {
  props: ['content'],
  data () {
    return {
      active: 0,
      showing: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.showing = true
    }, 450)
  },
  methods: {
    setActive (i) {
      this.active = i
    }
  },
  components: {
    MainForm,
    ReferralForm
  }
}
</script>
