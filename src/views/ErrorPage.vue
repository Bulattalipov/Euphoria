<script setup>
import Button from '../components/UI/Button.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <div class="error-block">
      <img class="error-block__img" src="/assets/img/error-404.png" alt="" />
      <div class="error-block__title">Oops! Page not found</div>
      <div class="error-block__desc">
        The page you are looking for might have been removed or temporarily unavailable.
      </div>
      <RouterLink to="/">
        <Button color="purple">Back to HomePage</Button>
      </RouterLink>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 82px;
  margin-bottom: 100px;
  max-width: 459px;
  margin-left: auto;
  margin-right: auto;

  &__img {
    width: 395px;
    height: 273px;
    margin-bottom: 1.4rem;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 34px;
    color: #000;
    margin-bottom: 10px;
  }

  &__desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #807d7e;
    margin-bottom: 4.2rem;
  }
}
</style>
