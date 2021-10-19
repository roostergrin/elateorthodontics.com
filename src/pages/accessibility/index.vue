<template lang="pug">
  .pages-accessibility
    .pages-accessibility__container
      h1.pages-accessibility__title(v-html='`${companyName} Accessibility Statement`')
      .pages-accessibility__col
        p(v-html='`${companyName} is committed to facilitating the accessibility and usability of its website, ${domain}, for everyone.  ${companyName} aims to comply with all applicable standards, including the World Wide Web Consortiums Web Content Accessibility Guidelines 2.0 up to Level AA (WCAG 2.0 AA). ${companyName} is proud of the efforts that we have completed and that are in-progress to ensure that our website is accessible to everyone.`')
        p(v-html='`We highly recommend using the userway accessibility widget linked in the footer, but should you experience any difficulty in accessing any part of this website, please feel free to ${phone ? "call us at " + phone : ""} ${phone && email ? "or" : ""} ${email ? "email us at " + formattedEmail : ""} and we will work with you to provide the information or service you seek through an alternate communication method that is accessible for you consistent with applicable law (for example, through telephone support).`')
</template>

<script>
export default {
  data () {
    return {
      companyName: 'Elate Orthodontics', // Fill this in
      domain: 'https://elateorthodontics.com', // Fill this in
      email: 'info@elateorthodontics.com', // Fill this in
      phone: '(972) 538-4343', // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
