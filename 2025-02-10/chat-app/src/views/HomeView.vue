<template>
  <ol>
    <Message :message="message" v-for="message in messages" />
  </ol>
  <textarea v-model="messageText"></textarea>
  <input @click="sendMessage" type="button" value="Skicka" />
  <NumberOfMessages :messages="messages"></NumberOfMessages>
</template>

<!--
  1. Importera (import)
  2. Registrera (components)
  3. <PascalCase />
-->

<script setup>
import Message from "../components/Message.vue";
import NumberOfMessages from "../components/NumberOfMessages.vue";

import cat from "../../assets/cat.png";

import { ref, watch } from "vue";

const messages = ref([
  {
    delivered: true,
    reaction: "🥰",
    self: true,
    text: "Cảm ơn!",
    time: "21:57",
  },
  {
    delivered: true,
    reaction: null,
    self: false,
    text: "Cảm ơn!",
    time: "21:58",
  },
  {
    delivered: true,
    reaction: null,
    self: false,
    text: "Good night!",
    time: "21:59",
  },
  {
    altText: "Alternativ text",
    delivered: false,
    image: cat,
    reaction: "😍",
    self: false,
    time: "22:00",
  },
]);
const messageText = ref("");
const peer = ref("Mina");

function sendMessage() {
  console.log(messageText.value);

  messages.value.push({
    delivered: false,
    reaction: null,
    self: true,
    text: messageText.value,
    time: "TODO", // Date
  });

  // messages.value = [
  //   {
  //     delivered: false,
  //     reaction: null,
  //     self: true,
  //     text: this.messageText,
  //     time: "TODO", // Date
  //   },
  // ];

  messageText.value = "";

  // TODO: Fokus på element. Använd ref (inte samma sak som ref-variabler). Det finns en prop som heter ref i Vue.js.
}

watch(
  messages,
  () => {
    console.log("Meddelandena ändrades!");
  },
  {
    deep: true,
  }
);
</script>

<style scoped>
ol {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
