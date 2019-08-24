
var app = new Vue({
  el: '#app',
  data: {    
  },
  methods : {
  	onP1 : function(ev){
  		this.$refs.i1.disabled = ! this.$refs.i1.disabled;
  	},
   	onP2 : function(ev){
  		this.$refs.i2.required = ! this.$refs.i2.required;
  	},
   	onP3 : function(ev){
  		this.$refs.i3.readOnly = ! this.$refs.i3.readOnly;
  	}
  }
})