<script setup>
import { provide, ref } from "vue";

import A from "./components/A.vue";
import B from "./components/B.vue";
import C from "./components/C.vue";

const cities = ref(null);

provide("cities", cities);

fetch("https://avancera.app/cities/")
  .then((response) => response.json())
  .then((result) => {
    cities.value = result;
  });
</script>

<template>
  <div v-if="cities !== null">
    <A :cities="cities" />
    <B :cities="cities" />
    <C :cities="cities" />
  </div>
  <p v-else>Laddar...</p>
</template>
