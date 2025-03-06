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
      cities: null,
    };
  },
};
</script>

<template>
  <ol>
    <li v-for="city in cities">{{ city.name }}</li>
  </ol>
</template>

<style lang="scss" scoped>
ol {
  border: solid 2px green;

  li {
    background-color: gold;
  }
}
</style>
