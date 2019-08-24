
Vue.component("todo-item", {
	props : ["item", "idx"],
	template : '<div class="todo-item"><span>{{item}}</span><button @click="remove">Remove</button></div>',
	methods : {
		remove : function(ev){
			this.$emit("remove", this.idx);
		}
	}
})

var app = new Vue({
  el: '#app',
  data: {    
  	nextTodo : undefined,
  	allTodos : []
  },
  methods : {
  	addTodo : function(){
  		this.allTodos.push(this.nextTodo);
  	},
  	removeHandler : function(ev){
  		this.allTodos.splice(ev, 1);
  		var i = 0;
  	}
  }
})