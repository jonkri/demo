<template>
  <p>Konversationen består av {{ numberOfMessages }} meddelanden.</p>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  messages: Array,
});

const numberOfMessages = computed(() => props.messages.length);
</script>

<style></style>
