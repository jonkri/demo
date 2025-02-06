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

<script>
// this
// let that
// let theThird

export default {
  props: {
    message: Object,
  },
};
</script>

<style></style>
