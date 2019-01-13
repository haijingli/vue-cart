<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <form-test></form-test>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    FormTest
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
  margin-top: 60px;
}
</style>
