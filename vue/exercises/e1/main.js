
var app = new Vue({
  el: '#app',
  data: {
    counter : 1  
  }
})

function myEventListener(ev){
    app.counter++;
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);
