<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="gotoDashboard">Dashboard</button>
    <button @click="gotoPage1">跳转到Page1</button>
    <button @click="gotoPage2">跳转到Page2</button>
    {{foo}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: ["foo"],
  components: {
    HelloWorld
  },
  methods: {
    gotoDashboard(){
       this.$router.push("/dashboard");
    },
    gotoPage1() {
      this.$router.push("/dashboard/page1/3/Home");
    },
    gotoPage2() {
      this.$router.push({
        name: "page2",
        params: { id: 4, msg: "Jerry" },
        query: { foo: "balabala" }
      });
    }
  }
};
</script>
