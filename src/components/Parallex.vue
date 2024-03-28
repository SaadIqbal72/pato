<template>
  <div>
    <h6>{{ title }}</h6>
    <h2>{{ description }}</h2>
  </div>
</template>

<script>
export default {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};
</script>
