
var App = Object.freeze({
	reverseMessage : function(text){
		var i;
		var result = "";
		for(i=text.length-1;i>=0;i--){
			result += text[i];
		}
		return result;
	}
})

Vue.prototype.$reverseMessage = function(text){
	var i;
	var result = "";
	for(i=text.length-1;i>=0;i--){
		result += text[i];
	}
	return result;
}

Vue.component("my-field", {
	data :  function(){
		return {
			val : ""
		}
	},
	computed : {
		revMsg : function(){
			return App.reverseMessage(this.val);
		}
	},
	template : '<div><span>Enter a string and watch its reversed value below</span><input v-model="val"/><div>{{revMsg}}</div></div>'
})
var app = new Vue({
  el: '#app',
  data: {    
  }
})