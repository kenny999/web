
const Registration  = {
  template: '<div>'+
  	'<h2>Registration</h2>'+
  	'<p><label for="firstName">First name</label><input id="firstName"/></p>'+
  	'<p><label for="lastName">Last name</label><input id="lastName"/></p>'+
  	'<p><label for="homeTown">Home town</label><input id="homeTown"/></p>'+
  	'<p><label for="phone">Phone</label><input id="phone"/></p>'+
  	'<p><label for="birthday">Birthday</label><input type="date" id="birthday"/></p>'+
  '</div>'
}

const Inbox  = {
  template: '<div>'+
  	'<h2>Your inbox</h2>'+
  	'<ul>'+
  	'<li>Message 1. from <em>Jorge</em></li>'+
  	'<li>Message 2. from <em>Sarah</em></li>'+
  	'<li>Message 3. from <em>Jonah</em></li>'+
  	'</ul>'+
  '</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/registration', component: Registration },
    { path: '/inbox', component: Inbox },
  ],
  linkActiveClass: "kenneth-active",
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router

})