<script setup>
import Card from './Card.vue';
import Title from '../UI/Title.vue';

import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { onMounted } from 'vue';

const data = defineProps({
  title: String,
});

const db = getFirestore();
console.log(db);

const colRef = collection(db, 'users');

function readSingleDocument() {
  getDocs(colRef)
    .then((snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      console.log(books);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

onMounted(() => {
  readSingleDocument();
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
