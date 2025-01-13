// Don't Repeat Yourself = DRY

// WET =
//   Write Everything Twice
//   We Enjoy Typing
//   Waste Everyone's Time

Vue.createApp({
  created() {
    this.fetchCities();
  },
  data() {
    return {
      cities: null,
    };
  },
  methods: {
    fetchCities() {
      fetch("https://avancera.app/cities/")
        .then((response) => response.json())
        .then((result) => {
          that.cities = result;
        });
    },
  },
  updated() {
    console.log("En variabel har ändrats!");
  },
}).mount("#app");
