<template>
  <div id="app">
    <Source v-on:sourceEvent="onSourceEvent"/>
    <Target v-bind:event="sendToTarget"/>
  </div>
</template>

<script>
import Source from './components/Source.vue'
import Target from './components/Target.vue'

export default {
  name: 'app',
  data : function(){
    return {
      returnedValue : undefined
    }
  },
  components: {
    Source,
    Target
  },
  methods : {
    onSourceEvent : function(ev){
      this.returnedValue = ev;
    }
  },
  computed : {
    sendToTarget : function(){
      if(! this.returnedValue){
        return "";
      }
      return this.returnedValue + "-" + this.returnedValue;
    }
  }
}
</script>

<style>
#app {
}
</style>
