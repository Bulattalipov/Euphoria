<script setup>
import HeaderWithBorder from './UI/HeaderWithBorder.vue';
</script>

<template>
  <div class="product-description">
    <div class="container">
      <div class="product-description__inner">
        <div class="product-description__info">
          <HeaderWithBorder>Product Description</HeaderWithBorder>
          <div class="product-description__desc">
            100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck.
            Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime,
            anywhere. Infinite range of matte-finish HD prints.
          </div>
          <div class="product-description__items">
            <div v-for="item in new Array(6)" :key="item" class="product-description__item">
              <div class="product-description__item-name">Fabric</div>
              <div class="product-description__item-desc">Bio-washed Cotton</div>
            </div>
          </div>
        </div>
        <div class="product-description__video">Видео отсутсвует</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-description {
  padding-bottom: 57px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__desc {
    line-height: 156%;
    letter-spacing: 0.02em;
    color: #807d7e;
    margin-bottom: 32px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 12px;
    background: rgba(246, 246, 246, 0.6);
    border: 1px solid rgba(246, 246, 246, 0.6);
  }

  &__item {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    &:nth-child(even) {
      background-color: #fff;
    }
  }

  &__video {
    padding-left: 73px;
  }
}
</style>
