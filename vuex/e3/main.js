
const store = new Vuex.Store({
  state: {
    firstName :  undefined,
    lastName :  undefined,
    street :  undefined,
    zip :  undefined,
    town :  undefined,
  },
  mutations: {
    firstName : function(state, newValue){
      this.state.firstName = newValue;
    },
    lastName : function(state, newValue){
      this.state.lastName = newValue;
    },
    street : function(state, newValue){
      this.state.street = newValue;
    },
    zip : function(state, newValue){
      this.state.zip = newValue;
    },
    town : function(state, newValue){
      this.state.town = newValue;
    },
  }
})

const Page1  = {
  template: '<div><h1>Page1 of wizard</h1>'+
    '<p><label for="firstName">First name</label><input id="firstName" v-model="firstName"/></p>'+
    '<p><label for="lastName">Last name</label><input id="lastName" v-model="lastName"/></p>'+
    '<p><label for="btn">Go to next page</label><button @click="onNext">Press</button></p>'+
  '</div>',
  data : function(){
    return {
      firstName :  undefined,
      lastName :  undefined,
    };
  },
  methods : {
    onNext : function(ev){
      this.$store.commit("firstName", this.firstName);
      this.$store.commit("lastName", this.lastName);
      this.$router.push("page2");
    }
  }
}

const Page2  = {
  template: '<div><h1>Page2 of wizard</h1>'+
    '<p><label for="street">Street</label><input id="street" v-model="street"/></p>'+
    '<p><label for="zip">Zip</label><input id="zip" type="number" v-model="zip"/></p>'+
    '<p><label for="town">Town</label><input id="town" v-model="town"/></p>'+
    '<p><label for="btn">Go to next page</label><button @click="onNext">Press</button></p>'+
  '</div>',
  data : function(){
    return {
      street :  undefined,
      zip :  undefined,
      town :  undefined,
    };
  },
  methods : {
    onNext : function(ev){
      this.$store.commit("street", this.street);
      this.$store.commit("zip", this.zip);
      this.$store.commit("town", this.town);
      this.$router.push("page3");
    }
  }
}

const Page3  = {
  template: '<div><h1>End of of wizard</h1>'+
  '<dl><dt>First name:</dt><dd>{{firstName}}</dd>'+
  '<dt>Last name:</dt><dd>{{lastName}}</dd>'+
  '<dt>Street:</dt><dd>{{street}}</dd>'+
  '<dt>Zip:</dt><dd>{{zip}}</dd>'+
  '<dt>Town:</dt><dd>{{town}}</dd></dl>'+
  '</div>',
  computed : {
    firstName : function(){
      return this.$store.state.firstName;
    },
    lastName : function(){
      return this.$store.state.lastName;
    },
    street : function(){
      return this.$store.state.street;
    },
    zip : function(){
      return this.$store.state.zip;
    },
    town : function(){
      return this.$store.state.town;
    },
  }
}

const router = new VueRouter({
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
  ]
})

Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  data: {    
  },
  methods : {
    startWizard : function(ev){
      this.$router.push("page1");
    }
  },
  store,
  router : router
})