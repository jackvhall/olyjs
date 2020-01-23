<template>
  <div class="mt-6">{{ foo }}</div>
</template>

<script>
export default {
  name: "UpcomingEvents.vue",
  data() {
    return {
      foo: "bar" // You can return something here...
    };
  },
  props: {
    msg: String
  },
  methods: {
    hiDavid: function() {
      // ...or you can give me a method to play with here
    }
  }
};
</script>

<style scoped>
/* styles scoped to this component */
</style>