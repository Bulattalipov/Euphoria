<script setup>
import InlineSvg from 'vue-inline-svg';
import Card from './home/Card.vue';
import { ref } from 'vue';
import Slider from '@vueform/slider';

const valueSlider = ref([70, 600]);

const categories = ref([
  'Top',
  'Printed T-shirts',
  'Plain T-shirts',
  'Kurti',
  'Boxers',
  'Full sleeve T-shirts',
  'Joggers',
  'Payjamas',
  'Jeans',
]);

const colors = ref([
  'Purple',
  'Black',
  'Red',
  'Orange',
  'Navy',
  'White',
  'Brown',
  'Green',
  'Yellow',
  'Grey',
  'Pink',
  'Blue',
]);

const sizes = ref(['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']);

const toggleContent = function (e) {
  const parent = e.target.closest('.catalog__filter-item');
  parent.classList.toggle('active');
};
</script>

<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__inner">
        <div class="catalog__filter">
          <div class="catalog__filter-top">
            <div class="catalog__filter-top-text">Filter</div>
            <InlineSvg class="catalog__filter-top-icon" src="../../assets/img/filter.svg" />
          </div>
          <div class="catalog__filter-categories">
            <div v-for="item in categories" :key="item" class="catalog__filter-categories-item">
              <div class="catalog__filter-categories-item-name">{{ item }}</div>
              <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
            </div>
          </div>
          <div class="catalog__filter-item catalog__filter-item--price">
            <div class="catalog__filter-item-btn" @click="toggleContent">
              <div class="catalog__filter-item-btn-name">Price</div>
              <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
            </div>
            <div class="catalog__filter-item-content">
              <div class="catalog__filter-item-content-inner">
                <Slider
                  class="catalog__filter-item-slider"
                  :min="20"
                  :max="1000"
                  v-model="valueSlider"
                />
                <div class="catalog__filter-item-inputs">
                  <input class="catalog__filter-item-input" v-model="valueSlider[0]" type="text" />
                  <input class="catalog__filter-item-input" v-model="valueSlider[1]" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div class="catalog__filter-item catalog__filter-item--color">
            <div class="catalog__filter-item-btn" @click="toggleContent">
              <div class="catalog__filter-item-btn-name">Colors</div>
              <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
            </div>
            <div class="catalog__filter-item-content">
              <div class="catalog__filter-item-content-inner">
                <div class="catalog__filter-item-colors">
                  <label v-for="item in colors" :key="item" class="catalog__filter-item-color">
                    <input class="visually-hidden" type="checkbox" />
                    <div
                      class="catalog__filter-item-color-box"
                      :style="`background-color: ${item.toUpperCase()}`"
                    ></div>
                    <div class="catalog__filter-item-color-text">{{ item }}</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="catalog__filter-item catalog__filter-item--size">
            <div class="catalog__filter-item-btn" @click="toggleContent">
              <div class="catalog__filter-item-btn-name">Size</div>
              <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
            </div>
            <div class="catalog__filter-item-content">
              <div class="catalog__filter-item-content-inner">
                <div class="catalog__filter-item-sizes">
                  <label v-for="item in sizes" :key="item" class="catalog__filter-item-size">
                    <input class="visually-hidden" type="checkbox" />
                    <div class="catalog__filter-item-size-box">{{ item }}</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog__list">
          <Card
            v-for="item in Array.from(Array(4).keys())"
            :key="item"
            :for-the-catalog="true"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.catalog {
  &__inner {
    display: flex;
    gap: 50px;
    padding-bottom: 168px;
  }

  &__filter {
    width: 295px;
    flex-shrink: 0;
    height: fit-content;
    border-bottom: 1px solid #bebcbd;
    border-left: 1px solid #bebcbd;
    border-right: 1px solid #bebcbd;
    border-radius: 0 0 2px 2px;
  }

  &__filter-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid #bebcbd;
  }

  &__filter-top-text {
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: #807d7e;
  }

  &__filter-categories {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 40px 30px;
  }

  &__filter-categories-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    cursor: pointer;

    &:hover {
      .catalog__filter-categories-item-name {
        color: #3c4242;
      }

      svg {
        stroke: #3c4242;
      }
    }
  }

  &__filter-categories-item-name {
    font-weight: 600;
    font-size: 16px;
    color: #8a8989;
    transition: color 0.3rem;
  }

  &__filter-item {
    &.active {
      .catalog__filter-item-btn {
        svg {
          transform: rotate(90deg);
        }
      }

      .catalog__filter-item-content {
        height: 100%;
      }
    }
  }

  &__filter-item-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 30px;
    border-top: 1px solid #bebcbd;
    border-bottom: 1px solid #bebcbd;

    svg {
      transform: rotate(-90deg);
    }
  }

  &__filter-item-content {
    height: 0;
    overflow: hidden;
  }

  &__filter-item-content-inner {
    padding: 20px 30px;
  }

  &__filter-item--price {
    .catalog__filter-item-content-inner {
      margin-top: 20px;
    }

    .slider-horizontal .slider-tooltip-top {
      display: none;
    }
  }

  &__filter-item-slider {
    margin-bottom: 20px;
  }

  &__filter-item-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  &__filter-item-input {
    display: inline-block;
    border: 1px solid #bebcbd;
    border-radius: 8px;
    width: 97px;
    height: 32px;
    opacity: 0.8;
    font-weight: 500;
    font-size: 16px;
    color: #3c4242;
    text-align: center;
  }

  &__filter-item-colors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;

    input:checked + .catalog__filter-item-color-box {
      border: 4px solid rgb(216, 9, 9);
    }
  }

  &__filter-item-color-box {
    border-radius: 12px;
    width: 36px;
    height: 36px;
    border: 0.97px solid #f4f1f1;
    margin-bottom: 11px;
  }

  &__filter-item-color-text {
  }

  &__filter-item-sizes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px 20px;
  }

  &__filter-item-size {
    input:checked + .catalog__filter-item-size-box {
      border: 4px solid rgb(216, 9, 9);
    }
  }

  &__filter-item-size-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bebcbd;
    border-radius: 8px;
    height: 32px;
    font-weight: 600;
    font-size: 14px;
    color: #3c4242;
    text-align: center;
  }

  &__list {
    width: 100%;
    padding-top: 33px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 24px;
    align-content: flex-start;

    @media screen and (max-width: 1240px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
