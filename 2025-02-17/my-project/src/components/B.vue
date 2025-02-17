<template>
  <div>{{ cities[0].name }}</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ cities: { required: true, type: Object } });
</script>

<style scoped>
div {
  border: solid 3px green;
  margin-bottom: 1em;
}
</style>
