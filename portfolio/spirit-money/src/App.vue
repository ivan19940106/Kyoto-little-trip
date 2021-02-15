<template>
  <img class="mothergod" alt="Vue logo" src="./assets/images/mothergod.png">
  <HelloWorld msg="金紙備忘錄"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6a6a6a;
  background-color: #fff;
  margin: 60px 0;
  padding: 0 20px;
}
@media(max-width: 768px){
  #app {
    margin: 30px 0;
  }
}
</style>

<style scoped>
  .mothergod {
    width: 250px;
  }
</style>