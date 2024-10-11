<script setup></script>

<template>
  <h2 class="title"><slot></slot></h2>
</template>

<style scoped lang="scss">
.title {
  position: relative;
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 34px;
  line-height: 99%;
  letter-spacing: 0.02em;
  color: #3c4242;
  padding-left: 26px;
  margin-bottom: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    width: 6px;
    height: 30px;
    background: #8a33fd;
  }
}
</style>
