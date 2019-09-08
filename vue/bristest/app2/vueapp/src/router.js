import Vue from 'vue'
import Router from 'vue-router'
import Menu from './views/Menu.vue'
import CompanyDetailsRequest from './components/CompanyDetailsRequest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
      path: '/companydetailsrequest',
      name: 'about',
      component: CompanyDetailsRequest
    }
  ]
})
