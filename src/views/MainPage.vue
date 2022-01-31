<template>
  <form @submit.prevent="signin(email, password)" action="submit">
    <label> Email</label>
    <input type="text" v-model="email">
    <label>Password</label>
    <input type="password" v-model="password">
    <button type="submit">Войти</button>
  </form>
</template>

<script>
import AuthService from '../api/AuthService'

export default {
  name: 'MainPage',
  setup () {
    const signin = async (email, password) => {
      await AuthService.signIn(email, password)
        .then((res) => { console.log(res.data) })
        .catch((e) => console.error(e.message))
    }
    return {
      signin
    }
  }
}
</script>

<style scoped>

</style>
