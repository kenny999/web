
var app = new Vue({
  el: '#app',
  data: {
  	showIt : false
  },
  methods : {
  	theHover : function(ev){
  		this.showIt = true;
  	}

  }
})