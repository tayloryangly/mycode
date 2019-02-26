<template>
  <div>
    <span>user page</span>
    <p>
      <button @click="goto()">goto</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data () {
      return {
        id: '1'
      }
    },
    methods: {
      goto: function () {
        this.$router.push({path: 'Config', query: {id: this.id}})
      }
    }
  }
</script>

<style scoped>

</style>
