
const User  = {
  props: ["id"],
  data : function(){
  	return {
  		user : undefined
  	}
  },
  template: '<div>User {{id}} <p v-if="user">{{user.name}}</p></div>',
  methods: {
	setData (user) {
      this.user = user
    }
  },
  beforeRouteEnter (to, from, next) {
  	axios
  		.get('http://jsonplaceholder.typicode.com/users/'+to.params.id)
  		.then(function(response){
  			next(vm => vm.setData(response.data))
  		})
  		.catch((error) => {
  		});
  },
  beforeRouteUpdate (to, from, next) {
	var data = this.$data;
  	axios
  		.get('http://jsonplaceholder.typicode.com/users/'+this.id)
  		.then(function(response){
  			data.user = response.data;
  			next();
  		})
  		.catch((error) => {
  			data.error = error;
  		});  
  	}
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props : true },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router
})