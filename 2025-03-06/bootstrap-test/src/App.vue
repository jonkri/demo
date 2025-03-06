<script setup>
import CounterButton from "./components/CounterButton.vue";
import FancyTextField from "./components/FancyTextField.vue";
</script>

<template>
  <CounterButton />
  <FancyTextField />
  <BContainer fluid="lg">
    <BRow>
      <BCol class="bg-primary" cols="4" md="4">1</BCol>
      <BCol class="bg-secondary" cols="3" md="4">2</BCol>
      <BCol class="bg-success" cols="2" md="4">3</BCol>
      <BCol class="bg-danger">4</BCol>
    </BRow>
  </BContainer>
  <BButton size="lg" squared variant="primary">Primary</BButton>
  <BButton variant="secondary">Secondary</BButton>
  <BButton variant="success">Success</BButton>
  <BButton variant="danger">Danger</BButton>
  <BButton variant="warning">Warning</BButton>
  <BButton variant="info">Info</BButton>
  <BButton variant="light">Light</BButton>
  <BButton variant="dark">Dark</BButton>
</template>
