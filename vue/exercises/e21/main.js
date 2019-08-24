
var app = new Vue({
  el: '#app',
  data: {    
  	text :  undefined
  },
  created : function(){
  	this.text = textSv;
  },
  methods : {
  	languageToggle : function(ev){
  		if(this.text === textSv) {
  			this.text = textEn;
  		} else {
  			this.text = textSv;
  		}
  	}
  }
})