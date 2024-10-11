<script setup>
import Button from './UI/Button.vue';
import InlineSvg from 'vue-inline-svg';
</script>

<template>
  <div class="product">
    <div class="container">
      <div class="product__inner">
        <div class="product__slider"></div>
        <div class="product__info">
          <div class="product__title">Raven Hoodie With Black colored Design</div>
          <div class="product__size">
            <div class="product__size-title">Select Size</div>
            <div class="product__size-list">
              <label class="product__size-item">
                <input class="visually-hidden" checked type="radio" name="size" />
                <div class="product__size-item-box">XS</div>
              </label>
              <label class="product__size-item">
                <input class="visually-hidden" type="radio" name="size" />
                <div class="product__size-item-box">S</div>
              </label>
              <label class="product__size-item">
                <input class="visually-hidden" type="radio" name="size" />
                <div class="product__size-item-box">M</div>
              </label>
              <label class="product__size-item">
                <input class="visually-hidden" type="radio" name="size" />
                <div class="product__size-item-box">L</div>
              </label>
              <label class="product__size-item">
                <input class="visually-hidden" type="radio" name="size" />
                <div class="product__size-item-box">XL</div>
              </label>
            </div>
          </div>
          <div class="product__colours">
            <div class="product__colours-title">Colours Available</div>
            <div class="product__colours-list">
              <label class="product__colours-item">
                <input class="visually-hidden" checked type="radio" name="colours" />
                <div
                  class="product__colours-item-box"
                  style="background-color: #3c4242; color: #3c4242"
                ></div>
              </label>
              <label class="product__colours-item">
                <input class="visually-hidden" type="radio" name="colours" />
                <div
                  class="product__colours-item-box"
                  style="background-color: #edd146; color: #edd146"
                ></div>
              </label>
              <label class="product__colours-item">
                <input class="visually-hidden" type="radio" name="colours" />
                <div
                  class="product__colours-item-box"
                  style="background-color: #eb84b0; color: #eb84b0"
                ></div>
              </label>
              <label class="product__colours-item">
                <input class="visually-hidden" type="radio" name="colours" />
                <div
                  class="product__colours-item-box"
                  style="background-color: #9c1f35; color: #9c1f35"
                ></div>
              </label>
            </div>
          </div>
          <div class="product__box">
            <Button :purple="true" img="shopping-cart.svg">Add to cart</Button>
            <div class="product__box-elem">$63.00</div>
          </div>
          <div class="product__services">
            <div class="product__service">
              <div class="product__service-circle">
                <InlineSvg src="../../assets/img/product/credit-card.svg"></InlineSvg>
              </div>
              <div class="product__service-text">Secure payment</div>
            </div>
            <div class="product__service">
              <div class="product__service-circle">
                <InlineSvg src="../../assets/img/product/Size-Fit.svg"></InlineSvg>
              </div>
              <div class="product__service-text">Size & Fit</div>
            </div>
            <div class="product__service">
              <div class="product__service-circle">
                <InlineSvg src="../../assets/img/product/truck.svg"></InlineSvg>
              </div>
              <div class="product__service-text">Free shipping</div>
            </div>
            <div class="product__service">
              <div class="product__service-circle">
                <InlineSvg src="../../assets/img/product/returns.svg"></InlineSvg>
              </div>
              <div class="product__service-text">Free Shipping & Returns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  &__inner {
    display: flex;
  }

  &__slider {
    flex: 1;
  }

  &__info {
    flex: 1;
    padding: 87px 0 87px 74px;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #3c4242;
    margin-bottom: 20px;
  }

  &__size {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }

  &__size-title {
    font-weight: 600;
    font-size: 18px;
    color: #3f4646;
  }

  &__size-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__size-item {
    cursor: pointer;
    input:checked + .product__size-item-box {
      background: #3c4242;
      color: #fff;
    }
  }

  &__size-item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #bebcbd;
    border-radius: 12px;
    width: 38px;
    height: 38px;
  }

  &__colours {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 35px;
  }

  &__colours-title {
    font-weight: 600;
    font-size: 18px;
    color: #3f4646;
  }

  &__colours-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__colours-item {
    cursor: pointer;
    input:checked + .product__colours-item-box {
      &::before {
        display: block;
      }
    }
  }

  &__colours-item-box {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    &::before {
      display: none;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 27px;
      width: 27px;
      border-radius: 50%;
      border: 1px solid currentColor;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 35px;
  }

  &__box-elem {
    border: 1px solid #3c4242;
    border-radius: 8px;
    padding: 16px 40px;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #3c4242;
  }

  &__services {
    border-top: 1px solid #bebcbd;
    padding-top: 35px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  &__service {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__service-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #f6f6f6;
  }

  &__service-text {
    font-weight: 500;
    font-size: 18px;
    color: #3c4242;
  }
}
</style>
