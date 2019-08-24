
const User  = {
  template: '<div>User</div>',
beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$emit("enteruserevent");
    })
  }  	
}


const router = new VueRouter({
  routes: [
    { path: '/user', component: User },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {  
  	showlink :  true  
  },
  methods : {
  	doonenteruserevent : function(ev){
  		this.showlink = false;
  	}
  },
  router : router
})