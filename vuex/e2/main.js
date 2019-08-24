Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	value : 0
  },
  mutations: {
  	setValue : function(state, newValue){
  		state.value = newValue;
  	}
  }
})

Vue.component("first-component", {
	template : 
		'<div><h1>First component</h1><p>My value: {{myValue}}</p></div>'
	,
	computed : {
		myValue : function(){
			return this.$store.state.value -1;
		}
	}
})


Vue.component("second-component", {
	template : 
		'<div><h1>Second component</h1><p>My value: {{myValue}}</p></div>'
	,
	computed : {
		myValue : function(){
			return this.$store.state.value * 10;
		}
	}
})


var app = new Vue({
  el: '#app',
  data: {  
  	v : undefined
  },
  store,
  methods : {
  	commitV : function(ev){
  		store.commit("setValue", this.v);
  	}
  },
  computed : {
  	readValue : function(){
  		return store.state.value;
  	}
  }
})