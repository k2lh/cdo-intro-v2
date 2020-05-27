<template>
  <div id="global-footer">
    <footer role="contentinfo">

      <div class="container mainblock">

      <div class="bx--row">
          <div class="bx--col-md-2" v-for="link in links">
            <h4 class="footer">
              <router-link class="h6 footer__heading" :to="link.url">{{ link.label }}</router-link>
            </h4>
            <ul class="list footer-list">
              <li v-for="subLink in link.subList" class="footer-list__item">
                <router-link class="footer-list__link" :to="subLink.url">{{ subLink.label }}</router-link>
              </li>
            </ul>
          </div>
        </div>

      <div class="bx--row">
          <div class="bx--col-md-12">
            <div class="footer-corporate-links">
              <ul class="padding-bottom-0 textcolumns-small-2">
                <li><a href="http://www.domain.com/contact/us/en/?lnk=flg-cont-usen">Contact</a></li>
                <li><a href="http://www.domain.com/privacy/us/en/?lnk=flg-priv-usen">Privacy</a></li>
                <li><a href="http://www.domain.com/legal/us/en/?lnk=flg-tous-usen">Terms of use</a></li>
                <li><a href="http://www.domain.com/accessibility/us/en/?lnk=flg-acce-usen">Accessibility</a></li>
                <li class="feedbacklink"><a href="#">Feedback</a></li>
                <li id="truste-cp"><a href="#" onclick="truste.eu.clickListener();return false;">Cookie preferences</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </footer>
  </div>
</template>

<script>
import navigationLinks from '../global-header/navigation-links';
import {mapGetters} from 'vuex';

export default {
  name: 'global-footer',
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
  },
  props: {
    links: {
      type: Array,
      default: () => navigationLinks
    }
  }
}
</script>

<style scoped>

#global-footer {
  position: relative;
  background-color: #f4f4f4;
  min-height: 20rem;
}

h4.footer {
  font-size: 1rem;
  line-height: 1.625rem;
  font-weight: normal;
  padding: 0 0 15px;
}

ul.footer-list {
  padding: 0 0 15px;
  margin: 0;
  list-style: none;
  font-size: 1rem;
  line-height: 1.625rem;
  display: block;
  border: 0;
  vertical-align: baseline;
  background: no-scroll transparent;
}

ul.footer-list>li {
    padding-left: 0;
}

.footer-corporate-links {
  padding-top: 2rem;
}

.footer-corporate-links li {
    display: inline-block;
    padding: 0 20px 0 0;
}

.footer-corporate-links a {
    display: inline-block;
    padding: 5px 0;
}

ul.footer-list>li a,
h4.footer a,
.footer-corporate-links a {
  color: #323232;
  text-decoration: none;
  font-weight: 300;
}

h4.footer a {
  font-weight: 600;
}

ul.footer-list>li a:hover,
h4.footer a:hover,
.footer-corporate-links a:hover {
    color: #3b6caa;
    text-decoration: underline;
}
</style>
