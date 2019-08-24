
Vue.filter("spacey-string",
	function(str){
		var result = "";
		var i;
		for(i = 0;i<str.length;i++){
			result += str[i] + " ";
		}
		// remove last space
		if(result.length > 0){
			return result.slice(0, result.length-1)
		}
	}
);
var app = new Vue({
  el: '#app',
  data: { 
  	instr : ""   
  }
})