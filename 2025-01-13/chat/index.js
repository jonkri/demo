Vue.createApp({
  computed: {
    numberOfMessages() {
      return this.messages.length;
    },
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
          delivered: false,
          image: "cat.png",
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
}).mount("#app");
