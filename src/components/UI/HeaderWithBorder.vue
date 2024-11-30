<script setup></script>

<template>
  <div class="header-with-border">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.header-with-border {
  position: relative;
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #3c4242;
  padding-left: 21px;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    width: 6px;
    height: 28px;
    background: #8a33fd;
  }
}
</style>
