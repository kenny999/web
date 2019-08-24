<template>
  <div id="app">
    <p>
      <input type="radio" id="style1" value="style1" v-model="style"/>
      <label for="style1">Style 1</label>
    </p>
    <p>
      <input type="radio" id="style2" value="style2" v-model="style"/>
      <label for="style2">Style 2</label>
    </p>
    <p>
      <label for="nextItem">Enter next item of list</label>
      <input v-model="nextItem" id="nextItem"/>
    </p>
    <p>
      <button @click="clickHandler">Press</button>
    </p>
    <PrettyList v-bind:listStyle="theListStyle" v-bind:listData="myData"/>
  </div>
</template>

<script>
import PrettyList from './components/PrettyList.vue'

export default {
  name: 'app',
  components: {
    PrettyList
  },
  data : function(){
    return {
      myData : [],
      nextItem : undefined,
      style :  "style1"
    }
  },
  methods : {
    clickHandler : function(){
      this.myData.push(this.nextItem);
    }
  },
  computed : {
    theListStyle : function() {
      if(this.style === "style1"){
        return "ul";
      } else { 
        return "ol";
      }
    }
  }
}
</script>

<style>
#app {
}
</style>
