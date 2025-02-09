<script setup>
import InlineSvg from 'vue-inline-svg';
import Card from '../components/home/Card.vue';
import { onMounted, ref } from 'vue';
import Slider from '@vueform/slider';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';
import { reactive } from 'vue';

const db = getFirestore();
const colRefColors = collection(db, 'colors');
// const q = query(colRefColors, where("color", "==", "Purple"));

const colRefSizes = collection(db, 'sizes');
const colRefCatalog = collection(db, 'catalog_women');

const valueSlider = ref([6, 104]);

const categories = ref([
  'Shirts',
  'Jeans',
  'Knitwear',
  'Trousers',
  'Blazers',
  'Shorts',
  'Bathrobes',
  'Socks',
]);

const colors = reactive([]);
const sizes = reactive([]);
const catalog = reactive([]);

function getColors() {
  getDocs(colRefColors)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        colors.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function getSizes() {
  getDocs(colRefSizes)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        sizes.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function getCatalog() {
  getDocs(colRefCatalog)
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

async function setCatalog() {
  try {
    await setDoc(doc(db, 'catalog_women', 'catalog_women_id_13'), {
      category: 'Shorts',
      name: 'Alexa jeans Bermuda',
      url_img: 'https://cdn.tom-tailor.com/img/1654_2200/1041016_10281_9.jpg',
      price: '41.99',
      colors: ['Black', 'Blue'],
      sizes: ['S', 'M', 'L'],
    });
    console.log('Данные успешно отправлены на Firebase');
  } catch (error) {
    console.error('Ошибка при отправке данных на Firebase:', error);
  }
}

onMounted(() => {
  getColors();
  getSizes();
  getCatalog();
});

const toggleContent = function (e) {
  const parent = e.target.closest('.catalog__filter-item');
  parent.classList.toggle('active');
};
</script>

<template>
  <DefaultLayout>
    <div class="catalog">
      <button @click="setCatalog">Set Data</button>
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
            <div class="catalog__filter-item catalog__filter-item--price active">
              <div class="catalog__filter-item-btn" @click="toggleContent">
                <div class="catalog__filter-item-btn-name">Price</div>
                <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
              </div>
              <div class="catalog__filter-item-content">
                <div class="catalog__filter-item-content-inner">
                  <Slider
                    class="catalog__filter-item-slider"
                    :min="6"
                    :max="104"
                    v-model="valueSlider"
                  />
                  <div class="catalog__filter-item-inputs">
                    <input
                      class="catalog__filter-item-input"
                      v-model="valueSlider[0]"
                      type="text"
                    />
                    <input
                      class="catalog__filter-item-input"
                      v-model="valueSlider[1]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog__filter-item catalog__filter-item--color active">
              <div class="catalog__filter-item-btn" @click="toggleContent">
                <div class="catalog__filter-item-btn-name">Colors</div>
                <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
              </div>
              <div class="catalog__filter-item-content">
                <div class="catalog__filter-item-content-inner">
                  <div class="catalog__filter-item-colors">
                    <label v-for="item in colors" :key="item.id" class="catalog__filter-item-color">
                      <input class="visually-hidden" type="checkbox" :value="item.color" />
                      <div
                        class="catalog__filter-item-color-box"
                        :style="`background-color: ${item.color.toUpperCase()}`"
                      ></div>
                      <div class="catalog__filter-item-color-text">{{ item.color }}</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog__filter-item catalog__filter-item--size active">
              <div class="catalog__filter-item-btn" @click="toggleContent">
                <div class="catalog__filter-item-btn-name">Size</div>
                <InlineSvg src="../../assets/img/arrow-right-2.svg"></InlineSvg>
              </div>
              <div class="catalog__filter-item-content">
                <div class="catalog__filter-item-content-inner">
                  <div class="catalog__filter-item-sizes">
                    <label v-for="item in sizes" :key="item.id" class="catalog__filter-item-size">
                      <input class="visually-hidden" type="checkbox" :value="item.size" />
                      <div class="catalog__filter-item-size-box">{{ item.size }}</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{ catalog.length }}
          <div class="catalog__list">
            <Card
              v-for="item in catalog"
              :key="item.id"
              :for-the-catalog="true"
              :card-item="item"
              :link="item.name"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
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
    cursor: pointer;

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

  &__filter-item-color {
    cursor: pointer;
  }

  &__filter-item-color-box {
    border-radius: 12px;
    width: 36px;
    height: 36px;
    border: 0.97px solid #f4f1f1;
    margin-bottom: 11px;
  }

  &__filter-item-color-text {
    user-select: none;
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
    cursor: pointer;
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
