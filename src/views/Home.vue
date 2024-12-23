<script setup>
import Intro from '../components/home/Intro.vue';
import Categories from '../components/home/Categories.vue';
import Banners from '../components/home/Banners.vue';
import Advantage from '../components/home/Advantage.vue';
import Brands from '../components/home/Brands.vue';
import Feedback from '../components/home/Feedback.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <Intro></Intro>
    <Banners></Banners>
    <Advantage></Advantage>
    <Categories title="Categories For Men"></Categories>
    <Categories title="Categories For Women"></Categories>
    <Brands></Brands>
    <Feedback></Feedback>
  </DefaultLayout>
</template>

<style></style>
