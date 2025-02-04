<script setup>
import { computed } from 'vue';
import InlineSvg from 'vue-inline-svg';

const props = defineProps({
  img: String,
  color: {
    type: String,
    required: false,
    default: '',
    validator: (value) => {
      return ['purple', 'white', ''].includes(value);
    },
  },
  tag: {
    type: String,
    default: 'button',
    required: false,
    validator: (value) => {
      return ['button', 'div'].includes(value);
    },
  },
});

const buttonClass = computed(() => {
  return props.color ? `btn--${props.color}` : '';
});
</script>

<template>
  <component :is="tag" class="btn" :class="buttonClass">
    <InlineSvg v-if="img" class="btn__icon" :src="'/assets/img/' + img" alt=""></InlineSvg>
    <div class="btn__text"><slot></slot></div>
  </component>
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
  transition: background-color 0.2s ease;
  cursor: pointer;

  &--purple {
    background-color: #8a33fd;
    color: #fff;
    border: none;

    &:hover {
      background-color: #750cff;
    }
  }

  &--white {
    background-color: #fff;
    color: #000;
    border: none;

    &:hover {
      background-color: #ffffffcb;
    }
  }

  &__icon {
    path {
      stroke: #fff;
    }
  }
}
</style>
