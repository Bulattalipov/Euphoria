<script setup>
import BreadCrumbs from '../components/BreadCrumbs.vue';
import InlineSvg from 'vue-inline-svg';
import Button from '../components/UI/Button.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import { ref } from 'vue';

const flag = ref(true);
</script>

<template>
  <DefaultLayout>
    <template v-if="flag">
      <BreadCrumbs></BreadCrumbs>
      <div class="cart">
        <div class="cart__table">
          <div class="cart__table-top">
            <div class="container">
              <div class="cart__table-row">
                <div class="cart__table-col cart__table-col--prod-det">Product Details</div>
                <div class="cart__table-col">Price</div>
                <div class="cart__table-col">Quantity</div>
                <div class="cart__table-col">shipping</div>
                <div class="cart__table-col">subtotal</div>
                <div class="cart__table-col">action</div>
              </div>
            </div>
          </div>
          <div class="cart__table-base">
            <div class="container">
              <div v-for="item in new Array(4)" :key="item" class="cart__table-row">
                <div class="cart__table-col cart__table-col--prod-det">
                  <div class="cart__table-card">
                    <img
                      class="cart__table-card-img"
                      src="/assets/img/categories-for-men/men-1.jpg"
                      alt=""
                    />
                    <div class="cart__table-card-info">
                      <div class="cart__table-card-info-title">Blue Flower Print Crop Top</div>
                      <div class="cart__table-card-info-color">Color : Yellow</div>
                      <div class="cart__table-card-info-size">Size : M</div>
                    </div>
                  </div>
                </div>
                <div class="cart__table-col">$29.00</div>
                <div class="cart__table-col">
                  <div class="cart__table-quantity">
                    <div class="cart__table-quantity-btn cart__table-quantity-btn--minus">-</div>
                    <div class="cart__table-quantity-value">1</div>
                    <div class="cart__table-quantity-btn cart__table-quantity-btn--plus">+</div>
                  </div>
                </div>
                <div class="cart__table-col">FREE</div>
                <div class="cart__table-col">$29.00</div>
                <div class="cart__table-col">
                  <InlineSvg
                    class="cart__table-delete-icon"
                    src="/assets/img/deletecon.svg"
                  ></InlineSvg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__total">
          <div class="container">
            <div class="cart__total-inner">
              <div class="cart__total-descount">
                <div class="cart__total-descount-title">Discount Codes</div>
                <p class="cart__total-descount-desc">Enter your coupon code if you have one</p>
                <div class="cart__total-descount-form">
                  <input class="cart__total-descount-form-input" type="text" />
                  <button class="cart__total-descount-form-btn">Apply Coupon</button>
                </div>
                <router-link class="cart__total-descount-link" to="/catalog"
                  ><Button color="white" tag="div">Continue Shopping</Button></router-link
                >
              </div>
              <div class="cart__total-box">
                <div class="cart__total-box-contain">
                  <div class="cart__total-box-row">
                    <div class="cart__total-box-title">Sub Total</div>
                    <div class="cart__total-box-price">$513.00</div>
                  </div>
                  <div class="cart__total-box-row">
                    <div class="cart__total-box-title">Sub Total</div>
                    <div class="cart__total-box-price">$513.00</div>
                  </div>
                  <div class="cart__total-box-row cart__total-box-row--strong">
                    <div class="cart__total-box-title">Grand Total</div>
                    <div class="cart__total-box-price">$518.00</div>
                  </div>
                </div>
                <Button color="purple">Proceed To Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="empty-cart">
      <img class="empty-cart__img" src="/assets/img/empty-cart.svg" alt="" />
      <div class="empty-cart__title">Your cart is empty and sad :(</div>
      <div class="empty-cart__desc">Add something to make it happy!</div>
      <RouterLink to="/">
        <Button color="purple">Continue Shopping</Button>
      </RouterLink>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 82px;
  margin-bottom: 100px;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;

  &__img {
    width: 395px;
    height: 273px;
    margin-bottom: 1.4rem;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    color: #000;
    margin-bottom: 10px;
  }

  &__desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #807d7e;
    margin-bottom: 4.2rem;
  }
}
.cart {
  &__table {
    margin-bottom: 50px;
  }

  &__table-top {
    padding: 28px 0;
    background: #3c4242;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }

  &__table-base {
    background: #fff;

    .cart__table-row {
      padding: 50px 0;
      border-bottom: 1px solid #bebcbd;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__table-col {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 150px;

    &--prod-det {
      width: 350px;
      justify-content: start;
    }
  }

  &__table-card {
    display: flex;
    gap: 20px;
  }

  &__table-card-img {
    width: 105px;
    height: 120px;
    border-radius: 12px;
    object-fit: cover;
    object-position: top center;
  }

  &__table-card-info-title {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #3c4242;
    margin-bottom: 8px;
  }

  &__table-card-info-color,
  &__table-card-info-size {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    color: #807d7e;
    margin-bottom: 5px;
  }

  &__table-quantity {
    display: flex;
    align-items: center;
    border-radius: 12px;
    background: #f6f6f6;
  }

  &__table-quantity-btn {
    width: 35px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
  }

  &__table-quantity-value {
    width: 30px;
    text-align: center;
    padding: 5px;
  }

  &__table-delete-icon {
    cursor: pointer;
  }

  &__total-descount-title {
    font-weight: 600;
    font-size: 24px;
    color: #3c4242;
    margin-bottom: 10px;
  }

  &__total-descount-desc {
    color: #807d7e;
    margin-bottom: 41px;
  }

  &__total-descount-form {
    display: flex;
    margin-bottom: 37px;
    min-height: 43px;
    border: 1px solid #bebcbd;
    border-radius: 12px;
  }

  &__total-descount-form-input {
    border: none;
    border-radius: 12px 0 0 12px;
    padding: 10px;
  }

  &__total-descount-form-btn {
    border-radius: 0 12px 12px 0;
    background-color: #8a33fd;
    color: #fff;
    border: none;
    padding: 10px 30px;
    cursor: pointer;

    &:focus,
    &:active {
      border: none;
      outline-offset: 0;
    }
  }

  &__total-descount-link {
  }

  &__total {
    background: #f6f6f6;
  }

  &__total-inner {
    display: flex;
    justify-content: space-between;
  }

  &__total-descount {
    padding: 30px 0 50px;
  }

  &__total-box {
    background: #e4e3e3;

    .btn {
      margin: 20px;
    }
  }

  &__total-box-contain {
    padding: 20px;
    border-bottom: 1px solid #000;
  }

  &__total-box-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    &--strong {
      margin-top: 20px;
      font-weight: 700;
    }
  }
}
</style>
