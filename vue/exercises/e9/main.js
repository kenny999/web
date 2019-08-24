
Vue.component("show-error", {
    props : { errorMessages : Array},
    template : '<div><div v-if="errorMessages && errorMessages.length > 0">'+
    '<ul><li v-for="msg in errorMessages">{{ msg }}</li></ul>'+
    '</div></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    modelFirstname : "",
    modelAge : undefined,
    myErrors : []
  },
  methods: {
    checkForm :  function(ev){
        if(! this.modelFirstname){
            this.myErrors.push("First name is required");
        }
        if(! this.modelAge){
            this.myErrors.push("Age is required");
        } else {
            var e = this.modelAge;
            var n = Number(this.modelAge);
            if(isNaN(n)){
                this.myErrors.push("Age must be a number");
            } else {
                if(n < 1 || n > 100){
                    this.myErrors.push("Age must be between 1 to 100");
                }
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
    }
  }
})