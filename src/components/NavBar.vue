<template>
  <nav
    class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden"
  >
    <a href="/" class="block text-left">
      <span class="text-5xl font-hairline text-gray-800">Oly</span>
      <span class="text-5xl font-bold text-gray-800">JS</span>
    </a>
    <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
      <li class="pr-2">
        <a href="https://www.meetup.com/Olympia-Front-end-Development-Meetup-Group/">
          <fa-icon :icon="['fab', 'meetup']" class="text-3xl text-gray-800 hover:text-gray-600" />
        </a>
      </li>
      <li class="pr-2">
        <a href="https://github.com/OlyJS">
          <fa-icon :icon="['fab', 'github']" class="inline-block text-3xl text-gray-800 hover:text-gray-600 mx-4" />
        </a>
      </li>
      <li class="pr-2">
        <a
          href="https://join.slack.com/t/olyjs/shared_invite/enQtODkxMTQ2MTg0ODAzLTc4ZTEwOWJmOGQyODcwNmQyZmZlM2UxYjk0YjAxMDY1YTBkOWIyNzBhOTkxNDU3NjBlYmJmNmI5YjQ4OGFjZDY"
        >
          <fa-icon :icon="['fab', 'slack']" class="inline-block text-3xl text-gray-800 hover:text-gray-600" />
        </a>
      </li>

      <!-- <li class="pl-2 border-l">
        <a
          href="#"
          class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
        >Log In</a>
      </li>
      <button
        class="bg-black hover:bg-text-gray-800 border-2 border-black hover:bg-white hover:text-black text-white ml-4 py-2 px-3"
      >Sign Up</button>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
