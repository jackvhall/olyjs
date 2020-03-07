<template>
  <div id="UpcomingEvents" class="mt-10">
    <h1 class="mb-6 text-2xl text-gray-900 font-thin">Upcoming Events</h1>
    <fa-icon v-if="!events" icon="spinner" spin class="text-5xl text-gray-400 mt-4" />
    <!-- LIST -->
    <ul class="font-sans list-none p-0 container m-auto text-gray-900">
      <li
        :key="event.id"
        v-for="event in events"
        class="inline-block border-b border-gray-300 flex justify-between items-center py-4"
      >
        <div class="flex items-start w-2/5">
          <div class="w-10 h-10 rounded mr-3">
            <div class="m-auto">
              <a href="https://www.meetup.com/Olympia-Front-end-Development-Meetup-Group/">
                <fa-icon :icon="['fab', 'meetup']" class="inline-block text-5xl text-red-600 hover:text-red-400" />
              </a>
            </div>
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
      events: null,
    };
  },
  mounted() {
    const baseURI = "/.netlify/functions/meetup-events";
    this.$http.get(baseURI).then(result => {
      this.events = result.data;
    });
  }
};
</script>

<style scoped>
/* styles scoped to this component */
</style>
