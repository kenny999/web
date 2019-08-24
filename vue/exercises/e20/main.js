
var app = new Vue({
  el: '#app',
  data: {    
  	buttonClicked : false,
  	isDisabled : false
  },
  methods : {
  	clickHandler : function(ev){
  		this.buttonClicked = true;
  	},
  	disableHandler : function(ev){
  		this.isDisabled = true;
  	}
  }
})