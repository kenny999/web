
Vue.component("my-error", {
	props : ["field"],
	template : '<div class="err"><h1>Please see this error</h1><div>Problem with the {{field}}</div><slot></slot></div>'
})
var app = new Vue({
  el: '#app',
  data: {    
  }
})