
const Home  = {
  template: '<div>Home</div>'
}

const ShowUser  = {
  props :  ["id"],
  template: '<div><h1>Show User</h1><span>Hi you linked to {{id}}</span></div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user/:id', component: ShowUser, props: true},
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router
})