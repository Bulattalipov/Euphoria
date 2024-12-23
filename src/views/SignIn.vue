<script setup>
import { ref } from 'vue';
import Button from '../components/UI/Button.vue';
import Input from '../components/UI/Input.vue';
import AuthLayout from '../components/layouts/AuthLayout.vue';
import { useAuthUserStore } from '../stores/authUserStore';
import { GoogleAuthProvider, getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import router from '../router';

const authUserStore = useAuthUserStore();
const formData = authUserStore.formDataSignIn;

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'en';

const providerTwitter = new TwitterAuthProvider();

function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      localStorage.setItem('authToken', JSON.stringify(token));
      router.push('/');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function signInWithTwitter() {
  signInWithPopup(auth, providerTwitter)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      localStorage.setItem('authToken', JSON.stringify(token));
      router.push('/');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    });
}
</script>

<template>
  <AuthLayout>
    <div class="auth">
      <div class="auth__img">
        <img class="auth__img-elem" src="/assets/img/auth/1.jpg" alt="" />
      </div>
      <div class="auth__right">
        <div class="auth__inner">
          <div class="auth__title">Sign In Page</div>
          <div class="auth__social-methods">
            <Button img="Google.svg" @click="signInWithGoogle">Continue With Google</Button>
            <Button img="twitter.svg" @click="signInWithTwitter">Continue With Twitter</Button>
          </div>
          <div class="auth__lines-and-text">
            <span>OR</span>
          </div>
          <form class="auth__form" @submit.prevent="authUserStore.signIn">
            <Input
              type="text"
              text="Email Address"
              :errorMess="formData.errorMess"
              v-model:input-value="formData.email"
            />
            <Input
              type="password"
              text="Password"
              errorMess
              :eye-hide="true"
              :resetPassword="true"
              v-model:input-value="formData.password"
            />
            <Button color="purple">Sign In</Button>
            <div class="auth__not-account">
              Don’t have an account?
              <router-link class="auth__not-accoun-link" to="/signup">Sign Up </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style lang="scss">
.auth {
  position: relative;
  width: 100%;
  min-height: 100vh;

  &--reset {
    .auth__form {
      margin-top: 30px;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
  }

  &__img-elem {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  &__right {
    width: 50%;
    margin-left: auto;
    padding: 60px 78px;
  }

  &__inner {
    max-width: 568px;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 0.02em;
    color: #333;
  }

  &__social-methods {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;

    .btn {
      width: 100%;
    }
  }

  &__lines-and-text {
    position: relative;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(102, 102, 102, 0.25);
      height: 2px;
      width: 100%;
    }

    span {
      position: relative;
      z-index: 2;
      font-family: var(--second-family);
      font-weight: 400;
      font-size: 18px;
      color: #666;
      background-color: #fff;
      padding: 0 24px;
    }
  }

  .input:not(:first-child) {
    margin-top: 30px;
  }

  &__form {
    .btn {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }

  &__not-account {
    color: #3c4242;
  }

  &__not-accoun-link {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #3c4242;
  }
}
</style>
