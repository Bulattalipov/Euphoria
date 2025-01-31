<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from '../UI/Button.vue';
</script>

<template>
  <div class="intro">
    <Swiper :pagination="{ clickable: true }" :modules="[Pagination]" class="mySwiper">
      <SwiperSlide>
        <div class="intro__slide">
          <img class="intro__slide-img" src="/assets/img/shop-hero-1-product-slide-1.jpg" alt="" />
          <div class="intro__wrapper">
            <div class="intro__inner">
              <div class="intro__catigories">T-shirt / Tops</div>
              <div class="intro__title">Summer Value Pack</div>
              <div class="intro__catigories intro__catigories-2">cool / colorful / comfy</div>
              <router-link to="/catalog">
                <Button tag="div" color="white">Shop Now</Button>
              </router-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="intro__slide">
          <img class="intro__slide-img" src="/assets/img/shop-hero-1-product-slide-1.jpg" alt="" />
          <div class="intro__wrapper">
            <div class="intro__inner">
              <div class="intro__catigories">T-shirt / Tops</div>
              <div class="intro__title">Summer Value Pack</div>
              <div class="intro__catigories intro__catigories-2">cool / colorful / comfy</div>
              <router-link to="/catalog">
                <Button tag="div" color="white">Shop Now</Button>
              </router-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.intro {
  height: calc(100vh - 115px);

  @media screen and (max-height: 670px) {
    height: 670px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
    width: 63px;
    height: 10px;
    border-radius: 0;
    margin: 0 0.5px !important;

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }

  &__slide {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  &__slide-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-position: top;
  }

  &__wrapper {
    position: relative;
    z-index: 1;
    max-width: 1094px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    max-width: 440px;
  }

  &__catigories {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 32px;
    line-height: 118%;
    letter-spacing: 0em;
    text-transform: capitalize;
    color: #fff;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 78px;
    line-height: 120%;
    letter-spacing: 0em;
    color: #fff;
    text-align: start;
  }

  &__btn {
    border-radius: 8px;
    padding: 16px 72px;
    background: #fff;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #3c4242;
  }
}
</style>
