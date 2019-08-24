
"use strict"

Vue.config.errorHandler = function (err, vm, info) {
	var ele = document.getElementById("showerror");
	ele.innerText = err.message + info;
}


var app = new Vue({
  el: '#app',
  data: {  
  	val : ""  
  },
  watch : {
  	val : function(newVal, oldVal){
  		if(newVal === "kenneth"){
  			var c = undefiedVariable;
  		}
  	}
  }
})