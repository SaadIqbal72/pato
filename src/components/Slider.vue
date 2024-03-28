<template>
  <carousel :items-to-show="itemsToShow">
    <template v-for="(bannerData, index) in bannerList" :key="index">
      <slide>
        <div class="bannerSlide">
          <img :src="bannerData.imageSrc" class="w-100" alt="..." />
          <div class="bannerOverlay">
            <h4>{{bannerData.subHeading  }}</h4>
            <h1>{{ bannerData.heading }}</h1>
            <a class="primaryButton">See Menu</a>
          </div>
        </div>
      </slide>
    </template>

    <template v-for="(reviewData, index) in reviewsList" :key="index">
      <slide>
        <div>
          <img :src="reviewData.imageSrc" class="w-100" alt="..." />
          <p>{{ reviewData.description }}</p>
        </div>
      </slide>
    </template>

    <template v-for="(eventData, index) in eventList" :key="index">
      <slide>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6">
            <div class="eventImg">
              <img :src="eventData.imageSrc" class="w-100" alt="..." />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="eventDetail">
              <h6>{{ eventData.heading }}</h6>
              <p>{{ eventData.description }}</p>
              <a href="#">View Detail</a>
            </div>
          </div>
        </div>
      </slide>
    </template>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    bannerList: {
      type: Array,
      default: () => [],
    },
    reviewsList: {
      type: Array,
      default: () => [],
    },
    eventList: {
      type: Array,
      default: () => [],
    },
    itemsToShow: {
      type: Number,
      default: 1,
    },
  },
};
</script>
