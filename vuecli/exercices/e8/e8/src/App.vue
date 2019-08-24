<template>
  <div id="app">
    <div id="nav">
      <router-link to="/component1">Go to component 1</router-link> |
      <router-link to="/component2">Go to component 2</router-link>
      <router-view/>
      <StatePrinter></StatePrinter>
    </div>
  </div>
</template>

<script>
import StatePrinter from './components/StatePrinter.vue'

export default {
  name: 'app',
  components: {
    StatePrinter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
