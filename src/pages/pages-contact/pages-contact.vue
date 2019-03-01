<template lang="pug" src="./pages-contact.pug"></template>

<script>
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'

export default {
  name: 'Contact',
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  components: {
    CustomContactPage
  }
}
</script>
