<template>
  <div id="app">
    <PasswordGenerator/>
  </div>
</template>

<script>
import PasswordGenerator from './components/PasswordGenerator.vue'

export default {
  name: 'app',
  components: {
    PasswordGenerator
  }
}
</script>

<style>
#app {
}
</style>
