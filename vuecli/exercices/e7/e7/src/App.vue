<template>
  <div id="app">
    <CoolTable v-bind:headers="['a', 'b', 'c']" v-bind:data="['d', 'e', 'f']"/>
  </div>
</template>

<script>
import CoolTable from './components/CoolTable.vue'

export default {
  name: 'app',
  components: {
    CoolTable
  }
}
</script>

<style>
#app {
}
</style>
