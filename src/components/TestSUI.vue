<template>
  <span>
    <sui-button primary>click me</sui-button>{{message}}
  </span>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello World'
      };
    }
  }
</script>
