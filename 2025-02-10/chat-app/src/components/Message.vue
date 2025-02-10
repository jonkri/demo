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
      {{ message.time }}
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

function like(message) {
  if (message.reaction === null) {
    message.reaction = "❤️";
  } else {
    message.reaction += "❤️";
  }
}

// this
// let that
// let theThird
</script>

<style scoped>
li {
  background-color: #232626;
  border-radius: 1em;
  margin-bottom: 0.5em;
  padding: 0.5em 0.5em 1.5em;
  position: relative;
}

/* .name {
  color: #53bdeb;
  margin: 0 0 0.2em;
} */

.reaction {
  background-color: #232626;
  border-radius: 1em;
  bottom: -0.7em;
  position: absolute;
  right: 0.7em;
  z-index: 1;
}

.time {
  background-color: #232626;
  border-radius: 1em;
  bottom: 0.5em;
  color: #888;
  font-size: 0.8em;
  position: absolute;
  right: 0.7em;
}
</style>
