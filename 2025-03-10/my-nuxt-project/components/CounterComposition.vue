<script setup>
import { ref } from "vue";

const counter = ref(0);

function onClick() {
  counter.value++;
}

// useHead({
//   title: "Counter (Composition API)",
// });

// definePageMeta({ layout: "other" });
</script>

<template>
  <input @click="onClick" type="button" :value="counter" />
</template>
