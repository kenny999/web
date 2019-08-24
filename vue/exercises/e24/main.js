
var app = new Vue({
  el: '#app',
  data: {  
  	radioValue : "" 
  },
  computed : {
  	class1 : function(){
  		if(this.radioValue === "theR1"){
  			return "yellow";
  		} else {
  			return "green";
  		}
  	},
  	class2 : function(){
  		if(this.radioValue === "theR1"){
  			return "narrow";
  		} else {
  			return "wide";
  		}
  	},

  	}
})