<template>
  <TheNavbar />
  <main>
    <router-view />
  </main>
</template>

<script>
import TheNavbar from '../src/components/TheNavbar.vue';

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to bottom, #e6ced0, #ffffff);
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}
#app {
  background: transparent;
}
</style>
