
var app = new Vue({
  el: '#app',
  data: {  
  	rate : undefined  
  },
  methods : {
  	doFetch : function(ev){
  		var data = this.$data;
  		axios
  			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  			.then(function(response){
  				data.rate = response.data.bpi.EUR.rate;
  			});
  	}
  }
})