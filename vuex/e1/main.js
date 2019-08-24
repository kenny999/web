
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state,) {
      state.count--;
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  },
  methods : {
  	increment : function(ev){
  		store.commit('increment');
  	},
  	decrement : function(ev){
  		store.commit('decrement')
   	},
  },
  computed : { 
  	count : function(){
  		return store.state.count;
  	}
  }
})