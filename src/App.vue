<template>
  <div id="app">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <v-form :cityList="cityList" />
  </div>
</template>

<script>
import VForm from "./components/vForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: { VForm },
  computed: {
    ...mapGetters(["CITY"]),
    cityList() {
      return this.$store.getters.CITY;
    }
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
  font-family: "Merriweather-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #121a22;
  margin: auto;
  width: 65%;
  height: 65%;

  h1 {
    font-size: 18px;
    margin: 20px 0 15px;
  }
}
</style>
