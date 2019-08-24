
var app = new Vue({
  el: '#app',
  data: {    
  	numbers : [12, 7, 9, 11, 12, 6, 4, 1, 19],
  	filterType :  ""
  },
  computed : {
  	filteredNumbers : function(){
  		var toReturn = [];
  		if(this.filterType.length === 0){
  			return toReturn;
  		}
  		var i;
  		var matchingModulus;
  		if(this.filterType === "even"){
  			matchingModulus = 0;
  		} else {
  			matchingModulus = 1;
  		}
  		for(i = 0;i<this.numbers.length;i++){
  			if(this.numbers[i] % 2 === matchingModulus){
  				toReturn.push(this.numbers[i]);
  			}
  		}
  		return toReturn;
  	}
  }
})