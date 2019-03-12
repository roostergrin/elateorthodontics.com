import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueWaypoint from 'vue-waypoint'
import VueScrollTo from 'vue-scrollto'
import VueParallaxJS from 'vue-parallax-js'

const vendors = () => {
  Vue.use(VeeValidate)
  Vue.use(VueParallaxJS, {minWidth: 768})
  Vue.use(VueWaypoint)
  Vue.use(VueScrollTo, {
    container: 'body',
    duration: 1500,
    easing: 'ease',
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })
}

export default vendors()
