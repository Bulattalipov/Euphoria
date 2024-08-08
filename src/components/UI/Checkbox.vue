<script setup>
import InlineSvg from 'vue-inline-svg';
defineProps({
  checkRed: {
    type: Boolean,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['update:checked']);
</script>

<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      @change="emit('update:checked', $event.target.checked)"
      :checked="checked"
    />
    <div class="checkbox__elem" :class="{ 'checkbox__elem--error': checkRed }">
      <InlineSvg src="../../assets/img/checkbox.svg"></InlineSvg>
    </div>
    <div class="checkbox__text"><slot></slot></div>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }

  &__elem {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 1px solid #3c4242;
    border-radius: 3px;

    svg {
      display: none;
      position: absolute;
    }

    &--error {
      border: 2px solid red;
    }
  }

  &__input:checked + .checkbox__elem {
    svg {
      display: block;
    }
  }

  &__text {
    font-size: 18px;
    user-select: none;
    color: #807d7e;
  }
}
</style>
