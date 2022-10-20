<template>
  <main>
    <NavBar :massage="titletonav" />
    <ToDos />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ToDos from "./components/ToDos.vue";
export default {
  name: "App",
  data() {
    return {
      titletonav: "To-Do-App",
    };
  },
  components: { NavBar, ToDos },
};
</script>

<style>
</style>