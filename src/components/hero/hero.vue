<template lang="pug" src="./hero.pug"></template>

<script>
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
</script>
