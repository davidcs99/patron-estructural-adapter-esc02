<template>
  <h1>{{ text }}</h1>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    font-weight: bold(900);
    color: #242323;
    font-size: 22pt;
    font-family: 'Roboto', sans-serif;
  }
</style>
