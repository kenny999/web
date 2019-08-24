
var app = new Vue({
  el: '#app',
  data: {
    v1 : 0
  },
  computed : {
    sq : function(){
        return this.v1 * this.v1;
    }
  }
})

function myEventListener(ev){
    app.v1++;
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);
