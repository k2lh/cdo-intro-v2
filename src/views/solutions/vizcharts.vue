<template>
  <div id="vizchartview" class="page-body">
    <pageheadSolutions></pageheadSolutions>
    <div id="leadspace" v-for="item in items" v-if="item.id == dataviz">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">{{item.title}}</h1>
      <p>
        <ul class="plain-list">
          <li v-for="(key, index) in item.keywords">
            <router-link :to="{ name: 'visualize', params: { tag: key } }">
              {{key}}
            </router-link>
        </ul>
      </p>
    </div>
    <div class="container unbox">
      <div class="row">
        <div class="col span_3">
          <ul class="menulist">
            <li class="link-dark bx--link" v-for="item in items">
              <router-link :to="{ name: 'vizcharts', params: { dataviz: item.id } }" class="link-dark" role="tab">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col span_8" v-for="(item, index) in items" v-if="item.id == dataviz">
          <component :is="item.chart" :chartData="item.data"></component>
          <p v-if="!item.chart">Coming soon.</p>
        </div>
        <div class="col span_5 details" v-for="item in items" v-if="item.id == dataviz">
          <p v-if="item.alt && (item.alt.length === 1)">This chart is also known as a <strong>{{item.alt[0]}}</strong>.</p>
          <p v-else-if="item.alt && (item.alt.length > 1)">This chart is also known as a
            <span v-for="(point, index) in item.alt"><span v-if="index == (item.alt.length - 1)">or a </span><strong>{{point}}</strong><span v-if="index !== (item.alt.length - 1)">, </span></span>.
          </p>
          <h5 class="h4">when to use</h5>
          <p v-if="item.use">{{item.use}}</p>
          <p v-else>Information coming soon.</p>
          <p v-if="item.variations && (item.variations.length === 1)">A variant form is <strong>{{item.variations[0]}}</strong>.</p>
          <p v-else-if="item.variations && (item.variations.length > 1)">Variant forms are
            <span v-for="(point, index) in item.variations"><span v-if="index == (item.variations.length - 1)">and </span>{{point}}<span v-if="index !== (item.variations.length - 1)">, </span></span>.
          </p>
          <h5 class="h4">what you'll need</h5>
          <p v-if="item.need">{{item.need}}</p>
          <p v-else>Information coming soon.</p>
          <h5 class="h4" v-if="item.related[0]">related charts</h5>
          <ul class="article-list" v-if="item.related[0]">
            <li v-for="point in item.related">
              <router-link :to="{ name: 'vizcharts', params: { dataviz: point.id } }" class="link-dark" role="tab">
                {{point.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var json = '../static/charts.json';

export default {
  name: 'vizcharts',
  props: ['dataviz', 'chartData', 'tag'],
  data() {
    return {
      isActive: true,
      items: null
    }
  },
  mounted() {
    axios.get(json).then((response) => {
      this.items = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style scoped>
  .details p {
    font-size: .875rem;
  }

  ul.menulist {
    max-height: 50rem;
    overflow-x: auto;
  }

  ul.menulist li a {
    font-weight: 300;
    cursor: pointer;
    font-size: 0.875rem;
  }

  ul.menulist li a.router-link-exact-active::after {
    content: "\2023";
    padding-right: 1rem;
    float: right;
    font-size: 1.5rem;
  }

  dl {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  dt {
    float: left;
    width: 20%;
    padding: 0 1rem 0 0;
    margin: 0;
    text-align: right;
    font-weight: 600;
    clear: both;
  }
  dd {
    float: left;
    width: 80%;
    padding: 0 0 0 1rem;
    margin: 0;
    font-size: .875rem;
  }

  a.return-to-top {
    position: absolute;
    bottom: -20px;
    left: 2%;
    font-size: .875rem;
    cursor: pointer;
  }

#vizchartview .unbox {
  padding-top: 1rem;
  padding-bottom: 0rem;
}
  </style>
