<script setup>
import Button from '../UI/Button.vue';
</script>

<template>
  <div class="advantage">
    <div class="container">
      <div class="advantage__inner">
        <div class="advantage__left" style="background-image: url('assets/img/leaves.jpg')">
          <div class="advantage__title">WE MADE YOUR EVERYDAY FASHION BETTER!</div>
          <div class="advantage__desc">
            In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range -
            Comfortable & Affordable fashion 24/7
          </div>
          <router-link to="/catalog">
            <Button tag="div" color="white">Shop Now</Button>
          </router-link>
        </div>
        <div class="advantage__right" style="background-image: url('assets/img/people.jpg')"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantage {
  margin-bottom: 80px;
  color: #fff;
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    min-height: 640px;
    border-radius: 11px;
    overflow: hidden;
  }

  &__left,
  &__right {
    background-size: cover;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 74px;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 34px;
    line-height: 147%;
    margin-bottom: 30px;
  }

  &__desc {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 50px;
  }
}
</style>
