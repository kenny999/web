
var app = new Vue({
  el: '#app',
  data: {
    obj : {v1 : "key", v2: "value"}
  }
})

function myEventListener(ev){
    app.obj.v2 = "newvalue";
}

var elem = document.getElementById("myButton");
elem.addEventListener("click", myEventListener);
