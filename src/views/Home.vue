<script setup>
import Intro from '../components/home/Intro.vue';
import Categories from '../components/home/Categories.vue';
import Banners from '../components/home/Banners.vue';
import Advantage from '../components/home/Advantage.vue';
import Brands from '../components/home/Brands.vue';
import Feedback from '../components/home/Feedback.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import { onMounted } from 'vue';
import { useGetDBStore } from '../stores/getDBStore';

const getDBStore = useGetDBStore();
const categoriesWomenData = getDBStore.categoriesWomenData;
const getCategoriesWomen = getDBStore.getCategoriesWomen;
const categoriesMenData = getDBStore.categoriesMenData;
const getCategoriesMen = getDBStore.getCategoriesMen;

onMounted(() => {
  getCategoriesWomen();
  getCategoriesMen();
});
</script>

<template>
  <DefaultLayout>
    <Intro></Intro>
    <Banners></Banners>
    <Advantage></Advantage>
    <Categories title="Categories For Men" :arrayData="categoriesMenData"></Categories>
    <Categories title="Categories For Women" :arrayData="categoriesWomenData"></Categories>
    <Brands></Brands>
    <Feedback></Feedback>
  </DefaultLayout>
</template>

<style></style>
