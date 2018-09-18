<template>
  <div class="wrapper">
    <my-sidebar></my-sidebar>
    <my-content></my-content>
  </div>
</template>

<script>
import cMyContent from "@/components/myContent/myContent.vue";
import cMySidebar from "@/components/mySidebar/mySidebar.vue";

export default {
  name: "App",
  components: {
    "my-content": cMyContent,
    "my-sidebar": cMySidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
