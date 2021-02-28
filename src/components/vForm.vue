<template>
  <form>
    <select>
      <option v-for="city in cities" :key="city.id" :value="city.title">{{
        city.title
      }}</option>
    </select>
  </form>
</template>

<script>
export default {
  name: "vForm",
  components: {},
  computed: {
    cities() {
      return this.$store.getters.CITY;
    }
  }
};
</script>

<style lang="scss"></style>
