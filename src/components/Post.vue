<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid red;
  padding: 8px;
  margin: 16px;
}
</style>
