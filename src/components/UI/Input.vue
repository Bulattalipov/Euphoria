<script setup>
import { defineEmits } from 'vue';
defineProps({
  text: {
    type: String,
    required: true,
  },
  errorMess: {
    type: String,
  },
  errorMessNotRed: {
    type: Boolean,
  },
  type: {
    type: String,
    required: true,
  },
  eyeHide: Boolean,
  resetPassword: Boolean,
  inputValue: [String, Number],
});

const emit = defineEmits(['update:inputValue']);

const showPassword = (e) => {
  if (e.target.closest('.input').getElementsByClassName('input__elem')[0].type === 'password') {
    e.target.closest('.input').getElementsByClassName('input__elem')[0].type = 'text';
  } else {
    e.target.closest('.input').getElementsByClassName('input__elem')[0].type = 'password';
  }
};
</script>

<template>
  <div class="input">
    <div class="input__box">
      <div class="input__text">{{ text }}</div>
      <div v-if="eyeHide" class="input__hide-info" @click="showPassword($event)">
        <img class="input__hide-info-icon" src="/assets/img/eye-hide.svg" alt="" />
        <div class="inout__hide-info-text">Hide</div>
      </div>
    </div>
    <input
      class="input__elem"
      :type="type"
      ref="input"
      :autocomplete="type === 'password' ? 'current-password' : ''"
      @input="emit('update:inputValue', $event.target.value)"
      :value="inputValue"
    />
    <div class="input__contain">
      <div
        v-if="errorMess"
        class="input__error"
        :class="{ 'input__error--not-red': errorMessNotRed }"
      >
        {{ errorMess }}
      </div>
      <router-link v-if="resetPassword" class="input__reset-link" to="/reset-password"
        >Forget your password</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__text {
    display: inline-block;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #3c4242;
    margin-bottom: 10px;
  }

  &__elem {
    width: 100%;
    border: 1px solid #3c4242;
    border-radius: 8px;
    padding: 18px 20px;
    font-size: 14px;
    color: #807d7e;
  }

  &__error {
    color: #ee1d52;
  }

  &__error--not-red {
    color: #807d7e;
  }

  &__hide-info {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    // user-select: none;
  }

  &__hide-info-icon {
    width: 19px;
    height: 16px;
  }

  &__contain {
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
  }

  &__reset-link {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-align: right;
    color: #3c4242;
    margin-left: auto;
  }
}
</style>
