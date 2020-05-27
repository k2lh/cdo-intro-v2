<template>
    <header class="bx--global-header team-header" role="banner">
      <div class="bx--global-header__left-container">
        <div class="bx--global-header__title bx--global-header__title--unauth">
          <router-link to="/" class="bx--global-header__title--logo" @click.native="goHome">
            <h1 class="bx--logo__text">
              <span class="bx--logo__text--bold cloud-product-title">SDA</span>
            </h1>
          </router-link>
        </div>
      </div>
      <global-navigation></global-navigation>
  	</header>
</template>

<script>
import globalNavigation from './global-navigation';
import {mapGetters} from 'vuex';

export default {
  name: 'global-header',
  components: {
    globalNavigation
  },
  computed: mapGetters(['sidebarOpen']),
  methods: {
    goHome () {
      this.$store.commit('setCurrentPage', 'home');
    }
  },
  data () {
    return {
      isOpen: false,
      currentLink: this.$route.name,
    }
  }
}
</script>


<style lang='scss'>

.bx--global-header.team-header {
  top: 0;
}

h1.bx--logo__text {
  padding: inherit;
}


</style>
