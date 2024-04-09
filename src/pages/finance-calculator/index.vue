<template lang="pug">
  .pages-finance
    .pages-finance__container
      h1.pages-finance__title Finance Calculator
      .pages-finance__col
        .custom-finance__iframe
          iframe.custom-finance__iframe-manual(src='https://elateorthodontics.com/finance-calculate/' frameborder="0" style="border:0")
      iframe(src="https://appointments.greyfinch.com/?division=595555" style="height: 700px; width:90vw; border: 0;display: block;margin: auto;" allow="geolocation")
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
