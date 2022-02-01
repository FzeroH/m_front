<template>
  <Header v-if="isAuthenticated"/>
  <router-view/>
</template>

<script>
import Header from './components/Header'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { Header },
  setup () {
    const store = useStore()
    const isAuthenticated = computed(() => store.getters.isLoggedIn)

    return {
      isAuthenticated
    }
  }
})
</script>

<style>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #171A21;
}

button{
  cursor: pointer;
}
</style>
