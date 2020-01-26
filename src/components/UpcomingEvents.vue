<template>
  <div id="UpcomingEvents" class="mt-10">
    <h1 class="mb-6 text-2xl text-gray-900 font-thin">Upcoming Events</h1>
    <!-- LIST -->
    <ul class="font-sans list-none p-0 container m-auto text-gray-900">
      <li
        :key="event"
        v-for="event in events"
        class="inline-block border-b border-gray-300 flex justify-between items-center py-4"
      >
        <div class="flex items-start w-2/5">
          <div class="w-10 h-10 rounded mr-3">
            <div class="rounded-full h-10 w-10 bg-gray-300 m-auto"></div>
          </div>
          <div class="flex-1 overflow-hidden">
            <div>
              <a :href="event.link">
                <span class="font-bold hover:text-gray-600">{{ event.name }}</span>
              </a>
              <span class="text-red-700 text-xs ml-2">{{ event.yes_rsvp_count }} going!</span>
            </div>
            <p class="text-black leading-normal">{{ event.local_date }}</p>
          </div>
        </div>
        <p class="w-2/5">{{ event.venue.name}}</p>
        <label for="status" class="font-bold w-1/5 text-right">Active</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UpcomingEvents.vue",
  data() {
    return {
      events: []
    };
  },
  mounted() {
    const baseURI =
      "https://cors-anywhere.herokuapp.com/https://staging.olyjs.com/.netlify/functions/meetup-events";
    this.$http.get(baseURI).then(result => {
      this.events = result.data;
    });
  }
};
</script>

<style scoped>
/* styles scoped to this component */
</style>
