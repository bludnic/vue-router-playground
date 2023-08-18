<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Counter from './components/Counter.vue'
import Posts from './components/Posts.vue'
import Countries from './components/Countries.vue'
import Products from './views/Products.vue'
import Contact from './views/Contact.vue'

export default {
  components: {
    HelloWorld,
    TheWelcome,
    Counter,
    Posts,
    Countries,
    Products,
    Contact
  },
  data: () => ({
    pathname: window.location.pathname
  })
}
</script>

<template>
  <header>Тут header</header>
  <router-view />
  <footer>Тут footer</footer>
</template>

<style scoped></style>
