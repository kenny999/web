
Vue.component("the-input", {
	props : {
		callback : {
			required : true,
			type: Function
		}
	},
	data : function(){
		return {
			val :  ""
		}
	},
	methods : {
		theMethod : function(ev){
			this.callback(this.val);
		}
	},
	template : '<div>Enter value and press button<input v-model="val"/><button @click="theMethod">Press</button></div>'
})

var app = new Vue({
  el: '#app',
  data: {  
  	theCallbackedValue : ""  
  },
  methods : {
  	theCallbackFunction : function(value){
  		this.theCallbackedValue = value;
  	}
  }
})