<script setup>
import HeaderWithBorder from '../components/UI/HeaderWithBorder.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import Input from '../components/UI/Input.vue';
</script>

<template>
  <BreadCrumbs></BreadCrumbs>
  <div class="check-out">
    <div class="container">
      <div class="check-out__inner">
        <div class="check-out__base">
          <HeaderWithBorder>Check Out</HeaderWithBorder>
          <div class="check-out__subtitle">Billing Details</div>
          <div class="check-out__form">
            <Input></Input>
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.check-out {
  padding-bottom: 40px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 38px;
  }

  &__base {
    grid-column: span 2;
  }

  &__form {
    display: flex;
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

    &:last-child {
      border-bottom: 1px solid #edeef2;
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
}
</style>
