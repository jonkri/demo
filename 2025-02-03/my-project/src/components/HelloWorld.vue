<script>
  // app.component('hello-world', {
  //   data() { return {} },
  //   props: {
  //     msg: String
  //   }
  // })

  export default {
    // data() { return {} },
    props: {
      msg: String
    }
  };
</script>

<style scoped>
  p {
    color: blue;
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>
