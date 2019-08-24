
const store = new Vuex.Store({
  state: {
  	username : undefined
  },
  mutations: {
  	setUsername : function(state, value){
  		state.username = value;
  	}
  },
  actions : {
  	loadUser({commit, state}, userid){
  		axios
  			.get('http://jsonplaceholder.typicode.com/users/'+userid)
  			.then(function(response){
  				commit("setUsername", response.data.name);
  			})
  			.catch((error) => {
  				
  			});
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  	userid : undefined
  },
  methods : {
  	update : function(ev){
  		store.dispatch("loadUser", this.userid);
  	}
  },
  computed : {
  	displayUsername : function(){
  		return store.state.username;
  	}
  },
  store
})