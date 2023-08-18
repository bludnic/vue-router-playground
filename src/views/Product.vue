<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    const id = this.$route.params.id

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      this.post = res.data
    })
  },
  data: () => ({
    post: null
  })
}
</script>
