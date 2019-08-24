
Vue.component("button-component", {
	props : {
		label : String
	},
	template:
	'<p>'+
	'<label>{{label}}</label>'+
	'<button v-on:click="evHandler">Press me</button>'+
	'</p>',
	methods : {
		evHandler : function(ev){
			this.$emit("button-pressed")
		}
	}
})

var app = new Vue({
  el: '#app',
  data: {    
  	myLabel : "Enter a value",
  	yayPressed : false
  },
  methods : {
  	mainHandler : function(ev){
  		this.yayPressed = true	
  	}
  }
})