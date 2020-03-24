<template>
  <b-container class="mt-5">
    <router-view></router-view>
  </b-container>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>
<style></style>
