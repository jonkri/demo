<template>
  <ul>
    <li v-for="city in cities">{{ city.name }}</li>
  </ul>
</template>

<script setup>
const { data } = await useFetch("https://avancera.app/cities/"),
  cities = ref(data);
</script>
