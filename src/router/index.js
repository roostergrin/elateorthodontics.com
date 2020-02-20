import Vue from 'vue'
import VueRouter from 'vue-router'
import scrollBehavior from '@/shared/functionality/scroll-behavior.js'

const Home = () => import('@/pages/pages-home/pages-home')
const AboutUs = () => import('@/pages/pages-about-us/pages-about-us')
const GetStarted = () => import('@/pages/pages-get-started/pages-get-started')
const Treatments = () => import('@/pages/pages-treatments/pages-treatments')
const Contact = () => import('@/pages/pages-contact/pages-contact')
const Promotion = () => import('@/pages/pages-promotion/pages-promotion')
const PromotionSpanish = () => import('@/pages/pages-promotion-spanish/pages-promotion-spanish')
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
          name: 'Meet The Doctors',
          hash: '#doctors'
        },
        {
          path: '/about-us#office',
          name: 'Office Tour',
          hash: '#office'
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
          name: 'Invisalign',
          hash: '#invisalign'
        },
        {
          path: '/treatments#metal',
          name: 'Metal',
          hash: '#metal'
        },
        {
          path: '/treatments#ceramic',
          name: 'Ceramic',
          hash: '#ceramic'
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
          name: 'Complimentary Consultation',
          hash: '#complimentary'
        },
        {
          path: '/get-started#financing',
          name: 'Innovative Financing',
          hash: '#financing'
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
      path: '/special',
      name: 'special',
      navigation: true,
      component: Promotion
    },
    {
      path: '/special-es',
      name: 'special',
      navigation: true,
      component: PromotionSpanish
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
