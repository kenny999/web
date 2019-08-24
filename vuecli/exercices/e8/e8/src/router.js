import Vue from 'vue'
import Router from 'vue-router'
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/component1',
      name: 'component1',
      component: Component1
    },
    {
      path: '/component2',
      name: 'component2',
      component: Component2
    },  
  ]
})
