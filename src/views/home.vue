<template >
  <div id="home" class="page-body">
    <div class="background-black-core">
      <div class="front">
        <div class="container">
          <h1 class="h1 textcolor-white">Discover the story hiding in your data <br/>and transform your business.</h1>
          <p class="h4 textcolor-white padding-top-1 padding-bottom-1">
            <span>SDA exists to leverage data as strategic business assets, to strengthen and accelerate the ZZZ transformation, and deliver new services to ZZZ clients. </span>
          </p>
          <div class="padding-top-1 padding-bottom-1">
            <p class="btn-row">
              <a href="https://www.domain.com/tools/cio/forms/secure/org/app/65fbcf67-4008-425a-b904-010099cc1690/launch/index.html?form=F_ZZZAnalyticsCognitive" class="btn-pri btn-blue">Open a Service Request</a>
              <router-link to="/projects" class="btn-sec btn-white">See our latest projects</router-link>
              <a href="mailto:cvelazq@cr.ibm.com?cc=tking1@us.ibm.com&cc=klhamilton@us.ibm.com&subject=Site%20Comments%20for%20Service%20Data%20Analytics" class="btn-sec btn-white">What do you think?</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-streak reverse">
      <h4 class="h4">Accelerate innovation with cognitive analytics and design thinking to transform your business.</h4>
    </div>
<!--
    <div class="container shadow neutral" v-show="groupTeam === 'team'">
      <div class="row">
        <div class="col span_4">
          <h2 class="h2">Fast track yourself</h2>
        </div>
        <div class="col span_4">
          <h2 class="h2"><router-link to="/infodpe" class="link-black" role="link">for DPEs</router-link></h2>
          <p>This link will lead you to a page that compiles DPE-related information into one place, including links to patterns, articles, even educational material, anything tagged on the site with DPE.</p>
          <p><router-link v-bind:to="{ name: 'infodpe' }" class="bx--link" role="link">Read more</router-link></p>
        </div>
        <div class="col span_4">
          <h2 class="h2"><router-link to="/infope" class="link-black" role="link">for PEs/sales</router-link></h2>
          <p>This link will lead you to a page that compiles PE- and sales-related information into one place, including links to patterns, articles, even educational material, anything tagged on the site with PE or sales.</p>
          <p><router-link to="/infope" class="bx--link" role="link">Read more</router-link></p>
        </div>
        <div class="col span_4">
          <h2 class="h2"><router-link to="/education" class="link-black" role="link">for data scientists</router-link></h2>
          <p>This link will lead you to a page for data scientists and people interested in learning data science, plus links to patterns, articles, and educational material. It'd also be cool to have a quiz for people to learn what branch of data science might fit them best.</p>
          <p><router-link to="/education" class="bx--link" role="link">Read more</router-link></p>
        </div>
      </div>
    </div>
 -->
    <div class="container shadow plain">
      <div class="row">
        <div class="col span_4">
          <h2 class="h2">Explore what we do</h2>
        </div>
        <div class="col span_4">
          <div class="card background-systems-blue-60 no-border left">
            <img class="resize" src="../assets/img/clarify.jpg" width="400" height="200">
            <div class="card__content">
              <h4 class="h4 bold textcolor-white-core">We clarify.</h4>
              <div class="textcolor-white-core">
                <p>We build relationships, because it’s ultimately about people: what you need, who you are. Understanding your story is where it all begins.</p>
                <p>&ndash; Beth Rudden, Resident Anthropologist</p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="ind-link padding-bottom-1">
                <router-link to="/clarify" class="margin-bottom-0 arrow-forward-link textcolor-white-core" role="link">Read more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col span_4">
          <div class="card background-systems-blue-60 no-border left">
            <img class="resize" src="../assets/img/analyze.jpg" width="400" height="200">
            <div class="card__content">
              <h4 class="h4 bold textcolor-white-core">We evaluate.</h4>
              <div class="textcolor-white-core">
                <p>We distill your data to tell a compelling story, to show what's being done well, and show where improvements could be made.</p>
                <p>&ndash; Sarah White Eagle, Data Science Analyst</p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="ind-link padding-bottom-1">
                <router-link to="/evaluate" class="margin-bottom-0 arrow-forward-link textcolor-white-core" role="link">Read more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col span_4 ">
          <div class="card background-systems-blue-60 no-border left">
            <img class="resize" src="../assets/img/visualize.jpg" width="400" height="200">
            <div class="card__content">
              <h4 class="h4 bold textcolor-white-core">We visualize.</h4>
              <div class="textcolor-white-core">
                <p>We work with you to shape your interfaces into something appealing, functional, and efficient that will inform and delight you and your users.</p>
                <p>&ndash; Tory Liesenfelt, Data Visualization Analyst</p>
              </div>
            </div>
            <div class="card__bottom">
              <p class="ind-link padding-bottom-1">
                <router-link to="/visualize" class="margin-bottom-0 arrow-forward-link textcolor-white-core" role="link">Read more</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container shadow reverse">
      <div class="row">
        <div class="col span_4">
          <h2 class="h2">New problems, new solutions, new patterns</h2>
        </div>
        <div class="col span_12">
          <div class="row subrow">
            <div class="col span_5 boxheight" v-for="pattern in patterns" :key="pattern.id" v-if="pattern.public">
                <h4 class="h4 link link-bright">
                  <router-link :to="{ name: 'patternview', params: { onepattern: pattern.path }}" title="Read the pattern">
                    {{ pattern.name }}
                  </router-link>
                </h4>
                <p class="h4">{{ pattern.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container shadow neutral">
      <div class="row">
        <div class="col span_8">
          <h2 class="h2"><a href="https://105.w3cloud.ibm.com/services/ctsp/common">Workplace Support Services with Watson</a></h2>
          <p>Transform and personalize your IT user environment into a more intelligent, scalable and security-rich workplace.</p>
          <p><a href="https://105.w3cloud.ibm.com/services/ctsp/common" class="bx--link" role="link">Learn more</a></p>
        </div>
        <div class="col span_8">
          <h2 class="h2"><a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W64b0d2aaa824_49ad_a642_138c30e43abe/page/Welcome?section=Learn%20more%20about%20CEDP" role="link">The Cognitive Enterprise Data Platform</a></h2>
          <p> (CEDP) initiative is an ambitious undertaking by dedicated professionals who see the potential in an expansive database that Integrates strategic cloud, cognitive and analytics capabilities.</p>
          <p><a href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W64b0d2aaa824_49ad_a642_138c30e43abe/page/Welcome?section=Learn%20more%20about%20CEDP" class="bx--link" role="link">Read more</a></p>
        </div>
      </div>
    </div>

    <div class="container shadow">
      <div class="row">
        <div class="col span_4">
          <h2 class="h2">Nine pillars of what the Data Team can do for you</h2>
        </div>
        <div class="col span_12">
          <div class="row subrow">
            <div class="col span_5">
              <h2 class="h2">Architecture</h2>
              <p>We help ZZZ design, develop, deploy, and manage data architecture.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Data Quality</h2>
              <p>We guide ZZZ to consistently define, and measure data quality, and mitigate and data quality issues.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Policy</h2>
              <p>We use policy that will define and manage organizational behavior.</p>
            </div>
          </div>
          <div class="row subrow">
            <div class="col span_5">
              <h2 class="h2">Business Process Management</h2>
              <p>We assist ZZZ to define, develop, deploy, and manage the application of business rules across the enterprise.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Metadata</h2>
              <p>We track the capture, management, and access of business, technology, and operational information on key corporate data.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Privacy & Security</h2>
              <p>We oversee appropriate considerations for customer privacy and data security.</p>
            </div>
          </div>
          <div class="row subrow">
            <div class="col span_5">
              <h2 class="h2">Change Management</h2>
              <p>We assist ZZZ to adopt required organizational change and drive business value realization.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Organization & Stewardship</h2>
              <p>We assist in the creation of organizations and roles for supporting, managing, and improving governance processes and capabilities.</p>
            </div>
            <div class="col span_5">
              <h2 class="h2">Regulation & Compliance</h2>
              <p>We engage with ZZZ to address people, process, and technology requirements for regulatory and compliance issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>

</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      isActive: true,
      patterns: null
    }
  },
  computed: mapGetters([
    'usertoken',
    'displayName',
    'groupTeam',
    'groupDash'
  ]),
  created() {
    axios.get('/api/open/patterns').then((response) => {
      this.patterns = response.data;
    });
  }
}
</script>

