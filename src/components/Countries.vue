<template>
  <div>
    <div v-if="error" class="error">Что-то пошло не так</div>

    <img
      v-else-if="loading"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
    />

    <Country v-else v-for="country in countries" :country="country" />
  </div>
</template>

<script>
import axios from 'axios'
import Country from './Country.vue'

export default {
  components: {
    Country
  },
  mounted() {
    this.loadCountries()
  },
  data: () => ({
    countries: [],
    loading: false,
    error: false
  }),
  methods: {
    loadCountries() {
      this.loading = true
      axios
        .get('https://restcountries.com/v3.1/all')
        .then((response) => {
          this.countries = response.data
          this.loading = false
        })
        .catch(() => {
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
