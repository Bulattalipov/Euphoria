<script setup>
import Button from '../UI/Button.vue';
import Input from '../UI/Input.vue';
import Checkbox from '../UI/Checkbox.vue';
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const errorEmail = ref('');
const errorPassword = ref('Use 8 or more characters with a mix of letters, numbers & symbols');
const checkAgree = ref(false);
const checkAgreeRed = ref(false);
const checkSubc = ref(false);
const checkSubcRed = ref(false);
const loading = ref(false);

function formIsValid() {
  let isValid = false;

  if (checkAgree.value || checkSubc.value) {
  } else {
    if (!checkAgree.value) {
      checkAgreeRed.value = true;
    }

    if (!checkSubc.value) {
      checkSubcRed.value = true;
    }
  }

  return isValid;
}

function register() {
  if (formIsValid) {
    loading.value = true;

    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        email.value = '';
        password.value = '';
        checkAgree.value = false;
        checkSubc.value = false;
        checkAgreeRed.value = false;
        checkSubcRed.value = false;

        localStorage.setItem('authToken', JSON.stringify(data.user.accessToken));

        loading.value = false;
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorEmail.value = 'Email already in use';
            break;
          case 'auth/invalid-email':
            errorEmail.value = 'Invalid-email';
            break;
          case 'auth/operation-not-allowed':
            errorMess.value = 'Operation not allowed';
            break;
          case 'auth/weak-password':
            errorMess.value = 'Weak password';
            break;
          default:
            errorMess.value = '';
            break;
        }

        loading.value = false;
      });
  }
}
</script>

<template>
  <div class="auth">
    <div class="auth__img">
      <img class="auth__img-elem" src="/assets/img/auth/2.jpg" alt="" />
    </div>
    <div class="auth__right">
      <div class="auth__inner">
        <div class="auth__title">Sign Up</div>
        <div class="auth__desc">Sign up for free to access to in any of our products</div>
        <div class="auth__social-methods">
          <Button img="Google.svg">Continue With Google</Button>
          <Button img="twitter.svg">Continue With Twitter</Button>
        </div>
        <div class="auth__lines-and-text">
          <span>OR</span>
        </div>
        <form class="auth__form" @submit.prevent="register">
          <Input
            type="text"
            text="Email Address"
            :errorMess="errorEmail"
            v-model:input-value="email"
          />
          <Input
            type="password"
            text="Password"
            :errorMess="errorPassword"
            :errorMessNotRed="true"
            :eye-hide="true"
            v-model:input-value="password"
          />
          <div class="auth__checkboxs">
            <Checkbox v-model:checked="checkAgree" :checkRed="checkAgreeRed"
              >Agree to our <a class="simple-link" href="#">Terms of use</a> and
              <a class="simple-link" href="#">Privacy Policy</a>
            </Checkbox>
            <Checkbox v-model:checked="checkSubc" :checkRed="checkSubcRed"
              >Subscribe to our monthly newsletter</Checkbox
            >
          </div>
          <Button :purple="true">Sign Up</Button>
          <div class="auth__not-account">
            Already have an account?
            <router-link class="auth__not-accoun-link" to="/signin">Log in</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth {
  &__desc {
    margin-top: 10px;
    color: rgba(102, 102, 102, 0.8);
  }

  &__checkboxs {
    margin-top: 30px;
    margin-bottom: 58px;

    & > *:not(:last-child) {
      margin-bottom: 18px;
    }
  }
}

.simple-link {
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #807d7e;
}
</style>
