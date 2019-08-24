
Vue.component("my-comp1", {
	template : '<div>'+
	'<h1>Component 1</h1>'+
	'<p>{{comp1Value}}</p>'+
	'<label for="val">Enter new value</label>'+
	'<input id="val" v-model="val"/>'+
	'<button @click="update">Press</button>'+
	'</div>',
	data : function(){
		return {
			val :  undefined

		};
	},
	methods : {
		update : function(ev){
			this.$store.commit("sharedValue", this.val);

		}
	},
	computed : {
		comp1Value : function(){
			return this.$store.state.sharedValue;
		}
	}
})

Vue.component("my-comp2", {
	template : '<div>'+
	'<h1>Component 2</h1>'+
	'<p>{{comp2Value}}</p>'+
	'<label for="val">Enter new value</label>'+
	'<input id="val" v-model="val"/>'+
	'<button @click="update">Press</button>'+
	'</div>',
	data : function(){
		return {
			val :  undefined

		};
	},
	methods : {
		update : function(ev){
			this.$store.commit("sharedValue", this.val);

		}
	},
	computed : {
		comp2Value : function(){
			return this.$store.state.sharedValue;
		}
	}
})

const store = new Vuex.Store({
  state: {
  	sharedValue : 12
  },
  mutations: {
  	sharedValue : function(state, newValue){
  		state.sharedValue = newValue;
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {    
  },
  store
})