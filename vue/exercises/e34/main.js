
Vue.component("the-comp", {
	props : {

		input1 : {
			type : Number,
			required : true,
			validator : function(value){
				return value > 1 && value <= 10;
			}
		},
		input2 : {
			type : Array
		},
		input3: {
			type : String,
			default : "kenneth"
		}
	},
	template :  '<div>{{input1}}<ul><li v-for="n in input2">{{n}}</li></ul><span>{{input3}}</span></div>'
})
var app = new Vue({
  el: '#app',
  data: {    
  }
})