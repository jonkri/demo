const app = Vue.createApp();

app.component("counter-button", {
  data() {
    return { counter: this.start };
  },
  methods: {
    onClick() {
      this.counter = this.counter + 1;
    },
  },
  props: ["start"],
  template: '<input @click="onClick" type="button" :value="counter">',
});

app.mount("#app");
