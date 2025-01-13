const app = Vue.createApp({
  /*
  data() {
    return { x: 5 };
  },
*/
});

app.component("counter-button", {
  data() {
    return { counter: 0 };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
  template: '<input @click="onClick" type="button" :value="counter">',
});

app.component("random-dog", {
  created() {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((result) => {
        this.image = result.url;
      });
  },
  data() {
    return {
      image: "loading.gif",
    };
  },
  template: '<img :src="image">',
});

app.component("paragraphs", {
  template: `
    <div>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
    </div>
  `,
});

app.mount("#app");
