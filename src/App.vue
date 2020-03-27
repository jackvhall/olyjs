<template>
  <div id="app">
    <NavBar />
    <Hero />
    <Promotion msg="Welcome to the Olympia Frontend Development Group" />
    <UpcomingEvents />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import Promotion from "./components/Promotion.vue";
import UpcomingEvents from "./components/UpcomingEvents.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Hero,
    Promotion,
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
  margin-top: 10px;
}
</style>
