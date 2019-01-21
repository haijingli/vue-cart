<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <win>
        <template slot="header">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
        <form-test></form-test>
        <template slot="footer">
          <my-button @myclick="handlerClick">默认按钮</my-button>
          <my-button type="my-primary" @myclick="handlerClick">主要按钮</my-button>
        </template>
      </win>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FormTest from "./components/FormTest.vue";
import MyButton from "./components/Button.vue";
import Win from "./components/Win.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    FormTest,
    MyButton,
    Win
  },
  methods: {
    handlerClick(e) {
      /* eslint-disable */
      console.log(e.target.innerText);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
