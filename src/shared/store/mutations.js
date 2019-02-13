import { GET_PAGES, GET_APP, VIEW_NAV, VIEW_BODY, VIEW_TYPES, VIEW_SHOWMODAL, VIEW_MODALCONTENT } from './mutation-types.js'

const mutations = {
  [GET_PAGES] (state, data) {
    state.pages = data
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  // },
  [GET_APP] (state, data) {
    state.app = data
  },
  [VIEW_NAV] (state, data) {
    state.nav = data
  },
  [VIEW_BODY] (state, data) {
    state.body = data
  },
  [VIEW_TYPES] (state, data) {
    state.types = data
  },
  [VIEW_SHOWMODAL] (state, data) {
    state.showModal = data
  },
  [VIEW_MODALCONTENT] (state, data) {
    state.modalContent = data
  }
}

export default mutations
