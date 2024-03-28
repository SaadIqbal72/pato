<template>
  <section class="eventSec py-5">
    <div class="secHead text-center mb-5">
      <h6>Upcomming</h6>
      <h2>Events</h2>
    </div>
    <div class="container">
      <Slider :eventList="eventList" />
    </div>
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";
import BlogImg2 from "@/assets/images/intro-02.webp";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      eventList: [
        {
          imageSrc: BlogImg2,
          heading:"lorem ipsum dolor sit amet",
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
        {
          imageSrc: BlogImg2,
          heading:"lorem ipsum dolor sit amet",
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
        {
          imageSrc: BlogImg2,
          heading:"lorem ipsum dolor sit amet",
          description:
            "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ",
        },
      ],
    };
  },
};
</script>
