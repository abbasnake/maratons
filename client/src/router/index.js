import Vue from 'vue'
import Router from 'vue-router'
import ViewChoose from '@/views/ViewChoose'
import ViewTest from '@/views/ViewTest'
import ViewResult from '@/views/ViewResult'
import ViewPlayground from '@/views/ViewPlayground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/choose'
    },
    {
      path: '/choose',
      name: 'ChooseTest',
      component: ViewChoose
    },
    {
      path: '/test',
      name: 'Test',
      component: ViewTest
    },
    {
      path: '/result',
      name: 'Result',
      component: ViewResult
    },
    {
    path: '/playground',
    name: 'Playground',
    component: ViewPlayground
    }
  ]
})
