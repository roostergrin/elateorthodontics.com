<template lang="pug" src="./elate-library.pug"></template>

<script>
import BlockBracescare from 'components/block/block-bracescare/block-bracescare'
import BlockInvisalignCare from 'components/block/block-invisalign-care/block-invisalign-care'

export default {
  name: 'Elate Library',
  computed: {
    props () {
      return this.$store.state.pages['elate-library']
    }
  },
  components: {
    BlockBracescare,
    BlockInvisalignCare
  }
}
</script>
