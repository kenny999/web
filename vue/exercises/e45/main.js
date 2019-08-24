
var app = new Vue({
  el: '#app',
  data: {   
  	firstName : "",
  	lastName : "",
  	sex : "Female",
  	age :  1,
  	birthday : undefined, 
  	occupation : undefined,
  	town : undefined
  },
  methods : {
  	onClick :  function(ev){
  		localStorage.firstName = this.firstName;
  		localStorage.lastName = this.lastName;
  		localStorage.sex = this.sex;
  		localStorage.age = this.age;
  		localStorage.birthday = this.birthday;
  		localStorage.occupation = this.occupation;
  		localStorage.town = this.town;
  	}
  },
  mounted : function(){
  	  	if(localStorage.firstName){
  	  		this.firstName = localStorage.firstName;
  	  	}
  	  	if(localStorage.lastName){
  	  		this.lastName = localStorage.lastName;
  	  	}
  	  	if(localStorage.sex){
  	  		this.sex = localStorage.sex;
  	  	}
  	  	if(localStorage.age){
  	  		this.age = localStorage.age;
  	  	}
  	  	if(localStorage.birthday){
  	  		this.birthday = localStorage.birthday;
  	  	}
  	  	if(localStorage.occupation){
  	  		this.occupation = localStorage.occupation;
  	  	}
  	  	if(localStorage.town){
  	  		this.town = localStorage.town;
  	  	}
  }
})

