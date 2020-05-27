<template>
  <div id="projects" class="page-body">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Active Projects</h1>
      <p>The team works with a variety of teams as part of its mission.</p>
    </div>
    <div class="container unbox">

      <div v-if="items">
        <section class="bx--structured-list">
          <div class="bx--structured-list-thead">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('updated')">
                Updated
                <span v-if="currentSort === 'updated'">
                  <span v-if="currentSortDir === 'asc'" class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                  <span v-else class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                </span>
                <span v-else>
                  <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                  </svg>
                </span>
              </div>
              <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('status')">
                Status
                <span v-if="currentSort === 'status'">
                  <span v-if="currentSortDir === 'asc'" class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                  <span v-else class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                </span>
                <span v-else>
                  <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                  </svg>
                </span>
              </div>
              <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('project')">
                Project
                <span v-if="currentSort === 'project'">
                  <span v-if="currentSortDir === 'asc'" class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                  <span v-else class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                </span>
                <span v-else>
                  <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                  </svg>
                </span>
              </div>
              <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('clientfocus')">
                Focus
                <span v-if="currentSort === 'clientfocus'">
                  <span v-if="currentSortDir === 'asc'" class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                  <span v-else class="sortarrow">
                    <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group" fill="#000000"><g id="caret--down" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                    </svg>
                  </span>
                </span>
                <span v-else>
                  <svg width="10px" height="11px" viewBox="0 0 10 11">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Group" fill="#000000"><g id="caret--down" opacity="0.249553571" transform="translate(0.000000, 6.000000)"><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g><g id="caret--down" opacity="0.254185268" transform="translate(5.000000, 2.500000) scale(1, -1) translate(-5.000000, -2.500000) "><polygon id="Shape" points="0 0 5 4.998 10 0"></polygon></g></g>
                      </g>
                  </svg>
                </span>
              </div>
              <div class="bx--structured-list-th">
                <span v-if="groupTeam === 'team'">
                  Latest Update
                </span>
                <span v-else>
                  Description
                </span>
              </div>
              <div class="bx--structured-list-th">Lead(s)</div>
              <div class="bx--structured-list-th"></div>
            </div>
          </div>
          <div class="bx--structured-list-tbody" v-for="item in sortedItems">
            <div class="bx--structured-list-row" :class="item.status">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap first-col">
                {{ [item.updated, "YYYY-MM-DD"] | moment("from") }}
              </div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap first-col">{{item.status}}</div>
              <div class="bx--structured-list-td">{{item.project}}</div>
              <div class="bx--structured-list-td">
                <span v-if="item.clientfocus">
                  Client
                </span>
                <span v-else>
                  XXX
                </span>
              </div>
              <div class="bx--structured-list-td">
                <span v-if="groupTeam === 'team'">
                  <span v-if="item.updates.length > 0">
                  {{ [item.updates[0].date, "YYYY-MM-DD"] | moment("MMM D YYYY") }}: {{ item.updates[0].info | truncate(220) }}
                  </span>
                  <span v-else>
                    - no updates -
                  </span>
                </span>
                <span v-else>
                  {{item.description}}
                </span>
              </div>
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
        Loading current projects.
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
      items: [],
      currentSort: 'project',
      currentSortDir: 'asc'
    }
  },
  mounted() {
    axios.get('/api/open/projects').then((response) => {
      var list = response.data;
      var openlength = list.active.length;
      for (var a = 0; a < openlength; a++) {
        axios.get('/api/open/oneproject/' + list.active[a]).then((response) => {
          var b64content = decodeURIComponent(escape(atob(response.data.content)));
          var activeItems = JSON.parse(b64content);
          activeItems.sha = response.data.sha;
          if (activeItems.updates.length > 0) {
            activeItems.updates = activeItems.updates.sort(function(a, b) {
              return new Date(b.date) - new Date(a.date);
            });
          }
          var token = this.$cookie.get('token');
          if (activeItems.public === true) {
            this.items.push(activeItems);
          }
          if (token && (activeItems.public === false)) {
            if (this.$store.getters.groupTeam === 'team') {
              this.items.push(activeItems);
            } else if (activeItems.internal === false) {
              this.items.push(activeItems);
            }
          }
        }).catch(function (error) {
          console.log(error);
        });
      };
      console.log('all calls made');
    }).catch(function (error) {
      console.log(error);
    });
  },
  computed: {
    ...mapGetters([
      'usertoken',
      'displayName',
      'groupTeam',
      'groupDash'
    ]),
    sortedItems: function() {
      return this.items.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  methods: {
    sortTable: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    }
  }
}
</script>

<style scoped>

</style>
