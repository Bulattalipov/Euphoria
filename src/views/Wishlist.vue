<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import Title from '../components/UI/Title.vue';
import Button from '../components/UI/Button.vue';
import InlineSvg from 'vue-inline-svg';
import { ref } from 'vue';
import Categories from '../components/home/Categories.vue';
import Orders from '../components/Orders.vue';
import { useAuthUserStore } from '../stores/authUserStore';

const flag = ref(false);
const authUserStore = useAuthUserStore();
const logOut = authUserStore.logOut;
</script>

<template>
  <DefaultLayout>
    <BreadCrumbs></BreadCrumbs>
    <div class="wishlist">
      <div class="container">
        <div class="wishlist__inner">
          <div class="wishlist__left">
            <Title>Hello Jhanvi</Title>
            <div class="wishlist__desc">Welcome to your Account</div>
            <ul class="wishlist__menu">
              <li class="wishlist__menu-item">
                <router-link class="wishlist__menu-link" to="/">
                  <InlineSvg
                    class="wishlist__menu-link-icon"
                    src="/assets/img/wishlist/my-orders.svg"
                  ></InlineSvg>
                  <div class="wishlist__menu-link-text">My orders</div>
                </router-link>
              </li>
              <li class="wishlist__menu-item">
                <router-link class="wishlist__menu-link wishlist__menu-link--active" to="/">
                  <InlineSvg
                    class="wishlist__menu-link-icon"
                    src="/assets/img/wishlist/heart.svg"
                  ></InlineSvg>
                  <div class="wishlist__menu-link-text">Wishlist</div>
                </router-link>
              </li>
              <li class="wishlist__menu-item">
                <router-link class="wishlist__menu-link" to="/">
                  <InlineSvg
                    class="wishlist__menu-link-icon"
                    src="/assets/img/wishlist/user.svg"
                  ></InlineSvg>
                  <div class="wishlist__menu-link-text">My info</div>
                </router-link>
                <div class="wishlist__menu-link" @click="logOut">
                  <InlineSvg
                    class="wishlist__menu-link-icon"
                    src="/assets/img/wishlist/sign-out.svg"
                  ></InlineSvg>
                  <div class="wishlist__menu-link-text">Sign out</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="wishlist__base">
            <template v-if="flag">
              <div class="wishlist__base-title">Wishlist</div>
              <div class="wishlist-products">
                <div v-for="item in new Array(4)" :key="item" class="wishlist-products__item">
                  <InlineSvg
                    class="wishlist-products__item-btn-delete"
                    src="/assets/img/close-cross.svg"
                  ></InlineSvg>
                  <img
                    class="wishlist-products__item-img"
                    src="/assets/img/categories-for-men/men-1.jpg"
                    alt=""
                  />
                  <div class="wishlist-products__item-info">
                    <div class="wishlist-products__item-info-title">Blue Flower Print Crop Top</div>
                    <div class="wishlist-products__item-info-color">Color: <span>Yellow</span></div>
                    <div class="wishlist-products__item-info-quantity">
                      Quantity: <span>1</span>
                    </div>
                  </div>
                  <div class="wishlist-products__item-price">$29.00</div>
                  <Button color="purple">Add to cart</Button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="wishlist-empty">
                <img class="wishlist-empty__img" src="/assets/img/heart-2.svg" alt="" />
                <div class="wishlist-empty__title">Your wishlist is empty.</div>
                <div class="wishlist-empty__desc">
                  You don’t have any products in the wishlist yet. You will find a lot of
                  interesting products on our Shop page.
                </div>
                <RouterLink to="/catalog">
                  <Button color="purple">Continue Shopping</Button>
                </RouterLink>
              </div>
            </template>
            <!-- <Orders></Orders> -->
          </div>
        </div>
      </div>
    </div>
    <Categories title="Recently Viewed"></Categories>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.wishlist-empty {
  width: 693px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05), -2px -2px 4px 0 rgba(0, 0, 0, 0.05);
  padding: 78px 117px;

  &__img {
    margin-bottom: 60px;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    color: #3c4242;
    margin-bottom: 10px;
  }

  &__desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #807d7e;
    margin-bottom: 42px;
  }
}

.wishlist {
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

    &--active {
      border-left: 2px solid #3c4242;
      background-color: #f6f6f6;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }

  &__base {
    width: 100%;
  }

  &__base-title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 28px;
    line-height: 120%;
    color: #3c4242;
    margin-bottom: 50px;
  }
}

.wishlist-products {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    padding: 30px 0;
    border-bottom: 1px solid #edeef2;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__item-btn-delete {
    cursor: pointer;
  }

  &__item-img {
    border-radius: 4px;
    width: 110px;
    height: 110px;
    object-fit: cover;
    object-position: top center;
  }

  &__item-info {
    margin-right: auto;
  }

  &__item-info-title {
    font-weight: 700;
    font-size: 22px;
    color: #3c4242;
  }

  &__item-info-color,
  &__item-info-quantity {
    font-weight: 700;
    font-size: 22px;
    color: #3c4242;

    span {
      font-weight: 500;
      color: #807d7e;
    }
  }

  &__item-price {
    font-weight: 700;
    font-size: 22px;
    color: #807d7e;
    margin-right: 10px;
  }
}
</style>
