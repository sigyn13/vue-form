<template>
  <form class="form">
    <div class="form__select-wrap">
      <p class="form__subtitle">Ваш филиал <span>*</span></p>
      <select
        class="form__select"
        name="city"
        :disabled="checkedCity"
        :required="!checkedCity"
      >
        <option value="" :selected="checkedCity">Выберите город</option>
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
        @clearInputValue="clearInputValue()"
        :checkedTheme="checkedTheme"
      />
      <input
        class="form__input"
        id="hand-theme"
        type="text"
        placeholder="Другое"
        v-on:keyup="setThemeCheck('theme')"
        :required="!checkedTheme"
      />
    </div>
    <div class="form__textarea-wrap">
      <p class="form__subtitle">Описание проблемы <span>*</span></p>
      <textarea
        name="description"
        cols="40"
        rows="5"
        required
        placeholder="Введите текст"
      ></textarea>
    </div>
    <div class="form__download-wrap">
      <p class="form__subtitle">Загрузка документов</p>
      <p class="form__desc">
        Приложите, пожалуйста, полноэкранный скриншот. <br />Это поможет решить
        проблему быстрее.
      </p>
      <input type="file" />
    </div>
    <button class="form__btn" type="submit">Отправить</button>
  </form>
</template>

<script>
import VCheckbox from "./vCheckbox.vue";
import VRadioBtn from "./vRadioBtn.vue";
export default {
  data() {
    return {
      checkedCity: false,
      checkedTheme: false,
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
    setThemeCheckValue() {
      let radioBtnCollection = document.getElementsByName("theme");
      if (radioBtnCollection.forEach(i => i.checked === true)) {
        this.checkedTheme = !this.checkedTheme;
      }
    },
    setThemeCheck(radioName) {
      let inputHandTheme = document.getElementById("hand-theme").value;
      let radioBtnCollection = document.getElementsByName(radioName);

      if (inputHandTheme !== "") {
        radioBtnCollection.forEach(i => (i.checked = false));
      }
    },
    clearInputValue() {
      document.getElementById("hand-theme").value = "";
    }
  },
  mounted() {
    this.setThemeCheckValue();
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
  margin: 0 0 30px;
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

    textarea {
      padding: 5px 10px;
    }

    input {
      font-size: 14px;
    }
  }

  &__download-wrap {
    margin-top: 30px;
    input {
      font-size: 12px;
    }
  }

  &__desc {
    font-size: 12px;
    opacity: 0.8;
  }

  &__btn {
    margin: 35px 0 0;
    border: none;
    border-radius: 3px;
    background-color: rgb(255, 164, 79);
    width: 150px;
    text-transform: uppercase;
    padding: 10px 15px;
    color: white;
  }
}
</style>
