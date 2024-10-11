<script setup>
import Banner from './Banner.vue';
</script>

<template>
  <div class="banners">
    <div class="container">
      <div class="banners__inner">
        <Banner
          imgStyle="background-image: url('assets/img/banners/girl-1.jpg')"
          priceText="Low Price"
          title="High Coziness"
          upto="UPTO 50% OFF"
          btnLink="#"
        ></Banner>
        <Banner
          imgStyle="background-image: url('assets/img/banners/girl-2.jpg')"
          priceText="Beyoung Presents"
          title="Breezy Summer Style"
          upto="UPTO 50% OFF"
          btnLink="#"
        ></Banner>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banners {
  padding-top: 130px;
  padding-bottom: 72px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}
</style>
