Vue.createApp({
  created() {
    fetch("https://api.artic.edu/api/v1/artworks?page=2")
      .then((response) => response.json())
      .then((result) => {
        // document.querySelector("h1").textContent =
        //   result.data[0].medium_display;
        this.heading = result.data[0].medium_display;

        // document.querySelector("p").textContent =
        //   result.data[0].provenance_text;
        this.paragraph = result.data[0].provenance_text;
      });
  },
  data() {
    return {
      heading: null,
      paragraph: null,
    };
  },
}).mount("#app");
