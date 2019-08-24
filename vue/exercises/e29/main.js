
var app = new Vue({
  el: '#app',
  data: {    
  	numbers : [1,3,4,6,7,8,9,11,12,13,14,15],
  	part : "upper"
  },
  methods : {
  	onPageDown : function(ev){
  		this.part = "lower";
  	},
   	onPageUp : function(ev){
  		this.part = "upper";
  	}
  },
  computed : {
  	filteredNumbers : function(ev){
  		var cloneNumbers = this.numbers.slice(0, this.numbers.length);
  		var lengthToShow = cloneNumbers.length / 2;
  		var startIndex = (this.part === "upper" ? 0 : cloneNumbers.length / 2)
  		return cloneNumbers.splice(startIndex, lengthToShow);
  	}
  }
})