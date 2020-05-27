<template>
  <div id="patternview">
    <div id="leadspace">
      <h5 class="h4 breadcrumbs"><router-link to="/patterns">← Back to patterns</router-link></h5>
      <h1 id="pagetitle-h1" class="h1 dw-navpage-develop">{{thing.title}}</h1>
      <p></p>
    </div>
    <div class="page-body" v-if="thing">
      <div class="container unbox">
        <div class="row">
          <div class="col span_4 addtocol">
            <ul class="article-list">
              <li v-for="(author, index) in thing.author">
                <a :href="'https://www.domain.com/directory/?s=' + author.email">{{author.name}}</a>
              </li>
            </ul>
            <p>{{thing.description}}</p>
            <ul class="tags">
              <li v-for="tag in thing.keywords">{{tag}}</li>
            </ul>
          </div>
          <div class="col span_12 article-body">
            <span v-html="thing.text"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'patternview',
  props: ['onepattern'],
  data() {
    return {
      isActive: true,
      thing: null
    }
  },
  mounted() {
    console.log(this.onepattern);
    if (this.onepattern !== undefined) {
      axios.get('/api/open/onepattern/' + this.onepattern + '.md').then((response) => {
        this.thing = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

  .page-header.article-text {
    padding-bottom: 2rem;
  }

  .page-header.article-text h1.page-header__title {
    margin: 0;
    max-width: 60rem;
  }

  .page-header.article-text h5 {
    margin: 7rem 0 0 -14px;
    max-width: 60rem;
    font-size: .875rem;
    border-bottom: 0;
  }

  .article-body ol ol,
  .article-body ol ul,
  .article-body ul ol,
  .article-body ul ul {
    list-style-position: outside;
    list-style: square;
  }

  .article-body ol {
    list-style: decimal;
  }

  .article-body li {
    margin-left: 1.25rem;
    padding-left: 0.25rem;
  }

  .addtocol {
    padding-right: 3rem;
  }

</style>
