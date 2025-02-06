<script>
  export default {
    created() {
      fetch("https://avancera.app/cities/")
        .then((response) => response.json())
        .then((cities) => {
          this.cities = cities;
        });
    },
    data() {
      return {
        cities: null
      };
    }
  };
</script>

<template>
  <ol>
    <li v-for="city in cities">{{ city.name }}</li>
  </ol>
  <p>Här är ett stycke i CitiesList-komponenten.</p>
</template>
