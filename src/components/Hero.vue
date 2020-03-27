<template>
  <section class="font-sans text-center my-8 px-8">
    <h1 class="capitalize font-medium">Have a Great Idea for a Talk?</h1>
    <p
      class="text-gray-700 mt-2 mb-6"
    >We're always looking for talented individuals to share their knowledge.</p>
    <a
      href="mailto:jack@olyjs.com?subject=Application%20to%20Speak%20at%20OlyJS&body=Tell%20us%20about%20your%20talk"
    >
      <button
        class="bg-black text-white border-2 border-black hover:bg-white hover:text-black py-3 px-6 uppercase text-xs tracking-wide"
      >Apply</button>
    </a>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>