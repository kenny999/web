
var app = new Vue({
  el: '#app',
  data: {    
  	numFormClicked : 0,
  	numFormSubmitIntercepted : 0,
  	numFormClicked2 : 0
  },
  methods : {
  	formClick :  function(ev) { 
  		this.numFormClicked++;
  	},
  	formInterceptSubmit :  function(ev) { 
  		this.numFormSubmitIntercepted++;
  	},
  	formClick2 :  function(ev) { 
  		this.numFormClicked2++;
  	},
  }
})

