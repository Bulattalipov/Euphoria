<script setup>
import Button from '../components/UI/Button.vue';
import Input from '../components/UI/Input.vue';
import Checkbox from '../components/UI/Checkbox.vue';
import { ref } from 'vue';
import { database } from '../main';
import AuthLayout from '../components/layouts/AuthLayout.vue';
import { useAuthUserStore } from '../stores/authUserStore';

const authUserStore = useAuthUserStore();
const formData = authUserStore.formDataSignUp;
</script>

<template>
  <AuthLayout>
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
          <form class="auth__form" @submit.prevent="authUserStore.register">
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
  </AuthLayout>
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
