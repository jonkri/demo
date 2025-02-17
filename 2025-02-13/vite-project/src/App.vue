<script setup>
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

const counter = ref(0);
const myWelcomeVariable = ref(null);

function increment() {
  counter.value++;
}

function onChanged(x) {
  myWelcomeVariable.value = x;
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <input @click="increment" type="button" :value="counter" />
    </div>
  </header>

  <main>
    <TheWelcome @changed="onChanged" :counter="counter"> abc </TheWelcome>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
