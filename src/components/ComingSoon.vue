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
        <a
          href="https://join.slack.com/t/olyjs/shared_invite/enQtODkxMTQ2MTg0ODAzLTc4ZTEwOWJmOGQyODcwNmQyZmZlM2UxYjk0YjAxMDY1YTBkOWIyNzBhOTkxNDU3NjBlYmJmNmI5YjQ4OGFjZDY"
        >
          <svg
            class="-mt-4"
            width="80"
            height="80"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 270 270"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z"
            />
            <path
              class="st1"
              d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z"
            />
            <g>
              <path
                class="st2"
                d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z"
              />
            </g>
            <g>
              <path
                class="st3"
                d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z"
              />
            </g>
          </svg>
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
.st0 {
  fill: #e01e5a;
}
.st1 {
  fill: #36c5f0;
}
.st2 {
  fill: #2eb67d;
}
.st3 {
  fill: #ecb22e;
}
</style>
