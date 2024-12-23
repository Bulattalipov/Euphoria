<script setup>
import HeaderWithBorder from '../components/UI/HeaderWithBorder.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import Input from '../components/UI/Input.vue';
import { ref } from 'vue';
import Button from '../components/UI/Button.vue';
import InlineSvg from 'vue-inline-svg';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

const flag = ref(true);
</script>

<template>
  <DefaultLayout>
    <template v-if="flag">
      <BreadCrumbs></BreadCrumbs>
      <div class="check-out">
        <div class="container">
          <div class="check-out__inner">
            <div class="check-out__base">
              <HeaderWithBorder>Check Out</HeaderWithBorder>
              <div class="check-out__subtitle">Billing Details</div>
              <div class="check-out__form">
                <Input text="First Name*" type="text" placeholder="First Name" newDesign></Input>
                <Input text="Last Name*" type="text" placeholder="Last Name" newDesign></Input>
                <Input
                  text="Country / Region*"
                  type="text"
                  placeholder="Country / Region"
                  newDesign
                ></Input>
                <Input
                  text="Company Name"
                  type="text"
                  placeholder="Company (optional)"
                  newDesign
                ></Input>
                <Input
                  text="Street Address*"
                  type="text"
                  placeholder="House number and street name"
                  newDesign
                ></Input>
                <Input
                  text="Apt, suite, unit"
                  type="text"
                  placeholder="apartment, suite, unit, etc. (optional)"
                  newDesign
                ></Input>
                <Input text="City*" type="text" placeholder="Town / City" newDesign></Input>
                <Input text="State*" :select="true"></Input>
                <Input text="Postal Code*" type="text" placeholder="Postal Code" newDesign></Input>
                <Input text="Phone*" type="text" placeholder="Phone" newDesign></Input>
                <Button color="purple" tag="button">Continue to delivery</Button>
              </div>
            </div>
            <div class="check-out__order">
              <div class="check-out__order-title">Order Summary</div>
              <ul class="check-out__order-list">
                <li v-for="item in new Array(3)" :key="item" class="check-out__order-list-item">
                  <img
                    class="check-out__order-list-item-img"
                    src="/assets/img/categories-for-men/men-1.jpg"
                    alt=""
                  />
                  <div class="check-out__order-list-item-info">
                    <div class="check-out__order-list-item-name">
                      Blue Flower Print Crop Top
                      <span>x 1</span>
                    </div>
                    <div class="check-out__order-list-item-color">Color: <span>Yellow</span></div>
                  </div>
                  <div class="check-out__order-list-item-price">$29.00</div>
                </li>
                <li class="check-out__order-list-item check-out__order-list-item--no-flex">
                  <div class="check-out__order-list-item-row">
                    <div class="check-out__order-list-item-title">
                      Subtotal <span>( 3 items )</span>
                    </div>
                    <div class="check-out__order-list-item-strong-price">$513.00</div>
                  </div>
                  <div class="check-out__order-list-item-row">
                    <div class="check-out__order-list-item-title">Savings</div>
                    <div class="check-out__order-list-item-strong-price">-$30.00</div>
                  </div>
                </li>
                <li class="check-out__order-list-item">
                  <div class="check-out__order-list-item-row">
                    <div class="check-out__order-list-item-title">Shipping</div>
                    <div class="check-out__order-list-item-strong-price">-$5.00</div>
                  </div>
                </li>
                <li class="check-out__order-list-item">
                  <div class="check-out__order-list-item-row">
                    <div class="check-out__order-list-item-title">Total</div>
                    <div class="check-out__order-list-item-strong-price">$478.00</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="confirmed">
      <div class="container">
        <div class="confirmed__inner">
          <div class="confirmed__box">
            <router-link to="/">
              <InlineSvg class="confirmed__close" :src="'assets/img/close-x.svg'"></InlineSvg>
            </router-link>
            <div class="confirmed__title">Your Order is Confirmed</div>
            <router-link class="confirmed__btn">
              <Button color="purple">Continue Shopping</Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.confirmed {
  &__inner {
    height: calc(100vh - 116px);
    display: flex;
    justify-self: center;
  }

  &__box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 412px;
    height: 462px;
    margin-left: 300px;
    margin-top: 100px;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      left: -448px;
      top: -107px;
      width: 967px;
      height: 726px;
      background-image: url('assets/img/order-confirmed.svg');
    }
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 36px;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 30px;
    line-height: 111%;
    text-align: center;
    color: #3c4242;
    max-width: 196px;
    margin-bottom: 30px;
  }

  &__btn {
    margin-bottom: 52px;
  }
}
.check-out {
  padding-bottom: 40px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 38px;
  }

  &__subtitle {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 22px;
    line-height: 152%;
    letter-spacing: 0.02em;
    color: #3c4242;
    margin-bottom: 50px;
  }

  &__base {
    grid-column: span 2;
  }

  &__form {
    display: flex;
    flex-wrap: wrap;
    gap: 25px 38px;

    .input {
      width: 47%;
    }
  }

  &__order {
    grid-column: span 1;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05), -2px -2px 4px 0 rgba(0, 0, 0, 0.05);
    background: #fff;
    padding: 40px 20px;
  }

  &__order-title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 24px;
    color: #3c4242;
    margin-bottom: 15px;
  }

  &__order-list {
    display: flex;
    flex-direction: column;
  }

  &__order-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border-top: 1px solid #edeef2;
    padding: 15px 0;

    &--no-flex {
      display: block;
    }
  }

  &__order-list-item-img {
    border-radius: 4px;
    width: 63px;
    height: 63px;
    object-fit: cover;
    object-position: top center;
  }

  &__order-list-item-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-right: auto;
  }

  &__order-list-item-name {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #3c4242;

    span {
      color: #807d7e;
    }
  }

  &__order-list-item-color {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #3c4242;

    span {
      font-weight: 500;
      color: #807d7e;
    }
  }

  &__order-list-item-price {
    font-weight: 700;
    font-size: 14px;
    color: #807d7e;
  }

  &__order-list-item-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &__order-list-item-title {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #3c4242;

    span {
      font-weight: 500;
      color: #807d7e;
    }
  }

  &__order-list-item-strong-price {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #3c4242;
  }
}
</style>
