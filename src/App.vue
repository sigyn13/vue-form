<template>
  <div id="app">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <v-form />
  </div>
</template>

<script>
import VForm from "./components/vForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: { VForm },
  computed: {
    ...mapGetters(["CITY"])
  },
  methods: {
    ...mapActions(["GET_CITY_FROM_API"])
  },
  mounted() {
    this.GET_CITY_FROM_API();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
