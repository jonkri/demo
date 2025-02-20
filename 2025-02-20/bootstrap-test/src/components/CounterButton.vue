<script setup>
import { ref } from "vue";

const value = ref(0);

function increment() {
  value.value++;
}
</script>

<template>
  <!-- <button class="btn btn-primary" @click="increment">
    {{ value }}
  </button> -->
  <BButton @click="increment" variant="primary">
    {{ value }}
  </BButton>
</template>
