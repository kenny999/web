
const store = new Vuex.Store({
  state: {
  	sharedV : undefined
  },
  mutations: {
  	updateSharedV : function(state, newVal){
  		state.sharedV = newVal;
  	}
  },
  getters : {
  	mainSharedV : function(state){
  		return "-" + state.sharedV + "-";
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {   
  	v : undefined 
  },
  methods : {
  	update : function(){
  		store.commit("updateSharedV", this.v)
  	}
  },
  computed : {
  	mainSharedV : function(){
  		return store.state.sharedV
  	},
  	mainGetterSharedV : function(){
  		return store.getters.mainSharedV;
  	}
  },
  store
})