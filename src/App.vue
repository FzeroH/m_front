<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #171A21;
}
button{
  cursor: pointer;
}
</style>
