
var app = new Vue({
  el: '#app',
  data: {    
  	theTeam : ""
  },
  computed : {
  	theTeamClass : function(){
  		if(this.theTeam === "ManU"){
  			return "manUClass";
  		} else if(this.theTeam === "Pool"){
  			return "poolClass";
  		} else if(this.theTeam === "Chelsea"){
  			return "chelseaClass";
  		} else {
  			return "noneClass";
  		}
  	}
  }
})