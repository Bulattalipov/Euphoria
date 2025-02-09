<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import Title from '../components/UI/Title.vue';
import InlineSvg from 'vue-inline-svg';
import { ref } from 'vue';
import Categories from '../components/home/Categories.vue';
import Orders from '../components/Orders.vue';
import { useAuthUserStore } from '../stores/authUserStore';

const flag = ref(true);
const authUserStore = useAuthUserStore();
const logOut = authUserStore.logOut;
</script>

<template>
  <DefaultLayout>
    <BreadCrumbs></BreadCrumbs>
    <div class="account">
      <div class="container">
        <div class="account__inner">
          <div class="account__left">
            <Title>Hello Jhanvi</Title>
            <div class="account__desc">Welcome to your Account</div>
            <ul class="account__menu">
              <li class="account__menu-item">
                <router-link class="account__menu-link" to="/account/order">
                  <InlineSvg
                    class="account__menu-link-icon"
                    src="/assets/img/wishlist/my-orders.svg"
                  ></InlineSvg>
                  <div class="account__menu-link-text">My orders</div>
                </router-link>
              </li>
              <li class="account__menu-item">
                <router-link class="account__menu-link" to="/account/wishlist">
                  <InlineSvg
                    class="account__menu-link-icon"
                    src="/assets/img/wishlist/heart.svg"
                  ></InlineSvg>
                  <div class="account__menu-link-text">Wishlist</div>
                </router-link>
              </li>
              <li class="account__menu-item">
                <router-link class="account__menu-link" to="/account/account-info">
                  <InlineSvg
                    class="account__menu-link-icon"
                    src="/assets/img/wishlist/user.svg"
                  ></InlineSvg>
                  <div class="account__menu-link-text">My info</div>
                </router-link>
                <div class="account__menu-link" @click="logOut">
                  <InlineSvg
                    class="account__menu-link-icon"
                    src="/assets/img/wishlist/sign-out.svg"
                  ></InlineSvg>
                  <div class="account__menu-link-text">Sign out</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="account__right">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <Categories title="Recently Viewed"></Categories>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.account {
  &__inner {
    display: flex;
    gap: 50px;
    margin-bottom: 130px;
  }

  &__left {
    max-width: 295px;
    width: 100%;

    .title {
      margin-bottom: 10px;
    }
  }

  &__desc {
    font-family: var(--second-family);
    font-weight: 400;
    line-height: 239%;
    color: #807d7e;
    margin-bottom: 41px;
  }

  &__menu {
  }

  &__menu-item {
  }

  &__menu-link {
    min-height: 44px;
    display: flex;
    gap: 15px;
    padding: 12px 12px 12px 37px;
    transform: background-color 0.3s;
    border-radius: 0 8px 8px 0;
    cursor: pointer;

    &.router-link-exact-active {
      border-left: 2px solid #3c4242;
      background-color: #f6f6f6;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }
}
</style>
