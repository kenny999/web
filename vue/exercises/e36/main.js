
Vue.component("the-component1", {
	template : '<div>The component 1<input type="date"/></div>'
});
Vue.component("the-component2", {
	template : '<div>The component 2<input type="number"/></div>'
});
Vue.component("the-component3", {
	template : '<div>The component 3<input type="email"/></div>'
});

var app = new Vue({
  el: '#app',
  data: {    
  	selection :  "komp1"
  },
  computed : {
  	theComponent : function(){
  		if(this.selection === 'komp1'){
  			return "the-component1";
  		} else if(this.selection === 'komp2'){
  			return "the-component2";
  		} else if(this.selection === 'komp3'){
  			return "the-component3";
  		}
  	}
  }
})