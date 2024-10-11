<script setup>
import { computed } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  starLimit: {
    type: Number,
    default: 5,
  },
});

const widhtRating = computed(() => {
  return (props.rating / props.starLimit) * 100;
});
</script>

<template>
  <div class="star-rating">
    <div class="star-rating__color-list">
      <img
        v-for="item in starLimit"
        :key="item"
        class="star-rating__color-img"
        src="/assets/img/star-outline.svg"
        alt=""
      />
    </div>
    <div
      class="star-rating__color-list star-rating__color-list--colored"
      :style="`width: ${widhtRating}%`"
    >
      <img
        v-for="item in starLimit"
        :key="item"
        class="star-rating__color-img"
        src="/assets/img/star-colored.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.star-rating {
  position: relative;
  display: inline-block;

  &__color-list {
    display: inline-flex;
    align-items: center;
    gap: 3.75px;

    &--colored {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      overflow: hidden;
    }
  }

  &__color-img {
    flex-shrink: 0;
    width: 23px;
    height: 23px;
  }
}
</style>
