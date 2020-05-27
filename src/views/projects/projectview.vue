<template>
  <div id="projectview" class="page-body" v-if="item">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">{{item.project}}</h1>
      <p>
        <span v-if="item.full_description">{{item.full_description}}</span>
        <span v-else="item.description">{{item.description}}</span>
      </p>
    </div>
    <div class="container unbox">
      <div class="row">
        <div class="col span_10">
          <ul class="tags">
            <li v-for="tag in item.tags">{{tag}}</li>
          </ul>
        </div>
        <div class="col span_4">
          <div v-if="item.dashboard">
            <p><a :href="item.dashboard">view dashboard</a></p>
          </div>
          <div v-if="item.links">
            <p v-for="link in item.links"><a :href="link.url">{{link.name}}</a></p>
          </div>
        </div>
        <div class="col span_2">
          <router-link type="button" class="bx--btn bx--btn--primary" :to="{ name: 'projectedit', params: { project: item.id } }">
            edit project
          </router-link>
        </div>
      </div>

      <section class="bx--structured-list">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-th">Status</div>
            <div class="bx--structured-list-th">Product Owner</div>
            <div class="bx--structured-list-th">Squad Lead(s)</div>
            <div class="bx--structured-list-th">Squad Members</div>
          </div>
        </div>
        <div class="bx--structured-list-tbody">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">
              {{item.status}},
              <span v-if="item.internal">team-only</span>
              <span v-else>all XXXers</span>
            </div>
            <div class="bx--structured-list-td">{{item.owner}}</div>
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">
              <ul>
                <li v-for="name in item.leads">
                  <a :href="'https://www.domain.com/directory/?s=' + name.email">{{name.name}}</a>
                </li>
              </ul>
            </div>
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">
              <ul>
                <li v-for="name in item.members">
                  <a :href="'https://www.domain.com/directory/?s=' + name.email">{{name.name}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bx--structured-list" v-if="item.accomplishments || item.upcoming">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-th">Key accomplishments over last 2 weeks</div>
            <div class="bx--structured-list-th">Upcoming activities in next 1-2 weeks</div>
          </div>
        </div>
        <div class="bx--structured-list-tbody">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-td">
              <ul>
                <li v-for="accomplishment in item.accomplishments">{{accomplishment}}</li>
              </ul>
            </div>
            <div class="bx--structured-list-td">
              <ul>
                <li v-for="upcoming in item.upcoming">{{upcoming}}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <h4 class="h4 ">Milestones</h4>
      <section class="bx--structured-list">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-th">Milestone</div>
            <div class="bx--structured-list-th">Open Issues</div>
            <div class="bx--structured-list-th">Closed Issues</div>
            <div class="bx--structured-list-th">End Date</div>
          </div>
        </div>
        <div class="bx--structured-list-tbody">
          <div class="bx--structured-list-row" v-for="mile in milestones">
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">
              <a :href="'https://github.xxx.com/YYY/' + item.repo + '/milestone/' + mile.number">{{mile.title}}</a>
            </div>
            <div class="bx--structured-list-td">
              {{mile.open_issues}}
            </div>
            <div class="bx--structured-list-td">
              {{mile.closed_issues}}
            </div>
            <div class="bx--structured-list-td">
              {{ mile.due_on | moment("MMM D YYYY") }}
            </div>
          </div>
        </div>
      </section>
      <!-- <section v-else>
        <h4 class="h4">This project hasn't defined any milestones yet.</h4>
      </section> -->

      <div v-if="item.updates">
        <h4 class="h4 ">Updates</h4>
        <section class="bx--structured-list">
          <div class="bx--structured-list-thead">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-th">Date</div>
              <div class="bx--structured-list-th">Description</div>
            </div>
          </div>
          <div class="bx--structured-list-tbody">
            <div class="bx--structured-list-row" v-for="key in item.updates">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{key.date}}</div>
              <div class="bx--structured-list-td">{{key.info}}</div>
            </div>
          </div>
        </section>
      </div>



      <!-- <div v-if="item.keyrisks">
        <section class="bx--structured-list">
          <div class="bx--structured-list-thead">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-th">Risk/Issue</div>
              <div class="bx--structured-list-th">Description</div>
              <div class="bx--structured-list-th">Priority</div>
              <div class="bx--structured-list-th">Due Date</div>
              <div class="bx--structured-list-th">Owner</div>
              <div class="bx--structured-list-th">Action/Mitigation</div>
            </div>
          </div>
          <div class="bx--structured-list-tbody">
            <div class="bx--structured-list-row" v-for="key in item.keyrisks" :class="key.priority">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{key.risk}}</div>
              <div class="bx--structured-list-td">{{key.description}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{key.priority}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{key.due}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{key.owner}}</div>
              <div class="bx--structured-list-td">{{key.action}}</div>
            </div>
          </div>
        </section>
      </div>

      <div v-if="item.milestones">
        <section class="bx--structured-list">
          <div class="bx--structured-list-thead">
            <div class="bx--structured-list-row">
              <div class="bx--structured-list-th">Category</div>
              <div class="bx--structured-list-th">Milestone/Deliverable</div>
              <div class="bx--structured-list-th">Target Start<br/>Actual Start</div>
              <div class="bx--structured-list-th">Target End<br/>Actual End</div>
              <div class="bx--structured-list-th">Owner</div>
              <div class="bx--structured-list-th">Status</div>
            </div>
          </div>
          <div class="bx--structured-list-tbody">
            <div class="bx--structured-list-row" v-for="stone in item.milestones">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{stone.category}}</div>
              <div class="bx--structured-list-td">{{stone.deliverable}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{stone.targetstart}}<br /> <strong>{{stone.actualstart}}</strong></div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{stone.targetend}}<br /> <strong>{{stone.actualend}}</strong></div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{stone.owner}}</div>
              <div class="bx--structured-list-td">{{stone.status}}</div>
            </div>
          </div>
        </section>
      </div> -->

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'projectview',
  props: ['project'],
  data() {
    return {
      isActive: true,
      item: null,
      milestones: [],
      currentSort: 'title',
      currentSortDir: 'asc'
    }
  },
  created() {
    var token = this.$cookie.get('token');
    if ((this.$store.getters.groupTeam === 'team') && token) {
      axios.get('/api/open/oneproject/' + this.project).then((response) => {
        var b64content = decodeURIComponent(escape(atob(response.data.content)));
        this.item = JSON.parse(b64content);
        this.item.sha = response.data.sha;
        this.item.updates = this.item.updates.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        if (this.item.repo) {
          this.getMiles(this.item.repo);
          console.log(this.milestones);
        }
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.message = 'If you’re part of the team and cannot see the projects, contact Tim King to make sure you’re in the group. Alternately, this may be a server issue. In which case, hang tight, site admins are working on it.';
    }
  },
  methods: {
    getMiles: function(repo) {
      axios.get('/api/open/milestones/' + repo).then((response) => {
        console.log(response.data);
        this.milestones = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>
