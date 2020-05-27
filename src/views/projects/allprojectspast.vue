<template>
  <div id="projects" class="page-body">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Inactive Projects</h1>
      <p>The team works with a variety of teams as part of its mission.</p>
    </div>
    <div class="container unbox">

      <div v-if="items.inactive">
        <section class="bx--structured-list">
          <div class="bx--structured-list-thead">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-th">Status</div>
              <div class="bx--structured-list-th">Project</div>
              <div class="bx--structured-list-th">Description</div>
              <div class="bx--structured-list-th">Lead(s)</div>
              <div class="bx--structured-list-th"></div>
            </div>
          </div>
          <div class="bx--structured-list-tbody" v-for="item in items.inactive">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap first-col">{{item.status}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.project}}</div>
              <div class="bx--structured-list-td">{{item.description}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">
                <ul>
                  <li v-for="name in item.leads">
                    <a :href="'https://www.domain.com/directory/?s=' + name.email">{{name.name}}</a>
                  </li>
                </ul>
              </div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">
                <router-link :to="{ name: 'projectview', params: { project: item.id }}" title="Project Details">
                  view details
                </router-link><br />
                <div v-if="groupTeam === 'team'">
                  <router-link :to="{ name: 'projectedit', params: { project: item.id } }">
                    edit project
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div v-else>
        Loading inactive projects.
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'allprojects',
  props: ['project'],
  data() {
    return {
      isActive: false,
      message: null,
      items: {
        current: [],
        inactive: []
      }
    }
  },
  mounted() {
    var token = this.$cookie.get('token');
    if ((this.$store.getters.groupTeam === 'team') && token) {
      axios.get('/api/open/projects').then((response) => {
        var list = response.data;
        var closelength = list.inactive.length;
        for (var b = 0; b < closelength; b++) {
          axios.get('/api/open/oneproject/' + list.inactive[b]).then((response) => {
            var b64content = decodeURIComponent(escape(atob(response.data.content)));
            var inactiveItems = JSON.parse(b64content);
            inactiveItems.sha = response.data.sha;
            this.items.inactive.push(inactiveItems);
          }).catch(function (error) {
            console.log(error);
          });
        };
        console.log('all calls made');
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.message = 'If you do not see the project list, first confirm that you are logged in with your w3id. If you still do not see a project list, contact Cecilia Velazquez or Tim King to be added to the SDA ZZZ Analytics Intake groups.';
    }
  },
  computed: mapGetters([
    'usertoken',
    'displayName',
    'groupTeam',
    'groupDash'
  ]),
  methods: {
    checkUpdate: function(val, project) {
      console.log(val, project);
      if (val) {
        axios.get('/api/open/oneproject/latest/' + val).then((response) => {
          console.log('------------------------------------------- check update');
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        console.log('no sha');
        return false;
      }
    }
  }
}
</script>

<style scoped>

</style>
