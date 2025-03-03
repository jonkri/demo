<template>
  <li
    @click="like(message)"
    :style="{ alignSelf: message.self ? 'end' : 'start' }"
  >
    {{ message.text }}
    <img
      :alt="message.altText"
      :src="message.image"
      v-show="message.image !== undefined"
    />
    <span class="reaction">{{ message.reaction }}</span>
    <span class="time">
      <span v-if="message.delivered">✓</span>
      <span v-else>⨯</span>
    </span>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  message: Object,
});

// this
// let that
// let theThird
</script>

<style></style>
