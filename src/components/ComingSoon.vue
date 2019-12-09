<template>
  <div class="container mx-auto">
    <div>
      <span class="text-5xl font-hairline text-gray-800">Oly</span>
      <span class="text-5xl font-bold text-gray-800">JS</span>
    </div>
    <div>{{ msg }}</div>
    <div class="mt-12">
      <p>While we work on this site, consider checking us out at the following:</p>
      <div class="flex justify-center align-middle mt-10">
        <a href="https://www.meetup.com/Olympia-Front-end-Development-Meetup-Group/">
          <i class="fab fa-meetup inline-block text-5xl text-red-600 hover:text-red-400"></i>
        </a>
        <a href="https://github.com/OlyJS">
          <i class="fab fa-github inline-block text-5xl text-gray-800 hover:text-gray-600 ml-4"></i>
        </a>
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
.fab {
  transition: 3s all;
}
.fab:hover {
  transform: translateY(-4px);
}
</style>
