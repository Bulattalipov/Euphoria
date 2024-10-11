<script setup>
const data = defineProps({
  imgStyle: String,
  priceText: String,
  title: String,
  upto: String,
  btnLink: String,
});
</script>

<template>
  <div class="banner" :style="imgStyle">
    <div class="banner__inner">
      <div class="banner__price">{{ priceText }}</div>
      <div class="banner__title">{{ title }}</div>
      <div class="banner__upto">{{ upto }}</div>
      <a class="banner__link" :href="btnLink">Explore Items </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  min-height: 355px;
  padding: 2.8rem;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;

  &__inner {
    max-width: 264px;
  }

  &__price {
    font-weight: 800;
    font-size: 18px;
    line-height: 167%;
    margin-bottom: 2rem;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 34px;
    line-height: 133%;
    margin-bottom: 0.9rem;
  }

  &__upto {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 157%;
    margin-bottom: 3rem;
  }

  &__link {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 20px;
    line-height: 151%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
  }
}
</style>
