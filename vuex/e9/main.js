
const store = new Vuex.Store({
	strict : true,
  state: {
  	someValue: undefined
  },
  mutations: {
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  },
  methods : {
  	update : function(){
  		store.state.someValue = 42;
  	}
  },
  store
})