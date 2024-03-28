<template>
  <section class="bannerSec">
    <Slider :bannerList="bannerList" />
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";
import BlogImg1 from "@/assets/images/intro-01.webp";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      bannerList: [
        {
          imageSrc: BlogImg1,
          subHeading: "Welcome to",
          heading:"Pota Palace"
        },
        {
          imageSrc: BlogImg1,
          subHeading: "Welcome to",
          heading:"Pota Palace"
        },
      ],
    };
  },
};
</script>
