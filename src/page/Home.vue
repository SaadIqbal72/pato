<template>
  <Banner />
  <About />

  <section class="discoverSec">
    <div class="container">
      <div
        class="discoverDet d-flex flex-column align-items-center justify-content-center"
      >
        <h6>Discover</h6>
        <h2>PATO PLACE</h2>
      </div>
    </div>
  </section>

  <Events />

  <section class="blogSec">
    <div class="container">
      <div class="secHead mb-4 text-center">
        <h2 class="mb-0 fw-bolder">Our Blogs</h2>
      </div>
      <div class="row">
        <Card
          v-for="(cardData, index) in cardList"
          :key="index"
          :imageSrc="cardData.imageSrc"
          :title="cardData.title"
          :description="cardData.description"
        />
      </div>
    </div>
  </section>

  <newsletter />

  <Testimonial />

  <Testimonial />
</template>

<script>
import Banner from "../components/banner/banner.vue";
import About from "../components/about/about.vue";
import Card from "../components/Card.vue";
import Testimonial from "@/components/testimonial/testimonial.vue";
import Events from "@/components/events/event.vue";
import Newsletter from "@/components/newsletter/newsletter.vue";
import BlogImg1 from "@/assets/images/intro-01.webp";
import BlogImg2 from "@/assets/images/intro-02.webp";
import BlogImg3 from "@/assets/images/intro-04.webp";

export default {
  components: {
    Banner,
    About,
    Card,
    Events,
    Newsletter,
    Testimonial,
  },
  data() {
    return {
      cardList: [
        {
          imageSrc: BlogImg1,
          title: "Delicious Food",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          imageSrc: BlogImg2,
          title: "Delicious Food",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          imageSrc: BlogImg3,
          title: "Delicious Food",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    };
  },
};
</script>
