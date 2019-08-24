
var app = new Vue({
  el: '#app',
  data: {   
  	nextItem : undefined,
  	submittedItem : undefined,
  	selectedDummy : "",
  	options : []
  },
  methods : {
  	buttonHandler : function(ev){
  			this.submittedItem = this.nextItem;
  		},
  	},
  watch : {
  	submittedItem : function(newVal, oldVal){	
  		this.options.push(newVal)
  	}
  }
})