/* This state is here to manage the navigation states */

const state = {
  isOpen: false
}

const getters = {
  sidebarOpen: state => state.isOpen
}

const mutations = {
  toggleSidebar: state => {
    state.isOpen = !state.isOpen;
  },
  closeSidebar: state => {
    state.isOpen = false;
  }
}

export default {
  state,
  getters,
  mutations
}