<style scoped>
  .background-black-core, #leadspace-head {
    background-image: url(../assets/img/header4.jpg);
    border: none;
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 460px;
    background-color: #000;
  }

  .background-black-core .btn-white {
      background: #fff;
      color: #000;
  }

  .btn-row.padding-top {
    padding-top: 3rem!important;
  }

  .front {
    /* background: url(../assets/img/clearback-50.png); */
    background-repeat: repeat;
    margin-top: 100px;
    display: inline-block;
    width: 100%;
  }

  .front .h4, .h4.secondary {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .front .h1 {
    padding-top: 20px!important;
    padding-bottom: 0!important;
    color: #FFF;
  }

  a.textcolor-white {
    color: white;
  }

  .border-streak h4 {
    font-size: 1.25rem;
    line-height: 1.5625rem;
    margin-left: 2%;
    line-height: 60px;
  }

  .main-tag-list li {
    font-weight: 600;
    color: #aeaeae;
    padding-top: 20px!important;
    font-size: 1.25rem;
    line-height: 1.5625rem;
    clear: both;
  }

  .main-tag-list li a {
      color: #aeaeae
  }

  .h4.link {
    padding-bottom: 2rem;
    font-weight: 600;
  }

  .textcolor-white {
    color: #FFF;
  }

  .link-bright {
    color: #5aaafa;
  }

  .link-black {
    color: #323232;
  }

  .boxheight {
    min-height: 21rem;
  }
</style>
