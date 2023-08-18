<template>
  <div>
    <h2>{{ country.name.common }} {{ country.flag }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>
