import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cMyAbout from '@/components/myAbout/myAbout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: 'goHelloWorld' },
    { path: '/goHelloWorld', name: 'goHelloWorld', component: HelloWorld },
    { path: '/goMyAbout', name: 'goMyAbout', component: cMyAbout },
  ]
})
