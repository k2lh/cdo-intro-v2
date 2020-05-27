import Vue from 'vue'
import {mapGetters} from 'vuex';
import app from './app'
import router from './router'
import { store } from './store/store';
// import VueNVD3 from 'vue-nvd3'
import VueSession from 'vue-session';
import axios from 'axios';
import vueMoment from 'vue-moment';
import VueCookie from 'vue-cookie';
import VueTruncate from 'vue-truncate-filter';

window.bus = new Vue({});

Vue.use(VueSession)
// Vue.use(VueNVD3)
Vue.use(vueMoment)
Vue.use(VueCookie)
Vue.use(VueTruncate)

import pageheadCommunity from './components/pagehead/pageheadCommunity.vue'
import pageheadSolutions from './components/pagehead/pageheadSolutions.vue'
import pageheadLibrary from './components/pagehead/pageheadLibrary.vue'
import pageheadPatterns from './components/pagehead/pageheadPatterns.vue'
import pageheadProjects from './components/pagehead/pageheadProjects.vue'
import pageheadDiscover from './components/pagehead/pageheadDiscover.vue'

Vue.component('pageheadCommunity', pageheadCommunity)
Vue.component('pageheadSolutions', pageheadSolutions)
Vue.component('pageheadLibrary', pageheadLibrary)
Vue.component('pageheadPatterns', pageheadPatterns)
Vue.component('pageheadProjects', pageheadProjects)
Vue.component('pageheadDiscover', pageheadDiscover)

import sdaSunburst from './components/sda-sunburst/sda-sunburst.vue'
import sdaForceDirect from './components/sda-force-direct/sda-force-direct.vue'
import sdaTreemap from './components/sda-treemap/sda-treemap.vue'
import sdaBar from './components/sda-bar/sda-bar.vue'
import sdaDivergeBar from './components/sda-diverge-bar/sda-diverge-bar.vue'
import sdaDonut from './components/sda-donut/sda-donut.vue'

Vue.component('sdaSunburst', sdaSunburst)
Vue.component('sdaForceDirect', sdaForceDirect)
Vue.component('sdaTreemap', sdaTreemap)
Vue.component('sdaBar', sdaBar)
Vue.component('sdaDivergeBar', sdaDivergeBar)
Vue.component('sdaDonut', sdaDonut)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  template: '<app/>',
  data() {
    return {
      user: null,
      usertoken: null
    }
  },
  components: { app },
  mounted() {
    // initialize the current page based on url
    const currentPath = window.location.pathname;
    let currentPage = currentPath === '/' ? 'home' : currentPath.substr(1);
    const subPath = currentPage.substr(0, currentPage.indexOf('/'));
    if (subPath === 'project') {
      currentPage = 'projects';
    } else if (subPath === 'news') {
      currentPage = 'news';
    }
    this.$store.commit('setCurrentPage', currentPage);
    if (this.$cookie.get('token') !== null) {
      this.$store.commit('setUserToken', this.$cookie.get('token'));
      this.$store.commit('setDisplayName', this.$cookie.get('displayName'));
      this.$store.commit('setUserId', this.$cookie.get('userid'));
      this.$store.commit('setEmail', this.$cookie.get('email'));
      this.$store.commit('setGroupSDA', this.$cookie.get('groupTeam'));
      this.$store.commit('setGroupDash', this.$cookie.get('groupDash'));
    } else {
      this.$store.commit('setUserToken', null);
      this.$store.commit('setGroupSDA', 'false');
      this.$store.commit('setGroupDash', 'false');
    }
  },
  computed: mapGetters([
    'currentPage'
  ])
})

// register
