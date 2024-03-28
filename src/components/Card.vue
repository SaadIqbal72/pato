<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body text-center p-0">
        <div class="cardImg">
          <img :src="imageSrc" class="w-100" alt="..." />
        </div>
        <div class="cardDescription">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
          <a href="#" class="badge rounded-pill px-4 py-2 bg-light text-dark"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
