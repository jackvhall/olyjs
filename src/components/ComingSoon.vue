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
          <i class="fab fa-github inline-block text-5xl text-gray-800 hover:text-gray-600"></i>
        </a>
        <a
          href="https://join.slack.com/t/olympiafronte-nbf1392/shared_invite/enQtODQ4NzMyNzgwODA2LWY4MzhlNzM0NjFjNTc3YzA1ZWQ4YmRjMTZmODAyYzVhMWUzMjE3MzM1MGNjZjgzZGI3ZTI1NjZhYTA3NGU2OGM"
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
      <div class="mt-8">
        <link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/YBmdkwZ"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Help fund our meetups! "><span style="margin-left:15px;font-size:19px !important;">Help fund our meetups! </span></a>
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
.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 10px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 10px 7px 10px !important;font-size: 20px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}
</style>
