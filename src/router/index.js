import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import HeaderDefault from "../components/header/HeaderDefault.vue";
import Footer from "../components/Footer.vue";
import HeaderAuth from "../components/header/HeaderAuth.vue";
import SignUpComponent from "../components/auth/SignUpComponent.vue";
import SignInComponent from "../components/auth/SignInComponent.vue";
import ResetPasswordComponent from "../components/auth/ResetPasswordComponent.vue";
import CreateNewPassword from "../components/auth/CreateNewPassword.vue";
import ErrorBlock from "../components/ErrorBlock.vue";
import Catalog from "../components/Catalog.vue";
import Product from "../components/Product.vue";

const routes = [{
    path: '/',
    name: 'home',
    components: {
      header: HeaderDefault,
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/signin',
    name: 'signIn',
    components: {
      header: HeaderAuth,
      default: SignInComponent,
    }
  },
  {
    path: '/signup',
    name: 'signUp',
    components: {
      header: HeaderAuth,
      default: SignUpComponent,
    }
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    components: {
      header: HeaderAuth,
      default: ResetPasswordComponent,
    }
  },
  {
    path: '/create-new-password',
    name: 'createNewPassword',
    components: {
      header: HeaderAuth,
      default: CreateNewPassword
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'errorPage',
    components: {
      header: HeaderDefault,
      default: ErrorBlock,
      footer: Footer
    }
  },
  {
    path: '/catalog',
    name: 'catalog',
    components: {
      header: HeaderDefault,
      default: Catalog,
      footer: Footer
    }
  },
  {
    path: '/product',
    name: 'product',
    components: {
      header: HeaderDefault,
      default: Product,
      footer: Footer
    }
  }
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
})

export default router;