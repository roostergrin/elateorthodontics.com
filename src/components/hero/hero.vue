<template lang="pug" src="./hero.pug"></template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['props'],
  data () {
    return {
      menuOpen: false,
      currentPage: null,
      hoveredPage: null
    }
  },
  computed: {
    content () {
      return this.$store.state.app.navigation
    },
    links () {
      return this.$router.options.routes
    }
  },
  mounted () {
    this.currentPage = this.$route.path
    this.hoveredPage = this.$route.path
  },
  methods: {
    setPage (i) {
      this.currentPage = i
      this.toggleMenu()
    },
    setPageHome (i) {
      this.currentPage = i
      this.hoveredPage = this.currentPage
      if (this.menuOpen) {
        this.menuOpen = !this.menuOpen
        document.body.classList.remove('body-stop')
      }
    },
    setHovered (i) {
      this.hoveredPage = i
    },
    toggleMenu () {
      if (window.scrollY > 0) {
        VueScrollTo.scrollTo('#top', { offset: 0, easing: 'ease-in', duration: 500 })
        setTimeout(() => {
          this.menuOpen = !this.menuOpen
          if (this.menuOpen) {
            document.body.classList.add('body-stop')
          } else {
            this.hoveredPage = this.currentPage
            document.body.classList.remove('body-stop')
          }
        }, 500)
      } else {
        this.menuOpen = !this.menuOpen
        if (this.menuOpen) {
          document.body.classList.add('body-stop')
        } else {
          this.hoveredPage = this.currentPage
          document.body.classList.remove('body-stop')
        }
      }
    }
  }
}
</script>
