
const Page1  = {
  template: '<div><h1>Page1</h1>'+
  	'<router-link to="/page2">Next page 2</router-link>'+
  	'</div>'
}

const Page2  = {
  template: '<div><h1>Page2</h1>'+
  	'<router-link to="/page1">Previous to page 1</router-link>'+
  	'<router-link to="/page3">Next to page 3</router-link>'+
  	'</div>'
}

const Page3  = {
  template: '<div><h1>Page3</h1>'+
  	'<router-link to="/page2">Previous to page 2</router-link>'+
  	'<router-link to="/page4">Next to page 4</router-link>'+
  	'</div>'
}

const Page4  = {
  template: '<div><h1>Page4</h1>'+
  	'<router-link to="/page3">Previous to page 3</router-link>'+
  	'<router-link to="/page5">Next to page 5</router-link>'+
  	'</div>'
}

const Page5  = {
  template: '<div><h1>Page5</h1>'+
  	'<router-link to="/page4">Previous to page 4</router-link>'+
  	'<div>This is the last page</div>'+
  '</div>'
}


const router = new VueRouter({
  routes: [
    { path: '/', component: Page1 },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
    { path: '/page4', component: Page4 },
    { path: '/page5', component: Page5 },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  router : router
})