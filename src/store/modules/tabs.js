/* This state is here to manage the navigation states */

const state = {
  tabSelected: undefined,
  activePanel: undefined
}

const getters = {
  tabSelected: state => state.tabSelected,
  activePanel: state => state.activePanel
}

const mutations = {
  selectTab: (state, tab) => {
    state.tabSelected = tab;
  },
  activePanel: (state, panel) => {
    state.activePanel = panel;
  }
}

export default {
  state,
  getters,
  mutations
}
