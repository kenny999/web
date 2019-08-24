
var app = new Vue({
  el: '#app',
  data: {
    counters : []
  }
})

var val = 0;

function myEventListener(ev){
    val++;
    app.counters.push(val);
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);
