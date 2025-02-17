<template>
  <div>{{ cities.length }}</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ cities: { required: true, type: Object } });
</script>

<style scoped>
div {
  border: solid 3px blue;
  margin-bottom: 1em;
}
</style>
