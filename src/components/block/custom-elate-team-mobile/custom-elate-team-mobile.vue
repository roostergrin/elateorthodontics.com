<template lang="pug" src="./custom-elate-team-mobile.pug"></template>

<script>
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
      bio: false
    }
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
    setActive (i) {
      this.active = i
    },
    cleanStr (i) {
      return i.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '')
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
