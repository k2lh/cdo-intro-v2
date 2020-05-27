<template>
  <div id="activity" class="page-body">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">{{whatdone}} Activities</h1>
      <p>team project-related activities.</p>
    </div>
    <div class="container unbox">
      <section class="bx--structured-list short">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('title')">
              Title
              <span v-if="currentSort === 'title'">
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
            <div class="bx--structured-list-th bx--structured-list-content--nowrap" v-if="groupTeam && usertoken" @click="sortTable('project')">
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
            <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('type')">
              Activity
              <span v-if="currentSort === 'type'">
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
            <div class="bx--structured-list-th bx--structured-list-content--nowrap" @click="sortTable('quarter')">
              Quarter
              <span v-if="currentSort === 'quarter'">
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
          </div>
        </div>
        <div class="bx--structured-list-tbody" v-for="item in sortedItems" v-if="item.type === whatdone">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.title}}</div>
              <div class="bx--structured-list-td" v-if="groupTeam && usertoken">
                  {{item.project}}
              </div>
              <div class="bx--structured-list-td">{{item.type}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.quarter}}</div>
            </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'activity',
  props: ['whatdone'],
  data() {
    return {
      isActive: true,
      items: null,
      things: [],
      currentSort: 'quarter',
      currentSortDir: 'desc'
    }
  },
  computed: {
    ...mapGetters([
      'usertoken',
      'displayName',
      'groupTeam',
      'groupDash'
    ]),
    sortedItems: function() {
      return this.things.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  mounted() {
    axios.get('/api/open/projects').then((response) => {
      var list1 = response.data;
      var list2 = list1.active.concat(list1.inactive);
      var list = list2.concat(list1.core);
      for (var a = 0; a < list.length; a++) {
        axios.get('/api/open/oneproject/' + list[a]).then((response) => {
          var b64content = decodeURIComponent(escape(atob(response.data.content)));
          var activeItems = JSON.parse(b64content);
          if (activeItems.activities.length > 0) {
            this.getActivities(activeItems);
          }
        }).catch(function (error) {
          console.log(error);
        });
      };
    }).catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    getActivities: function(val) {
      for (var i = 0; i < val.activities.length; i++) {
        this.things.push({
          'title': val.activities[i].title,
          'type': val.activities[i].type,
          'quarter': val.activities[i].year + ', ' + val.activities[i].quarter,
          'project': val.project
        });
      }
    },
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
