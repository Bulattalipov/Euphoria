<script setup>
import Button from '../UI/Button.vue';
import Input from '../UI/Input.vue';
import Checkbox from '../UI/Checkbox.vue';
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref as dbRef, child, get } from 'firebase/database';

const formData = ref({
  email: '',
  password: '',
  errorEmail: '',
  errorPassword: 'Use 8 or more characters with a mix of letters, numbers & symbols',
  checkAgree: false,
  checkAgreeRed: false,
  checkSubc: false,
  checkSubcRed: false,
  loading: false,
});

function formIsValid() {
  let isValid = true;

  if (formData.value.checkAgree || formData.value.checkSubc) {
  } else {
    if (!formData.value.checkAgree) {
      formData.value.checkAgreeRed = true;
      isValid = false;
    }

    if (!formData.value.checkSubc) {
      formData.value.checkSubcRed = true;
      isValid = false;
    }
  }

  return isValid;
}

function funReg() {
  const dbRefTotal = dbRef(getDatabase());
  get(child(dbRefTotal, 'user/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
funReg();

function register() {
  if (formIsValid()) {
    formData.value.loading = true;

    createUserWithEmailAndPassword(getAuth(), formData.value.email, formData.value.password)
      .then((data) => {
        console.log(data.user.accessToken);
        formData.email = '';
        formData.password = '';
        formData.checkAgree = false;
        formData.checkSubc = false;
        formData.checkAgreeRed = false;
        formData.checkSubcRed = false;

        localStorage.setItem('authToken', JSON.stringify(data.user.accessToken));

        loading.value = false;
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            formData.value.errorEmail = 'Email already in use';
            break;
          case 'auth/invalid-email':
            formData.value.errorEmail = 'Invalid-email';
            break;
          case 'auth/operation-not-allowed':
            formData.value.errorMess = 'Operation not allowed';
            break;
          case 'auth/weak-password':
            formData.value.errorMess = 'Weak password';
            break;
          default:
            formData.value.errorMess = '';
            break;
        }

        formData.value.loading = false;
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
            :errorMess="formData.errorEmail"
            v-model:input-value="formData.email"
          />
          <Input
            type="password"
            text="Password"
            :errorMess="formData.errorPassword"
            :errorMessNotRed="true"
            :eye-hide="true"
            v-model:input-value="formData.password"
          />
          <div class="auth__checkboxs">
            <Checkbox v-model:checked="formData.checkAgree" :checkRed="formData.checkAgreeRed"
              >Agree to our <a class="simple-link" href="#">Terms of use</a> and
              <a class="simple-link" href="#">Privacy Policy</a>
            </Checkbox>
            <Checkbox v-model:checked="formData.checkSubc" :checkRed="formData.checkSubcRed"
              >Subscribe to our monthly newsletter</Checkbox
            >
          </div>
          <Button color="purple">Sign Up</Button>
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
