
var app = new Vue({
  el: '#app',
  data: {
    v1 : 0,
    sq : 0
  },
  watch : {
    v1 : function(newV1, oldV1){
        this.sq = newV1 * newV1;
    }
  }
})

function myEventListener(ev){
    app.v1++;
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);
