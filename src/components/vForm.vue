<template>
  <form class="form" action="post">
    <div class="form__select-wrap">
      <p class="form__subtitle">Ваш филиал <span>*</span></p>
      <select
        class="form__select"
        name="city"
        :disabled="checkedCity"
        :required="!checkedCity"
        v-model="form.location"
      >
        <option value="" :selected="checkedCity">Выберите город</option>
        <option v-for="city in cityList" :key="city.id" :value="city.title">
          {{ city.title }}
        </option>
      </select>
      <v-checkbox @setCityValue="setCityValue()" />
    </div>
    <div class="form__checkbox-wrap">
      <p class="form__subtitle">Тема обращения <span>*</span></p>
      <v-radio-btn
        v-for="label in radioLabelData"
        :key="label.id"
        :label="label.title"
        @clearInputValue="clearInputValue(label.title)"
        :checkedTheme="checkedTheme"
        :form="form"
      />
      <input
        class="form__input"
        id="hand-theme"
        type="text"
        placeholder="Другое"
        v-on:keyup="setThemeValue('theme')"
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
        v-model="form.description"
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
    <button
      class="form__btn"
      type="submit"
      :disabled="isDisabled"
      @click.prevent="postMethodAction(form)"
    >
      Отправить
    </button>
  </form>
</template>

<script>
import VCheckbox from "./vCheckbox.vue";
import VRadioBtn from "./vRadioBtn.vue";
import { mapActions, mapGetters } from "vuex";

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
      ],
      form: {
        location: "",
        theme: "",
        description: ""
      }
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
  computed: {
    fieldsForm() {
      return Object.values(this.form);
    },
    isDisabled() {
      return !this.fieldsForm.every(i => i.length > 0);
    },
    postSuccess() {
      return this.$store.getters.SUCCESS;
    }
  },
  methods: {
    setCityValue() {
      this.checkedCity = !this.checkedCity;
      if (this.checkedCity === true) {
        this.form.location = "Онлайн";
      }
    },
    setThemeValue(radioName) {
      let inputHandTheme = document.getElementById("hand-theme").value;
      let radioBtnCollection = document.getElementsByName(radioName);

      if (inputHandTheme !== "") {
        radioBtnCollection.forEach(i => (i.checked = false));
        this.checkedTheme = true;
        this.form.theme = inputHandTheme;
      }
    },
    clearInputValue(label) {
      document.getElementById("hand-theme").value = "";
      this.form.theme = label;
      this.checkedTheme = true;
    },
    ...mapGetters(["SUCCESS"]),
    ...mapActions(["POST_DATA_FROM_FORM"]),
    postMethodAction(form) {
      this.POST_DATA_FROM_FORM(form);
      if (this.postSuccess === false) {
        alert("Ошибка отправки заявки");
      }
      if (this.postSuccess === true) {
        document
          .querySelectorAll("input[type=text], textarea")
          .forEach(i => (i.value = ""));
        document
          .querySelectorAll("input[type=radio], input[type=checkbox]")
          .forEach(i => (i.checked = false));
        document.querySelector(".form__select").selectedIndex = "0";
      }
    }
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
    outline: none;

    &:disabled {
      background-color: rgb(167, 167, 167);
    }
  }
}
</style>
