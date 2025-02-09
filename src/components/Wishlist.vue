<script setup>
import Button from './UI/Button.vue';
</script>

<template>
  <div class="wishlist">
    <template v-if="flag">
      <div class="wishlist__title">Wishlist</div>
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
            <div class="wishlist-products__item-info-quantity">Quantity: <span>1</span></div>
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
          You don’t have any products in the wishlist yet. You will find a lot of interesting
          products on our Shop page.
        </div>
        <RouterLink to="/catalog">
          <Button color="purple">Continue Shopping</Button>
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.wishlist {
  width: 100%;

  &__title {
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
</style>
