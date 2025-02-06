<script>
  // 1. Importera komponenten/komponenterna
  import CitiesList from "./components/CitiesList.vue";
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    // 2. Registrera komponenten/komponenterna
    components: {
      CitiesList,
      HelloWorld
    }
  };
</script>

<template>
  <!-- 3. Använd komponenten/komponenerna -->

  <!-- PascalCase -->
  <HelloWorld msg="Hello World!" />
  <CitiesList />

  <p>App.vue</p>

  <!-- kebab-case -->
  <!-- <hello-world msg="Hello World!"></hello-world>
  <cities-list></cities-list> -->
</template>
