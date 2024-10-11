<script setup>
import Card from './Card.vue';
import Title from '../UI/Title.vue';

const data = defineProps({
  title: String,
});
</script>

<template>
  <div class="categories">
    <div class="container">
      <Title>{{ title }}</Title>
      <ul class="categories__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
