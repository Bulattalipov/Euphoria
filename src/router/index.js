import {
  createRouter,
  createWebHistory
} from "vue-router";
import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";

const routes = [{
    path: '/signin',
    name: 'signIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp,
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: ResetPassword,
  }
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
})

export default router;