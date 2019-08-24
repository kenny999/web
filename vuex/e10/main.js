
const store = new Vuex.Store({
  state: {
  	firstName : undefined
  },
  mutations: {
  	updateFirstName :  function(state, newValue){
  		state.firstName = newValue;
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  	error : undefined
  },
  computed : {
  	firstName : {
  		get : function(){
  			return store.state.firstName;
  		},
  		set : function(value){
  			store.commit("updateFirstName", value);
  		}
  	},
  	firstNameFromVuex : function(){
  		return store.state.firstName;
  	}
  },
  methods : {
  	update : function(ev){
  		this.error = undefined;
  		if(store.state.firstName !== "Kenneth"){
  			this.error = "First name should be Kenneth";
  		}
  	}
  },
  store
})