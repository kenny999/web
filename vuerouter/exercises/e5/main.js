
const Home  = {
  template: '<div>Home</div>'
}

const ShowUser  = {
  template: '<div><h1>Show User</h1><span>Hi you linked to {{$route.query.id}}</span></div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user', component: ShowUser},
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router
})