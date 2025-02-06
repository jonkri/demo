<!--
  1. Importera (import)
  2. Registrera (components)
  3. <PascalCase />
-->

<script>
import Message from "./components/Message.vue";
import NumberOfMessages from "./components/NumberOfMessages.vue";

import cat from "../assets/cat.png";

export default {
  components: {
    Message,
    NumberOfMessages,
  },
  data() {
    return {
      messages: [
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
      ],
      messageText: "",
      peer: "Mina",
    };
  },
  methods: {
    like(message) {
      if (message.reaction === null) {
        message.reaction = "❤️";
      } else {
        message.reaction += "❤️";
      }
    },
    sendMessage() {
      console.log(this.messageText);

      this.messages.push({
        delivered: false,
        reaction: null,
        self: true,
        text: this.messageText,
        time: "TODO", // Date
      });

      // this.messages = [
      //   {
      //     delivered: false,
      //     reaction: null,
      //     self: true,
      //     text: this.messageText,
      //     time: "TODO", // Date
      //   },
      // ];

      this.messageText = "";

      // TODO: Fokus på element. Använd ref.
    },
  },
  watch: {
    messages: {
      deep: true,
      handler() {
        console.log("Meddelandena ändrades!");
      },
    },
  },
};
</script>

<template>
  <ol>
    <Message :message="message" v-for="message in messages" />
  </ol>
  <textarea v-model="messageText"></textarea>
  <input @click="sendMessage" type="button" value="Skicka" />
  <NumberOfMessages :messages="messages"></NumberOfMessages>
</template>
