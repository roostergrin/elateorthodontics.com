<template lang="pug">
  .pages-privacy
    .pages-privacy__container
      .privacy-text
        .pages-privacy__col(v-html='props.privacy_policy_text')
</template>

<script>
export default {
  name: 'Privacy Policy',
  computed: {
    props () {
      return this.$store.state.pages['privacy-policy']
    }
  },
  components: {
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
