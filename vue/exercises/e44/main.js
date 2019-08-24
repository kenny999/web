
var app = new Vue({
  el: '#app',
  data: {   
  	userid : undefined,
  	user :  undefined,
  	error : undefined
  },
  methods : {
  	fetchUser : function(ev){
  		this.error = undefined;
  		this.user = undefined;
  		var data = this.$data;
  		axios
  			.get('http://jsonplaceholder.typicode.com/users/'+this.userid)
  			.then(function(response){
  				data.user = response.data;
  			})
  			.catch((error) => {
  				data.error = error;
  			});
  	}
  }
})