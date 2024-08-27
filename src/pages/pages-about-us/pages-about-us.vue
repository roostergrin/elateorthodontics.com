<template lang="pug" src="./pages-about-us.pug"></template>

<script>
import BlockScroll from 'components/block/block-scroll/block-scroll'
import BlockScrollMobile from 'components/block/block-scroll-mobile/block-scroll-mobile'
import BlockScrollTablet from 'components/block/block-scroll-tablet/block-scroll-tablet'
import CustomElateTeam from 'components/block/custom-elate-team/custom-elate-team'
import CustomElateTeamTablet from 'components/block/custom-elate-team-tablet/custom-elate-team-tablet'
import CustomElateTeamMobile from 'components/block/custom-elate-team-mobile/custom-elate-team-mobile'
import CustomAboutTour from 'components/custom/custom-about-tour/custom-about-tour'
import CustomFreeConsultation from 'components/custom/custom-free-consultation/custom-free-consultation'

export default {
  name: 'About-Us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    BlockScroll,
    BlockScrollMobile,
    BlockScrollTablet,
    CustomElateTeam,
    CustomElateTeamTablet,
    CustomAboutTour,
    CustomElateTeamMobile,
    CustomFreeConsultation
  }
}
</script>
