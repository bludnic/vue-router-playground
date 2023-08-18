<template>
  <div>
    <div>Страница продуктов</div>

    <a class="card" v-for="product in products" :href="`/product/${product.id}`">
      <h2>{{ product.title }}</h2>
    </a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      this.products = res.data
    })
  },
  data: () => ({
    products: []
  })
}
</script>

<style scoped>
.card {
  background-color: #ddd;
  color: #000;
  border-radius: 8px;
  border: 1px solid #bbb;
  margin-top: 16px;
  display: block;
}
</style>
