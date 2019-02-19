import Vue from 'vue'
import VueRouter from 'vue-router'
import scrollBehavior from '@/shared/functionality/scroll-behavior.js'

const Home = () => import('@/pages/pages-home/pages-home')
const AboutUs = () => import('@/pages/pages-about-us/pages-about-us')
const GetStarted = () => import('@/pages/pages-get-started/pages-get-started')
const Treatments = () => import('@/pages/pages-treatments/pages-treatments')
const Contact = () => import('@/pages/pages-contact/pages-contact')
const Styleguide = () => import('@/pages/styleguide/styleguide')
const PageNotFound = () => import('@/pages/404/404')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: false,
      component: Home
    },
    {
      path: '/about-us',
      name: 'about us',
      navigation: true,
      component: AboutUs,
      children: [
        {
          path: '/about-us#doctors',
          name: 'Meet The Doctors'
        },
        {
          path: '/about-us#office',
          name: 'Office Tour'
        }
      ]
    },
    {
      path: '/treatments',
      name: 'treatments',
      navigation: true,
      component: Treatments,
      children: [
        {
          path: '/treatments#invisalign',
          name: 'Invisalign'
        },
        {
          path: '/treatments#metal',
          name: 'Metal'
        },
        {
          path: '/treatments#ceramic',
          name: 'Ceramic'
        }
      ]
    },
    {
      path: '/get-started',
      name: 'get started',
      navigation: true,
      component: GetStarted,
      children: [
        {
          path: '/get-started#complimentary',
          name: 'Complimentary Consultation'
        },
        {
          path: '/get-started#forms',
          name: 'Patient Forms'
        },
        {
          path: '/get-started#financing',
          name: 'Innovative Financing'
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      navigation: true,
      component: Contact
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  if (from.path !== to.path) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
