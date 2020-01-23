<template>
  <div id="app">
    <ComingSoon msg="Welcome to the Olympia Frontend Development Group" />
    <UpcomingEvents />
  </div>
</template>

<script>
import ComingSoon from "./components/ComingSoon.vue";
import UpcomingEvents from "./components/UpcomingEvents.vue";

export default {
  name: "app",
  components: {
    ComingSoon,
    UpcomingEvents
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
