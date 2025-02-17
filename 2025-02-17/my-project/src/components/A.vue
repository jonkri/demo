<template>
  <ul>
    <li :key="city.id" v-for="city in cities">{{ city.name }}</li>
  </ul>
</template>

<script setup>
import { inject } from "vue";
// import { defineProps } from "vue";

// const props = defineProps({ cities: { required: true, type: Object } });

const cities = inject("cities");
</script>

<style scoped>
ul {
  border: solid 3px red;
  margin-bottom: 1em;
}
</style>
