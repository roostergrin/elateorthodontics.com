<template lang="pug" src="./custom-elate-team.pug"></template>

<script>
import VueScrollTo from 'vue-scrollto'
import ModalBio from 'components/modal/modal-bio/modal-bio'

export default {
  props: ['content'],
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0]
      },
      active: 0,
      showing: false,
      transformed: false,
      fixed: false,
      positionBottom: false,
      bio: false
    }
  },
  mounted () {
    this.$nextTick(
      window.addEventListener('scroll', this.onScroll)
    )
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onWaypointIn ({going, direction, _entry}) {
      if (going === 'in' && direction === 'top') {
        this.showing = true
        setTimeout(() => {
          this.transformed = true
        }, 1250)
      }
    },
    cleanStr (i) {
      return i.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '')
    },
    moveTo (i) {
      let destination = this.cleanStr(i)
      this.scrolling = true
      setTimeout(() => {
        VueScrollTo.scrollTo('#' + destination, { offset: 0, easing: 'linear', duration: 500 })
      }, 350)
      setTimeout(() => {
        this.scrolling = null
      }, 850)
    },
    onScroll () {
      // Finds Ratio of Component to Scroll
      // let scrollRatio = (this.content.length - 1) / this.content.length
      //
      // // Height of whole container
      // let containerHeight = this.$refs.component.clientHeight
      //
      // // Finds point on page where the container is
      // let scrollDistance = window.pageYOffset - this.$refs.component.offsetTop
      //
      // // Toggles the start of the component
      // let isInside = window.pageYOffset > this.$refs.component.offsetTop
      //
      // if ((containerHeight * scrollRatio) >= scrollDistance && isInside) {
      //   this.fixed = true
      // } else {
      //   this.fixed = false
      // }
      //
      // if ((containerHeight * scrollRatio) <= scrollDistance && isInside) {
      //   this.positionBottom = true
      // } else {
      //   this.positionBottom = false
      // }
    },
    onWaypoint ({going, direction, _entry}, i) {
      if (going === 'out' && direction === 'bottom') {
        this.active -= 1
      }
      if (going === 'in' && direction === 'top') {
        this.active += 1
      }
    },
    openBio (i) {
      if (!this.bio) this.bio = i
      else this.bio = false
      this.bio ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  },
  components: {
    ModalBio
  }
}
</script>
