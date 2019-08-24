
Vue.component('comp-work', {
	template : "<div>This is Work component</div>"
})


Vue.component('comp-sparetime', {
	template : "<div>This is Spare Time component</div>"
})


var app = new Vue({
  el: '#app',
  data: {    
  },
  computed : {
  	currentComponent : function(){
  		return "comp-work";
  	}
  }
})