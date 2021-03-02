<template>
  <label class="wrap-radio">
    {{ label }}
    <input
      class="radioBtn"
      type="radio"
      name="theme"
      v-model="checked"
      @click="click(label)"
      :checked="!checked"
      :required="!checkedTheme"
    />
    <span class="radio-mark"></span>
  </label>
</template>

<script>
export default {
  name: "vRadioBtn",
  data() {
    return {
      checked: false
    };
  },
  props: {
    label: {
      type: String,
      default() {
        return "";
      }
    },
    checkedTheme: {
      type: Boolean,
      default() {
        return false;
      }
    },
    form: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    click(label) {
      this.$emit("clearInputValue", label);
    }
  }
};
</script>

<style lang="scss">
.wrap-radio {
  display: block;
  position: relative;
  padding: 5px 0 0 35px;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.wrap-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid black;
}

.wrap-radio:hover input ~ .radio-mark {
  background-color: #ccc;
}

.wrap-radio input:checked ~ .radio-mark {
  background-color: #fff;
}

.radio-mark:after {
  content: "";
  position: absolute;
  display: none;
}

.wrap-radio input:checked ~ .radio-mark:after {
  display: block;
}

.wrap-radio .radio-mark:after {
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: black;
}
</style>
