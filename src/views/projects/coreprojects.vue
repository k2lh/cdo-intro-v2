<template>
  <div id="projects" class="page-body">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Co-creation Projects</h1>
      <p>The team works with a variety of teams as part of its mission.</p>
    </div>

    <div class="container unbox" v-if="message">
      <div class="row">
        <div class="team100">
          <p>{{message}}</p>
        </div>
      </div>
    </div>

    <div class="container shadow simplebar plain" v-if="items" id="top">
      <div class="row">
        <div class="team100">
          <ul class="plain-list">
            <li v-for="(item, index) in items">
              <a v-on:click="goto(item.id)">
                <svg width="14" height="16" viewBox="0 0 14 16"><path d="M8 11.953l3.905-4.09 1.453 1.374L7 16 .635 9.238l1.452-1.376L6 11.954V0h2v11.953z"></path></svg>
                <span>{{item.project}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-for="(item, index) in items" class="container shadow"  v-bind:id="item.id">
      <div class="row">
        <div class="col span_6">
          <h2 class="h2">{{item.project}}</h2>
        </div>
        <div class="col span_10">
          <p>
            <span v-if="item.description_full">{{item.description_full}}</span>
            <span v-else="item.description">{{item.description}}</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col span_8 subtitle nopadding">
          Business Benefits
        </div>
        <div class="col span_8 nopadding">
          <ul class="article-list" v-if="item.benefits">
            <li v-for="point in item.benefits">{{point}}</li>
          </ul>
          <p class="tobedefined" v-else>Data not available.</p>
        </div>
      </div>
      <div class="row">
        <div class="col span_8 subtitle nopadding">
          Accomplishments
        </div>
        <div class="col span_8 nopadding">
          <ul class="article-list" v-if="item.accomplishments">
            <li v-for="point in item.accomplishments">{{point}}</li>
          </ul>
          <p class="tobedefined" v-else>Data not available.</p>
        </div>
      </div>
      <div class="row">
        <div class="col span_8 subtitle nopadding">
          Next steps
        </div>
        <div class="col span_8 nopadding">
          <ul class="article-list" v-if="item.upcoming">
            <li v-for="point in item.upcoming">{{point}}</li>
          </ul>
          <p class="tobedefined" v-else>Data not available.</p>
        </div>
      </div>
      <div class="row">
        <div class="col span_8 subtitle nopadding">
          Related patterns
        </div>
        <div class="col span_8 nopadding">
          <ul class="article-list" v-if="item.patterns">
            <li v-for="point in item.patterns">{{point}}</li>
          </ul>
          <p class="tobedefined" v-else>No linked patterns yet.</p>
        </div>
      </div>
      <div class="row">
        <div class="col span_8 subtitle nopadding">
          Further information
        </div>
        <div class="col span_8 nopadding">
          <p class="note" v-if="usertoken">
            <router-link class="bx--link strong" :to="{ name: 'projectview', params: { project: item.id }}" title="Core Project Details">
            View project details
          </router-link>
          </p>
          <p class="note" v-if="groupTeam">
            <router-link :to="{ name: 'projectedit', params: { project: item.id } }">
              edit project
            </router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col span_16">
          <a class="return-to-top" v-on:click="goto('top')" alt="return to top">
            <svg width='14' height='16' viewBox='0 0 14 16' fill-rule='evenodd'><path d='M6 3.4V16h2V3.4l4.7 4.9L14 7 7 0 0 7l1.3 1.3z'></path></svg>
            return to top
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'coreprojects',
  props: ['project'],
  data() {
    return {
      isActive: false,
      message: null,
      items: []
    }
  },
  created() {
    var token = this.$cookie.get('token');
    if ((this.$store.getters.groupTeam === 'team') && token) {
      axios.get('/api/open/projects').then((response) => {
        var list = response.data;
        var length = list.core.length;
        for (var i = 0; i < length; i++) {
          axios.get('/api/open/oneproject/' + list.core[i]).then((response) => {
            var b64content = decodeURIComponent(escape(atob(response.data.content)));
            var core = JSON.parse(b64content);
            core.sha = response.data.sha;
            this.items.push(core);
          }).catch(function (error) {
            console.log(error);
          });
        };
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.message = 'If you do not see the project list, first confirm that you are logged in with your w3id. If you still do not see a project list, contact Cecilia Velazquez or Tim King to be added to the SDA ZZZ Analytics Intake groups.';
    }
  },
  methods: {
    goto(refName) {
      var element = document.getElementById(refName);
      console.log(element, element.offsetTop);
      var top = element.offsetTop - 60;
      window.scrollTo(0, top);
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

<style scoped>

  a.return-to-top {
    position: relative;
    bottom: -20px;
    left: 2%;
    font-size: .875rem;
    cursor: pointer;
  }

</style>
