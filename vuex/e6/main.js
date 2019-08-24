
const store = new Vuex.Store({
  state: {
  	sharedAmount : undefined
  },
  mutations: {
  	sharedAmount : function(state, payload){
  		state.sharedAmount = payload.amount;
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  	amount : undefined
  },
  methods : {
  	update : function(ev){
  		store.commit("sharedAmount", {amount : this.amount});
  	}
  },
  computed : {
  	displayV : function(){
  		return store.state.sharedAmount;
  	}
  },
  store
})