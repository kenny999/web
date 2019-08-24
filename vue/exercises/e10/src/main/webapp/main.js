
var app = new Vue({
  el: '#app',
  data: {
	  theBookId : undefined,
	  bookInfo : {}
  },
  methods : {
	  fetchBook : function(){
		  if(this.theBookId){
			  console.log(this.theBookId);
			  axios
		      .get('http://localhost:8080/vueserver/rest-prefix/books/'+this.theBookId)
		      .then(response => {
		    	  this.bookInfo = response.data;
		      });
		  }
	  },
	  clearBook : function(){
		  this.bookInfo = {}
	  }
  }
})