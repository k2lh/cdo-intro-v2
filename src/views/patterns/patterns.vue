<template>
  <div id="patterns" class="page-body">
    <pageheadPatterns></pageheadPatterns>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">How to solve complex data challenges</h1>
      <p></p>
    </div>
    <div class="container unbox">
      <div class="row">
        <div class="col span_4">
          <ul v-for="(options, filter) in filters" class="filters" ref="menu" :key="filter">
            <template>
              <li v-for="(active, option) in options" class="link-dark bx--link" :class="{ 'filters__item--active': active }" @click="setFilter(filter, option)">
                {{ option }}
              </li>
            </template>
          </ul>
        </div>
        <div class="col span_12">
          <div class="row">
            <transition-group name="pattern">
              <div v-for="pattern in list" :key="pattern.id">
                <div class="pattern__info col span_5 floatleft" v-if="pattern.public">
                  <p class="strong pattern__name">
                    <router-link :to="{ name: 'patternview', params: { onepattern: pattern.path }}" title="Read the pattern">
                      {{ pattern.name }}
                    </router-link>
                    </p>
                  <blockquote class="pattern__slogan">{{ pattern.description }}</blockquote>
                  <ul class="tags">
                    <li v-for="key in pattern.keywords">{{ key }}</li>
                  </ul>
                </div>
                <div class="pattern__info col span_5 floatleft" v-else-if="groupTeam === 'team'">
                  <p class="strong pattern__name">
                    <router-link :to="{ name: 'patternview', params: { onepattern: pattern.path }}" title="Read the pattern">
                      {{ pattern.name }}
                    </router-link>
                    </p>
                  <blockquote class="pattern__slogan">{{ pattern.description }}</blockquote>
                  <ul class="tags">
                    <li v-for="key in pattern.keywords">{{ key }}</li>
                  </ul>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'patterns',
  props: ['onepattern'],
  data() {
    return {
      currentView: this.currentView,
      filters: { categories: {} },
      menus: { categories: false },
      patterns: []
    }
  },
  computed: {
    ...mapGetters([
      'usertoken',
      'displayName',
      'groupTeam',
      'groupDash'
    ]),
    list() {
      let { categories } = this.activeFilters
      return this.patterns.filter(({ keywords }) => {
        return !categories.length || categories.every(cat => ~keywords.indexOf(cat));
      })
    },
    activeFilters() {
      let { categories } = this.filters
      return {
        categories: Object.keys(categories).filter(c => categories[c])
      }
    }
  },
  methods: {
    selectLink(link) {
      this.$store.commit('setCurrentPage', link.id);
    },
    setFilter(filter, option) {
      setTimeout(() => {
        this.clearFilter(filter, option, this.filters[filter][option])
      }, 100)
    },
    clearFilter(filter, except, active) {
      Object.keys(this.filters[filter]).forEach(option => {
        this.filters[filter][option] = except === option && !active
      })
    }
  },
  created() {
    axios.get('/api/open/patterns').then((response) => {
      this.patterns = response.data;
      this.patterns.forEach(({ keywords }) => {
        keywords.forEach(category => {
          this.$set(this.filters.categories, category, false)
        })
      })
    });
  }
}
</script>

<style>
  .pattern__info {
    min-height: 23rem;
  }
</style>
