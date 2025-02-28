<script setup>
  import { useCounterStore } from '../store';

  const store = useCounterStore();
</script>

<template>
  <input @click="store.increment(1)" type="button" :value="store.value" />
</template>
