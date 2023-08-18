<template>
  <div>
    <h2>Posts</h2>

    <img
      v-if="loading"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
    />

    <div v-else-if="error" class="error">При запросе что-то пошло не так</div>

    <Post v-else v-for="post in posts" :post="post" />

    <button @click="loadPosts">Load posts</button>
  </div>
</template>

<script>
import axios from 'axios'
import Post from './Post.vue'

export default {
  mounted() {},
  components: {
    Post
  },
  data: () => ({
    posts: [],
    loading: false,
    error: false
  }),
  methods: {
    loadPosts() {
      this.loading = true

      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.posts = response.data
          this.loading = false
        })
        .catch((err) => {
          this.error = true
        })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
