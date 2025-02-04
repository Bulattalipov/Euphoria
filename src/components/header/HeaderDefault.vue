<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

const route = useRoute();

const navList = ref([
  { name: 'Shop', link: '/catalog' },
  { name: 'Men', link: '#men' },
  { name: 'Women', link: '#women' },
]);
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img class="header__logo-img" src="/assets/img/Logo.svg" alt="" />
        </router-link>
        <nav v-if="route.name === 'home'" class="nav">
          <ul class="nav__list">
            <li v-for="item in navList" :key="item" class="nav__item">
              <router-link :to="item.link" class="nav__item-link"> {{ item.name }} </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__search header__search--change">
          <InlineSvg class="header__search-icon" src="../../assets/img/search.svg"></InlineSvg>
          <input class="header__search-input" type="text" placeholder="Search" />
        </div>
        <div class="header__links">
          <router-link to="/wishlist" class="header__link">
            <InlineSvg class="header__link-icon" src="../../assets/img/heart.svg"></InlineSvg>
          </router-link>
          <router-link to="/account" class="header__link">
            <InlineSvg class="header__link-icon" src="../../assets/img/user.svg"></InlineSvg>
          </router-link>
          <router-link to="/cart" class="header__link">
            <InlineSvg
              class="header__link-icon"
              src="../../assets/img/shopping-cart.svg"
            ></InlineSvg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  margin-left: 60px;

  &__list {
    display: flex;
    gap: 2rem;
  }

  &__item-link {
    font-weight: 500;
    font-size: 22px;
    color: #807d7e;
    transition: color 0.2s;

    &:hover {
      color: #3c4242;
    }

    // &.router-link-active {
    //   color: #3c4242;
    //   font-weight: 700;
    // }
  }
}

.header {
  &__search--change {
    margin-left: auto;
    margin-right: 40px;

    .header__search-icon {
      left: 14px;
    }
    .header__search-input {
      width: 267px;
      padding: 12px 48px 12px 46px;
    }
  }

  &__search-input {
    transition: background-color 0.2s;

    &:hover,
    &:focus {
      background-color: #d1d1d1;
    }
  }

  &__links {
    display: flex;
    gap: 12px;
  }

  &__link {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    padding: 12px;
    background: #f6f6f6;
    transition: background-color 0.2s;

    &:hover {
      background: #d1d1d1;
    }

    &.router-link-exact-active {
      background: #8a33fd;

      .header__link-icon {
        path {
          stroke: #fff;
        }
      }
    }
  }

  &__link-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
