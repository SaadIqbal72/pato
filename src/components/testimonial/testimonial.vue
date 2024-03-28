<template>
  <section class="testimonialSec py-5">
    <div class="secHead text-center mb-5">
      <h6>Customers Say</h6>
      <h2>REVIEW</h2>
    </div>
    <Slider :reviewsList="reviewsList" :itemsToShow="itemsToShow" />
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
      reviewsList: [
        {
          imageSrc: BlogImg1,
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
        {
          imageSrc: BlogImg1,
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
        {
          imageSrc: BlogImg1,
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
      ],
    };
  },
};
</script>
