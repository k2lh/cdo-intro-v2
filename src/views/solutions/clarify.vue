<template>
  <div id="analyze" class="page-body">
    <pageheadSolutions></pageheadSolutions>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Clarify</h1>
      <p>Collaborate to explore your needs and find innovative solutions.</p>
    </div>

    <div class="container shadow" v-for="item in items.clarify">
      <div class="row">
        <div class="col span_4">
          <h2 class="h2">{{item.title}}</h2>
        </div>
        <div class="col span_4" v-for="thing in item.boxes">
          <p class="strong">{{thing.activity}}</p>
          <p>{{thing.description}}</p>
          <p>
            <router-link :to="{ name: 'activitylog', params: { whatdone: thing.activity }}" title="View activities" class="link-dark">
              View activities
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var json = '../static/solutions.json';

export default {
  name: 'clarify',
  props: ['whatdone'],
  data() {
    return {
      isActive: true,
      items: null
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
