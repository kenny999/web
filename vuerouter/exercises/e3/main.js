
const Home  = {
  template: '<div>Home</div>'
}

const Temperature  = {
  template: '<div>Temperature component</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/temperature', component: Temperature },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  methods : {
  	goToTemperature : function(ev) {
  		this.$router.push("temperature");
  	}
  },
  router : router
})