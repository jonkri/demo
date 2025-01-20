const app = Vue.createApp({});

app.component("message", {
  props: {
    message: Object,
  },
  template: `
    <li
      @click="like(message)"
      :style="{ alignSelf: message.self ? 'end' : 'start' }"
    >
      {{ message.text }}
      <img
        alt=""
        :src="message.image"
        v-show="message.image !== undefined"
      />
      <span class="reaction">{{ message.reaction }}</span>
      <span class="time">
        <span v-if="message.delivered">✓</span>
        <span v-else>⨯</span>
      </span>
    </li>
  `,
});

app.component("number-of-messages", {
  computed: {
    numberOfMessages() {
      return this.messages.length;
    },
  },
  props: {
    messages: Array,
  },
  template:
    "<p>Konversationen består av {{ numberOfMessages }} meddelanden.</p>",
});

const Home = {
  template: `
    <p>Välkommen!</p>
  `,
};

const Messages = {
  computed: {
    capitalizedPeer() {
      return this.$route.params.peer.toUpperCase();
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
  template: `
    <h1>Meddelanden mellan dig och {{ capitalizedPeer }}</h1>
    <ol id="messages">
      <message :message="message" v-for="message in messages"></message>
    </ol>
    <textarea v-model="messageText"></textarea>
    <input @click="sendMessage" type="button" value="Skicka" />
    <number-of-messages :messages="messages"></number-of-messages>
  `,
  watch: {
    messages: {
      deep: true,
      handler() {
        console.log("Meddelandena ändrades!");
      },
    },
  },
};

const routes = [
  { component: Home, path: "/" },
  { component: Messages, path: "/messages/:peer" },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
