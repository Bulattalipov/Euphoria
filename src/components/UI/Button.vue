<script setup>
import InlineSvg from 'vue-inline-svg';

defineProps({
  img: String,
  purple: Boolean,
});
</script>

<template>
  <button class="btn" :class="{ 'btn--purple': purple }">
    <InlineSvg v-if="img" class="btn__icon" :src="'/assets/img/' + img" alt=""></InlineSvg>
    <div class="btn__text"><slot></slot></div>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid #3c4242;
  border-radius: 8px;
  padding: 16px 48px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: #8a33fd;
  background-color: transparent;
  cursor: pointer;

  &--purple {
    background-color: #8a33fd;
    color: #fff;
    border: none;
  }

  &__icon {
    path {
      stroke: #fff;
    }
  }
}
</style>
