import { defineStore } from "pinia";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import router from '../router';
import { useRouter } from "vue-router";

export const useAuthUserStore = defineStore("authUserStore", () => {
  const formDataSignIn = ref({
    email: '',
    password: '',
    errorMess: '',
  });

  const formDataSignUp = ref({
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

  const router = useRouter();

  function signIn() {
    signInWithEmailAndPassword(getAuth(), formDataSignIn.value.email, formDataSignIn.value.password)
      .then((data) => {
        formDataSignIn.value.email = '';
        formDataSignIn.value.password = '';

        localStorage.setItem('authToken', JSON.stringify(data.user.accessToken));
        router.push('/');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            formDataSignIn.value.errorMess = 'Invalid email';
            break;
          case 'auth/user-disabled':
            formDataSignIn.value.errorMess = 'User disabled';
            break;
          case 'auth/invalid-credential':
            formDataSignIn.value.errorMess = 'Invalid credential';
            break;
          case 'auth/user-not-found':
            formDataSignIn.value.errorMess = 'User not found';
            break;
          case 'auth/wrong-password':
            formDataSignIn.value.errorMess = 'Wrong password';
            break;
          default:
            formDataSignIn.value.errorMess = '';
            break;
        }
      });
  }

  function formIsValid() {
    let isValid = true;

    if (formDataSignUp.value.checkAgree || formDataSignUp.value.checkSubc) {
    } else {
      if (!formDataSignUp.value.checkAgree) {
        formDataSignUp.value.checkAgreeRed = true;
        isValid = false;
      }

      if (!formDataSignUp.value.checkSubc) {
        formDataSignUp.value.checkSubcRed = true;
        isValid = false;
      }
    }

    return isValid;
  }

  function register() {
    if (formIsValid()) {
      formDataSignUp.value.loading = true;

      createUserWithEmailAndPassword(getAuth(), formDataSignUp.value.email, formDataSignUp.value.password)
        .then((data) => {
          formDataSignUp.value.email = '';
          formDataSignUp.value.password = '';
          formDataSignUp.value.checkAgree = false;
          formDataSignUp.value.checkSubc = false;
          formDataSignUp.value.checkAgreeRed = false;
          formDataSignUp.value.checkSubcRed = false;

          localStorage.setItem('authToken', JSON.stringify(data.user.accessToken));

          formDataSignUp.value.loading = false;
          router.push('/');
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              formDataSignUp.value.errorEmail = 'Email already in use';
              break;
            case 'auth/invalid-email':
              formDataSignUp.value.errorEmail = 'Invalid-email';
              break;
            case 'auth/operation-not-allowed':
              formDataSignUp.value.errorMess = 'Operation not allowed';
              break;
            case 'auth/weak-password':
              formDataSignUp.value.errorMess = 'Weak password';
              break;
            default:
              formDataSignUp.value.errorMess = '';
              break;
          }
        }).finally(() => {
          formDataSignUp.value.loading = false;
        });
    }
  }

  function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('authToken', '');
      router.push({name: 'signIn'});
    }).catch((error) => {
      console.log(error);
    });
  }

  return {
    formDataSignIn,
    formDataSignUp,
    signIn,
    register,
    logOut
  }
});