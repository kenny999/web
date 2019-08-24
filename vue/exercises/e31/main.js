
Vue.component("my-datepicker", {
	props : {
		label :  String,
		from :  String,
		to :  String,
		id : String
	},
	data : function() {
		return {
			newDate : undefined
		}
	},
	watch : {
		newDate : function(newValue, oldValue){
			this.$emit("date-entered", newValue);
		}
	},
	template :  '<div><p><label v-bind:for="id">{{label}} {{from}} - {{to}}</label>'+
	'<input type="date" v-bind:id="id" v-bind:min="from" v-bind:max="to" v-model="newDate"/></p></div>'
})

var app = new Vue({
  el: '#app',
  data: {    
  	theDate : undefined
  },
  methods : {
  	doEntered : function(ev){
  		this.theDate = ev;
  	}
  }
})