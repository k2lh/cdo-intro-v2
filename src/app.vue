<template>
  <div id="app">
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>

  </div>
</template>

<script>
import globalHeader from '@/components/global-header/global-header'
import globalFooter from '@/components/global-footer/global-footer'
// import axios from 'axios';

export default {
  name: 'app',
  components: {
    globalHeader,
    globalFooter
  },
  data() {
    return {
      items: [
        'pagehead/pageheadCommunity.vue',
        'pagehead/pageheadSolutions.vue',
        'pagehead/pageheadLibrary.vue',
        'pagehead/pageheadPatterns.vue',
        'pagehead/pageheadProjects.vue',
        'pagehead/pageheadDiscover.vue'
      ],
      response: null
    }
  },
  methods: {
    updateComponent(ddItem) {
      this.activePrototype = ddItem.value;
    }
  },
  beforeMount() {
    console.log('√ beforeMount --- app.vue');
    if (this.$session.exists() === true) {
      this.session = this.$session.id();
    } else {
      this.$session.start();
    }
  }
};
</script>

<style scoped>
@import "./assets/nvd3.css";
@import "./assets/style.css";
@import "./assets/main.css";
</style>
