<script setup></script>

<template>
  <div class="brands">
    <div class="container">
      <div class="brands__inner">
        <h2 class="brands__title">Top Brands Deal</h2>
        <div class="brands__brands">Up To <span>60%</span> off on brands</div>
        <div class="brands__items">
          <div class="brands__item">
            <img class="brands__item-img" src="/assets/img/brands/1.png" alt="" />
          </div>
          <div class="brands__item">
            <img class="brands__item-img" src="/assets/img/brands/2.png" alt="" />
          </div>
          <div class="brands__item">
            <img class="brands__item-img" src="/assets/img/brands/3.png" alt="" />
          </div>
          <div class="brands__item">
            <img class="brands__item-img" src="/assets/img/brands/4.png" alt="" />
          </div>
          <div class="brands__item">
            <img class="brands__item-img" src="/assets/img/brands/5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brands {
  margin-bottom: 135px;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 43px 43px 60px 43px;
    border: 1.07px solid #323232;
    border-radius: 12px;
    background-color: #3c4242;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 800;
    font-size: 50px;
    text-align: center;
    color: #fff;
    margin-bottom: 25px;
  }

  &__brands {
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    color: #fff;
    margin-bottom: 67px;
    span {
      font-weight: 700;
      color: #fbd103;
    }
  }

  &__items {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  &__item {
    width: 177px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: #fff;
  }

  &__item-img {
  }
}
</style>
