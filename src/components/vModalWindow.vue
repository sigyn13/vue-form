<template>
  <div class="modal-wrap">
    <div class="modal">
      <h2>Заявка отправлена.</h2>
      <img src="../assets/images/success_img.png" alt="Успешная заявка" />
      <span class="close" @click="DELETE_SUCCES_TO_STATE()"> </span>
    </div>
    <div class="modal-back"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "vModalWindow",
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    ...mapMutations(["DELETE_SUCCES_TO_STATE"])
  }
};
</script>

<style lang="scss">
.modal-back {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
.modal {
  width: 450px;
  height: 300px;
  margin-bottom: 40px;
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 20px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
