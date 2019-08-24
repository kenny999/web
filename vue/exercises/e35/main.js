
Vue.component("base-layout", { 
	props : {
		links : {
			type : Array
		}
	},	
	template : '<div>'+
		'<header>'+
		'<slot name="header"></slot>'+
		'</header>'+
		'<nav>'+
		'<slot name="nav"></slot>'+
		'<ul><li v-for="l in links"><a v-bind:href="l.ref">{{l.text}}</a></li></ul>'+
		'</nav>'+
		'<main><slot name="content"></slot></main>'+
		'<footer><slot name="footer"></slot></footer>'+
	'</div>'
})
var app = new Vue({
  el: '#app',
  data: {    
  }
})