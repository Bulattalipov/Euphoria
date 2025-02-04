<script setup>
import Card from './Card.vue';
import Title from '../UI/Title.vue';

import { onMounted } from 'vue';

const data = defineProps({
  title: String,
  arrayData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="categories">
    <div class="container">
      <Title>{{ title }}</Title>
      <ul class="categories__list">
        <Card v-for="item of arrayData" :key="item.id" :cardItem="item" link="catalog"/>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categories {
  margin-bottom: 103px;

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
}
</style>
