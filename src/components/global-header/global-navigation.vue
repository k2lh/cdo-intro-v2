<template>
  <nav class="bx--global-header__right-container" role="navigation">
    <div v-if="groupTeam && usertoken">
      <ul class="bx--global-header__menu hasGroupAndToken">
        <li @click.capture="selectLink(link)" v-for="link in links" class="nav-list__item" :class="classes(link)" role="presentation" @mouseover="subMenuCanOpen = true">
          <router-link class="nav-list__link" :to="link.url" >{{ link.label }}</router-link>
          <ul v-if="link.subList" class="nav-sublist" :class="getSubListClasses(link)">
            <li v-for="subLink in link.subList" class="nav-sublist__item">
              <router-link class="nav-sublist__link" :to="subLink.url">{{ subLink.label }}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-list__link loggedinuser">
          <svg width='32' height='32' viewBox='0 0 32 32' fill-rule='evenodd'>
            <path fill="#FFF" d='M16 6.4c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0-2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z'></path>
            <path fill="#FFF" d='M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm7.3 24.3H8.7c-1.2 0-2.2.5-2.8 1.3C3.5 23.1 2 19.7 2 16 2 8.3 8.3 2 16 2s14 6.3 14 14c0 3.7-1.5 7.1-3.9 9.6-.6-.8-1.7-1.3-2.8-1.3z'></path>
          </svg>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul class="bx--global-header__menu noGroupOrToken">
        <li @click.capture="selectLink(link)" v-for="link in links" class="nav-list__item" :class="classes(link)" role="presentation" @mouseover="subMenuCanOpen = true">
          <router-link v-if="link.limit === 'none'" class="nav-list__link" :to="link.url" >{{ link.label }}</router-link>
          <ul v-if="link.subList" class="nav-sublist" :class="getSubListClasses(link)">
            <li v-for="subLink in link.subList" class="nav-sublist__item">
              <router-link v-if="subLink.limit === 'none'" class="nav-sublist__link" :to="subLink.url">{{ subLink.label }}</router-link>
            </li>
          </ul>
        </li>
        <li v-if="!usertoken" class="nav-list__item">
          <a key="external-link" href="https://sso.com/auth/sps/samlidp2/saml20/logininitial?RequestBinding=HTTPPost&PartnerId=https://saa.stage1.domain.net/&NameIdFormat=email&Target=https://saa.stage1.domain.net/ " class="nav-list__link" >Login</a>
        </li>
        <li v-else class="nav-list__link loggedinuser">
          <svg width='32' height='32' viewBox='0 0 32 32' fill-rule='evenodd'>
            <path fill="#FFF" d='M16 6.4c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0-2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z'></path>
            <path fill="#FFF" d='M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm7.3 24.3H8.7c-1.2 0-2.2.5-2.8 1.3C3.5 23.1 2 19.7 2 16 2 8.3 8.3 2 16 2s14 6.3 14 14c0 3.7-1.5 7.1-3.9 9.6-.6-.8-1.7-1.3-2.8-1.3z'></path>
          </svg>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import navigationLinks from './navigation-links';
import { mapGetters } from 'vuex';

export default {
  name: 'global-navigation',
  data () {
    return {
      subMenuCanOpen: false
    }
  },
  props: {
    links: {
      type: Array,
      default: () => navigationLinks
    }
  },
  methods: {
    selectLink (link) {
      this.$store.commit('setCurrentPage', link.id);
      this.$store.commit('toggleSidebar');
      this.subMenuCanOpen = false;
    },
    getSubListClasses (link) {
      let res = {
        [`nav-sublist--${link.id}`]: true,
        [`can-open`]: this.subMenuCanOpen
      };
      return res;
    },
    classes (link) {
      let isSelected = link.id === this.$store.getters.currentCategory;
      let selectClass = `nav-list__link--${link.id}`;
      let classes = {
        'is-active': isSelected,
      };
      classes[selectClass] = isSelected;
      return classes;
    }
  },
  computed: mapGetters([
    'usertoken',
    'displayName',
    'groupTeam',
    'groupDash'
  ])
}
</script>

<style lang='scss'>
.bx--global-header__menu {
  padding: inherit;
}


// Nav Button Focus
[data-peripheral='keyboard'] .global-header__nav-button:focus {
  border-radius: 0;
  box-shadow: 0 0 2px 2px #79a6f6;
}

.team-header {
  ol>li, ul>li {
    padding-left: 0;
  }
  a:hover {
    text-decoration: none;
  }
  ul li+li, ol li+li {
    padding-top: 0;
  }
  ul>li::before, ol>li::before {
    display: none;
  }
  ul li ul, ul li ol, ol li ul, ol li ol {
    padding: 0;
  }
}

.nav-list__item {
  position: relative;
  padding: 0;
  border: 0 !important;

  &:hover {
    box-shadow: none;
    background: none;

    .nav-list__link {
      color: #fcfcfc;
    }
  }

  &:hover .can-open {
    opacity: 1;
    visibility: visible;
  }
}

.nav-list__link {
  color: #fcfcfc;
  display: block;
  line-height: 60px;
  text-align: center;
  padding: 0 0 0 2rem;
  font-weight: 400;
}

.nav-list__link.loggedinuser {
  padding-left: 2rem;
}

// Navigation Dropdown Menu
.nav-sublist {
  position: absolute;
  display: none;
  top: 54px;
  right: -20%;
  width: 180px;
  border-top: 6px solid #5392ff;
  background-color: #1d3458;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  display: block;
  padding-bottom: 0;
}

.nav-sublist__link {
  line-height: 30px;
}

.nav-sublist__link {
  display: block;
  color: #fcfcfc;
  padding: 0 20px;
  font-weight: 400;

  &:hover {
    background-color: #00a78f;
  }
}

// Navigation Button
.global-header__nav-button {
  background: none !important;
  margin-left: -10px;
  display: none;
}

</style>
