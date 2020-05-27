<template>
  <div id="activity" class="page-body">
    <pageheadProjects></pageheadProjects>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Engagements</h1>
      <p>Tracking project and activity engagements.</p>
    </div>
    <div class="container unbox">
      <section class="bx--structured-list short">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row">
            <div class="bx--structured-list-th">Title</div>
            <div class="bx--structured-list-th">Project</div>
            <div class="bx--structured-list-th">Activity</div>
            <div class="bx--structured-list-th">Quarter</div>
          </div>
        </div>
        <div class="bx--structured-list-tbody" v-for="item in things">
            <div class="bx--structured-list-row" v-if="item.activity !== null && item.activity !== 'activity'">
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.title}}</div>
              <div class="bx--structured-list-td">{{item.project}}</div>
              <div class="bx--structured-list-td">{{item.activity}}</div>
              <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.quarter}}</div>
            </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var json = '../static/projects.json';

export default {
  name: 'engagements',
  data() {
    return {
      isActive: true,
      items: null,
      things: null
    }
  },
  mounted() {
    var self = this;
    axios.get(json).then(function (response) {
      self.items = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style scoped>

</style>
