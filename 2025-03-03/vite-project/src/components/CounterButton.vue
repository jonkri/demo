<script setup>
  import { ref } from "vue";

  const value = ref(0);

  function increment() {
    value.value++;
  }
</script>

<template>
  <input @click="increment" type="button" :value="value" />
</template>
