
const Home  = {
  template: '<div>Home</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router
})