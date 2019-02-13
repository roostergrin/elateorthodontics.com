<template lang="pug" src="./pages-contact.pug"></template>

<script>

export default {
  name: 'Contact',
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  }
}
</script>
