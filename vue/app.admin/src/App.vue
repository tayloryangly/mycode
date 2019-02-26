<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view style="overflow: hidden;"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center;*/
    color: #2c3e50;
    /*  margin-top: 60px;*/
  }
</style>

<style scoped>
  /* https://blog.csdn.net/ttttt2017/article/details/78334478*/
  .slide-fade {
    position: absolute;
    left: 0;
    right: 0;
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateY(20px);
    opacity: 0;
  }
</style>
