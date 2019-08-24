
var app = new Vue({
  el: '#app',
  data: {
    message: "",
    multimessage: "",
    checkedNames : [],
    picked : "One",
    selected : "",
    multiselected : [],
    dynamicselected : "A",
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    toggle : "yes"
  }
})