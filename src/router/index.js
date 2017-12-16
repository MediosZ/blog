import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Markdown from '@/components/Markdown'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Welcome',
      component: test
    },
    {
      path: '/markdown',
      name: 'Markdown',
      component: Markdown
    }
  ]
})
