

const Home  = {
  template: '<div>Home</div>'
}

const Login = {
  template: '<div>Login</div>'
}

const About = {
  template: '<div>About</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: About }
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {
    v1 : 0
  },
  watch : {
    v1 : function(){
        this.$router.push({ path: 'about', query: { post_slug: 'hello-world' } }) //using query parameters (post?post_slug=hello-world)
    }
  },
  router : router
})

function myEventListener(ev){
    app.v1++;
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);

