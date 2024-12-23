<script setup>
import { ref } from 'vue';
import InlineSvg from 'vue-inline-svg';
import Button from '../UI/Button.vue';
import vSelect from 'vue-select';

const burgerActive = ref(false);
const selectElm = ref('English (united States)');
const optionsWe = ref();

const activetionBurger = () => {
  burgerActive.value = !burgerActive.value;
};

const addClassActive = (e) => {
  e.target.closest('.header__search').classList.add('active');
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img class="header__logo-img" src="/assets/img/Logo.svg" alt="" />
        </router-link>
        <div class="header__search" @click="addClassActive($event)">
          <InlineSvg class="header__search-icon" src="../../assets/img/search.svg"></InlineSvg>
          <input class="header__search-input" type="text" placeholder="Search" />
        </div>
        <v-select
          v-model="selectElm"
          :options="['English (united States)', 'Russia']"
          :searchable="false"
        ></v-select>
        <div class="header__links">
          <router-link to="/signin">
            <Button tag="div">Login</Button>
          </router-link>
          <router-link to="/signup">
            <Button tag="div">Sign Up</Button>
          </router-link>
        </div>
        <div class="header__burger" :class="{ active: burgerActive }" @click="activetionBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 34px 0 31px;
  border-bottom: 1px solid #bebcbd;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
  }

  &__search {
    position: relative;

    &.active {
      .header__search-input {
        padding: 12px 12px 12px 52px;
        width: 200px;
      }

      .header__search-icon {
        left: 20px;
      }
    }

    &-input {
      width: 184px;
      background: #f6f6f6;
      border-radius: 8px;
      border: none;
      padding: 12px 48px 12px 80px;
      font-weight: 500;
      font-size: 18px;
      transition: padding 0.5s, width 0.5s;

      &::placeholder {
        color: #807d7e;
      }
    }

    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 48px;
      transition: left 0.5s;
    }
  }

  &__lang {
  }

  &__links {
    display: flex;
    gap: 29px;

    .btn {
      padding: 12px 48px;
    }

    .router-link-active {
      .btn {
        background-color: #8a33fd;
        color: #fff;
        border: none;
      }
    }
  }

  &__burger {
    display: none;
    width: 3.2rem;
    height: 3.2rem;
    position: relative;
    z-index: 2;
    overflow: hidden;

    &.active {
      span {
        &:nth-of-type(1) {
          display: none;
        }

        &:nth-of-type(2) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(45deg);
        }

        &:nth-of-type(3) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(-45deg);
        }
      }
    }

    span {
      width: 3.2rem;
      height: 0.3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #8a33fd;
      transition: all 0.5s;

      &:nth-of-type(2) {
        top: calc(50% - 9px);
      }

      &:nth-of-type(3) {
        top: calc(50% + 9px);
      }
    }
  }
}

.v-select {
  min-width: 208px;
  cursor: pointer;
}

.vs--searchable .vs__dropdown-toggle {
  cursor: pointer;
}

.vs__clear {
  display: none;
}

:root {
  --vs-border-color: transparent;
}
</style>
