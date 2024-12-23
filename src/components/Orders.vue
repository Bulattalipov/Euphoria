<script setup></script>

<template>
  <div class="orders">
    <div class="orders__title">My Orders</div>
    <div class="orders__items">
      <div v-for="item in new Array(4)" :key="item" class="orders__item">
        <div class="orders__item-top">
          <div class="orders__item-title">Order no: #123456789</div>
          <div class="orders__item-list">
            <div class="orders__item-list-elem">Order Date: <span>2 June 2023 2:40 PM </span></div>
            <div class="orders__item-list-elem">Order Status: <span>Inprogress</span></div>
            <div class="orders__item-list-elem">
              Estimated Delivery Date: <span>8 June 2023</span>
            </div>
            <div class="orders__item-list-elem">Payment Method: <span>Cash on delivery</span></div>
          </div>
        </div>
        <div class="orders__item-product">
          <img
            class="orders__item-product-img"
            src="/assets/img/categories-for-men/men-1.jpg"
            alt=""
          />
          <div class="orders__item-product-info">
            <div class="orders__item-product-info-title">Blue Flower Print Crop Top</div>
            <div class="orders__item-product-info-color">Color: <span>Yellow</span></div>
            <div class="orders__item-product-info-quantity">Quantity: <span>1</span></div>
            <div class="orders__item-product-info-total">Total: <span>$23.00</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.orders {
  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 28px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #3c4242;
    margin-bottom: 19px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__item {
    border-top: 2px solid #f6f6f6;
    padding-top: 19px;

    &:last-child {
      padding-bottom: 19px;
      border-bottom: 2px solid #f6f6f6;
    }
  }

  &__item-top {
    border-radius: 8px;
    background: #f6f6f6;
    padding: 28px 47px;
    margin-bottom: 30px;
  }

  &__item-title {
    font-weight: 600;
    font-size: 20px;
    color: #3c4242;
    margin-bottom: 14px;
  }

  &__item-list {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  &__item-list-elem {
    width: 49%;
    display: flex;
    gap: 5px;
    font-weight: 600;
    color: #807d7e;

    span {
      color: #bebcbd;
    }

    &:nth-child(even) {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__item-product {
    display: flex;
    gap: 25px;
  }

  &__item-product-img {
    border-radius: 4px;
    width: 96px;
    height: 96px;
    object-fit: cover;
    object-position: top center;
  }

  &__item-product-info {
    font-weight: 600;
  }

  &__item-product-info-title {
    color: #3c4242;
    margin-bottom: 10px;
    font-size: 16px;
  }

  &__item-product-info-color,
  &__item-product-info-quantity {
    margin-bottom: 5px;
    span {
      color: #bebcbd;
    }
  }

  &__item-product-info-total {
    color: #807d7e;
  }
}
</style>
