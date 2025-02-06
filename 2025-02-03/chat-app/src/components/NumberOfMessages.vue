<template>
  <p>Konversationen består av {{ numberOfMessages }} meddelanden.</p>
</template>

<script>
export default {
  computed: {
    numberOfMessages() {
      return this.messages.length;
    },
  },
  props: {
    messages: Array,
  },
};
</script>

<style></style>
