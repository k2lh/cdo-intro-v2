import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'

import infodpe from '@/views/discover/infodpe'
import infope from '@/views/discover/infope'
import requests from '@/views/discover/requests'

import clarify from '@/views/solutions/clarify'
import evaluate from '@/views/solutions/evaluate'
import visualize from '@/views/solutions/visualize'
import implement from '@/views/solutions/implement'
import vizcharts from '@/views/solutions/vizcharts'

import patterns from '@/views/patterns/patterns'
import patternview from '@/views/patterns/patternview'

import activity from '@/views/projects/activity'
import activitylog from '@/views/projects/activitylog'
import coreprojects from '@/views/projects/coreprojects'
import allprojects from '@/views/projects/allprojects'
import allprojectspast from '@/views/projects/allprojectspast'
import projectview from '@/views/projects/projectview'
import projectedit from '@/views/projects/projectedit'
import engagements from '@/views/projects/engagements'

import videos from '@/views/library/videos'
import articles from '@/views/library/articles'
import education from '@/views/library/education'

import community from '@/views/community/community'
import advocates from '@/views/community/advocates'
import events from '@/views/community/events'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/home', name: 'home', component: home },
    { path: '/infodpe', name: 'infodpe', component: infodpe },
    { path: '/infope', name: 'infope', component: infope },
    { path: '/clarify', name: 'clarify', component: clarify },
    { path: '/implement', name: 'implement', component: implement },
    { path: '/requests', name: 'requests', component: requests },
    { path: '/evaluate', name: 'evaluate', component: evaluate },
    { path: '/activity', name: 'activity', component: activity },
    { path: '/activitylog/:whatdone', name: 'activitylog', component: activitylog, props: true },
    { path: '/community', name: 'community', component: community },
    { path: '/advocates', name: 'advocates', component: advocates },
    { path: '/events', name: 'events', component: events },
    { path: '/visualize', name: 'visualize', component: visualize },
    { path: '/vizcharts/:dataviz', name: 'vizcharts', component: vizcharts, props: true },
    { path: '/videos', name: 'videos', component: videos },
    { path: '/articles', name: 'articles', component: articles },
    { path: '/education', name: 'education', component: education },
    { path: '/patterns', name: 'patterns', component: patterns },
    { path: '/patternview/:onepattern', name: 'patternview', component: patternview, props: true },
    { path: '/projects/core', name: 'coreprojects', component: coreprojects },
    { path: '/projects/active', name: 'allprojects', component: allprojects },
    { path: '/projects/inactive', name: 'allprojectspast', component: allprojectspast },
    { path: '/projectview/:project', name: 'projectview', component: projectview, props: true },
    { path: '/projectedit/:project', name: 'projectedit', component: projectedit, props: true },
    { path: '/engagements', name: 'engagements', component: engagements }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  historyApiFallback: true
})
