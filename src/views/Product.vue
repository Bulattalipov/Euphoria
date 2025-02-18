<script setup>
import { onMounted, ref, reactive, onBeforeMount } from 'vue';
import Button from '../components/UI/Button.vue';
import InlineSvg from 'vue-inline-svg';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Controller } from 'swiper/modules';
import ProductDescription from '../components/ProductDescription.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import { useRoute } from 'vue-router';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const firstSwiper = ref(null);
const secondSwiper = ref(null);
const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper;
};
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper;
};

const catalog = reactive([]);

const db = getFirestore();
const colRefCatalog = collection(db, 'catalog');
const q = query(colRefCatalog, where('name', '==', useRoute().params.slug));

function getProduct() {
  getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        catalog.push({ id: doc.id, ...doc.data() });
      });
      console.log(catalog);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

onBeforeMount(() => {
  getProduct();
});
</script>

<template>
  <DefaultLayout>
    <div class="product">
      <div class="product__inner">
        <div class="product__slider">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :slidesPerView="3"
            :spaceBetween="10"
            :navigation="true"
            :loop="true"
            :modules="[Controller]"
            @swiper="setFirstSwiper"
            :controller="{ control: secondSwiper }"
            :direction="'vertical'"
            class="mySwiper2"
          >
            <swiper-slide v-for="item in new Array(4)"
              ><img :src="catalog[0]?.url_img"
            /></swiper-slide>
          </swiper>
          <swiper
            @swiper="setSecondSwiper"
            :modules="[Controller]"
            :controller="{ control: firstSwiper }"
            :loop="true"
            :slidesPerView="1"
            :freeMode="true"
            :watchSlidesProgress="true"
            class="mySwiper"
          >
            <swiper-slide v-for="item in new Array(4)"
              ><img :src="catalog[0]?.url_img"
            /></swiper-slide>
          </swiper>
        </div>
        <form class="product__info">
          <div class="product__title">{{ catalog[0]?.name }}</div>
          <div class="product__size">
            <div class="product__size-title">Select Size</div>
            <div class="product__size-list">
              <label v-for="size in catalog[0]?.sizes" class="product__size-item">
                <input class="visually-hidden" checked type="radio" name="size" />
                <div class="product__size-item-box">{{ size }}</div>
              </label>
            </div>
          </div>
          <div class="product__colours">
            <div class="product__colours-title">Colours Available</div>
            <div class="product__colours-list">
              <label v-for="color in catalog[0]?.colors" class="product__colours-item">
                <input class="visually-hidden" checked type="radio" name="colours" />
                <div
                  class="product__colours-item-box"
                  :style="{ backgroundColor: color, color: color }"
                ></div>
              </label>
            </div>
          </div>
          <div class="product__box">
            <Button color="purple" img="shopping-cart.svg">Add to cart</Button>
            <div class="product__box-elem">${{ catalog[0]?.price }}</div>
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
        </form>
      </div>
    </div>
    <ProductDescription></ProductDescription>
  </DefaultLayout>
</template>

<style lang="scss">
.product {
  margin-bottom: 100px;

  &__inner {
    display: flex;
  }

  &__slider {
    display: flex;
    align-items: center;
    flex: 1;
    width: 50%;

    .mySwiper2 {
      position: relative;
      width: 68px;
      height: 260px;
      margin-right: 34px;

      .swiper-slide {
        width: 68px;
        height: 68px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        position: absolute;
        top: auto;
        bottom: -60px !important;
      }
    }

    .mySwiper {
      width: 520px;
      height: 785px;
      margin-right: 0;
      margin-left: 0;

      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
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
