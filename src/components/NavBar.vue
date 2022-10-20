<template>
  <div>
    <div class="container text-center">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <strong>{{ massage }}</strong>
          </a>
        </div>
      </nav>
    </div>
    <div class="container text-center mt-1">
      <strong
        >Developed by <span class="colored">Danish</span> with ❤ Using
        <span class="colored">Veu Js</span></strong
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  props: ["massage"],
};

</script>

<style>
.colored {
  color: red;
  font-family: cursive;
}
</style>