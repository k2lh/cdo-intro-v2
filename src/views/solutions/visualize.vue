<template>
  <div id="implement" class="page-body">
    <pageheadSolutions></pageheadSolutions>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Visualize {{option}}</h1>
      <p>Create visualizations that tell your story, your way.</p>
    </div>
    <div class="container shadow">
      <div class="row">
        <div class="col span_12">
          <ul v-for="(options, filter) in filters" class="plain-list" ref="menu" :key="filter">
            <template>
              <li v-for="(active, option) in options" class="link-dark bx--link" :class="{ 'filters__item--active': active }" @click="setFilter(filter, option)">
                {{ option }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="container unbox">
      <div class="row">
        <transition-group name="item">
        <div class="col span_3" v-for="item in list" :key="item.id">
          <div class="bx--tile">
            <router-link :to="{ name: 'vizcharts', params: { dataviz: item.id } }" class="link-dark" role="tab">
              <div class="card-img">
                <div v-if="item.image">
                  <img :src="'/static/icons/' + item.id + '.svg'" />
                </div>
                <div v-else>
                  <img :src="'/static/icons/stats.svg'" />
                </div>
              </div>
            </router-link>
            <router-link :to="{ name: 'vizcharts', params: { dataviz: item.id } }" class="link-dark" role="tab">
              <p class="strong">{{item.title}}</p>
              <!-- <p class="card-sub" v-for="aka in item.alt">{{aka}}</p> -->
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
var json = '../static/charts.json';

export default {
  name: 'visualize',
  props: ['dataviz', 'tag'],
  data() {
    return {
      isActive: false,
      items: {},
      option: null,
      tag: '',
      filters: { categories: {} },
      menus: { categories: false }
    }
  },
  methods: {
    selectLink(link) {
      this.$store.commit('setCurrentPage', link.id);
    },
    setFilter(filter, option) {
      console.log('setFilter', option);
      this.option = option;
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
  computed: {
    ...mapGetters([
      'usertoken',
      'displayName',
      'groupTeam',
      'groupDash'
    ]),
    list() {
      let { categories } = this.activeFilters
      return this.items.filter(({ keywords }) => {
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
  mounted() {
    console.log('tag', this.tag);
    axios.get(json).then((response) => {
      this.items = response.data;
      this.items.forEach(({ keywords }) => {
        keywords.forEach(category => {
          this.$set(this.filters.categories, category, false)
        })
      })
      this.setFilter('categories', this.tag);
    }).catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style scoped>
  .plain-list li {
    cursor: pointer;
  }
</style>
