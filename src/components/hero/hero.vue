<template lang="pug" src="./hero.pug"></template>

<script>
import VueScrollTo from 'vue-scrollto'
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'

export default {
  data () {
    return {
      menuOpen: false,
      showing: null,
      active: null,
      currentPage: null,
      hoveredPage: null,
      hoveredSection: null,
      delaySection: null
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.contact
    },
    content () {
      return this.$store.state.app.navigation
    },
    links () {
      return this.$router.options.routes
    },
    locations () {
      return this.$store.state.app.footer
    }
  },
  watch: {
    $route: function () {
      this.currentPage = document.location.pathname
      this.hoveredPage = document.location.pathname
      this.hoveredSection = null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.currentPage = document.location.pathname
      this.hoveredPage = document.location.pathname
      this.hoveredSection = null
      setTimeout(() => {
        this.showing = true
      }, 1500)
      setTimeout(() => {
        this.active = true
      }, 3000)
    })
  },
  methods: {
    setPage (i) {
      this.currentPage = i
      this.toggleMenu()
    },
    setSection (i) {
      this.hoveredSection = i
      setTimeout(() => {
        this.delaySection = true
      }, 450)
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
      console.log(this.hoveredPage)
      this.hoveredPage = i
    },
    scrollTo (i) {
      VueScrollTo.scrollTo(i)
    },
    toggleMenu () {
      if (window.pageYOffset > 0) {
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
  },
  components: {
    CustomContactPage
  }
}
</script>
