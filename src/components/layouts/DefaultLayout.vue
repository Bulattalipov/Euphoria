<script setup>
import HeaderDefault from '../header/HeaderDefault.vue';
import Footer from '../Footer.vue';
</script>

<template>
  <HeaderDefault></HeaderDefault>
  <slot></slot>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
