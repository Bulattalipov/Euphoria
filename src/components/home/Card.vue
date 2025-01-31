<script setup>
import InlineSvg from 'vue-inline-svg';

defineProps({
  forTheCatalog: Boolean,
  cardItem: {
    type: Object,
    default() {
      return {
        url_img: '', 
        category: 'text'
      }
    }
  },
});
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img class="card__img-elem" :src="cardItem.url_img" alt="" />
      <div v-if="forTheCatalog" class="card__favorite-btn">
        <InlineSvg src="../../assets/img/heart.svg" />
      </div>
    </div>
    <div class="card__contain">
      <div class="card__box">
        <div class="card__name">{{ cardItem.category }}</div>
        <div class="card__desc">Explore Now!</div>
      </div>
      <router-link v-if="!forTheCatalog" class="card__link" to="#">
        <InlineSvg src="../../assets/img/arrow-right.svg" />
      </router-link>
      <div v-else class="card__price">$123.00</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;

  &:hover {
    .card__img-elem {
      transform: scale(1.1);
    } 
  }

  &__img {
    position: relative;
    border-radius: 10px;
    width: 100%;
    padding-bottom: 139%;
    overflow: hidden;
  }

  &__img-elem {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.4s ease;
  }

  &__favorite-btn {
    position: absolute;
    top: 27px;
    right: 21px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background-color: #fff;
    cursor: pointer;

    svg {
      transition: fill 0.4s;
    }

    &.active {
      svg {
        fill: #3c4242;
      }
    }

    &:hover {
      svg {
        fill: #3c4242;
      }
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &__contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__name {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;
    line-height: 156%;
    letter-spacing: -0.04em;
    color: #2a2f2f;
  }

  &__desc {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 13px;
    line-height: 123%;
    letter-spacing: -0.04em;
    color: #7f7f7f;
  }

  &__link {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__price {
    padding: 10px 16px;
    border-radius: 8px;
    background-color: #f6f6f6;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #3c4242;
  }
}
</style>
