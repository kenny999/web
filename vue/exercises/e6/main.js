
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

Vue.component("bv-orgnummer", {
    props : ["og"],
    computed : {
        computedOrgnummer : function(){
            if(this.og){
                return replaceAll(this.og, "-", "");
            } else {
                return "";
            }
        }
    },
    template : "<p>{{computedOrgnummer}}</p>"
})

var app = new Vue({
  el: '#app',
  data: {
    orgnummer : undefined
  }
})