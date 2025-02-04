import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import ResetPassword from "../views/ResetPassword.vue";
import CreateNewPassword from "../views/CreateNewPassword.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Catalog from "../views/Catalog.vue";
import Product from "../views/Product.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import Cart from "../views/Cart.vue";
import CheckOut from "../views/CheckOut.vue";
import Wishlist from "../views/Wishlist.vue";

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    },
  },
  {
    path: '/signin',
    name: 'signIn',
    component: SignIn
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
  },
  {
    path: '/create-new-password',
    name: 'createNewPassword',
    component: CreateNewPassword,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'errorPage',
    component: ErrorPage,
    meta: {
      auth: true
    },
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog,
    meta: {
      auth: true
    },
  },
  {
    path: '/product/:slug',
    name: 'product',
    component: Product,
    meta: {
      auth: true
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      auth: true
    },
  },
  {
    path: '/check-out',
    name: 'check-out',
    component: CheckOut,
    meta: {
      auth: true
    },
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
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