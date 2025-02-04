<script setup>
import Title from '../UI/Title.vue';
import StarRating from '../UI/StarRating.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const props = defineProps({
  numberSlides: {
    type: Number,
    default: 5,
  },
});
</script>

<template>
  <div class="feedback">
    <div class="container">
      <Title>Feedback</Title>
      <div class="feedback__inner">
        <Swiper
          :slidesPerView="3"
          :spaceBetween="23"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
          class="mySwiper"
        >
          <SwiperSlide>
            <div class="feedback__item">
              <div class="feedback__item-box">
                <img class="feedback__item-img" src="/assets/img/people-1.jpg" alt="" />
                <StarRating :rating="2.2"></StarRating>
              </div>
              <div class="feedback__item-title">Darryl Jones</div>
              <div class="feedback__item-text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feedback__item">
              <div class="feedback__item-box">
                <img class="feedback__item-img" src="/assets/img/people-2.jpg" alt="" />
                <StarRating :rating="3.5"></StarRating>
              </div>
              <div class="feedback__item-title">Floyd Miles</div>
              <div class="feedback__item-text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
                <p>
                  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
                  ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feedback__item">
              <div class="feedback__item-box">
                <img class="feedback__item-img" src="/assets/img/people-3.jpg" alt="" />
                <StarRating :rating="4"></StarRating>
              </div>
              <div class="feedback__item-title">Terry Rodriguez</div>
              <div class="feedback__item-text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
                <p>
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.feedback {
  margin-bottom: 72px;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1.8px solid #bebcbd;
    border-radius: 10px;
    padding: 23px;
    text-align: start;
  }

  &__item-box {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &__item-img {
    width: 57px;
    height: 57px;
    object-fit: cover;
  }

  &__item-title {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 22px;
    color: #3c4242;
  }

  &__item-text {
    font-weight: 400;
    font-size: 14px;
    color: #807d7e;
  }

  .swiper-wrapper {
    margin-bottom: 35px;
  }

  .swiper-pagination {
  }

  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
  }

  .swiper-pagination-bullet {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: rgba(190, 188, 189, 0.3);
  }
}
</style>
