<template>
  <div id="videos" class="page-body">
    <pageheadLibrary></pageheadLibrary>
    <div id="leadspace">
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">Videos</h1>
      <p>Key information about analytics and cognitive capabilities in the ZZZ portfolio.</p>
    </div>
    <div class="container unbox">

      <section class="bx--structured-list" v-if="items">
        <div class="bx--structured-list-thead">
          <div class="bx--structured-list-row bx--structured-list-row--header-row">
            <div class="bx--structured-list-th">Published</div>
            <div class="bx--structured-list-th">Title</div>
            <div class="bx--structured-list-th">Summary</div>
          </div>
        </div>
        <div class="bx--structured-list-tbody">
          <div class="bx--structured-list-row " v-for="item in items"  v-if="item.type==='video'">
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">{{item.posted}}</div>
            <div class="bx--structured-list-td bx--structured-list-content--nowrap">
              <a :href="item.url" target="_new">{{item.label}}</a>
            </div>
            <div class="bx--structured-list-td">{{item.summary}}</div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
var json = '../static/library-assets.json';

export default {
  name: 'videos',
  data() {
    return {
      isActive: true,
      items: null
    }
  },
  mounted() {
    var self = this;
    axios.get(json).then(function (response) {
      self.items = response.data.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
}
</script>
