<template>
  <div id="app">
    <ComingSoon msg="Welcome to the Olympia Frontend Development Group" />
  </div>
</template>

<script>
import ComingSoon from "./components/ComingSoon.vue";

export default {
  name: "app",
  components: {
    ComingSoon
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
