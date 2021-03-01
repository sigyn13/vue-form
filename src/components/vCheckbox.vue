<template>
  <label class="container">
    Онлайн
    <input type="checkbox" v-model="checked" @click="click()" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "vCheckbox",
  data() {
    return {
      checked: false
    };
  },
  components: {},
  computed: {},
  methods: {
    click() {
      this.$emit("setCityCheck");
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 25px;
  display: block;
  position: relative;
  padding: 5px 0 0 35px;
  margin-top: 15px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border: 1px solid black;
  border-radius: 3px;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #eee;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
