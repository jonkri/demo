const app = Vue.createApp({
  data() {
    return {
      name: "JSU24",
    };
  },
  methods: {
    onHejsan(x, y, z) {
      console.log(x, y, z);
    },
  },
});

app.component("counter-button", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter = this.counter + 1;
      this.$emit("hejsan", "ett litet värde", "ett värde till", this.counter);
      console.log("test");
    },
  },
  template: `
    <input @click="onClick" type="button" :value="counter" >
  `,
});

app.mount("#app");
