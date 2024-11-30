<script setup>
import Input from '../UI/Input.vue';
import Button from '../UI/Button.vue';
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const email = ref({
  text: '',
  errorCode: '',
  errorMessage: '',
});

const auth = getAuth();

const sendEmail = () => {
  sendPasswordResetEmail(auth, email.value.text)
    .then((data) => {
      console.log(data);
      email.value.text = '';
      alert('Проверьте вашу почту');
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
};
</script>

<template>
  <div class="auth auth--reset">
    <div class="auth__img">
      <img class="auth__img-elem" src="/assets/img/auth/3.jpg" alt="" />
    </div>
    <div class="auth__right">
      <div class="auth__inner">
        <div class="auth__title">Reset Your Password</div>
        <div class="auth__desc">
          Enter your email and we'll send you a link to reset your password.
        </div>
        <div class="auth__desc">Please check it.</div>
        <form class="auth__form" @submit.prevent="sendEmail">
          <Input
            type="text"
            text="Email Address"
            :errorMess="email.errorMessage"
            :errorMessNotRed="true"
            v-model:input-value="email.text"
          />
          <Button color="purple">Send</Button>
          <div class="auth__not-account">
            Back to
            <router-link class="auth__not-accoun-link" to="/signin">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
