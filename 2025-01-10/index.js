Vue.createApp({
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
          delivered: false,
          image: "cat.png",
          reaction: "😍",
          self: false,
          time: "22:00",
        },
      ],
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
  },
}).mount("#app");
