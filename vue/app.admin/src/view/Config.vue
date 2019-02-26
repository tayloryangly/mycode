<template>
  <div>
    <span>config page</span>
    <p>
      <button @click="goto()">goto</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Config',
    data () {
      return {
        id: '1'
      }
    },
    methods: {
      goto: function () {
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style scoped>

</style>
