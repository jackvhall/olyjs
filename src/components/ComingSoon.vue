<template>
  <div class="container mx-auto border-blue-100">
    <div>
      <span class="text-5xl font-thin text-gray-800">Oly</span>
      <span class="text-5xl font-bold text-gray-800">JS</span>
    </div>
    <div>{{ msg }}</div>
    <div class="mt-12">
      <p>While we work on this site, consider checking us out at the following:</p>
      <div class="flex justify-between align-middle">
        <i class="fab fa-meetup"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
