import actions from './actions';
import nav from './modules/nav';
import tabs from './modules/tabs';

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentPage: 'home',
    usertoken: null,
    displayName: null,
    userId: null,
    email: null,
    groupTeam: null,
    groupDash: null
  },
  modules: {
    nav,
    tabs
  },
  mutations: {
    setCurrentPage: (state, page) => {
      state.currentPage = page;
    },
    setUserToken: (state, value) => {
      state.usertoken = value;
    },
    setDisplayName: (state, value) => {
      state.displayName = value;
    },
    setUserId: (state, value) => {
      state.userId = value;
    },
    setEmail: (state, value) => {
      state.email = value;
    },
    setGroupSDA: (state, value) => {
      state.groupTeam = value;
    },
    setGroupDash: (state, value) => {
      state.groupDash = value;
    }
  },
  getters: {
    currentPage: state => state.currentPage,
    currentCategory: state => {
      if (state.currentPage.includes('/')) {
        let match = state.currentPage.match(/^[\w-]*\//)[0];
        match = match.slice(0, -1);
        return match;
      }
      return state.currentPage;
    },
    usertoken: state => state.usertoken,
    displayName: state => state.displayName,
    userId: state => state.userId,
    email: state => state.email,
    groupTeam: state => state.groupTeam,
    groupDash: state => state.groupDash
  },
  actions
});
