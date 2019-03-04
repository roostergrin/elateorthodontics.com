import Vue from 'vue'
import Icon from 'components/global/icon/icon'
import LazyImage from 'components/global/lazy-image/lazy-image'
import Loader from 'components/global/loader/loader'
import ScrollTop from 'components/global/scroll-top/scroll-top'
import NavTrigger from 'components/global/nav-trigger/nav-trigger'
import Trigger from 'components/global/trigger/trigger'

const components = () => {
  Vue.component('Icon', Icon)
  Vue.component('LazyImage', LazyImage)
  Vue.component('Loader', Loader)
  Vue.component('ScrollTop', ScrollTop)
  Vue.component('NavTrigger', NavTrigger)
  Vue.component('Trigger', Trigger)
}

export default components()
