import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import SignUpComponent from "../components/auth/SignUpComponent.vue";
import SignInComponent from "../components/auth/SignInComponent.vue";
import ResetPasswordComponent from "../components/auth/ResetPasswordComponent.vue";
import CreateNewPasswordComponent from "../components/auth/CreateNewPasswordComponent.vue";
import ErrorBlock from "../components/ErrorBlock.vue";
import Catalog from "../components/Catalog.vue";
import Product from "../components/Product.vue";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import Cart from "../views/Cart.vue";
import CheckOut from "../views/CheckOut.vue";

const routes = [{
    path: '/',
    component: DefaultLayout,
    children: [{
      path: '',
      name: 'home',
      component: Home
    }],
    meta: {
      auth: true
    },
  },
  {
    path: '/signin',
    component: AuthLayout,
    children: [{
        path: '',
        name: 'signIn',
        component: SignInComponent
      }]
  },
  {
    path: '/signup',
    component: AuthLayout,
    children: [{
        path: '',
        name: 'signUp',
        component: SignUpComponent
      }]
  },
  {
    path: '/reset-password',
    component: AuthLayout,
    children: [{
        path: '',
        name: 'resetPassword',
        component: ResetPasswordComponent
      }]
  },
  {
    path: '/create-new-password',
    component: AuthLayout,
    children: [{
        path: '',
        name: 'createNewPassword',
        component: CreateNewPasswordComponent
      }]
  },
  {
    path: '/:pathMatch(.*)*',
    component: DefaultLayout,
    children: [{
        path: '',
        name: 'errorPage',
        component: ErrorBlock
    }],
    meta: {
      auth: true
    },
  },
  {
    path: '/catalog',
    component: DefaultLayout,
    children: [{
      path: '',
      name: 'catalog',
      component: Catalog
    }],
    meta: {
      auth: true
    },
  },
  {
    path: '/product',
    component: DefaultLayout,
    children: [{
      path: '',
      name: 'product',
      component: Product
    }],
    meta: {
      auth: true
    },
  },
  {
    path: '/cart',
    component: DefaultLayout,
    children: [{
      path: '',
      name: 'cart',
      component: Cart
    }],
    meta: {
      auth: true
    },
  },
  {
    path: '/check-out',
    component: DefaultLayout,
    children: [{
      path: '',
      name: 'check-out',
      component: CheckOut
    }],
    meta: {
      auth: true
    },
  }
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authToken = Boolean(JSON.parse(localStorage.getItem('authToken')));
  const requiredAuth = to.matched.some(record => record.meta.auth);
  if(!authToken && requiredAuth) {
    next('/signin');
  } else {
    next();
  }
});


export default router;