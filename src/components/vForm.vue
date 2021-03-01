<template>
  <form class="form">
    <div class="form__select-wrap">
      <p class="form__subtitle">Ваш филиал <span>*</span></p>
      <select class="form__select" name="city" :disabled="checkedCity">
        <option value=" " :selected="checkedCity">Выберите город</option>
        <option v-for="city in cityList" :key="city.id" :value="city.title">
          {{ city.title }}
        </option>
      </select>
      <v-checkbox @setCityCheck="setCityCheck()" />
    </div>
    <div class="form__checkbox-wrap">
      <p class="form__subtitle">Тема обращения <span>*</span></p>
      <v-radio-btn
        v-for="label in radioLabelData"
        :key="label.id"
        :label="label.title"
        @setThemeCheck="setThemeCheck"
      />
      <input class="form__input" type="text" placeholder="Другое" />
    </div>
    <div class="form__textarea-wrap">
      <p class="form__subtitle">Описание проблемы <span>*</span></p>
      <textarea name="description" id="" cols="40" rows="8"></textarea>
    </div>
    <div class="form__download-wrap">
      <p class="form__subtitle">Загрузка документов</p>
      <p class="form__desc">
        Приложите, пожалуйста, полноэкранный скриншот. <br />Это поможет решить
        проблему быстрее.
      </p>
      <input type="file" />
    </div>
  </form>
</template>

<script>
import VCheckbox from "./vCheckbox.vue";
import VRadioBtn from "./vRadioBtn.vue";
export default {
  data() {
    return {
      checkedCity: false,
      radioLabelData: [
        { title: "Недоволен качеством услуг", id: 1 },
        { title: "Расторжение договора", id: 2 },
        { title: "Не приходит письмо активации на почту", id: 3 },
        { title: "Не работает личный кабинет", id: 4 }
      ]
    };
  },
  name: "vForm",
  components: { VCheckbox, VRadioBtn },
  props: {
    cityList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {
    setCityCheck() {
      this.checkedCity = !this.checkedCity;
    },
    setThemeCheck() {}
  }
};
</script>

<style lang="scss">
.form {
  border: 1px solid rgb(231, 231, 231);
  border-radius: 3px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0 0 10px;

    span {
      color: rgb(199, 59, 59);
    }
  }

  &__subtitle {
    font-size: 16px;
  }

  &__select-wrap {
    margin-bottom: 40px;
  }

  &__select {
    padding: 5px;
  }

  &__input {
    padding: 5px 10px;
  }

  &__textarea-wrap {
    margin-top: 30px;
  }

  &__download-wrap {
    margin-top: 30px;
  }

  &__desc {
    font-size: 12px;
  }
}
</style>
